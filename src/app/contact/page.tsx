import React from "react";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center text-gray-800">Contato</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Mapa */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Nossa Localização</h2>
          <div className="h-64 sm:h-80 w-full rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3635.8804237095214!2d-8.0934712!3d39.8035138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd22a3929e0f3045%3A0x8c5ad85b9b941454!2sR%26R%20Pizza!5e1!3m2!1spt-PT!2spt!4v1734702773635!5m2!1spt-PT!2spt"
              width="100%"
              height="100%"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0"
            ></iframe>
          </div>
        </div>

        {/* Informações de Contato */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">Informações de Contato</h2>
          <p className="mb-6 text-lg text-gray-600">
            Entre em contato conosco para qualquer dúvida ou informação.
          </p>
          <div className="space-y-4">
            <p className="flex items-center text-gray-700">
              <span className="text-2xl mr-3">📞</span>
              <span><strong>Telefone:</strong> <a href="tel:+351274604187" className="hover:text-blue-500 transition-colors">(+351) 274 604 187</a></span>
            </p>
            <p className="flex items-center text-gray-700">
              <span className="text-2xl mr-3">📧</span>
              <span><strong>E-mail:</strong> <a href="mailto:pizzariarr@outlook.pt" className="text-blue-500 hover:underline">pizzariarr@outlook.pt</a></span>
            </p>
            <p className="flex items-start text-gray-700">
              <span className="text-2xl mr-3">📍</span>
              <span><strong>Endereço:</strong> Avenida 25 de Abril, 6100-733 Sertã</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
