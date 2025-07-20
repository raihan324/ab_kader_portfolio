
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Globe, MessageSquare, User, Linkedin, Facebook, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const templateParams = {
      from_name: formData.get('name'),
      from_email: formData.get('email'),
      message: formData.get('message'),
      to_email: 'akader@infitarit.com'
    };

    try {
      // EmailJS configuration - replace with your actual values after setup
      await emailjs.send(
        'service_zoho_smtp', // Your EmailJS service ID
        'template_contact', // Your EmailJS template ID
        templateParams,
        'your_public_key_here' // Your EmailJS public key
      );
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const contactInfo = [
    {
      icon: User,
      label: "Name",
      value: "Abdul Kader"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Dhaka, Bangladesh"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+8801733687284"
    },
    {
      icon: Mail,
      label: "Email",
      value: "akader@infitarit.com"
    },
    {
      icon: Globe,
      label: "Website",
      value: "www.infitarit.com"
    }
  ];

  const socialLinks = [
    {
      icon: Phone,
      label: "Phone",
      value: "+8801733687284",
      href: "tel:+8801733687284",
      color: "hover:bg-green-600"
    },
    {
      icon: MessageSquare,
      label: "Skype",
      value: "mdkaderjohn",
      href: "skype:mdkaderjohn?chat",
      color: "hover:bg-blue-600"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "itabdulkader",
      href: "https://linkedin.com/in/itabdulkader",
      color: "hover:bg-blue-700"
    },
    {
      icon: Facebook,
      label: "Facebook",
      value: "kaderjohn3",
      href: "https://facebook.com/kaderjohn3",
      color: "hover:bg-blue-800"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Contact Info</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your business with Zoho? Let's discuss your project
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-semibold mb-8">Get In Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="group flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">{info.label}</p>
                        <p className="text-white font-medium">{info.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-semibold mb-8">Connect With Me</h3>
              <div className="space-y-6">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="group flex items-center space-x-4 hover:text-orange-400 transition-all duration-300"
                    >
                      <div className={`w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${social.color} shadow-lg`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">{social.label}</p>
                        <p className="text-white font-medium group-hover:text-orange-400 transition-colors">{social.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold mb-6 text-center">Send a Quick Message</h3>
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                required
                disabled={isSubmitting}
                className="bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-colors disabled:opacity-50"
              />
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                required
                disabled={isSubmitting}
                className="bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-colors disabled:opacity-50"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                required
                disabled={isSubmitting}
                className="md:col-span-2 bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-colors resize-none disabled:opacity-50"
              ></textarea>
              <button
                type="submit"
                disabled={isSubmitting}
                className="md:col-span-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 font-semibold flex items-center justify-center gap-2 hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                <Send className="w-5 h-5" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
          
          <div className="mt-16 text-center border-t border-gray-800 pt-8">
            <p className="text-gray-400">
              © 2024 Abdul Kader. All rights reserved. | Zoho Expert & Consultant
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
