import React, { useState } from "react";
import { Link } from "react-router-dom";

const TreePlantingForm = ({ onNext }) => {
  const [numTrees, setNumTrees] = useState("");
  const treeCost = 100;

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(numTrees);
  };

  const calculateCost = () => {
    if (!numTrees || isNaN(numTrees)) {
      return 0;
    }
    return numTrees * treeCost;
  };

  return (
    <div className="bg-green-100 rounded-lg p-8 max-w-md w-full mx-auto opacity-90 shadow-xl">
      <h2 className="text-2xl font-bold mb-4 text-center text-green-900">
        Plant Trees
      </h2>
      <p className="text-gray-700 mb-4 text-center">Rs 100 = 1 Tree</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="numTrees"
          >
            How many trees would you like to plant?
          </label>

          <input
            id="numTreesInput"
            type="number"
            value={numTrees}
            onChange={(e) => setNumTrees(e.target.value)}
            placeholder="Or enter number directly"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4 text-center">
          <p className="text-gray-700 mb-2">
            Total Cost:
            <span className="text-green-600 font-bold ml-2">
              Rs {calculateCost()}
            </span>
          </p>
        </div>
        <Link to="/register">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline"
          >
            Next
          </button>
        </Link>
      </form>
    </div>
  );
};

export default TreePlantingForm;
