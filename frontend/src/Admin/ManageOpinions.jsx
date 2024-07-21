import React, { useState, useEffect } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import Side from "./Side";

// Sample data for demonstration
const initialOpinions = [
  {
    id: 1,
    username: "john_doe",
    text: "This is my first opinion!",
    date: new Date().toLocaleString(),
  },
  {
    id: 2,
    username: "jane_smith",
    text: "I love this platform.",
    date: new Date().toLocaleString(),
  },
  {
    id: 3,
    username: "alice_johnson",
    text: "Can’t wait to see more features.",
    date: new Date().toLocaleString(),
  },
];

const ManageOpinions = () => {
  const [opinions, setOpinions] = useState([]);

  useEffect(() => {
    // Load initial opinion data (you can replace this with API call)
    setOpinions(initialOpinions);
  }, []);

  const handleDelete = (opinionId) => {
    // Handle opinion deletion (e.g., API call to delete opinion)
    setOpinions(opinions.filter((opinion) => opinion.id !== opinionId));
  };

  const handleEdit = (opinionId) => {
    // Handle opinion editing (e.g., open a modal with opinion details)
    console.log("Edit opinion:", opinionId);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Side />
      <div className="flex-1 p-6 bg-white">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-green-700 mb-6">
            Manage Opinions
          </h1>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                  Username
                </th>
                <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                  Opinion
                </th>
                <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                  Date
                </th>
                <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {opinions.map((opinion) => (
                <tr key={opinion.id}>
                  <td className="py-2 px-4 border-b border-gray-200 text-sm">
                    {opinion.username}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200 text-sm">
                    {opinion.text}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200 text-sm">
                    {opinion.date}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200 text-sm">
                    <button
                      onClick={() => handleEdit(opinion.id)}
                      className="text-blue-500 hover:text-blue-700 mr-2"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(opinion.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageOpinions;
