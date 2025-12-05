import React from 'react';
import Hero from './components/Hero';
import Mechanics from './components/Mechanics';
import Prizes from './components/Prizes';
import UrgencyDashboard from './components/UrgencyDashboard';
import LocationContact from './components/LocationContact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans overflow-x-hidden">
      <Navbar />
      
      <main className="flex-grow">
        <section id="hero">
          <Hero />
        </section>

        <section id="mechanics" className="py-20 bg-white">
          <Mechanics />
        </section>

        <section id="prizes" className="py-20 bg-amber-50 relative overflow-hidden">
          {/* Decorative Pattern Background */}
          <div className="absolute inset-0 opacity-5 pointer-events-none" 
               style={{
                   backgroundImage: 'radial-gradient(#991b1b 1px, transparent 1px)', 
                   backgroundSize: '20px 20px'
               }}>
          </div>
          <Prizes />
        </section>

        <section id="countdown" className="py-20 bg-white">
          <UrgencyDashboard />
        </section>

        <section id="contact" className="py-0">
          <LocationContact />
        </section>
      </main>

      <Footer />
      
      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-4 right-4 z-50 md:hidden">
        <a 
          href="https://wa.me/593979641593" 
          target="_blank" 
          rel="noreferrer"
          className="bg-green-600 text-white px-6 py-3 rounded-full shadow-lg font-bold flex items-center gap-2 animate-bounce"
        >
          <span>📱</span> Reservar
        </a>
      </div>
    </div>
  );
};

export default App;