
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
        'relative px-8 py-3 rounded-full font-medium transition-all duration-300',
        'bg-white text-black',
        'hover:shadow-lg hover:shadow-hackathon-orange/20',
        'active:scale-95',
        className
      )}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        <span className="font-medium tracking-wide">Register Now</span>
      </span>
    </button>
  );
};

export default RegisterButton;
