
import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Target } from 'lucide-react';

const IdeasCard: React.FC = () => {
  return (
    <motion.div 
      className="rounded-xl transition-all duration-300 p-[1px] bg-gradient-to-br from-neutral-700/30 to-neutral-900/20 w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-black h-full w-full relative rounded-xl overflow-hidden p-6">
        <div className="flex items-center gap-2 mb-4">
          <Lightbulb className="h-4 w-4 text-neutral-400" />
          <h3 className="text-lg font-bold text-white">Project Ideas</h3>
        </div>
        
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <li className="flex items-start gap-2">
            <Target className="h-3 w-3 mt-1 text-neutral-400" />
            <span className="text-sm text-gray-300">AI agents that interact with smart contracts</span>
          </li>
          <li className="flex items-start gap-2">
            <Target className="h-3 w-3 mt-1 text-neutral-400" />
            <span className="text-sm text-gray-300">Decentralized AI marketplaces</span>
          </li>
          <li className="flex items-start gap-2">
            <Target className="h-3 w-3 mt-1 text-neutral-400" />
            <span className="text-sm text-gray-300">On-chain AI governance systems</span>
          </li>
          <li className="flex items-start gap-2">
            <Target className="h-3 w-3 mt-1 text-neutral-400" />
            <span className="text-sm text-gray-300">Web3 identity with AI verification</span>
          </li>
          <li className="flex items-start gap-2">
            <Target className="h-3 w-3 mt-1 text-neutral-400" />
            <span className="text-sm text-gray-300">Autonomous DeFi agents</span>
          </li>
          <li className="flex items-start gap-2">
            <Target className="h-3 w-3 mt-1 text-neutral-400" />
            <span className="text-sm text-gray-300">AI-powered blockchain analytics</span>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default IdeasCard;
