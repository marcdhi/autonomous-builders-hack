
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
      
      <main className="relative z-10 px-4 md:px-8 lg:px-16 2xl:px-[116px] py-16 mx-auto w-full max-w-7xl">
        <section className="w-full flex flex-col gap-7 mx-auto mb-12">
          <div className="w-full flex flex-col xl:flex-row gap-7 mx-auto">
            <HeroCard />
            <div className="flex flex-col md:flex-row w-full gap-7 font-satoshi">
              <TracksCard />
              <PrizesCard />
            </div>
          </div>
          <div className="w-full flex flex-col xl:flex-row gap-7 mx-auto">
            <SponsorsCard />
            <TimelineCard />
            <TeamSizeCard />
            <IdeasCard />
          </div>
          
          {/* Powered by section */}
          <div className="mt-8 flex items-center text-sm text-gray-400 opacity-0 animate-fade-in justify-center"
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
