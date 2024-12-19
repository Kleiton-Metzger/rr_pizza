"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 shadow-lg bg-[var(--background)] text-[var(--foreground)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/rrlogo.jpg"
                alt="Logo Pizza"
                width={45}
                height={40}
                className="rounded-full object-cover"
              />
              <div className="ml-2 flex flex-col">
                <span className="text-lg font-bold tracking-widest font-serif">
                  <span className="text-2xl">R</span>
                  <span className="text-sm align-middle mx-0.5 relative -top-1">&</span>
                  <span className="text-2xl">R</span>
                </span>
                <span className="text-sm tracking-widest text-yellow-500 font-medium uppercase">
                  Pizza
                </span>
              </div>
            </Link>
          </div>

          {/* Menu Items */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="hover:text-yellow-400 transition-colors">
              Início
            </Link>
            <Link href="/menu" className="hover:text-yellow-400 transition-colors">
              Menu
            </Link>
            <Link href="/about" className="hover:text-yellow-400 transition-colors">
              Sobre Nós
            </Link>
            <Link href="/contact" className="hover:text-yellow-400 transition-colors">
              Contacto
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              type="button"
              aria-expanded="false"
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-md focus:outline-none focus:ring focus:ring-yellow-400"
            >
              {menuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div id="mobile-menu" className="md:hidden bg-[var(--background)]">
          <div className="space-y-2 px-4 py-2">
            <Link href="/" className="block text-yellow-500 hover:text-[var(--foreground)]">
              Início
            </Link>
            <Link href="/menu" className="block text-yellow-500 hover:text-[var(--foreground)]">
              Menu
            </Link>
            <Link href="/about" className="block text-yellow-500 hover:text-[var(--foreground)]">
              Sobre Nós
            </Link>
            <Link href="/contact" className="block text-yellow-500 hover:text-[var(--foreground)]">
              Contacto
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export { Navbar };
