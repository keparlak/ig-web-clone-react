import React from "react";
import Header from "../components/Navbar";

function HomePage() {
  return (
    <div className="flex">
      <div className="w-[244px] bg-zinc-50 h-screen">
        <Header />
      </div>

      <div className="flex-1 bg-zinc-200 h-screen"> Content </div>
    </div>
  );
}

export default HomePage;
