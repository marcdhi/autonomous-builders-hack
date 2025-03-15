
import React from 'react';

const BackgroundEffect: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Main background */}
      <div className="absolute inset-0 bg-black opacity-90 z-0"></div>
      
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(rgba(255,125,59,0.08)_1px,transparent_1px)] bg-[size:24px_24px] z-0"
      ></div>
      
      {/* Subtle gradient background shape */}
      <div className="absolute right-0 top-0 w-[80%] h-[80%] z-0">
        <div className="absolute top-0 right-0 w-full h-full rounded-full bg-hackathon-orange/10 blur-[150px]"></div>
      </div>
      
      {/* Orange pattern overlay */}
      <div className="absolute top-0 -right-[20%] w-[70%] h-[70%] opacity-10 z-0">
        <svg width="100%" height="100%" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" stroke="rgba(255,125,59,0.8)" strokeWidth="2">
            <path d="M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63"></path>
            <path d="M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764"></path>
            <path d="M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880"></path>
            <path d="M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382"></path>
            <path d="M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269"></path>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default BackgroundEffect;
