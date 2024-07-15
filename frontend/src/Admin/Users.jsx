import React from "react";
import Side from "./Side";

const Users = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Side />
      <div className="flex-1 p-6 bg-white">
        <h1 className="text-green-600 font-bold text-2xl pl-2 my-2">
          Dashboard
        </h1>
        <p className="bg-green-600 w-4/5 h-0.5"></p>
      </div>
      <div className=""></div>
    </div>
  );
};

export default Users;
