
import React from 'react';
import { motion } from 'framer-motion';
import { Gift } from 'lucide-react';

const SponsorsCard: React.FC = () => {
  return (
    <motion.div 
      className="rounded-3xl transform-gpu transition-all duration-300 hover:scale-105 hover:bg-hackathon-purple hover:shadow-[0px_16px_40px_4px_#8B5CF633] p-[1px] bg-gradient-to-b from-[#606064] via-[#60606442] to-[#9B9DC9BD] md:max-w-[388px] w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="bg-black h-full w-full relative rounded-[23px] overflow-hidden p-6">
        <div className="flex items-center gap-2 mb-4">
          <Gift className="h-5 w-5 text-hackathon-purple" />
          <h3 className="text-2xl font-bold text-white">Sponsors</h3>
        </div>
        
        <div className="flex flex-wrap items-center justify-around gap-4 mt-6">
          <div className="p-4 bg-white/5 rounded-lg text-gray-300">Sponsor 1</div>
          <div className="p-4 bg-white/5 rounded-lg text-gray-300">Sponsor 2</div>
          <div className="p-4 bg-white/5 rounded-lg text-gray-300">Sponsor 3</div>
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

export default SponsorsCard;
