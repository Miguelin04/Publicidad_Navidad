import React from 'react';
import { MapPin, Phone, Instagram, Facebook } from 'lucide-react';

const LocationContact: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white relative">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-4xl font-bold text-white mb-2">Visítanos</h2>
              <div className="h-1 w-16 bg-yellow-500 rounded"></div>
            </div>
            
            <p className="text-gray-400 text-lg leading-relaxed">
              Estamos ubicados en el corazón de la ciudad, listos para brindarte la mejor experiencia gastronómica de la temporada.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-gray-800 p-3 rounded-full text-yellow-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Dirección</h4>
                  <p className="text-gray-400">Cdla. La Pradera, calles Romerillos y Manzanos</p>
                  <a href="#" className="text-yellow-500 text-sm hover:underline mt-1 block">Ver en Google Maps</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gray-800 p-3 rounded-full text-yellow-500">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Reservas & Delivery</h4>
                  <p className="text-gray-400 mb-2">Llámanos o escríbenos por WhatsApp</p>
                  <a href="https://wa.me/593979641593" className="text-2xl font-bold text-white hover:text-yellow-400 transition-colors">
                    0979641593
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-800">
              <h4 className="font-bold mb-4">Síguenos</h4>
              <div className="flex gap-4">
                <a href="#" className="bg-white/10 p-3 rounded-lg hover:bg-yellow-500 hover:text-black transition-all">
                  <Instagram size={24} />
                </a>
                <a href="#" className="bg-white/10 p-3 rounded-lg hover:bg-yellow-500 hover:text-black transition-all">
                  <Facebook size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Map Visual (Stylized) */}
          <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl bg-gray-800 border-4 border-gray-800">
             {/* Using a static map image placeholder - in production would be Google Maps Embed */}
             <img 
              src="https://picsum.photos/800/800?grayscale" 
              alt="Mapa de Ubicación" 
              className="w-full h-full object-cover opacity-50 hover:opacity-75 transition-opacity duration-500"
             />
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                  <div className="relative inline-flex rounded-full h-16 w-16 bg-yellow-500 items-center justify-center border-4 border-gray-900 shadow-xl">
                    <MapPin size={32} className="text-gray-900" />
                  </div>
                </div>
             </div>
             <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl text-gray-900 text-center">
               <p className="font-bold text-sm">Gabito Gourmet</p>
               <p className="text-xs text-gray-600">Tu punto de encuentro</p>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LocationContact;