
import React from 'react';
import { cn } from '@/lib/utils';

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

const BentoGrid: React.FC<BentoGridProps> = ({ children, className }) => {
  return (
    <div className={cn(
      'grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto w-full max-w-7xl',
      className
    )}>
      {children}
    </div>
  );
};

export default BentoGrid;
