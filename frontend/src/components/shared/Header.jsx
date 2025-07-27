import React from "react";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-[#1a1a1a]">
      {/* LOGO */}
      <div className="flex items-center gap-2">
        <img src="vite.svg" className="h-8 w-8" alt="logo do trailer" />
        <h1 className="text-lg font-semibold text-white">Trailer</h1>
      </div>

      {/* SEARCH */}
      <div className="gap-4 flex items-center bg-[#1f1f1f] rounded-[15px] px-5 py-2 w-[500px]">
        <FaSearch className="text-[#f5f5f5]" />
        <input
          type="text"
          placeholder="Search"
          className="bg-[#1f1f1f] outline-none text-white"
        />
      </div>
      {/* TODO: LOGGED USER DETAILS */}
    </header>
  );
};

export default Header;
