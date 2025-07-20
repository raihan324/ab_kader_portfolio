
import React from 'react';
import { CheckCircle, Award, Users, Clock, Star, Globe } from 'lucide-react';

const About = () => {
  const highlights = [
    "10+ years of Zoho expertise since 2015",
    "Zoho Official Partner",
    "Strategic consulting for business growth",
    "Custom application development",
    "System integration specialist",
    "Cost-effective, high-quality solutions"
  ];

  const stats = [
    { icon: Award, value: "10+", label: "Years Experience" },
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: CheckCircle, value: "1500+", label: "Projects Completed" },
    { icon: Clock, value: "24/7", label: "Support Available" }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transforming businesses through innovative Zoho solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="flex items-center mb-4">
                <Star className="w-6 h-6 text-orange-400 mr-2" />
                <span className="text-orange-400 font-semibold text-lg">Zoho Official Partner</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Zoho Expert & Business Consultant
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I provide strategic consulting to help businesses maximize Zoho's potential and 
                build custom applications tailored to specific requirements. With in-depth knowledge 
                of Zoho CRM, Books, Inventory, Billing, Desk, Analytics, Flow, and Creator.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I deliver cost-effective, high-quality solutions that enhance automation, efficiency, 
                and business growth across various industries.
              </p>
              
              <div className="space-y-3">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center group">
                    <CheckCircle className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-300 group-hover:text-white transition-colors">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-700 backdrop-blur-sm">
              <h4 className="text-xl font-semibold text-white mb-6">Quick Facts</h4>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-400">Location:</span>
                  <span className="text-gray-300">Dhaka, Bangladesh</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-400">Experience:</span>
                  <span className="text-gray-300">10+ Years in Zoho</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-400">Specialization:</span>
                  <span className="text-gray-300">Zoho Development</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-400">Engagement:</span>
                  <span className="text-gray-300">Hourly/Project-based</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-400">Partnership:</span>
                  <span className="text-orange-400 font-semibold">Zoho Official Partner</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center p-6 bg-gray-900/50 rounded-xl border border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:scale-105">
                  <IconComponent className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
