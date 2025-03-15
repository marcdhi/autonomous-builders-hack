
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const TimelineCard: React.FC = () => {
  return (
    <motion.div 
      className="rounded-xl transition-all duration-300 hover:bg-hackathon-orange/20 p-[1px] bg-gradient-to-br from-hackathon-orange/30 to-hackathon-purple/30 w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-black h-full w-full relative rounded-xl overflow-hidden p-6">
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="h-4 w-4 text-hackathon-orange" />
          <h3 className="text-lg font-bold text-white">Timeline</h3>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm text-gray-300">Applications Open</span>
            <span className="text-xs text-gray-400">Mar 15, 2025</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-300">Applications Close</span>
            <span className="text-xs text-gray-400">Mar 21, 2025</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-300">Hackathon Starts</span>
            <span className="text-xs text-gray-400">Mar 22, 2025</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-300">Hackathon Ends</span>
            <span className="text-xs text-gray-400">Mar 23, 2025</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-300">Results Announcement</span>
            <span className="text-xs text-gray-400">Mar 25, 2025</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineCard;
