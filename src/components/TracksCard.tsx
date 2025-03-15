
import React from 'react';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';

const TracksCard: React.FC = () => {
  return (
    <motion.div 
      className="rounded-xl transition-all duration-300 hover:bg-hackathon-purple/20 p-[1px] bg-gradient-to-br from-hackathon-purple/30 to-hackathon-orange/10 w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-black h-full w-full relative rounded-xl overflow-hidden p-6">
        <div className="flex items-center gap-2 mb-4">
          <Code className="h-4 w-4 text-hackathon-purple" />
          <h3 className="text-lg font-bold text-white">Tracks</h3>
        </div>
        
        <ul className="space-y-3">
          <li className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-hackathon-orange"></span>
            <span className="text-sm text-gray-300">AI Agents</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-hackathon-purple"></span>
            <span className="text-sm text-gray-300">Web3 Integration</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-hackathon-green"></span>
            <span className="text-sm text-gray-300">Smart Contracts</span>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default TracksCard;
