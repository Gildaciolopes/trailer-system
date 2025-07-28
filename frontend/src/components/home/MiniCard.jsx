import React from "react";

const MiniCard = ({ title, icon, number, footerNum }) => {
  return (
    <div className="bg-[#111111] py-5 px-5 rounded-lg w-[50%] transition-all duration-300 hover:-translate-y-2 hover:cursor-pointer hover:bg-zinc-950">
      <div className="flex items-start justify-between">
        <h1 className="text-white text-lg font-semibold tracking-wide">
          {title}
        </h1>
        <button
          className={`${
            title === "Ganhos Totais"
              ? " from-green-500 to-teal-500"
              : "from-orange-500 to-red-500"
          } bg-gradient-to-r p-3 rounded-lg text-white text-2xl`}
        >
          {icon}
        </button>
      </div>
      <div>
        <h1 className="text-white text-4xl font-bold mt-5">{number}</h1>
        <h1 className="text-white text-lg mt-2">
          <span className="text-[#02ca3a]">{footerNum}% </span>ao dia anterior
        </h1>
      </div>
    </div>
  );
};

export default MiniCard;
