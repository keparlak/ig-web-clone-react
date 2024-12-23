import React from "react";

function Seperator({ label = "OR" }) {
  return (
    <div className="flex justify-evenly space-x-2 w-64 mt-4">
      <span className="bg-gray-300 h-px flex-grow relative top-2"></span>
      <span className="flex-none uppercase text-xs text-gray-400 font-semibold">
        {label}
      </span>
      <span className="bg-gray-300 h-px flex-grow relative top-2"></span>
    </div>
  );
}

export default Seperator;
