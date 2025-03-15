
import React from 'react';
import { Award, Lightbulb, Code, Users, Target, Zap, Calendar, Gift } from 'lucide-react';
import RegisterButton from './RegisterButton';
import BackgroundEffect from './BackgroundEffect';
import BentoGrid from './BentoGrid';
import BentoCard from './BentoCard';
import DecryptedText from './DecryptedText';

const HeroSection: React.FC = () => {
  const formUrl = "https://forms.google.com"; // Replace with actual Google form URL

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black font-satoshi">
      <BackgroundEffect />
      
      {/* Content container */}
      <div className="container relative z-10 mx-auto px-6 py-16 max-w-7xl">
        {/* Main content */}
        <div className="max-w-3xl mb-16">
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
            <DecryptedText 
              text="Autonomous" 
              className="text-hackathon-orange"
              animateOn="view"
              speed={30}
              maxIterations={15}
            />
            {" "}
            <DecryptedText 
              text="Builders" 
              className="text-white"
              animateOn="view"
              speed={30}
              maxIterations={15}
              style={{ animationDelay: "600ms" }}
            />
            {" "}
            <DecryptedText 
              text="Hack" 
              className="text-hackathon-orange"
              animateOn="view"
              speed={30}
              maxIterations={15}
              style={{ animationDelay: "800ms" }}
            />
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
        </div>

        {/* Bento Grid */}
        <BentoGrid className="mt-16">
          {/* Tracks */}
          <BentoCard 
            title="Tracks" 
            icon={<Code className="h-5 w-5" />}
            hoverEffect="glow"
            size="medium"
          >
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-hackathon-orange"></span>
                <span>AI Agent Development</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-hackathon-green"></span>
                <span>Web3 Integration</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-hackathon-purple"></span>
                <span>Smart Contract Innovation</span>
              </li>
            </ul>
          </BentoCard>

          {/* Prizes */}
          <BentoCard 
            title="Prizes" 
            icon={<Award className="h-5 w-5" />}
            hoverEffect="scale"
            size="medium"
            className="bg-gradient-to-br from-black/70 to-hackathon-orange/10"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span>1st Place</span>
                <span className="font-semibold text-hackathon-orange">$5,000</span>
              </div>
              <div className="flex items-center justify-between">
                <span>2nd Place</span>
                <span className="font-semibold text-hackathon-green">$3,000</span>
              </div>
              <div className="flex items-center justify-between">
                <span>3rd Place</span>
                <span className="font-semibold text-hackathon-purple">$1,500</span>
              </div>
            </div>
          </BentoCard>

          {/* Timeline */}
          <BentoCard 
            title="Event Timeline" 
            icon={<Calendar className="h-5 w-5" />}
            hoverEffect="border"
            size="medium"
          >
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Applications Open</span>
                <span className="text-sm text-gray-400">Feb 22, 2025</span>
              </div>
              <div className="flex justify-between">
                <span>Applications Close</span>
                <span className="text-sm text-gray-400">Mar 22, 2025</span>
              </div>
              <div className="flex justify-between">
                <span>Hackathon</span>
                <span className="text-sm text-gray-400">Mar 22-23, 2025</span>
              </div>
            </div>
          </BentoCard>

          {/* Ideas */}
          <BentoCard 
            title="Project Ideas" 
            icon={<Lightbulb className="h-5 w-5" />}
            hoverEffect="glow"
            size="large"
            className="bg-gradient-to-br from-black/80 to-hackathon-purple/10"
          >
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Target className="h-4 w-4 mt-1 text-hackathon-orange" />
                <span>AI agents that can deploy & interact with smart contracts</span>
              </li>
              <li className="flex items-start gap-2">
                <Target className="h-4 w-4 mt-1 text-hackathon-green" />
                <span>Decentralized marketplace for AI services & models</span>
              </li>
              <li className="flex items-start gap-2">
                <Target className="h-4 w-4 mt-1 text-hackathon-purple" />
                <span>On-chain AI governance systems</span>
              </li>
              <li className="flex items-start gap-2">
                <Target className="h-4 w-4 mt-1 text-hackathon-red" />
                <span>Web3 identity verification through AI</span>
              </li>
              <li className="flex items-start gap-2">
                <Target className="h-4 w-4 mt-1 text-hackathon-orange" />
                <span>Autonomous agents for DeFi optimization</span>
              </li>
            </ul>
          </BentoCard>

          {/* Sponsors */}
          <BentoCard 
            title="Sponsors" 
            icon={<Gift className="h-5 w-5" />}
            hoverEffect="scale"
            size="medium"
          >
            <div className="flex items-center justify-around">
              <div className="p-2 bg-white/5 rounded-lg">Sponsor 1</div>
              <div className="p-2 bg-white/5 rounded-lg">Sponsor 2</div>
              <div className="p-2 bg-white/5 rounded-lg">Sponsor 3</div>
            </div>
          </BentoCard>

          {/* Team */}
          <BentoCard 
            title="Team Size" 
            icon={<Users className="h-5 w-5" />}
            hoverEffect="border"
            size="medium"
            className="bg-gradient-to-br from-black/70 to-hackathon-green/10"
          >
            <div className="text-center py-4">
              <div className="text-4xl font-bold text-hackathon-green">2-5</div>
              <p className="mt-2">members per team</p>
              <p className="mt-4 text-sm">
                Solo participants will be matched with teams at the event
              </p>
            </div>
          </BentoCard>
        </BentoGrid>

        {/* Powered by section */}
        <div 
          className="mt-16 flex items-center text-sm text-gray-400 opacity-0 animate-fade-in justify-center"
          style={{ animationDelay: "1000ms" }}
        >
          <span>Powered by</span>
          <span className="ml-2 font-medium text-white">UniDAO-NITK</span>
          <span className="mx-2">and</span>
          <span className="font-medium text-white">HackClub-NITK</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
