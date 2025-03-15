
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface RegisterButtonProps {
  formUrl: string;
  className?: string;
}

const RegisterButton: React.FC<RegisterButtonProps> = ({ formUrl, className }) => {
  const [isHovering, setIsHovering] = useState(false);
  
  const handleRegister = () => {
    window.open(formUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={handleRegister}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={cn(
        'relative overflow-hidden group px-8 py-3 rounded-full font-medium transition-all duration-300',
        'bg-hackathon-orange text-white',
        'hover:shadow-lg hover:shadow-hackathon-orange/20',
        'active:scale-95',
        className
      )}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        <span className="font-medium tracking-wide">Register Now</span>
        <svg 
          className={`w-5 h-5 transition-transform duration-300 ${isHovering ? 'translate-x-1' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </span>
      <div 
        className={`absolute inset-0 w-full h-full transition-all duration-300 bg-gradient-to-r from-hackathon-orange via-hackathon-purple to-hackathon-orange bg-[length:200%_200%] ${isHovering ? 'animate-gradient-x' : ''}`}
      />
    </button>
  );
};

export default RegisterButton;
