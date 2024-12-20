// components/Footer.tsx
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Pizza R&R. Todos os direitos reservados.</p>
        <div className="mt-4">
          <a href="/about" className="hover:text-red-500 mx-2">Sobre Nós</a>
          <a href="/contact" className="hover:text-red-500 mx-2">Contato</a>
          <a href="/privacy" className="hover:text-red-500 mx-2">Política de Privacidade</a>
        </div>
      </div>
    </footer>
  );
};
