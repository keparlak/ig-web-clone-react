import React from "react";

function Loader() {
  return (
    // <div className="w-full h-full fixed top-0 left-0 bg-black/50 flex justify-center items-center">
    //   <svg
    //     className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
    //     xmlns="http://www.w3.org/2000/svg"
    //     fill="none"
    //     viewBox="0 0 24 24"
    //   >
    //     <circle
    //       className="opacity-25"
    //       cx="12"
    //       cy="12"
    //       r="10"
    //       stroke="currentColor"
    //       strokeWidth="4"
    //     ></circle>
    //     <path
    //       className="opacity-75"
    //       fill="currentColor"
    //       d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    //     ></path>
    //   </svg>
    //   Processing...
    // </div>
    <div class="relative flex min-h-screen items-center justify-center bg-zinc-50">
      <h1 class="animate-torch select-none whitespace-nowrap bg-gradient-to-r from-white via-black to-white bg-[length:100px_30px] bg-clip-text bg-no-repeat text-lg font-bold uppercase text-transparent sm:bg-[length:200px_50px] sm:text-4xl">
        Instagram Loading...
      </h1>
    </div>
  );
}

export default Loader;
