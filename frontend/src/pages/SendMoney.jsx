import { useState } from "react";
import { useSearchParams  } from "react-router-dom";
import axios from "axios";


export const SendMoney = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const [amount, setAmount] = useState(0);

    return (
      <div className="flex justify-center h-screen bg-gray-100">
        <div className="h-full flex flex-col justify-center">
          <div className="border max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4">
              <h2 className="text-3xl font-bold text-center">Send Money</h2>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white text-2xl font-bold">
                 {name[0].toUpperCase()}
                </div>
                <h3 className="text-2xl font-semibold">{name}</h3>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="amount" className="text-sm font-medium leading-none">
                    Amount (in Rs.)
                  </label>
                  <input 
                    onChange = {(e) => {
                    setAmount(e.target.value);
                    }}
                    type="text"
                    id="amount"
                    className="border px-3 py-2 rounded-md w-full"
                    placeholder="Enter amount"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium leading-none">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    rows="3"
                    className="border px-3 py-2 rounded-md w-full"
                    placeholder="Add a message"
                  ></textarea>
                </div>
                <div className="pt-4">
                  
                  
                  <button onClick={ () => {
                     axios.post("http://localhost:3000/api/v1/account/transfer",{
                      to:id,
                      amount
                    },{
                      headers : {
                        Authorization : "Bearer " + localStorage.getItem("Token") 
                      }
                    })
                  }} 
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                    Send Money
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  