
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface BentoCardProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
  hoverEffect?: 'glow' | 'scale' | 'border' | 'none';
  size?: 'small' | 'medium' | 'large';
}

const BentoCard: React.FC<BentoCardProps> = ({
  title,
  icon,
  children,
  className,
  hoverEffect = 'glow',
  size = 'medium',
}) => {
  const sizeClasses = {
    small: 'col-span-1 row-span-1',
    medium: 'col-span-1 md:col-span-1 row-span-1',
    large: 'col-span-1 md:col-span-2 row-span-1 md:row-span-2',
  };

  const hoverClasses = {
    glow: 'hover:shadow-lg hover:shadow-hackathon-orange/20 transition-shadow duration-300',
    scale: 'hover:scale-[1.02] transition-transform duration-300',
    border: 'hover:border-hackathon-orange transition-colors duration-300',
    none: '',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'glass-morphism rounded-xl p-5 border border-white/10 backdrop-blur-md',
        'bg-black/40 text-white overflow-hidden',
        sizeClasses[size],
        hoverClasses[hoverEffect],
        className
      )}
    >
      <div className="flex items-center gap-2 mb-3">
        {icon && <div className="text-hackathon-orange">{icon}</div>}
        <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
      </div>
      <div className="text-gray-300">{children}</div>
    </motion.div>
  );
};

export default BentoCard;
