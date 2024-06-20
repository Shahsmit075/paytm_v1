export const Appbar = () => {
    return (
      <div className="shadow h-14 flex justify-between">
        <div className="flex flex-col justify-center h-full ml-4">
          <span className="text-xl font-bold text-gray-800">PayTM App</span>
        </div>
        <div className="flex">
          <div className="flex flex-col justify-center h-full mr-4">
            <span className="text-sm text-gray-600">Hello, User</span>
          </div>
          <div className="rounded-full h-12 w-12 bg-slate-200 flex items-center justify-center">
            <span className="text-white">U</span>
          </div>
        </div>
      </div>
    );
  };
  