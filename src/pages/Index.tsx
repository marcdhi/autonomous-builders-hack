
import React from 'react';
import HeroCard from '@/components/HeroCard';
import TracksCard from '@/components/TracksCard';
import PrizesCard from '@/components/PrizesCard';
import SponsorsCard from '@/components/SponsorsCard';
import IdeasCard from '@/components/IdeasCard';
import TimelineCard from '@/components/TimelineCard';
import TeamSizeCard from '@/components/TeamSizeCard';
import BackgroundEffect from '@/components/BackgroundEffect';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col h-full bg-black overflow-hidden">
      <BackgroundEffect />
      
      <main className="relative z-10 px-4 md:px-8 lg:px-16 2xl:px-[116px] py-12 md:py-16 mx-auto w-full max-w-7xl">
        <section className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 mx-auto">
          {/* First row */}
          <div className="lg:col-span-8 lg:row-span-1">
            <HeroCard />
          </div>
          
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            <TracksCard />
            <PrizesCard />
          </div>
          
          {/* Second row */}
          <div className="lg:col-span-4 lg:row-span-1">
            <SponsorsCard />
          </div>
          <div className="lg:col-span-4 lg:row-span-1">
            <TimelineCard />
          </div>
          <div className="lg:col-span-4 lg:row-span-1">
            <TeamSizeCard />
          </div>
          
          {/* Third row */}
          <div className="lg:col-span-12 lg:row-span-1">
            <IdeasCard />
          </div>
          
          {/* Powered by section */}
          <div className="lg:col-span-12 mt-4 flex items-center text-sm text-gray-400 opacity-0 animate-fade-in justify-center"
            style={{ animationDelay: "1000ms" }}>
            <span>Powered by</span>
            <span className="ml-2 font-medium text-white">UniDAO-NITK</span>
            <span className="mx-2">and</span>
            <span className="font-medium text-white">HackClub-NITK</span>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
