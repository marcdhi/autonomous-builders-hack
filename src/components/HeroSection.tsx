
import React from 'react';
import RegisterButton from './RegisterButton';
import BackgroundEffect from './BackgroundEffect';

const HeroSection: React.FC = () => {
  const formUrl = "https://forms.google.com"; // Replace with actual Google form URL

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black font-satoshi">
      <BackgroundEffect />
      
      {/* Content container */}
      <div className="container relative z-10 mx-auto px-6 py-32 max-w-7xl flex flex-col h-full justify-start">
        {/* Main content */}
        <div className="max-w-3xl">
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
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white opacity-0 animate-fade-in"
            style={{ animationDelay: "400ms" }}
          >
            <span className="text-hackathon-orange">Autonomous</span>
            {" "}
            <span className="text-white">Builders</span>
            {" "}
            <span className="text-hackathon-orange">Hack</span>
          </h1>

          {/* Subheading */}
          <p 
            className="mt-6 max-w-xl text-lg md:text-xl text-gray-300 opacity-0 animate-fade-in"
            style={{ animationDelay: "600ms" }}
          >
            A toolkit for your agents to interact with Web3 • AI technologies
          </p>

          {/* CTA button */}
          <div 
            className="mt-8 flex opacity-0 animate-fade-in"
            style={{ animationDelay: "800ms" }}
          >
            <RegisterButton formUrl={formUrl} />
          </div>

          {/* Powered by section */}
          <div 
            className="mt-16 flex items-center text-sm text-gray-400 opacity-0 animate-fade-in"
            style={{ animationDelay: "1000ms" }}
          >
            <span>Powered by</span>
            <span className="ml-2 font-medium text-white">UniDAO-NITK</span>
            <span className="mx-2">and</span>
            <span className="font-medium text-white">HackClub-NITK</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
