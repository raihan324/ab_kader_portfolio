
import React from 'react';
import { Settings, Zap, Link, MessageSquare, Code, Clock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Settings,
      title: "Zoho Development",
      description: "Customized development to streamline workflows and enhance productivity with modern solutions."
    },
    {
      icon: Zap,
      title: "Zoho Customization",
      description: "Adapting Zoho to fit specific business requirements and processes for maximum efficiency."
    },
    {
      icon: Link,
      title: "Zoho Integrations",
      description: "Integrating Zoho seamlessly with existing systems and third-party applications."
    },
    {
      icon: MessageSquare,
      title: "Zoho Consulting",
      description: "Strategic advice for maximizing Zoho's capabilities and driving business growth."
    },
    {
      icon: Code,
      title: "Custom App Building",
      description: "Creating targeted applications within Zoho to meet unique business needs and requirements."
    },
    {
      icon: Clock,
      title: "Flexible Engagement",
      description: "Hourly or project-based flexible engagement options to perfectly suit your business needs."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Services</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive Zoho solutions to transform your business operations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="group bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 hover:bg-gray-800/80 backdrop-blur-sm">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400/20 to-orange-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-8 h-8 text-orange-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-orange-400 transition-colors">{service.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
