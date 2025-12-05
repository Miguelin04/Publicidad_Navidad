import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Prizes: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
       <div className="text-center mb-16">
        <span className="text-yellow-600 font-bold tracking-widest uppercase text-sm">Solo dos ganadores</span>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">Premios de Lujo</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Esta Navidad queremos que tu mesa luzca espectacular. Hemos seleccionado dos premios pensados para compartir.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        
        {/* Prize 1 */}
        <motion.div 
          className="bg-white rounded-3xl overflow-hidden shadow-2xl relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative h-64 md:h-80 overflow-hidden group">
             {/* Use picsum for Thanksgiving/Turkey vibes */}
             <img 
              src="img/image.png" 
              alt="Pavo Horneado" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute top-4 right-4 bg-yellow-500 text-red-900 font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
              <Star size={16} fill="currentColor" /> Premio Estrella
            </div>
          </div>
          <div className="p-8 md:p-10">
            <h3 className="font-serif text-3xl font-bold text-gray-800 mb-4">Pavo Gourmet Horneado</h3>
            <ul className="space-y-3 text-gray-600 mb-8">
              <li className="flex items-start gap-2"><span className="text-yellow-500">✓</span> 8-10kg de peso aproximado</li>
              <li className="flex items-start gap-2"><span className="text-yellow-500">✓</span> Marinado con especias secretas de la casa</li>
              <li className="flex items-start gap-2"><span className="text-yellow-500">✓</span> Incluye salsas artesanales</li>
            </ul>
            <div className="w-full bg-red-50 text-red-800 py-3 rounded-xl text-center font-bold text-sm uppercase tracking-wide">
              Listo para servir
            </div>
          </div>
        </motion.div>

        {/* Prize 2 */}
        <motion.div 
          className="bg-white rounded-3xl overflow-hidden shadow-2xl relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative h-64 md:h-80 overflow-hidden group">
             {/* Use picsum for Basket vibes */}
             <img 
              src="img/canasta.png" 
              alt="Canasta Navideña" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
             <div className="absolute top-4 right-4 bg-red-600 text-white font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
              <Star size={16} /> Gran Reserva
            </div>
          </div>
          <div className="p-8 md:p-10">
            <h3 className="font-serif text-3xl font-bold text-gray-800 mb-4">Canasta Premium</h3>
            <ul className="space-y-3 text-gray-600 mb-8">
              <li className="flex items-start gap-2"><span className="text-red-500">✓</span> Selección de vinos importados</li>
              <li className="flex items-start gap-2"><span className="text-red-500">✓</span> Quesos y embutidos madurados</li>
              <li className="flex items-start gap-2"><span className="text-red-500">✓</span> Chocolates finos y conservas dulces</li>
            </ul>
            <div className="w-full bg-yellow-50 text-yellow-800 py-3 rounded-xl text-center font-bold text-sm uppercase tracking-wide">
              La experiencia completa
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Prizes;