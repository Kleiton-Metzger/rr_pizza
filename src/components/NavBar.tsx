"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
             
              <Image
                src="/images/rrlogo.jpg"
                alt="Logo Pizza"
                width={45}
                height={40}
                className="ml-4 rounded-full object-cover bg-white  "
              />
              {/* Texto da Logo */}
              <div className="flex flex-col">
                <span className="ml-2 text-white text-3xl font-bold leading-none tracking-widest font-serif ">
                  R&R
                </span>
                <span className="ml-2 text-sm tracking-widest text-yellow-500 font-medium uppercase">
                PIZZA
                </span>
              </div>
            </Link>
          </div>

          
          <div className="flex md:hidden">
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-md focus:outline-none focus:ring"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>

          
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="hover:text-yellow-400">
              Início
            </Link>
            <Link href="/menu" className="hover:text-yellow-400">
              Menu
            </Link>
            <Link href="/about" className="hover:text-yellow-400">
              Sobre Nós
            </Link>
            <Link href="/contact" className="hover:text-yellow-400">
              Contacto
            </Link>
          </div>
        </div>
      </div>

      
      {menuOpen && (
        <div className="md:hidden bg-black">
          <div className="space-y-2 px-4 py-2">
            <Link href="/" className="block text-yellow-400 hover:text-white">
              Início
            </Link>
            <Link href="/menu" className="block text-yellow-400 hover:text-white">
              Menu
            </Link>
            <Link href="/about" className="block text-yellow-400 hover:text-white">
              Sobre Nós
            </Link>
            <Link href="/contact" className="block text-yellow-400 hover:text-white">
              Contacto
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export { Navbar };
