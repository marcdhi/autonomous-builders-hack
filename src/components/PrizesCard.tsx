
import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const PrizesCard: React.FC = () => {
  return (
    <motion.div 
      className="rounded-xl transition-all duration-300 p-[1px] bg-gradient-to-br from-neutral-700/30 to-neutral-900/20 w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-black h-full w-full relative rounded-xl overflow-hidden p-6">
        <div className="flex items-center gap-2 mb-4">
          <Award className="h-4 w-4 text-neutral-400" />
          <h3 className="text-lg font-bold text-white">Prizes</h3>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-300">1st Place</span>
            <span className="font-semibold text-neutral-200">₹15,000</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-300">2nd Place</span>
            <span className="font-semibold text-neutral-300">₹10,000</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-300">3rd Place</span>
            <span className="font-semibold text-neutral-400">₹5,000</span>
          </div>
        </div>
        
        <div className="mt-4 pt-3 border-t border-neutral-800">
          <h4 className="text-sm font-medium text-gray-400 mb-2">Category Awards</h4>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-300">Best AI Agent</span>
              <span className="font-semibold text-neutral-300">₹5,000</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-300">Best Web3 Integration</span>
              <span className="font-semibold text-neutral-300">₹3,000</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-300">Most Innovative Use Case</span>
              <span className="font-semibold text-neutral-300">₹2,000</span>
            </div>
          </div>
        </div>
        
        <div className="mt-3 pt-2 border-t border-neutral-800">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-300">Total Prize Pool</span>
            <span className="font-semibold text-white">₹40,000</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PrizesCard;
