
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
      
      <main className="relative z-10 px-4 md:px-8 lg:px-16 py-8 md:py-12 mx-auto w-full max-w-6xl">
        <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mx-auto">
          {/* Hero section - spans 2 columns on desktop */}
          <div className="md:col-span-2 lg:col-span-2">
            <HeroCard />
          </div>
          
          {/* Tracks - always single column */}
          <div className="h-full">
            <TracksCard />
          </div>
          
          {/* Prizes - single column */}
          <div className="h-full">
            <PrizesCard />
          </div>
          
          {/* Timeline - single column */}
          <div className="h-full">
            <TimelineCard />
          </div>
          
          {/* Team Size - single column */}
          <div className="h-full">
            <TeamSizeCard />
          </div>
          
          {/* Sponsors section - spans 2 columns on medium, 1 on large */}
          <div className="md:col-span-2 lg:col-span-1 h-full">
            <SponsorsCard />
          </div>
          
          {/* Ideas section - spans full width */}
          <div className="md:col-span-2 lg:col-span-3">
            <IdeasCard />
          </div>
          
          {/* Powered by section */}
          <div className="md:col-span-2 lg:col-span-3 mt-4 flex items-center text-sm text-gray-400 justify-center">
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
