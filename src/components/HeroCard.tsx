
import React from 'react';
import { motion } from 'framer-motion';
import RegisterButton from './RegisterButton';

const HeroCard: React.FC = () => {
  const formUrl = "https://forms.google.com"; // Replace with actual form URL
  
  return (
    <motion.div 
      className="rounded-xl transition-all duration-300 hover:bg-hackathon-orange/20 p-[1px] bg-gradient-to-br from-hackathon-orange/30 to-hackathon-purple/30 w-full h-[280px] md:h-[320px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-black h-full w-full relative rounded-xl overflow-hidden p-6 md:p-8">
        <div className="flex flex-col h-full">
          {/* Status chip */}
          <div className="inline-flex items-center gap-2 bg-black/70 px-3 py-1 mb-4 rounded-full border border-hackathon-orange/20 w-fit">
            <span className="size-2 rounded-full bg-hackathon-green animate-pulse"></span>
            <span className="text-xs text-white">Applications open</span>
          </div>

          {/* Main heading */}
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            <span className="text-hackathon-orange">AI</span>+<span className="text-hackathon-purple">Web3</span> Hackathon
          </h1>

          {/* Subheading */}
          <p className="text-base text-gray-300 mb-6">
            Build autonomous agents that interact with blockchain technology
          </p>

          {/* CTA button */}
          <div className="mt-auto">
            <RegisterButton formUrl={formUrl} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroCard;
