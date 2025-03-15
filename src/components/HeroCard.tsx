
import React from 'react';
import { motion } from 'framer-motion';
import DecryptedText from './DecryptedText';
import RegisterButton from './RegisterButton';

const HeroCard: React.FC = () => {
  const formUrl = "https://forms.google.com"; // Replace with actual form URL
  
  return (
    <motion.div 
      className="rounded-3xl transform-gpu transition-all duration-300 hover:scale-105 hover:shadow-[0px_16px_40px_4px_#FF7D3B33] p-[1px] xl:min-w-[663px] 2xl:min-w-[854px] bg-gradient-to-b h-[300px] md:h-[412px] overflow-hidden from-[#606064] via-[#60606442] to-[#9B9DC9BD] w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="h-full w-full relative rounded-[23px] overflow-hidden bg-black">
        <div className="relative z-20 px-8 flex flex-col py-4 md:py-[65px] h-full">
          {/* Status chip */}
          <div 
            className="inline-flex items-center gap-2 rounded-full border border-hackathon-orange/30 bg-black/70 backdrop-blur-sm px-4 py-1.5 mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "200ms" }}
          >
            <span className="size-2 rounded-full bg-hackathon-green animate-pulse"></span>
            <span className="text-sm font-medium text-white">
              Online • Applications close on Mar 22, 2025
            </span>
          </div>

          {/* Main heading */}
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-[10px] font-satoshi opacity-0 animate-fade-in"
            style={{ animationDelay: "400ms" }}
          >
            <DecryptedText 
              text="Autonomous" 
              className="text-hackathon-orange"
              animateOn="view"
              speed={30}
              maxIterations={15}
              style={{ animationDelay: "600ms" }}
            />
            {" "}
            <DecryptedText 
              text="Builders" 
              className="text-white"
              animateOn="view"
              speed={30}
              maxIterations={15}
              style={{ animationDelay: "800ms" }}
            />
            {" "}
            <DecryptedText 
              text="Hack" 
              className="text-hackathon-orange"
              animateOn="view"
              speed={30}
              maxIterations={15}
              style={{ animationDelay: "1000ms" }}
            />
          </h1>

          {/* Subheading */}
          <p 
            className="text-base md:text-xl font-normal mb-[44px] text-gray-300 opacity-0 animate-fade-in"
            style={{ animationDelay: "600ms" }}
          >
            A toolkit for your agents to interact with Web3 • AI technologies
          </p>

          {/* CTA button */}
          <div 
            className="mt-2 flex opacity-0 animate-fade-in"
            style={{ animationDelay: "800ms" }}
          >
            <RegisterButton formUrl={formUrl} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroCard;
