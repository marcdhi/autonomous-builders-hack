
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const TimelineCard: React.FC = () => {
  return (
    <motion.div 
      className="rounded-3xl transform-gpu transition-all duration-300 hover:scale-105 hover:bg-hackathon-orange hover:shadow-[0px_16px_40px_4px_#FF7D3B33] p-[1px] bg-gradient-to-b from-[#606064] via-[#60606442] to-[#9B9DC9BD] w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <div className="bg-black h-full w-full relative rounded-[23px] overflow-hidden p-6">
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="h-5 w-5 text-hackathon-orange" />
          <h3 className="text-2xl font-bold text-white">Event Timeline</h3>
        </div>
        
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-300">Applications Open</span>
            <span className="text-sm text-gray-400">Feb 22, 2025</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-300">Applications Close</span>
            <span className="text-sm text-gray-400">Mar 22, 2025</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-300">Hackathon</span>
            <span className="text-sm text-gray-400">Mar 22-23, 2025</span>
          </div>
        </div>
        
        <div
          className="absolute inset-0 opacity-20 z-0"
          style={{
            backgroundImage: `url('/assets/dots_svg.svg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
      </div>
    </motion.div>
  );
};

export default TimelineCard;
