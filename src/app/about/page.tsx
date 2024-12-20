import React from 'react';
import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaMoneyBillWave, FaCreditCard, FaMobileAlt } from 'react-icons/fa';

export default function AboutUs() {
  const services = [
    "Acessibilidade",
    "Ar condicionado",
    "Entrega dentro da vila",
    "Mesas exteriores",
    "Takeaway",
    "Wi-fi gratuito"
  ];

  const paymentOptions = [
    { name: "Dinheiro", icon: <FaMoneyBillWave className="w-5 h-5 mr-2 text-green-500" /> },
    { name: "Pagamentos contactless", icon: <FaMobileAlt className="w-5 h-5 mr-2 text-blue-500" /> },
    { name: "Mastercard", icon: <FaCcMastercard className="w-5 h-5 mr-2 text-red-500" /> },
    { name: "PayPal", icon: <FaCcPaypal className="w-5 h-5 mr-2 text-blue-700" /> },
    { name: "VISA", icon: <FaCcVisa className="w-5 h-5 mr-2 text-blue-600" /> },
    { name: "Cartão de débito", icon: <FaCreditCard className="w-5 h-5 mr-2 text-gray-700" /> },
    { name: "Maestro", icon: <FaCreditCard className="w-5 h-5 mr-2 text-orange-600" /> },
    { name: "MBWay", icon: <FaMobileAlt className="w-5 h-5 mr-2 text-purple-600" /> }
  ];

  const openingHours = [
    { day: "Segunda", hours: "10:30 – 22:30" },
    { day: "Terça", hours: "10:30 – 22:30" },
    { day: "Quarta", hours: "10:30 – 22:30" },
    { day: "Quinta", hours: "10:30 – 22:30" },
    { day: "Sexta", hours: "10:30 – 22:30" },
    { day: "Sábado", hours: "10:30 – 22:30" },
    { day: "Domingo", hours: "Encerrado" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden">
        <div className="p-8">
          <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10">
            Sobre a R&R Pizza
          </h1>

          {/* Descrição da Pizzaria */}
          <div className="mb-10 text-center">
            <p className="text-xl text-gray-600 leading-relaxed">
              Na R&R Pizza, combinamos tradição italiana autêntica com paixão culinária. 
              Cada pizza é preparada com ingredientes selecionados e muito carinho.
            </p>
          </div>

          {/* Seções de Informações */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Serviços */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md transition-transform transform hover:-translate-y-1 hover:bg-gray-200">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Nossos Serviços
              </h2>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <svg 
                      className="w-5 h-5 mr-2 text-green-500" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                      />
                    </svg>
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Opções de Pagamento */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md transition-transform transform hover:-translate-y-1 hover:bg-gray-200">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Métodos de Pagamento
              </h2>
              <ul className="space-y-2">
                {paymentOptions.map((option, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    {option.icon}
                    {option.name}
                  </li>
                ))}
              </ul>
            </div>

            {/* Horário de Funcionamento */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md transition-transform transform hover:-translate-y-1 hover:bg-gray-200">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Horário de Funcionamento
              </h2>
              <div className="space-y-2">
                {openingHours.map(({ day, hours }, index) => (
                  <div key={index} className="flex justify-between text-gray-700">
                    <span>{day}</span>
                    <span>{hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
