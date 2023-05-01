import React from "react";
import Navbar from "../components/Navbar";

function HomePage() {
  return (
    <div className="flex">
      <div className="w-[244px] h-screen  bg-white  border-r border-gray-300">
        <Navbar />
      </div>

      <div className="flex-1 bg-white h-screen"> Content </div>
    </div>
  );
}

export default HomePage;
