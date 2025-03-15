
import React from 'react';

const BackgroundEffect: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base black background */}
      <div className="absolute inset-0 bg-black z-0"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(139,92,246,0.08)_1px,transparent_1px)] bg-[size:24px_24px] z-0"></div>
      
      {/* Gradient orbs */}
      <div className="absolute -top-[10%] right-[5%] w-[40%] h-[40%] rounded-full bg-hackathon-orange/10 blur-[100px] z-0"></div>
      <div className="absolute bottom-[10%] left-[10%] w-[30%] h-[30%] rounded-full bg-hackathon-purple/10 blur-[120px] z-0"></div>
      
      {/* Subtle noise texture */}
      <div className="absolute inset-0 opacity-5 z-0 mix-blend-overlay">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
            <feColorMatrix type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"/>
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)"/>
        </svg>
      </div>
    </div>
  );
};

export default BackgroundEffect;
