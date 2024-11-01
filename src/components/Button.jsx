import React from "react";

function Button({ type = "button", children, ...props }) {
  return (
    <button
      type={type}
      className="flex items-center justify-center my-2 gap-x-2 px-4 py-[7px] rounded-lg bg-brand font-medium text-white text-sm disabled:opacity-50"
    >
      {children}
    </button>
  );
}

export default Button;
