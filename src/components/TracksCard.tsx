
import React from 'react';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';

const TracksCard: React.FC = () => {
  return (
    <motion.div 
      className="rounded-xl transition-all duration-300 p-[1px] bg-gradient-to-br from-neutral-700/30 to-neutral-900/20 w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-black h-full w-full relative rounded-xl overflow-hidden p-6">
        <div className="flex items-center gap-2 mb-4">
          <Code className="h-4 w-4 text-neutral-400" />
          <h3 className="text-lg font-bold text-white">Tracks</h3>
        </div>
        
        <ul className="space-y-3">
          <li className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-neutral-500"></span>
            <span className="text-sm text-gray-300">AI Agents & Autonomous Systems</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-neutral-400"></span>
            <span className="text-sm text-gray-300">Web3 Integration & DApps</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-neutral-300"></span>
            <span className="text-sm text-gray-300">Smart Contracts & On-Chain Governance</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-neutral-200"></span>
            <span className="text-sm text-gray-300">AI-powered DeFi Solutions</span>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default TracksCard;
