
import React from 'react';
import { ArrowDown, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black pt-16">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="relative mb-8">
            <img
              src="/lovable-uploads/99b1fd0c-c0ae-4ebf-81cd-118020eb01d1.png"
              alt="Abdul Kader"
              className="w-48 h-48 rounded-full mx-auto object-cover shadow-2xl border-4 border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-500/20 to-transparent"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            ABDUL KADER
          </h1>
          
          <h2 className="text-2xl md:text-4xl text-orange-400 font-semibold mb-6 tracking-wide">
            ZOHO EXPERT & CONSULTANT
          </h2>
          
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            I am a Zoho expert specializing in Zoho development, customization, integrations, 
            consulting, and custom app building since 2015. My expertise lies in streamlining 
            workflows, adapting Zoho to unique needs, and system integrations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#contact"
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-orange-500/25 hover:scale-105"
            >
              Get In Touch
            </a>
            <a
              href="#services"
              className="border border-gray-600 text-gray-300 px-8 py-3 rounded-lg hover:bg-gray-800 hover:border-gray-500 transition-all duration-300 font-semibold hover:scale-105"
            >
              View Services
            </a>
            <button className="border border-gray-600 text-gray-300 px-8 py-3 rounded-lg hover:bg-gray-800 hover:border-gray-500 transition-all duration-300 font-semibold hover:scale-105 flex items-center justify-center gap-2">
              <Download className="w-5 h-5" />
              Download CV
            </button>
          </div>
          
          <div className="mt-12">
            <a href="#about" className="inline-block animate-bounce">
              <ArrowDown className="w-6 h-6 text-gray-400 hover:text-orange-400 transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
