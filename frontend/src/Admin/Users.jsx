import React, { useState, useEffect } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import Side from "./Side";

// Sample data for demonstration
const initialUsers = [
  {
    id: 1,
    username: "john_doe",
    email: "john@example.com",
    password: "password123",
    paymentMethod: "Credit Card",
  },
  {
    id: 2,
    username: "jane_smith",
    email: "jane@example.com",
    password: "password456",
    paymentMethod: "PayPal",
  },
  {
    id: 3,
    username: "alice_johnson",
    email: "alice@example.com",
    password: "password789",
    paymentMethod: "Bank Transfer",
  },
];

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Load initial user data (you can replace this with API call)
    setUsers(initialUsers);
  }, []);

  const handleDelete = (userId) => {
    // Handle user deletion (e.g., API call to delete user)
    setUsers(users.filter((user) => user.id !== userId));
  };

  const handleEdit = (userId) => {
    // Handle user editing (e.g., open a modal with user details)
    console.log("Edit user:", userId);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Side />
      <div className="flex-1 p-6 bg-white">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-green-700 mb-6">
            Manage Users
          </h1>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                  Username
                </th>
                <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                  Email
                </th>
                <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                  Password
                </th>
                <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                  Payment Method
                </th>
                <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="py-2 px-4 border-b border-gray-200 text-sm">
                    {user.username}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200 text-sm">
                    {user.email}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200 text-sm">
                    {user.password}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200 text-sm">
                    {user.paymentMethod}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200 text-sm">
                    <button
                      onClick={() => handleEdit(user.id)}
                      className="text-blue-500 hover:text-blue-700 mr-2"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(user.id)}
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

export default Users;
