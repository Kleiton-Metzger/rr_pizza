"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Carousel, CarouselItem, CarouselContent } from "@/components/ui/carousel";

export const LandingPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const slides: string[] = [
    "/images/slide1.png",
    "/images/slide2.png", 
    "/images/slide3.png"
  ];

  const pizzaDetails = [
    { name: "Margherita Clássica", price: "R$ 35,90" },
    { name: "Pepperoni Supreme", price: "R$ 42,90" },
    { name: "Vegetariana Deluxe", price: "R$ 39,90" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      {/* Hero Section com Imagem de Fundo */}
      <section className="relative h-screen">
        {/* Imagem de Fundo */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/wood.jpg"
            alt="Pizza Background"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay escuro para melhorar legibilidade do texto */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Conteúdo Sobreposto */}
        <div className="relative z-10 container mx-auto grid md:grid-cols-2 gap-8 items-center h-full px-8 md:px-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 md:mb-8 tracking-wide text-shadow text-center md:text-left ">
             Sabor Autêntico em Cada Fatia
            </h1>
            <p className="text-xl md:text-2xl text-shadow text-center md:text-left">
              Experimente o melhor da culinária italiana, feita com paixão e ingredientes frescos.
            </p>
            <div className="flex space-x-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-yellow-500 transition font-bold"
              >
                Peça Agora
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-6 py-3 rounded-full px-6 py-3 rounded-full hover:bg-yellow-500 transition font-bold"
              >
                Ver Menu
              </motion.button>
            </div>
          </motion.div>
          
          {/* Imagem de Pizza Destacada */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-full aspect-square hidden md:block"
          >
            <Image 
              src="/images/slide1.png" 
              alt="Pizza Destaque"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Por que escolher a Pizza R&R?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🍕",
                title: "Ingredientes Frescos",
                description: "Selecionamos cuidadosamente os melhores ingredientes para nossas pizzas."
              },
              {
                icon: "🚚", 
                title: "Entrega Rápida",
                description: "Sua pizza chega quentinha em até 30 minutos ou a entrega é grátis!"
              },
              {
                icon: "👨‍🍳",
                title: "Receitas Exclusivas",
                description: "Nossos chefs criam sabores únicos que você só encontra aqui."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-md text-center"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Highlights Section with Carousel */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Nossas Pizzas Mais Amadas</h2>

          <Carousel value={currentIndex} onChange={setCurrentIndex}>
            <CarouselContent>
              {slides.map((slide, index) => (
                <CarouselItem 
                  key={index} 
                  className={index === currentIndex ? 'block' : 'hidden'}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden max-w-md mx-auto"
                  >
                    <div className="relative h-[400px] w-full">
                      <Image 
                        src={slide} 
                        alt={pizzaDetails[index].name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-xl mb-2">
                        {pizzaDetails[index].name}
                      </h3>
                      <p className="text-red-500 font-bold">
                        {pizzaDetails[index].price}
                      </p>
                      <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition">
                        Adicionar ao Carrinho
                      </button>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Dots de progresso clicáveis */}
            <div className="absolute bottom-4 left-0 right-0">
              <div className="flex justify-center space-x-2">
                {slides.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`h-3 w-3 rounded-full ${
                      index === currentIndex ? 'bg-red-500' : 'bg-gray-400'
                    }`}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: index === currentIndex ? 1 : 0.8 }}
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  />
                ))}
              </div>
            </div>
          </Carousel>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-red-500 text-white text-center py-16">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="container mx-auto px-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pronto para saborear a melhor pizza da cidade?</h2>
          <p className="text-xl mb-8">Faça seu pedido agora e receba em casa!</p>
          <button className="bg-white text-red-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition">
            Fazer Pedido
          </button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Pizza R&R. Todos os direitos reservados.</p>
          <div className="mt-4">
            <a href="#" className="hover:text-red-500 mx-2">Sobre Nós</a>
            <a href="#" className="hover:text-red-500 mx-2">Contato</a>
            <a href="#" className="hover:text-red-500 mx-2">Política de Privacidade</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
