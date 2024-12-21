'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the libraries to avoid SSR issues
const Snowfall = dynamic(() => import('react-snowfall'), { ssr: false });
const Fireworks = dynamic(() => import('react-fireworks'), { ssr: false });

const SeasonalEffects: React.FC = () => {
  const [effect, setEffect] = useState<'none' | 'snow' | 'fireworks'>('none');

  useEffect(() => {
    const checkDate = () => {
      const now = new Date();
      const month = now.getMonth();
      const day = now.getDate();

      // Snowfall from December 1st to December 30th
      if (month === 11 && day >= 1 && day <= 30) {
        setEffect('snow');
      } 
      // Fireworks from December 30th to January 3rd
      else if ((month === 11 && day >= 30) || (month === 0 && day <= 3)) {
        setEffect('fireworks');
      } 
      else {
        setEffect('none');
      }
    };

    // Check immediately and then every minute
    checkDate();
    const timer = setInterval(checkDate, 60000);

    return () => clearInterval(timer);
  }, []);

  // Fireworks configuration
  const fireworksConfig = {
    x: 'calc(50% - 150px)',
    y: 'calc(50% - 150px)',
    colors: ['#cc3333', '#4CAF50', '#3f51b5'],
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {effect === 'snow' && (
        <Snowfall 
          style={{ position: 'fixed', width: '100%', height: '100%', zIndex: 9999 }}
        />
      )}
      {effect === 'fireworks' && (
        <Fireworks 
          options={fireworksConfig}
          style={{ position: 'fixed', width: '100%', height: '100%', zIndex: 9999 }}
        />
      )}
    </div>
  );
};

export default SeasonalEffects;
