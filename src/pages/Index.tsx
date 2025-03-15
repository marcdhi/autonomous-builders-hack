
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Zap, Bot } from 'lucide-react';
import RegisterButton from '@/components/RegisterButton';
import BackgroundEffect from '@/components/BackgroundEffect';
import { SplineSceneBasic } from '@/components/ui/spline-demo';

const Index = () => {
  const formUrl = "https://forms.google.com"; // Replace with actual form URL
  
  return (
    <div className="min-h-screen flex flex-col h-full bg-black overflow-hidden">
      <BackgroundEffect />
      
      <main className="relative z-10 px-4 md:px-8 lg:px-16 py-12 md:py-16 mx-auto w-full max-w-6xl flex flex-col items-center justify-center min-h-screen">
        {/* Status chip */}
        <motion.div 
          className="inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-black/70 backdrop-blur-sm px-4 py-1.5 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="size-2 rounded-full bg-hackathon-green animate-pulse"></span>
          <span className="text-sm font-medium text-white">Applications Open</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1 
          className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-50 to-neutral-300">Autonomous</span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-400">Builders</span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-300 to-neutral-500">Hack</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p 
          className="mt-6 max-w-xl text-lg md:text-xl text-neutral-400 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Bring your AI to life with blockchain technology. Create immersive
          autonomous agents that interact with Web3.
        </motion.p>

        {/* 3D Scene Component with fallback */}
        <motion.div
          className="mt-12 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <SplineSceneBasic />
        </motion.div>

        {/* Features section */}
        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex flex-col items-center text-center p-6 rounded-lg bg-black/60 border border-neutral-800 backdrop-blur-sm">
            <Code className="h-8 w-8 text-neutral-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Web3 Tech</h3>
            <p className="text-neutral-500 text-sm">Build with cutting-edge blockchain tools</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 rounded-lg bg-black/60 border border-neutral-800 backdrop-blur-sm">
            <Bot className="h-8 w-8 text-neutral-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">AI Agents</h3>
            <p className="text-neutral-500 text-sm">Create autonomous systems that think and act</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 rounded-lg bg-black/60 border border-neutral-800 backdrop-blur-sm">
            <Zap className="h-8 w-8 text-neutral-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">₹35,000 Prize</h3>
            <p className="text-neutral-500 text-sm">Win across multiple tracks and categories</p>
          </div>
        </motion.div>

        {/* CTA button */}
        <motion.div 
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <RegisterButton formUrl={formUrl} className="text-lg px-10 py-4" />
        </motion.div>
        
        {/* Timeline */}
        <motion.div 
          className="mt-16 w-full max-w-2xl border border-neutral-800 rounded-xl p-6 bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <h3 className="text-xl font-semibold text-center text-white mb-4">Timeline</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-neutral-200 font-medium">Mar 1</p>
              <p className="text-sm text-neutral-500">Applications Open</p>
            </div>
            <div className="text-center">
              <p className="text-neutral-200 font-medium">Mar 15</p>
              <p className="text-sm text-neutral-500">Hacking Begins</p>
            </div>
            <div className="text-center">
              <p className="text-neutral-200 font-medium">Mar 31</p>
              <p className="text-sm text-neutral-500">Final Submissions</p>
            </div>
          </div>
        </motion.div>
        
        {/* Team size */}
        <motion.div 
          className="mt-6 flex items-center justify-center gap-2 text-neutral-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <span className="text-sm">Team Size:</span>
          <span className="text-sm font-medium text-neutral-300">1-4 participants</span>
        </motion.div>

        {/* Footer */}
        <motion.div 
          className="mt-12 text-sm text-neutral-600 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          <div className="flex items-center justify-center gap-2">
            <span>Powered by</span>
            <span className="font-medium text-neutral-400">UniDAO-NITK</span>
            <span>and</span>
            <span className="font-medium text-neutral-400">HackClub-NITK</span>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Index;
