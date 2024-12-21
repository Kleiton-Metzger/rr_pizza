"use client";
import React, { useState } from "react";
import Image from 'next/image';

type MenuItem = {
  name: string;
  description: string;
  price: string;
  image: string;
};

type MenuItems = {
  [key: string]: MenuItem[];
};

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Pizza");

  const menuItems: MenuItems = {
    Pizza: [
      {
        name: "Margherita",
        description: "Deliciosa pizza com molho de tomate, mozzarella e manjericão.",
        price: "€ 10,90",
        image: "",
      },
      {
        name: "Pepperoni",
        description: "Pizza clássica com pepperoni crocante e queijo derretido.",
        price: "€ 12,90",
        image: "",
      },
    ],
    Drinks: [
      {
        name: "Coca-Cola 0",
        description: "Refrigerante clássico gelado.",
        price: "€ 2,50",
        image: "/images/cocacola0.png",
      },
      {
        name: "Água Mineral",
        description: "Água pura e refrescante.",
        price: "€ 1,50",
        image: "/images/agua.jpg",
      },
    ],
    Burgers: [
      {
        name: "Cheeseburger",
        description: "Hambúrguer com queijo, alface e tomate.",
        price: "€ 8,90",
        image: "",
      },
      {
        name: "Double Burger",
        description: "Hambúrguer duplo com queijo e bacon.",
        price: "€ 10,50",
        image: "",
      },
    ],
    Pasta: [
      {
        name: "Spaghetti Carbonara",
        description: "Massa cremosa com bacon e queijo parmesão.",
        price: "€ 9,90",
        image: "",
         
      },
      {
        name: "Penne Arrabiata",
        description: "Massa com molho de tomate picante e manjericão.",
        price: "€ 8,50",
        image: "",
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center text-white">Menu da Pizzaria</h1>
      {/* Navegação entre categorias */}
      <div className="flex justify-center mb-6 flex-wrap">
        {Object.keys(menuItems).map((category) => (
          <button
            key={category}
            className={`px-4 py-2 mx-2 mb-2 font-semibold rounded transition-all duration-300 ${
              activeCategory === category
                ? "bg-yellow-500 text-black"
                : "bg-gray-700 text-white hover:bg-yellow-400"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      {/* Grelha de Itens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems[activeCategory].map((item, index) => (
          <div
            key={index}
            className="menu-item bg-white shadow-lg rounded-lg p-4 text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={500}
              height={500}
              className="w-full h-48 object-cover rounded-full mx-auto mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">{item.name}</h2>
            <p className="text-sm text-gray-600 mb-2">{item.description}</p>
            <p className="text-xl text-yellow-500 font-bold mb-4">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
