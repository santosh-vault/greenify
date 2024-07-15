import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUsers, FaChartBar, FaTree, FaCogs } from "react-icons/fa";
import Sidebar from "./Side";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6 bg-white">
        <p>Dashboard here</p>
      </div>
    </div>
  );
};

export default Dashboard;
