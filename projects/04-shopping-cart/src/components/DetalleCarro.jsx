import React from "react";

function DetalleCarro({ carro }) {
  return (
    <div className="absolute bg-gray-800 top-20 rounded-lg p-1 w-86 right-0">
      <ul className="flex flex-col gap-2 px-2 justify-between py-2">
        {carro.map((item) => (
          <li key={item.id} className="flex items-center gap-4 border-b border-gray-500 pb-2">
            <img className="w-16 h-16" src={item.img} alt="" />
            <span className="font-bold">{item.name}</span>
            <span className="font-bold">{item.cantidad}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DetalleCarro;
