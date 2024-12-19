"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const LandingPage: React.FC = () => {
  const slides: string[] = [
    "/images/slide1.png",
    "/images/slide2.png",
    "/images/slide3.png",
  ];

  const pizzaDetails = [
    { name: "Margherita Clássica", price: "€ 35,90" },
    { name: "Pepperoni Supreme", price: "€ 42,90" },
    { name: "Vegetariana Deluxe", price: "€ 39,90" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
            className="object-cover object-center"
            priority
          />
          {/* Overlay escuro para melhorar legibilidade do texto */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Conteúdo Sobreposto */}
        <div className="relative z-10 container mx-auto grid md:grid-cols-2 gap-8 items-center h-full px-8 md:px-16">
          <div className="space-y-6 text-white">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 md:mb-8 tracking-wide text-shadow text-center md:text-left">
              Sabor Autêntico em Cada Fatia
            </h1>
            <p className="text-xl md:text-2xl text-shadow text-center md:text-left">
              Experimente o melhor da culinária italiana, feita com paixão e ingredientes frescos.
            </p>
            <div className="flex flex-col md:flex-row space-x-0 md:space-x-4">
              <button className="bg-yellow-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-yellow-500 transition font-bold">
                Peça Agora
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-full hover:bg-yellow-500 transition font-bold mt-4 md:mt-0">
                Ver Menu
              </button>
            </div>
          </div>

          {/* Imagem de Pizza Destacada */}
          <div className="relative w-full aspect-square">
            <Image
              src="/images/slide1.png"
              alt="Pizza Destaque"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Menu Highlights Section with Carousel */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Nossas Pizzas Mais Amadas</h2>

          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div key={index}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-md mx-auto">
                  <div className="relative h-[400px] w-full">
                    <Image
                      src={slide}
                      alt={pizzaDetails[index].name}
                      fill
                      className="object-contain"
                      loading="lazy"
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
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-black text-gray-300 text-center py-16">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
            Pronto para saborear a melhor pizza da cidade?
          </h2>
          <p className="text-lg md:text-2xl mb-8">
            Faça já o seu pedido e receba em casa!
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              className="bg-white text-red-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-transform transform hover:scale-105"
              aria-label="Reservar Mesa"
            >
              Reservar Mesa
            </button>
            <div
              className="flex items-center bg-white p-3 rounded-full shadow-lg text-red-600 cursor-pointer hover:bg-gray-100 transition-transform transform hover:scale-105"
              aria-label="Ligar Agora"
            >
              <Image
                src="/images/telephone.png"
                alt="Ícone de Telefone"
                width={24}
                height={24}
                className="mr-3"
              />
              <span className="text-lg md:text-xl font-bold tracking-wide hover:text-red-500">
                Ligue Agora
              </span>
            </div>
          </div>
        </div>
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
};
