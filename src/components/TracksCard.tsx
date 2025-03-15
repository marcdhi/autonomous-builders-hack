
import React from 'react';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';

const TracksCard: React.FC = () => {
  return (
    <motion.div 
      className="rounded-3xl transform-gpu transition-all duration-300 hover:scale-105 hover:bg-hackathon-orange hover:shadow-[0px_16px_40px_4px_#FF7D3B33] p-[1px] bg-gradient-to-b from-[#606064] via-[#60606442] to-[#9B9DC9BD] w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className="bg-black h-full w-full relative rounded-[23px] overflow-hidden p-6">
        <div className="flex items-center gap-2 mb-4">
          <Code className="h-5 w-5 text-hackathon-orange" />
          <h3 className="text-2xl font-bold text-white">Tracks</h3>
        </div>
        
        <ul className="space-y-3">
          <li className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-hackathon-orange"></span>
            <span className="text-gray-300">AI Agent Development</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-hackathon-green"></span>
            <span className="text-gray-300">Web3 Integration</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-hackathon-purple"></span>
            <span className="text-gray-300">Smart Contract Innovation</span>
          </li>
        </ul>
        
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

export default TracksCard;
