
import React from 'react';
import { CheckCircle } from 'lucide-react';

const WorkAreas = () => {
  const workAreas = [
    "CRM Solutions → Enterprise CRM",
    "Small Business CRM",
    "Customer Experience Suite", 
    "Services CRM",
    "Financial Services CRM",
    "Life Sciences CRM",
    "Retail CRM",
    "Real Estate CRM",
    "Agency CRM",
    "Insurance CRM",
    "Startup & Non-Profit CRM",
    "CRM for Sales Reps",
    "CRM for Sales Leaders",
    "Industry-Specific Use Cases"
  ];

  return (
    <section id="work-areas" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Work Areas</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized expertise across diverse business sectors and industries
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workAreas.map((area, index) => (
              <div key={index} className="group flex items-start space-x-3 bg-gray-800/50 p-4 rounded-xl border border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                <CheckCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-gray-300 group-hover:text-white transition-colors">{area}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-gray-300 font-medium">
              & for so many other business types
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkAreas;
