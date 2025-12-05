import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { motion } from 'framer-motion';
import { Clock, Calendar, AlertCircle } from 'lucide-react';

const UrgencyDashboard: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [chartData, setChartData] = useState<{name: string, value: number, color: string}[]>([]);

  // Use dynamic dates: event ends on Dec 24 of current year at 12:00 PM
  const now = new Date();
  const currentYear = now.getFullYear();
  const targetDate = new Date(currentYear, 11, 24, 12, 0, 0).getTime(); // Months are 0-indexed: 11 = December
  // The event starts today (midnight) as requested
  const startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0).getTime();

  useEffect(() => {
    const update = () => {
      const nowTs = Date.now();
      let distance = targetDate - nowTs;

      if (distance < 0) distance = 0; // no negative times

      // Calculate time components
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      // Chart Logic
      const totalDuration = Math.max(1, targetDate - startDate);
      const elapsed = nowTs - startDate;
      const remaining = Math.max(0, targetDate - nowTs);

      // Clamp elapsed between 0 and totalDuration
      const safeElapsed = Math.max(0, Math.min(elapsed, totalDuration));

      setChartData([
        { name: 'Tiempo Transcurrido', value: safeElapsed, color: '#991B1B' }, // Red
        { name: 'Tiempo Restante', value: remaining, color: '#166534' }   // Green
      ]);
    };

    // Run once immediately to avoid 1s delay
    update();

    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, [startDate, targetDate]);

  return (
    <div className="container mx-auto px-4">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col lg:flex-row">
        
        {/* Left: Text & Timer */}
        <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center bg-gradient-to-br from-red-50 to-white">
          <div className="flex items-center gap-2 text-red-600 font-bold mb-4 animate-pulse">
            <AlertCircle size={20} />
            <span className="uppercase tracking-widest text-sm">El tiempo se agota</span>
          </div>
          
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Gran Sorteo Navideño
          </h2>
          
          <p className="text-gray-600 text-lg mb-10">
            Cada minuto cuenta. ¡Mientras más visites Gabito Gourmet, más oportunidades tendrás de ganar!
          </p>

          <div className="grid grid-cols-4 gap-4 mb-10">
            {[
              { label: 'Días', value: timeLeft.days },
              { label: 'Horas', value: timeLeft.hours },
              { label: 'Min', value: timeLeft.minutes },
              { label: 'Seg', value: timeLeft.seconds },
            ].map((item) => (
              <div key={item.label} className="bg-white p-4 rounded-xl shadow-md border border-gray-100 text-center">
                <div className="text-2xl md:text-4xl font-bold text-red-800 font-mono">
                  {item.value.toString().padStart(2, '0')}
                </div>
                <div className="text-xs text-gray-500 uppercase mt-1 font-bold">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-6 text-sm text-gray-600">
             <div className="flex items-center gap-3">
               <Calendar className="text-yellow-600" />
               <span><strong>Fecha:</strong> 24 de Diciembre</span>
             </div>
             <div className="flex items-center gap-3">
               <Clock className="text-yellow-600" />
               <span><strong>Hora:</strong> 12:00 PM (Medio día)</span>
             </div>
          </div>
        </div>

        {/* Right: Chart Visualization */}
        <div className="lg:w-1/2 bg-gray-900 p-10 flex flex-col items-center justify-center relative overflow-hidden">
           {/* Background Pattern */}
           <div className="absolute inset-0 opacity-10" 
               style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px'}}>
           </div>

           <h3 className="text-white text-xl font-serif mb-8 z-10">Progreso del Mes</h3>
           
           <div className="w-full h-80 z-10">
             <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={120}
                    paddingAngle={5}
                    dataKey="value"
                    stroke="none"
                  >
                    {chartData.map((entry) => (
                      <Cell key={entry.name} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                    formatter={(value: number) => {
                      const days = Math.round(value / (1000 * 60 * 60 * 24));
                      return [`~${days} Días`, 'Duración'];
                    }}
                  />
                </PieChart>
             </ResponsiveContainer>
           </div>
           
           <div className="flex gap-8 mt-4 z-10">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-800"></div>
                <span className="text-gray-300 text-sm">Ya pasó</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-800"></div>
                <span className="text-gray-300 text-sm">Tiempo restante</span>
              </div>
           </div>

           {/* Floating Badge */}
           <motion.div 
             className="absolute top-10 right-10 bg-yellow-500 text-black font-bold rounded-full p-4 shadow-lg z-20"
             animate={{ scale: [1, 1.1, 1] }}
             transition={{ repeat: Infinity, duration: 2 }}
           >
             ¡Corre!
           </motion.div>
        </div>
      </div>
    </div>
  );
};

export default UrgencyDashboard;