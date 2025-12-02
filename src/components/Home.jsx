import React from 'react';
import DarkVeil from './DarkVeil';

const Home = () => {
  return (
    <section id="home" className="min-h-screen w-full flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <DarkVeil 
          hueShift={180}
          noiseIntensity={0.05}
          scanlineIntensity={0.1}
          speed={0.3}
          scanlineFrequency={0.5}
          warpAmount={0.3}
          resolutionScale={0.8}
        />
      </div>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-20">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
          Hi, I'm <span className="text-cyan-400">Dita</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-2xl mx-auto drop-shadow-md">
          A passionate Frontend Developer building beautiful and functional web experiences.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#project"
            className="px-8 py-3 bg-cyan-500 text-white rounded-full font-semibold hover:bg-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 shadow-lg"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
