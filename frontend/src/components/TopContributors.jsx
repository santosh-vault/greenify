import React, { useState } from "react";

const TopContributors = () => {
  const initialContributors = [
    { name: "John Doe", trees: 150 },
    { name: "Jane Smith", trees: 120 },
    { name: "Alice Johnson", trees: 100 },
    { name: "Bob Brown", trees: 80 },
    { name: "Mary White", trees: 60 },
    { name: "John Doe", trees: 150 },
    { name: "Jane Smith", trees: 120 },
    { name: "Alice Johnson", trees: 100 },
    { name: "Bob Brown", trees: 80 },
    { name: "Mary White", trees: 60 },
    { name: "John Doe", trees: 150 },
    { name: "Jane Smith", trees: 120 },
    { name: "Alice Johnson", trees: 100 },
    { name: "Bob Brown", trees: 80 },
    { name: "Mary White", trees: 60 },
  ];

  const [showAll, setShowAll] = useState(false);
  const [contributors, setContributors] = useState(
    initialContributors.slice(0, 5)
  );

  const toggleShowAll = () => {
    setShowAll(!showAll);
    if (!showAll) {
      setContributors(initialContributors);
    } else {
      setContributors(initialContributors.slice(0, 5));
    }
  };

  return (
    <div className="bg-green-600 shadow-md rounded-lg px-4 pt-4 pb-0">
      <h2 className="text-2xl font-bold mb-4 text-center text-white">
        #TopContributors
      </h2>
      <ul className="space-y-4">
        {contributors.map((contributor, index) => (
          <li
            key={index}
            className="flex items-center justify-between bg-gray-100 p-2 rounded-full pr-4"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-green-700 text-white w-8 h-8 flex items-center justify-center rounded-full">
                {index + 1}
              </div>
              <div className="text-black px-4">{contributor.name}</div>
            </div>
            <span className="text-green-700 font-bold">
              {contributor.trees} Trees
            </span>
          </li>
        ))}
      </ul>
      {!showAll && (
        <div className="flex justify-center">
          <button
            onClick={toggleShowAll}
            className="text-xs mt-4 px-4 text-green-500 bg-gray-100 py-1 rounded focus:outline-none hover:bg-green-200"
          >
            See more
          </button>
        </div>
      )}
    </div>
  );
};

export default TopContributors;
