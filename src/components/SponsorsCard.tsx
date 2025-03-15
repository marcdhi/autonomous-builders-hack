
import React from 'react';
import { motion } from 'framer-motion';
import { Gift } from 'lucide-react';

const SponsorsCard: React.FC = () => {
  return (
    <motion.div 
      className="rounded-xl transition-all duration-300 p-[1px] bg-gradient-to-br from-neutral-700/30 to-neutral-900/20 w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-black h-full w-full relative rounded-xl overflow-hidden p-6">
        <div className="flex items-center gap-2 mb-4">
          <Gift className="h-4 w-4 text-neutral-400" />
          <h3 className="text-lg font-bold text-white">Sponsors</h3>
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          <div className="p-2 bg-black/40 border border-neutral-700/20 rounded-lg flex items-center justify-center">
            <div className="text-xs text-white">Sponsor 1</div>
          </div>
          <div className="p-2 bg-black/40 border border-neutral-700/20 rounded-lg flex items-center justify-center">
            <div className="text-xs text-white">Sponsor 2</div>
          </div>
          <div className="p-2 bg-black/40 border border-neutral-700/20 rounded-lg flex items-center justify-center">
            <div className="text-xs text-white">Sponsor 3</div>
          </div>
          <div className="p-2 bg-black/40 border border-neutral-700/20 rounded-lg flex items-center justify-center">
            <div className="text-xs text-white">Sponsor 4</div>
          </div>
        </div>
        
        <div className="mt-4 text-center">
          <a 
            href="#" 
            className="inline-block text-xs px-3 py-1 rounded-full bg-neutral-800/50 text-white border border-neutral-700/30 hover:bg-neutral-700/30 transition-colors"
          >
            Become a Sponsor
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default SponsorsCard;
