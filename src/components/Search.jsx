import React from "react";
import { useState } from "react";
function Search() {
  return (
    <form className="w-[268px] relative">
      <input
        type="text"
        placeholder="Search"
        className="h-9 outline-none focus:pl-3 pl-9 w-full rounded bg-[#efefef]"
      />
    </form>
  );
}

export default Search;
