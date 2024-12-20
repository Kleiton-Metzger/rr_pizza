import React from 'react';
import { 
  FaFacebookF,
  FaInstagram,
  
} from "react-icons/fa";
import { 
  MdLocationOn,
  MdPhone,
  MdEmail 
} from "react-icons/md";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Social Media Section */}
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold mb-4">Siga-nos</h3>
          <div className="flex space-x-4">
           
            <a href="https://www.facebook.com/pizzariaRR/" aria-label="Facebook" className="hover:text-yellow-400">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-yellow-400">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Services Section */}
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold mb-4">Serviços</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-yellow-400">Sobre Nós</a></li>
            <li><a href="/menu" className="hover:text-yellow-400">Menu</a></li>
            <li><a href="#" className="hover:text-yellow-400">Comida de Qualidade</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold mb-4">Dúvidas?</h3>
          <ul className="space-y-2">
            <li>
              <span className="flex items-center space-x-2">
                <MdLocationOn className="text-yellow-400" />
                {/* Link to Google Maps */}
                <a 
                  href="https://maps.app.goo.gl/nnUvKHzawGKCZ9oU9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400"
                >
                  Avenida 25 de Abril, 6100-733 Sertã
                </a>
              </span>
            </li>
            <li>
              <span className="flex items-center space-x-2">
                <MdPhone className="text-yellow-400" />
                {/* Click to call */}
                <a 
                  href="tel:+351274604187" 
                  className="hover:text-yellow-400"
                >
                  (+351) 274 604 187
                </a>
              </span>
            </li>
            <li>
              <span className="flex items-center space-x-2">
                <MdEmail className="text-yellow-400" />
                {/* Click to email */}
                <a 
                  href="mailto:pizzariarr@outlook.pt" 
                  className="hover:text-yellow-400"
                >
                  pizzariarr@outlook.pt
                </a>
              </span>
            </li>
          </ul>
        </div>
        <div className="text-center text-sm text-gray-400 col-span-3 border-t border-gray-700 pt-8">
          <p>&copy; 2024 Pizza R&R.Todos os direitos reservados.</p>
          <p>Desenvolvido por: <a href="https://github.com/Kleiton-Metzger">Kleiton Metzger</a></p>
        </div>
      </div>
    </footer>
  );
};
