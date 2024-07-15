import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUsers, FaChartBar, FaTree, FaCogs } from "react-icons/fa";

const Side = () => {
  return (
    <div className="w-64 bg-green-700 h-full text-white p-4">
      <h2 className="text-2xl font-bold mb-8 text-center">Admin Dashboard</h2>
      <nav>
        <ul className="space-y-4">
          <li>
            <Link
              to="/dashboard"
              className="flex items-center space-x-3 hover:bg-green-600 p-2 rounded"
            >
              <FaHome />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/users"
              className="flex items-center space-x-3 hover:bg-green-600 p-2 rounded"
            >
              <FaUsers />
              <span>Manage Users</span>
            </Link>
          </li>
          <li>
            <Link
              to="/analytics"
              className="flex items-center space-x-3 hover:bg-green-600 p-2 rounded"
            >
              <FaChartBar />
              <span>Analytics</span>
            </Link>
          </li>
          <li>
            <Link
              to="/opinions"
              className="flex items-center space-x-3 hover:bg-green-600 p-2 rounded"
            >
              <FaTree />
              <span>Manage Opinions</span>
            </Link>
          </li>
          <li>
            <Link
              to="/settings"
              className="flex items-center space-x-3 hover:bg-green-600 p-2 rounded"
            >
              <FaCogs />
              <span>Settings</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Side;
