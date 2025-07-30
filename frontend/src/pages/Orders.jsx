import BottomNav from "@/components/shared/BottomNav";
import React from "react";
import OrderCard from "@/components/orders/OrderCard";

const Orders = () => {
  return (
    <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden]">
      <div className="flex items-center justify-between px-10 pb-4 pt-6">
        <h1 className="text-white text-2xl font-bold tracking-wider"></h1>
        <div className="flex items-center justify-around gap-4">
          <button className="text-gray-400 text-lg rounded-lg px-5 py-2 font-semibold">
            Todos
          </button>
          <button className="text-gray-400 text-lg bg-[#383838] rounded-lg px-5 py-2 font-semibold">
            Em progresso
          </button>
          <button className="text-gray-400 text-lg rounded-lg px-5 py-2 font-semibold">
            Prontos
          </button>
          <button className="text-gray-400 text-lg rounded-lg px-5 py-2 font-semibold">
            Concluídos
          </button>
        </div>
      </div>

      <div className="px-10 py-4">
        <OrderCard />
      </div>

      <BottomNav />
    </section>
  );
};

export default Orders;
