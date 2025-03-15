
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface RegisterButtonProps {
  formUrl: string;
  className?: string;
}

const RegisterButton: React.FC<RegisterButtonProps> = ({ formUrl, className }) => {
  const handleRegister = () => {
    window.open(formUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.button
      onClick={handleRegister}
      className={cn(
        'relative overflow-hidden rounded-full font-medium transition-all duration-300',
        'bg-gradient-to-r from-hackathon-orange to-hackathon-purple text-white',
        'hover:shadow-lg hover:shadow-hackathon-purple/20 hover:scale-105',
        'active:scale-95 px-8 py-3',
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        <span className="font-medium">Register Now</span>
      </span>
    </motion.button>
  );
};

export default RegisterButton;
