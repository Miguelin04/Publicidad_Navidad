import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-red-950 text-red-200/60 py-8 text-center border-t border-red-900">
      <div className="container mx-auto px-4">
        <p className="font-serif italic text-lg mb-2">"Comida con amor, servida con gusto."</p>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Gabito Gourmet. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;