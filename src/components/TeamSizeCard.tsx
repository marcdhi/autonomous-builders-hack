
import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const TeamSizeCard: React.FC = () => {
  return (
    <motion.div 
      className="rounded-xl transition-all duration-300 hover:bg-hackathon-purple/20 p-[1px] bg-gradient-to-br from-hackathon-purple/30 to-hackathon-orange/10 w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-black h-full w-full relative rounded-xl overflow-hidden p-6">
        <div className="flex items-center gap-2 mb-4">
          <Users className="h-4 w-4 text-hackathon-purple" />
          <h3 className="text-lg font-bold text-white">Team Size</h3>
        </div>
        
        <div className="text-center py-4">
          <div className="text-4xl font-bold text-hackathon-purple">1-4</div>
          <p className="mt-2 text-sm text-gray-300">members per team</p>
        </div>
        
        <div className="mt-3 p-2 rounded-lg bg-black/40 border border-hackathon-purple/20">
          <p className="text-xs text-gray-300 text-center">
            Solo participants welcome!
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamSizeCard;
