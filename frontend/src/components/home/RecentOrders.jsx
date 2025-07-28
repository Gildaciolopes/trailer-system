import React from "react";
import { FaSearch } from "react-icons/fa";
import OrderList from "./OrderList";

const RecentOrders = () => {
  return (
    <div className="px-8 mt-6">
      <div className="bg-[#111111] w-full min-h-[500px] rounded-lg">
        <div className="flex justify-between items-center px-6 py-4">
          <h1 className="text-white text-lg font-semibold tracking-wide">
            Últimos Pedidos
          </h1>
          <a href="" className="text-[#025cca] text-sm font-semibold">
            Ver todos
          </a>
        </div>

        <div className="gap-4 flex items-center bg-zinc-800 rounded-[15px] px-6 py-4 mx-6">
          <FaSearch className="text-white" />
          <input
            type="text"
            placeholder="Pesquisar últimos pedidos"
            className="bg-zinc-800 outline-none text-white"
          />
        </div>
        {/* Order List */}
        <div className="mt-4 px-6 overflow-y-scroll h-[300px]">
          <OrderList />
          <OrderList />
          <OrderList />
          <OrderList />
          <OrderList />
          <OrderList />
          <OrderList />
          <OrderList />
        </div>
      </div>
    </div>
  );
};

export default RecentOrders;
