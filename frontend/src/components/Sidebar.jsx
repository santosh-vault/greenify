import React from "react";
import { FaHome, FaGamepad, FaNewspaper, FaTree } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div
      className="w-16 h-3/4 ml-8 bg-green-600 rounded-2xl flex flex-col items-center p-4 fixed top-1/2 transform -translate-y-1/2 left-4 shadow-lg"
      style={{ boxShadow: "0 0 10px rgba( 0, 128, 0, 0.8)" }}
    >
      <nav className="flex-1 flex flex-col justify-center">
        <ul className="space-y-6">
          <li>
            <a href="#" className="text-white glowing-icon text-2xl">
              <FaHome />
            </a>
          </li>
          <li>
            <a href="#" className="text-white glowing-icon text-2xl">
              <FaGamepad />
            </a>
          </li>
          <li>
            <a href="#" className="text-white glowing-icon text-2xl">
              <FaNewspaper />
            </a>
          </li>
          <li>
            <a href="#" className="text-white glowing-icon text-2xl">
              <FaTree />
            </a>
          </li>
          <li>
            <a href="#" className="text-white glowing-icon text-2xl">
              <IoLogOut />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
