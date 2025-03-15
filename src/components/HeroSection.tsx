
import React from 'react';
import RegisterButton from './RegisterButton';
import BackgroundEffect from './BackgroundEffect';

const HeroSection: React.FC = () => {
  const formUrl = "https://forms.google.com"; // Replace with actual Google form URL

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black font-satoshi">
      <BackgroundEffect />
      
      {/* Content container */}
      <div className="container relative z-10 mx-auto px-6 py-20 md:py-32 max-w-7xl">
        {/* Status chip */}
        <div 
          className="mx-auto inline-flex items-center gap-2 rounded-full border border-hackathon-purple/30 bg-black/70 backdrop-blur-sm px-4 py-1.5 mb-8 opacity-0 animate-fade-in"
          style={{ animationDelay: "200ms" }}
        >
          <span className="size-2 rounded-full bg-hackathon-green animate-pulse"></span>
          <span className="text-sm font-medium text-white">
            Online • Applications close on Mar 22, 2025
          </span>
        </div>

        {/* Main heading */}
        <h1 
          className="mx-auto max-w-4xl text-center text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white opacity-0 animate-fade-in"
          style={{ animationDelay: "400ms" }}
        >
          <span className="bg-gradient-to-r from-hackathon-green via-hackathon-purple to-hackathon-orange bg-clip-text text-transparent">Autonomous</span>
          {" "}
          <span className="bg-gradient-to-r from-hackathon-purple via-hackathon-orange to-hackathon-green bg-clip-text text-transparent">Builders</span>
          {" "}
          <span className="bg-gradient-to-r from-hackathon-orange via-hackathon-green to-hackathon-purple bg-clip-text text-transparent">Hack</span>
        </h1>

        {/* Subheading */}
        <p 
          className="mx-auto mt-6 max-w-xl text-center text-lg md:text-xl text-gray-400 opacity-0 animate-fade-in"
          style={{ animationDelay: "600ms" }}
        >
          A <span className="text-hackathon-orange font-medium">Web3 × AI</span> Hackathon Powered by{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-hackathon-purple to-hackathon-green font-medium">UniDAO NITK</span>
        </p>

        {/* Date chip */}
        <div 
          className="mx-auto mt-8 inline-flex items-center rounded-full bg-white/5 backdrop-blur-sm border border-white/10 px-6 py-2 opacity-0 animate-fade-in"
          style={{ animationDelay: "800ms" }}
        >
          <div className="flex items-center space-x-2">
            <span className="size-2.5 rounded-full bg-hackathon-green animate-pulse"></span>
            <span className="text-sm font-medium text-white">Mar 22 - 23, 2025</span>
          </div>
        </div>

        {/* CTA button */}
        <div 
          className="mt-12 flex justify-center opacity-0 animate-fade-in"
          style={{ animationDelay: "1000ms" }}
        >
          <RegisterButton formUrl={formUrl} />
        </div>

        {/* Glass card with feature highlights */}
        <div 
          className="mt-20 mx-auto max-w-3xl bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 opacity-0 animate-slide-up shadow-[0_0_25px_rgba(136,58,226,0.15)]"
          style={{ animationDelay: "1200ms" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center">
              <div className="rounded-full bg-hackathon-orange/20 p-4 mb-4 bg-blend-overlay">
                <svg className="w-6 h-6 text-hackathon-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">Build Autonomously</h3>
              <p className="mt-2 text-sm text-gray-400">Create groundbreaking autonomous solutions</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="rounded-full bg-hackathon-purple/20 p-4 mb-4">
                <svg className="w-6 h-6 text-hackathon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">Collaborate</h3>
              <p className="mt-2 text-sm text-gray-400">Connect with like-minded innovators</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="rounded-full bg-hackathon-green/20 p-4 mb-4">
                <svg className="w-6 h-6 text-hackathon-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">Win Prizes</h3>
              <p className="mt-2 text-sm text-gray-400">Compete for exclusive rewards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
