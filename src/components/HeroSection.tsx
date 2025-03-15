
import React from 'react';
import RegisterButton from './RegisterButton';

const HeroSection: React.FC = () => {
  const formUrl = "https://forms.google.com"; // Replace with actual Google form URL

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white">
      {/* Background decorative elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-hackathon-purple/5 blur-3xl" />
      <div className="absolute top-1/2 -left-24 w-96 h-96 rounded-full bg-hackathon-green/5 blur-3xl" />
      <div className="absolute -bottom-24 right-1/3 w-96 h-96 rounded-full bg-hackathon-orange/5 blur-3xl" />

      {/* Content container */}
      <div className="container relative mx-auto px-6 py-20 md:py-32 max-w-7xl">
        {/* Chip */}
        <div 
          className="mx-auto inline-flex items-center rounded-full border border-hackathon-purple/30 bg-hackathon-purple/5 px-4 py-1.5 mb-8 opacity-0 animate-fade-in"
          style={{ animationDelay: "200ms" }}
        >
          <span className="text-sm font-medium text-hackathon-purple">
            Online • Applications close on Mar 22, 2025
          </span>
        </div>

        {/* Main heading */}
        <h1 
          className="mx-auto max-w-4xl text-center text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 opacity-0 animate-fade-in"
          style={{ animationDelay: "400ms" }}
        >
          <span className="relative inline-block">
            <span className="relative">Autonomous</span>
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-hackathon-green rounded-full transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
          </span>{" "}
          <span className="relative inline-block">
            <span className="relative">Builders</span>
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-hackathon-purple rounded-full transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
          </span>{" "}
          <span className="relative inline-block">
            <span className="relative">Hack</span>
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-hackathon-red rounded-full transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
          </span>
        </h1>

        {/* Subheading */}
        <p 
          className="mx-auto mt-6 max-w-2xl text-center text-lg text-gray-600 opacity-0 animate-fade-in"
          style={{ animationDelay: "600ms" }}
        >
          Powered by UniDAO NITK
        </p>

        {/* Date chip */}
        <div 
          className="mx-auto mt-8 inline-flex items-center rounded-full bg-gray-100 px-6 py-2 opacity-0 animate-fade-in"
          style={{ animationDelay: "800ms" }}
        >
          <div className="flex items-center space-x-2">
            <span className="h-2.5 w-2.5 rounded-full bg-hackathon-green"></span>
            <span className="text-sm font-medium text-gray-900">Mar 22 - 23, 2025</span>
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
          className="mt-20 mx-auto max-w-3xl glass-morphism rounded-2xl p-8 opacity-0 animate-slide-up"
          style={{ animationDelay: "1200ms" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center">
              <div className="rounded-full bg-hackathon-orange/10 p-3 mb-4">
                <svg className="w-6 h-6 text-hackathon-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Build Autonomously</h3>
              <p className="mt-2 text-sm text-gray-600">Create groundbreaking autonomous solutions</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="rounded-full bg-hackathon-purple/10 p-3 mb-4">
                <svg className="w-6 h-6 text-hackathon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Collaborate</h3>
              <p className="mt-2 text-sm text-gray-600">Connect with like-minded innovators</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="rounded-full bg-hackathon-green/10 p-3 mb-4">
                <svg className="w-6 h-6 text-hackathon-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Win Prizes</h3>
              <p className="mt-2 text-sm text-gray-600">Compete for exclusive rewards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
