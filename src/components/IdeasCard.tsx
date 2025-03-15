
import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Target } from 'lucide-react';

const IdeasCard: React.FC = () => {
  return (
    <motion.div 
      className="rounded-3xl transform-gpu transition-all duration-300 hover:scale-105 hover:bg-hackathon-green hover:shadow-[0px_16px_40px_4px_#38B77C33] p-[1px] bg-gradient-to-b from-[#606064] via-[#60606442] to-[#9B9DC9BD] xl:min-w-[450px] w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div className="bg-black h-full w-full relative rounded-[23px] overflow-hidden p-6">
        <div className="flex items-center gap-2 mb-4">
          <Lightbulb className="h-5 w-5 text-hackathon-green" />
          <h3 className="text-2xl font-bold text-white">Project Ideas</h3>
        </div>
        
        <ul className="space-y-3">
          <li className="flex items-start gap-2">
            <Target className="h-4 w-4 mt-1 text-hackathon-orange" />
            <span className="text-gray-300">AI agents that can deploy & interact with smart contracts</span>
          </li>
          <li className="flex items-start gap-2">
            <Target className="h-4 w-4 mt-1 text-hackathon-green" />
            <span className="text-gray-300">Decentralized marketplace for AI services & models</span>
          </li>
          <li className="flex items-start gap-2">
            <Target className="h-4 w-4 mt-1 text-hackathon-purple" />
            <span className="text-gray-300">On-chain AI governance systems</span>
          </li>
          <li className="flex items-start gap-2">
            <Target className="h-4 w-4 mt-1 text-hackathon-red" />
            <span className="text-gray-300">Web3 identity verification through AI</span>
          </li>
          <li className="flex items-start gap-2">
            <Target className="h-4 w-4 mt-1 text-hackathon-orange" />
            <span className="text-gray-300">Autonomous agents for DeFi optimization</span>
          </li>
        </ul>
        
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

export default IdeasCard;
