"use client";

import React from "react";

const Menu: React.FC = () => {
  const menuItems = [
    { name: "Margherita", price: "€ 8,90" },
    { name: "Pepperoni", price: "€ 9,90" },
    { name: "Quatro Queijos", price: "€ 10,90" },
    { name: "Calabresa", price: "€ 9,50" },
    { name: "Vegetariana", price: "€ 8,50" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Menu da Pizzaria</h1>
       <h2 className="text-2xl font-bold mb-2 text-center">Nossas
        Pizzas</h2>
      <p className="text-lg text-gray-700">Todas as nossas pizzas são preparadas com ingredientes frescos e selecionados.</p>
      <div
        id="menu-items"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="menu-item bg-white shadow-lg rounded-lg p-4 text-center"
          >
            <h2 className="text-2xl font-bold mb-2">{item.name}</h2>
            <p className="text-lg text-gray-700">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
