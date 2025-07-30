import React from "react";
import { FaCheckDouble, FaCircle } from "react-icons/fa";

const OrderCard = () => {
  return (
    <div className="flex items-center gap-5 mb-3">
      <button className="bg-[#f6b100] p-3 text-xl font-bold rounded-lg">
        GJ
      </button>
      <div className="flex items-center justify-between w-[100%]">
        <div className="flex flex-col items-start gap-1">
          <h1 className="text-white text-lg font-semibold tracking-wide">
            Gildácio Lopes
          </h1>
          <p className="text-gray-400 text-sm">8 Itens</p>
        </div>

        <div className="flex flex-col items-start gap-2">
          <p className="text-green-600 px-4">
            <FaCheckDouble className="inline mr-2" />
            Pronto
          </p>
          <p className="text-gray-400 text-sm">
            <FaCircle className="inline mr-2 text-green-600" />
            Pronto para Servir
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
