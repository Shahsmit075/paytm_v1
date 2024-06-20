import { useEffect, useState } from "react";
import { Button } from "./Button";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

export const Users = () => {
    
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(() => {
      axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + filter)
        .then(response => {
          setUsers(response.data.user);
        })
    }, [filter]);
  
    return (
      <>
        <div className="font-bold mt-6 text-lg">Users</div>
        <div className="my-2">
          <input onChange = { (e) => {
            setFilter(e.target.value)
          }} type="text" placeholder="Search users..." className="px-2 py-1 border rounded-md w-full" />
        </div>
        <div>
          {users.map(user => <User key={user._id} user={user} />)}
        </div>
      </>
    );
  };

  
function User({ user }) {
  const navigate = useNavigate();
  
  return (
    <div className="flex justify-between items-center border-b py-4">
      <div className="flex items-center">
        <div className="rounded-full h-12 w-12 bg-slate-200 flex items-center justify-center text-white">
          {user.firstName[0]}
        </div>
        <div className="ml-4">
          <div>{user.firstName} {user.lastName}</div>
        </div>
      </div>
      <div>
        <Button onClick = {(e) => {
          navigate("/send?id=" + user._id + "&name=" + user.firstName);
        }} label="Send Money" />
      </div>
    </div>
  );
}