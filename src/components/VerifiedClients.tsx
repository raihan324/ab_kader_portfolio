
import React from 'react';
import { CheckCircle, Globe, ExternalLink } from 'lucide-react';

const VerifiedClients = () => {
  const clients = [
    {
      name: "Guard One SRL",
      country: "Romania",
      industry: "Security Services",
      headquarters: "Bucharest",
      website: "guardone.ro",
      details: "Established in 1996 with 500+ employees as of 2022."
    },
    {
      name: "Leadstalk Digital Ltd",
      country: "Mauritius",
      industry: "Conversion Rate Optimization (CRO) & CRM Services",
      headquarters: "Beau Bassin, Mauritius",
      website: "leadstalk-digital.com",
      details: "Founded in 2017; specializes in data-driven lead generation."
    },
    {
      name: "Southern Payroll & Bookkeeping (SPB)",
      country: "USA",
      industry: "Payroll & Bookkeeping Services",
      headquarters: "Chattanooga, Tennessee",
      website: "southernpb.com",
      details: "Offers custom payroll and HR solutions; partners with Gusto"
    },
    {
      name: "Delivio Ltd",
      country: "Australia",
      industry: "Business Consulting & AI Integration",
      headquarters: "Australia",
      website: "delivio.com.au",
      details: "Aligns business strategy with AI for operational efficiency."
    },
    {
      name: "Campus Component",
      country: "India",
      industry: "Electronic Components Distribution",
      headquarters: "Pune, Maharashtra",
      website: "campuscomponent.com",
      details: "Distributor for educational and industrial components."
    },
    {
      name: "Epoch Tech Solutions LLC",
      country: "USA",
      industry: "Technology Solutions",
      website: "epoch-techsolutions.com",
      details: "U.S.-based provider of IT and business tech solutions."
    },
    {
      name: "ConsumerExp",
      country: "USA",
      industry: "Market Research & Consumer Experience",
      website: "consumerexp.com",
      details: "Specializes in market research and customer insights."
    },
    {
      name: "Extreme Watch",
      country: "China",
      industry: "Luxury Watches",
      website: "extreme.watch",
      details: "Offers a luxury timepiece collection in China."
    },
    {
      name: "Swiss Board Forum",
      country: "Switzerland",
      industry: "Corporate Governance",
      website: "swissboardforum.ch",
      details: "Promotes board leadership and governance practices."
    },
    {
      name: "Enable LLC",
      country: "USA",
      industry: "Business Consulting",
      website: "enable.llc",
      details: "U.S.-based consulting firm supporting business strategy."
    },
    {
      name: "The Charlotte Media Agency Ltd (Rewire)",
      country: "UK",
      industry: "Media & Marketing",
      details: "UK-based agency, now rebranded as Rewire."
    },
    {
      name: "Lifestyle Home",
      country: "South Africa",
      industry: "Home Furnishing & Interior Design",
      website: "lifestylehome.co.za",
      details: "Supplies modern furniture and interior décor solutions."
    },
    {
      name: "Comtec Wash Systems, Inc.",
      country: "USA",
      industry: "Car Wash Systems & Equipment",
      headquarters: "Arvada, Colorado",
      website: "comtecwash.com",
      details: "Family-owned car wash development & equipment provider."
    },
    {
      name: "Benny Goren Ltd.",
      country: "Israel",
      industry: "Business Consulting",
      website: "bennygoren.co.il",
      details: "Israeli consultancy offering strategic business services."
    },
    {
      name: "Kendell & Associates, LLC",
      country: "USA",
      industry: "Venture Banking & Investment",
      headquarters: "Huntsville, Utah",
      website: "kendellassociates.com",
      details: "Specializes in investment capital and advisory services."
    },
    {
      name: "Can Do Payments Ltd",
      country: "UK",
      industry: "Payment Processing",
      website: "candopayments.com",
      details: "Card payment introducer for Elavon Merchant Services."
    },
    {
      name: "Sub Zero Nitrogen Ice Cream",
      country: "USA",
      industry: "Ice Cream Franchise",
      website: "subzeroicecream.com",
      details: "Offers nitrogen-based, made-to-order ice cream."
    },
    {
      name: "Impact Trash Solutions",
      country: "USA",
      industry: "Waste Management",
      website: "impacttrash.com",
      details: "National leader in doorstep trash and recycling services."
    },
    {
      name: "Web Summit",
      country: "Portugal",
      industry: "Technology Conference",
      website: "websummit.com",
      details: "Annual global tech conference held in Lisbon."
    },
    {
      name: "UMass iCons Program",
      country: "USA",
      industry: "Education",
      website: "icons.cns.umass.edu",
      details: "STEM innovation certificate program at UMass."
    },
    {
      name: "Enzo Engineering Solution",
      country: "Tanzania",
      industry: "Engineering & Real Estate",
      details: "Offers civil, mechanical, and electrical engineering."
    },
    {
      name: "iMobile Store Pty Ltd",
      country: "Australia",
      industry: "Mobile Phone Retail",
      website: "imobilestore.com.au",
      details: "Retailer of mobile phones and accessories in Victoria."
    },
    {
      name: "Brotech Digital Graphics Co., Ltd",
      country: "China",
      industry: "Printing & Packaging Machinery",
      website: "bro-tech.net",
      details: "Solutions for label converting and packaging industries."
    },
    {
      name: "Casco Bay Hemp",
      country: "USA",
      industry: "CBD Products",
      website: "cascobayhemp.com",
      details: "Produces organically sourced CBD products."
    },
    {
      name: "Corcapa 1031 Advisors",
      country: "USA",
      industry: "Real Estate Investment",
      website: "corcapa.com",
      details: "Specializes in 1031 exchange real estate solutions."
    },
    {
      name: "Multi Concept AG",
      country: "Switzerland",
      industry: "Business Consulting",
      details: "Offers diversified consulting services for Swiss and international clients."
    },
    {
      name: "Macad'or AG",
      country: "Switzerland",
      industry: "Food & Beverage",
      details: "Specializes in the production and distribution of gourmet food products."
    },
    {
      name: "Informatix Pty Ltd",
      country: "Australia",
      industry: "Software Development & IT Solutions",
      website: "informatics.com.au",
      details: "Provides data analytics, business intelligence, and IT services."
    },
    {
      name: "LULU Copenhagen",
      country: "Denmark",
      industry: "Fashion & Jewelry",
      website: "lulucopenhagen.com",
      details: "A Danish jewelry brand known for playful and elegant designs."
    },
    {
      name: "WellQor Behavioral Health",
      country: "USA",
      industry: "Mental Health Services",
      website: "wellqor.com",
      details: "Offers behavioral health services with a focus on older adults."
    },
    {
      name: "Broadband Planning",
      country: "USA",
      industry: "Telecommunications",
      website: "broadbandplanning.com",
      details: "Specializes in broadband network planning and implementation services."
    },
    {
      name: "Diverse Product",
      country: "UK",
      industry: "Retail & Consumer Goods",
      details: "Distributes a range of consumer products across multiple categories."
    },
    {
      name: "Purple Space Digital Limited",
      country: "UK",
      industry: "Digital Marketing",
      website: "purplespacedigital.com",
      details: "Provides digital marketing, SEO, and branding services."
    },
    {
      name: "Boosted CRM",
      country: "USA",
      industry: "Zoho Consulting & CRM Services",
      website: "boostedcrm.com",
      details: "A Zoho Premium Partner delivering custom CRM and automation solutions."
    },
    {
      name: "SkyPod Immigration",
      country: "Canada",
      industry: "Immigration Consulting",
      website: "skypodimmigration.com",
      details: "Provides immigration and visa consultancy for clients worldwide."
    },
    {
      name: "Terra American Bistro",
      country: "USA",
      industry: "Restaurant & Food Service",
      website: "terrasd.com",
      details: "Terra American Bistro emphasizes local, sustainable, and organic ingredients."
    }
  ];

  const getCountryFlag = (country) => {
    const flags = {
      'Romania': '🇷🇴',
      'Mauritius': '🇲🇺',
      'USA': '🇺🇸',
      'Australia': '🇦🇺',
      'India': '🇮🇳',
      'China': '🇨🇳',
      'Switzerland': '🇨🇭',
      'UK': '🇬🇧',
      'South Africa': '🇿🇦',
      'Israel': '🇮🇱',
      'Portugal': '🇵🇹',
      'Tanzania': '🇹🇿',
      'Denmark': '🇩🇰',
      'Canada': '🇨🇦'
    };
    return flags[country] || '🌍';
  };

  return (
    <section id="verified-clients" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Verified Client Companies</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Trusted by companies worldwide across diverse industries. Here are the verified companies 
              we have provided Zoho services for and are still providing services to most of them.
            </p>
            <div className="flex items-center justify-center gap-2 text-orange-400 font-semibold">
              <Globe className="w-5 h-5" />
              <span>Global Reach • Diverse Industries • Proven Results</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clients.map((client, index) => (
              <div key={index} className="group bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-orange-400 mr-2 flex-shrink-0" />
                    <span className="text-2xl mr-2">{getCountryFlag(client.country)}</span>
                    <span className="text-sm text-gray-400">{client.country}</span>
                  </div>
                  {client.website && (
                    <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-orange-400 transition-colors" />
                  )}
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">
                  {client.name}
                </h3>
                
                <div className="mb-3">
                  <span className="inline-block bg-orange-400/20 text-orange-400 px-3 py-1 rounded-full text-sm font-medium">
                    {client.industry}
                  </span>
                </div>
                
                {client.headquarters && (
                  <p className="text-sm text-gray-400 mb-2">
                    <strong>HQ:</strong> {client.headquarters}
                  </p>
                )}
                
                {client.website && (
                  <p className="text-sm text-gray-400 mb-3">
                    <strong>Website:</strong> {client.website}
                  </p>
                )}
                
                <p className="text-gray-300 text-sm leading-relaxed">
                  {client.details}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-gray-300 font-medium">
              & many more businesses across the globe
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerifiedClients;
