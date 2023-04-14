import React from "react";
import Header from "../components/Navbar";

function HomePage() {
  return (
    <div className="flex">
      <div className="w-[244px] h-screen  border-r border-gray-300">
        <Header />
      </div>

      <div className="flex-1 bg-zinc-200 h-screen"> Content </div>
    </div>
  );
}

export default HomePage;
