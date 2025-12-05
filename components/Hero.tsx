import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="img/fondo.jpg" 
          alt="Restaurant Ambiance" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/80 via-red-900/70 to-red-900/90 mix-blend-multiply"></div>
      </div>

      {/* Decorative Particles (Simulated Snow/Sparkle) */}
      <div className="absolute inset-0 z-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center text-white relative">
        
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="inline-block mb-4 px-4 py-1 rounded-full border border-yellow-500/50 bg-yellow-900/30 backdrop-blur-md text-yellow-300 text-sm font-semibold tracking-widest uppercase">
            Celebración Navideña 2025
          </div>
        </motion.div>

        <motion.h1 
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Sabor que <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300">
            Premia tu Fidelidad
          </span>
        </motion.h1>

        <motion.p 
          className="text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto mb-10 font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Disfruta de nuestra alta cocina y participa automáticamente por cenas exclusivas y premios gourmet esta Navidad.
        </motion.p>

        <motion.div 
          className="flex flex-col md:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href="#mechanics" className="bg-yellow-500 text-red-900 hover:bg-white hover:text-red-800 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-yellow-500/50 min-w-[200px]">
            Ver Promoción
          </a>
          <a href="#contact" className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:bg-white/10 min-w-[200px]">
            Reservar Ahora
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown size={32} />
      </motion.div>
    </div>
  );
};

export default Hero;