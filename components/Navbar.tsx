import React, { useState, useEffect } from 'react';
import { Menu, X, Gift, Clock, MapPin } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Cómo Participar', href: '#mechanics', icon: <Gift size={18} /> },
    { name: 'Premios', href: '#prizes', icon: <Gift size={18} /> },
    { name: 'Sorteo', href: '#countdown', icon: <Clock size={18} /> },
    { name: 'Ubicación', href: '#contact', icon: <MapPin size={18} /> },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Brand */}
        <div className={`flex items-center gap-3 font-serif font-bold text-2xl tracking-wider transition-colors ${scrolled ? 'text-red-900' : 'text-white'}`}>
          <img src="/img/logo.jpg" alt="Gabito Gourmet" className="w-10 h-10 object-cover rounded-full shadow-sm" />
          <div className="leading-tight">
            <div className="uppercase">GABITO <span className="text-yellow-500">GOURMET</span></div>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`font-semibold text-sm uppercase tracking-wide transition-colors hover:text-yellow-500 ${scrolled ? 'text-gray-700' : 'text-white/90'}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            className="bg-yellow-500 hover:bg-yellow-400 text-red-900 px-6 py-2 rounded-full font-bold transition-transform transform hover:scale-105 shadow-lg"
          >
            Reservar Mesa
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden ${scrolled ? 'text-gray-800' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 flex flex-col p-4 animate-fade-in-down">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="flex items-center gap-3 py-3 px-4 text-gray-700 hover:bg-red-50 hover:text-red-900 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              <span className="text-yellow-600">{link.icon}</span>
              {link.name}
            </a>
          ))}
          <div className="mt-4 pt-4 border-t border-gray-100">
             <a 
              href="https://wa.me/593979641593"
              className="block w-full text-center bg-red-800 text-white py-3 rounded-lg font-bold"
              onClick={() => setIsOpen(false)}
             >
               Reservar Ahora
             </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;