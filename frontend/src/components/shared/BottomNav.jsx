import React from "react";
import { FaHome } from "react-icons/fa";
import { MdOutlineReorder, MdTableBar } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";
import { BiSolidDish } from "react-icons/bi";

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#111111] p-2 h-16 flex justify-around">
      <button className="text-white bg-zinc-800 flex items-center justify-center w-[200px] rounded-[20px]">
        <FaHome className="inline mr-2" size={20} />
        <p>Início</p>
      </button>
      <button className="text-white flex items-center justify-center w-[200px] rounded-[20px]">
        <MdOutlineReorder className="inline mr-2" size={20} />
        <p>Pedidos</p>
      </button>
      <button className="text-white flex items-center justify-center w-[200px] rounded-[20px]">
        <MdTableBar className="inline mr-2" size={20} />
        <p>Mesas</p>
      </button>
      <button className="text-white flex items-center justify-center w-[200px] rounded-[20px]">
        <CiCircleMore className="inline mr-2" size={20} />
        <p>Mais</p>
      </button>

      <button className="bg-[#F6B100] text-white rounded-full p-3 items-center absolute bottom-6">
        <BiSolidDish size={30} />
      </button>
    </div>
  );
};

export default BottomNav;
