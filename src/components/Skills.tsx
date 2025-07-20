
import React from 'react';
import { Code, Database, Globe, Layers } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Development",
      skills: ["Zoho Creator", "JavaScript", "HTML", "CSS", "API Integrations"],
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Database,
      title: "Database & Analytics",
      skills: ["SQL", "Zoho Analytics", "Data Migration", "Reporting"],
      color: "from-green-400 to-green-600"
    },
    {
      icon: Globe,
      title: "Web Technologies",
      skills: ["PHP", "MERN Stack", "RESTful APIs", "Web Integration"],
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: Layers,
      title: "Zoho Platform",
      skills: ["Deluge", "Zoho Flow", "Zoho Books", "Zoho CRM", "Zoho Desk"],
      color: "from-orange-400 to-orange-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Technical proficiency across multiple platforms and technologies
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div key={index} className="group text-center">
                  <div className={`w-20 h-20 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-orange-400 transition-colors">{category.title}</h3>
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="bg-gray-900/50 px-3 py-2 rounded-lg text-sm text-gray-300 border border-gray-700 hover:border-orange-500/50 hover:bg-gray-900/80 transition-all duration-300">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
