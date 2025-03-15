
import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const PrizesCard: React.FC = () => {
  return (
    <motion.div 
      className="rounded-3xl transform-gpu transition-all duration-300 hover:scale-105 hover:bg-hackathon-green hover:shadow-[0px_16px_40px_4px_#38B77C33] p-[1px] bg-gradient-to-b from-[#606064] via-[#60606442] to-[#9B9DC9BD] w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="bg-black h-full w-full relative rounded-[23px] overflow-hidden p-6">
        <div className="flex items-center gap-2 mb-4">
          <Award className="h-5 w-5 text-hackathon-green" />
          <h3 className="text-2xl font-bold text-white">Prizes</h3>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-gray-300">1st Place</span>
            <span className="font-semibold text-hackathon-orange">$5,000</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-300">2nd Place</span>
            <span className="font-semibold text-hackathon-green">$3,000</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-300">3rd Place</span>
            <span className="font-semibold text-hackathon-purple">$1,500</span>
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

export default PrizesCard;
