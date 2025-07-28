import React, { useState, useEffect } from "react";

const Greetings = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    const months = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ];
    return `${String(date.getDate()).padStart(2, "0")} de ${
      months[date.getMonth()]
    }, ${date.getFullYear()}`;
  };

  const formatTime = (date) =>
    `${String(date.getHours()).padStart(2, "0")}:${String(
      date.getMinutes()
    ).padStart(2, "0")}:${String(date.getSeconds()).padStart(2, "0")}`;

  return (
    <div className="flex justify-between items-center px-8 mt-5">
      <div>
        <h1 className="text-white text-2xl font-semibold tracking-wide">
          Bom dia, Gildácio
        </h1>
        <p className="text-gray-400 text-sm">
          Ofereça os melhores serviços aos clientes!
        </p>
      </div>
      <div className="">
        <h1 className="text-white text-2xl font-bold tracking-wide w-[130px]">
          {formatTime(dateTime)}
        </h1>
        <p className="text-gray-400 text-sm">{formatDate(dateTime)}</p>
      </div>
    </div>
  );
};

export default Greetings;
