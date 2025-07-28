import React from "react";
import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-[#111111]">
      {/* LOGO */}
      <div className="flex items-center gap-2">
        <img src="vite.svg" className="h-8 w-8" alt="logo do trailer" />
        <h1 className="text-lg font-semibold text-white">Trailer</h1>
      </div>

      {/* SEARCH */}
      <div className="gap-4 flex items-center bg-zinc-800 rounded-[15px] px-5 py-2 w-[500px]">
        <FaSearch className="text-white" />
        <input
          type="text"
          placeholder="Pesquisar"
          className="bg-zinc-800 outline-none text-white"
        />
      </div>
      {/* TODO: LOGGED USER DETAILS */}
      <div className="flex items-center gap-4">
        <div className="bg-zinc-800 rounded-[15px] p-3 cursor-pointer">
          <FaBell className="text-white text-2xl" />
        </div>
        <div className="flex items-center gap-3 cursor-pointer">
          <FaUserCircle className="text-white text-4xl" />
          <div className="flex flex-col items-start">
            <h1 className="text-md text-white font-semibold">Gildácio Lopes</h1>
            <p className="text-xs text-gray-400 font-medium">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
