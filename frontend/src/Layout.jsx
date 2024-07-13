import React from "react";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import TopContributors from "./components/TopContributors";
import TopHashtags from "./components/TopHastags";

const Layout = () => {
  return (
    <div className="flex ">
      <div className="flex-1 p-4 relative bg-gradient-overlay">
        <Sidebar />
        <div className="ml-20">
          <Feed />
        </div>
      </div>
      <div className="w-1/4 bg-gray-200 p-4">
        <TopContributors />
        <TopHashtags />
      </div>
    </div>
  );
};

export default Layout;
