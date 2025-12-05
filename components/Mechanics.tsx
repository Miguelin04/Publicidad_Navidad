import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Ticket, Gift } from 'lucide-react';

const steps = [
  {
    icon: <Utensils size={40} />,
    title: "1. Disfruta",
    desc: "Visítanos y deleita tu paladar con cualquiera de nuestros almuerzos especiales de temporada.",
    color: "bg-red-100 text-red-800",
    border: "border-red-800"
  },
  {
    icon: <Ticket size={40} />,
    title: "2. Recibe",
    desc: "Por cada consumo, obtendrás un boleto dorado para nuestro gran sorteo navideño.",
    color: "bg-yellow-100 text-yellow-800",
    border: "border-yellow-600"
  },
  {
    icon: <Gift size={40} />,
    title: "3. Gana",
    desc: "Participa automáticamente por el Pavo Gourmet y la Gran Canasta el 24 de Diciembre.",
    color: "bg-green-100 text-green-800",
    border: "border-green-700"
  }
];

const Mechanics: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="font-serif text-4xl font-bold text-gray-800 mb-4">La Receta para Ganar</h2>
        <div className="h-1 w-24 bg-yellow-500 mx-auto mb-6 rounded-full"></div>
        <p className="text-lg text-gray-600">
          En Gabito Gourmet, premiamos tu buen gusto. Participar es tan sencillo como disfrutar de tu comida favorita.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {/* Connection Line (Desktop only) */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -z-10 transform -translate-y-1/2"></div>

        {steps.map((step, index) => (
          <motion.div 
            key={index}
            className={`bg-white p-8 rounded-2xl shadow-xl border-t-4 ${step.border} relative group cursor-default`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            whileHover={{ y: -10 }}
          >
            <div className={`w-20 h-20 mx-auto ${step.color} rounded-full flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300`}>
              {step.icon}
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center font-serif">{step.title}</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Mechanics;