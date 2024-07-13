import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import TreePlantingForm from "./TreePlantingForm";

import logo from "../assets/logo.png";
import OpinionDisplay from "./OpinionDisplay";

const Feed = () => {
  return (
    <div className="ml-8 h-screen">
      <div className="flex justify-between items-center mb-4 p-2 rounded-lg">
        <div className="text-xl font-bold">
          <img src={logo} className="w-24" alt="" />
        </div>
        <div className="flex items-center bg-gray-200 rounded-full px-3 py-1 w-1/2">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none w-full text-black"
          />
          <FaSearch className="text-gray-500 ml-2" />
        </div>
      </div>
      {/* Feed Section Content */}
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold mt-8 mb-2">
          Plant Trees, Save the Planet
        </h1>
        <p className="text-md text-gray-700 mb-4">
          Join our mission to plant trees and make the world greener.
        </p>

        <h2 className="text-xl font-bold text-green-700">
          TOTAL TREES PLANTED
        </h2>
        <h3 className="text-8xl font-black my-4 text-green-700">
          127,586,222{" "}
        </h3>
        <TreePlantingForm />
      </div>

      <OpinionDisplay />
    </div>
  );
};

export default Feed;
