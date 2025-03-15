
import React from 'react';
import { motion } from 'framer-motion';
import { Gift } from 'lucide-react';

const SponsorsCard: React.FC = () => {
  return (
    <motion.div 
      className="rounded-3xl transform-gpu transition-all duration-300 hover:scale-105 hover:bg-hackathon-purple hover:shadow-[0px_16px_40px_4px_#8B5CF633] p-[1px] bg-gradient-to-b from-[#606064] via-[#60606442] to-[#9B9DC9BD] w-full h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="bg-black h-full w-full relative rounded-[23px] overflow-hidden p-6">
        <div className="flex items-center gap-2 mb-4">
          <Gift className="h-5 w-5 text-hackathon-purple" />
          <h3 className="text-2xl font-bold text-white">Sponsors</h3>
        </div>
        
        <div className="grid grid-cols-2 gap-3 mt-4">
          <div className="p-3 bg-white/5 rounded-lg flex items-center justify-center">
            <div className="font-semibold text-white">Platinum</div>
          </div>
          <div className="p-3 bg-white/5 rounded-lg flex items-center justify-center">
            <div className="font-semibold text-white">Gold</div>
          </div>
          <div className="p-3 bg-white/5 rounded-lg flex items-center justify-center">
            <div className="font-semibold text-white">Silver</div>
          </div>
          <div className="p-3 bg-white/5 rounded-lg flex items-center justify-center">
            <div className="font-semibold text-white">Bronze</div>
          </div>
        </div>
        
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-400">Interested in sponsoring?</p>
          <a 
            href="#" 
            className="inline-block mt-2 text-sm px-4 py-1.5 rounded-full bg-hackathon-purple/20 text-white border border-hackathon-purple/30 hover:bg-hackathon-purple/30 transition-colors duration-200"
          >
            Contact Us
          </a>
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
