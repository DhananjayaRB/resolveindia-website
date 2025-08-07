import React from 'react';
import { FaHistory, FaEye, FaBullseye, FaAward } from 'react-icons/fa';

export const metadata = {
  title: "About Us - ResolveBiz Services and Apps Pvt Ltd",
  description: "Learn about ResolveBiz, a leading provider of business process management solutions. Discover our mission, vision, team, and commitment to empowering SMEs and enterprises with innovative technology solutions.",
  keywords: ["about ResolveBiz", "business process management", "SME solutions", "enterprise software", "payroll services", "accounting services", "team", "mission", "vision"],
  openGraph: {
    title: "About Us - ResolveBiz Services and Apps Pvt Ltd",
    description: "Learn about ResolveBiz, a leading provider of business process management solutions for SMEs and enterprises.",
    url: 'https://resolveindia.com/about-us',
    siteName: 'ResolveBiz',
    images: [
      {
        url: '/assets/landingPageImage/logo.png',
        width: 1200,
        height: 630,
        alt: 'ResolveBiz About Us',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "About Us - ResolveBiz Services and Apps Pvt Ltd",
    description: "Learn about ResolveBiz, a leading provider of business process management solutions.",
    images: ['/assets/landingPageImage/logo.png'],
  },
  alternates: {
    canonical: '/about-us',
  },
};

const teamData = [
  {
    name: "Mr. Sudev Rao",
    position: "CEO",
    description: "A Chartered Accountant from The Institute of Chartered Accountants with diverse experience from development banking, Investment banking, assisting MNC's set up subsidiaries in India, offshore accounting to small business in US, consulting and carrying out Management and quality audits, served as an outsourced CFO and as an independent director on the Boards of companies.",
    expertise: ["Chartered Accountant", "Development Banking", "Investment Banking", "Governing Body Member of BITES"]
  },
  {
    name: "Dr. Sheela Rao",
    position: "COO",
    description: "Holds a PhD from The Indian Institute of Science. She guides and manages the technology and application development for Resolve's services. Application development, customisation on the Tally platform and integrating the same with other technologies is her expertise.",
    expertise: ["PhD from IISc", "Technology Development", "Tally Platform", "Application Integration"]
  }
];

const milestones = [
  {
    year: "2019",
    title: "Company Founded",
    description: "ResolveBiz Services and Apps Pvt Ltd was established with a vision to revolutionize business process management."
  },
  {
    year: "2020",
    title: "First Major Client",
    description: "Successfully onboarded our first enterprise client, marking the beginning of our growth journey."
  },
  {
    year: "2021",
    title: "Technology Platform Launch",
    description: "Launched our comprehensive technology platform for payroll and business process management."
  },
  {
    year: "2022",
    title: "Expansion & Growth",
    description: "Expanded services to multiple cities and achieved significant client base growth."
  },
  {
    year: "2023",
    title: "Innovation Milestone",
    description: "Introduced AI-powered solutions and advanced analytics capabilities to our platform."
  },
  {
    year: "2024",
    title: "Market Leadership",
    description: "Established as a leading provider of business process solutions with nationwide presence."
  }
];

export default function AboutUsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About ResolveBiz",
    "description": "Learn about ResolveBiz, a leading provider of business process management solutions for SMEs and enterprises.",
    "url": "https://resolveindia.com/about-us",
    "mainEntity": {
      "@type": "Organization",
      "name": "ResolveBiz Services and Apps Pvt Ltd",
      "url": "https://resolveindia.com",
      "logo": "https://resolveindia.com/assets/landingPageImage/logo.png",
      "description": "Comprehensive business process management solutions for SMEs and enterprises",
      "foundingDate": "2019",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "535, 12th Cross, 5th Main Road, RMV Extension, HIG Dollars Colony",
        "addressLocality": "Bangalore",
        "postalCode": "560094",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9844810424",
        "contactType": "customer service",
        "email": "sales@resolveindia.com"
      },
      "employee": [
        {
          "@type": "Person",
          "name": "Mr. Sudev Rao",
          "jobTitle": "CEO",
          "description": "Chartered Accountant with diverse experience in development banking, investment banking, and business consulting."
        },
        {
          "@type": "Person",
          "name": "Dr. Sheela Rao",
          "jobTitle": "COO",
          "description": "PhD from IISc with expertise in technology development and Tally platform integration."
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gray-50">
        
        {/* Introduction Section */}
        <section className="bg-gradient-to-r from-[rgb(2,126,197)] to-[rgb(2,126,197)]/90 text-white py-20" aria-labelledby="introduction-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="text-center transform transition-all duration-700 hover:scale-105 animate-fade-in">
              <h1 id="introduction-heading" className="text-3xl md:text-4xl font-bold mb-6">
                About ResolveBiz
              </h1>
              <p className="text-lg md:text-xl opacity-90 max-w-4xl mx-auto">
                Our company and team has an in depth experience in the domain and have worked with SME&apos;s and appreciate their difficulties and wish to offer products and services that are designed specifically to meet their needs.
              </p>
            </header>
          </div>
        </section>

        {/* History Section */}
        <section className="py-16" aria-labelledby="history-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="text-center mb-12 animate-fade-in">
              <h2 id="history-heading" className="text-2xl font-bold text-gray-800 mb-4">
                Our History
              </h2>
              <p className="text-base text-gray-600 max-w-3xl mx-auto">
                From humble beginnings to market leadership, our journey has been defined by innovation, 
                dedication, and unwavering commitment to client success.
              </p>
            </header>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <article className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-slide-in-left">
                <h3 className="text-xl font-bold text-gray-800 mb-6">
                  Our Story
                </h3>
                <p className="text-base text-gray-600 leading-relaxed mb-6">
                  Our products are highly configurable to suit existing practices rather than attempting the business to force fit any notion of best practice. The software is based on a Mobile first paradigm considering the widespread adoption of smartphones.
                </p>
                <p className="text-base text-gray-600 leading-relaxed mb-6">
                  The customer comes first and can decide to take only ONE product and pay only for that or with the Single Sign On feature can incrementally add more products as is required by him as and when he needs the same. This way the price function ratio is fully optimised.
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  In any case the prices are set at highly affordable rates so that cost is not an inhibitor for customer adoption and value is.
                </p>
              </article>
              <aside className="relative">
                <div className="bg-[rgb(2,126,197)]/10 rounded-2xl p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-xl animate-slide-in-right">
                  <FaHistory className="text-6xl text-[rgb(2,126,197)] mb-6 animate-bounce" aria-hidden="true" />
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Our Journey</h3>
                  <p className="text-sm text-gray-600">
                    From humble beginnings to market leadership, our journey has been defined by innovation, 
                    dedication, and unwavering commitment to client success.
                  </p>
                </div>
              </aside>
            </div>
            
            {/* Timeline */}
            <div className="mt-16">
              <div className="relative">
                {/* Timeline Line - Visible on all devices */}
                <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-[rgb(2,126,197)]/30 animate-pulse" aria-hidden="true"></div>
                
                <div className="space-y-8 md:space-y-12">
                  {milestones.map((milestone, index) => (
                    <article key={index} className="relative transform transition-all duration-500 hover:scale-105 animate-slide-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                      {/* Mobile Layout - Stacked with line */}
                      <div className="md:hidden">
                        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 relative">
                          <time className="text-xl font-bold text-[rgb(2,126,197)] mb-2 block">
                            {milestone.year}
                          </time>
                          <h4 className="text-lg font-bold text-gray-800 mb-2">
                            {milestone.title}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                      
                      {/* Desktop Layout - Alternating */}
                      <div className={`hidden md:flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                        <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                            <time className="text-xl font-bold text-[rgb(2,126,197)] mb-2">
                              {milestone.year}
                            </time>
                            <h4 className="text-lg font-bold text-gray-800 mb-2">
                              {milestone.title}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {milestone.description}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Timeline Dot - Visible on all devices */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[rgb(2,126,197)] rounded-full border-4 border-white shadow-lg animate-pulse" aria-hidden="true"></div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className="py-16 bg-white" aria-labelledby="vision-mission-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="text-center mb-12 animate-fade-in">
              <h2 id="vision-mission-heading" className="text-2xl font-bold text-gray-800 mb-4">
                Vision & Mission
              </h2>
              <p className="text-base text-gray-600 max-w-3xl mx-auto">
                Our guiding principles that drive everything we do
              </p>
            </header>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Vision */}
              <article className="bg-gradient-to-br from-[rgb(2,126,197)]/5 to-[rgb(2,126,197)]/10 rounded-xl p-8 border border-[rgb(2,126,197)]/20 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-slide-in-left">
                <div className="flex items-center mb-6">
                  <FaEye className="text-4xl text-[rgb(2,126,197)] mr-4 animate-pulse" aria-hidden="true" />
                  <h3 className="text-xl font-bold text-gray-800">Our Vision</h3>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  To be the leading provider of innovative business solutions that empower organizations 
                  to achieve operational excellence and sustainable growth in the digital age.
                </p>
              </article>

              {/* Mission */}
              <article className="bg-gradient-to-br from-[rgb(2,126,197)]/5 to-[rgb(2,126,197)]/10 rounded-xl p-8 border border-[rgb(2,126,197)]/20 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-slide-in-right">
                <div className="flex items-center mb-6">
                  <FaBullseye className="text-4xl text-[rgb(2,126,197)] mr-4 animate-pulse" aria-hidden="true" />
                  <h3 className="text-xl font-bold text-gray-800">Our Mission</h3>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  To deliver cutting-edge technology solutions and exceptional service that streamline 
                  business processes, ensure compliance, and drive measurable value for our clients.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16" aria-labelledby="team-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="text-center mb-12 animate-fade-in">
              <h2 id="team-heading" className="text-2xl font-bold text-gray-800 mb-4">
                Meet Our Leadership Team
              </h2>
              <p className="text-base text-gray-600 max-w-3xl mx-auto">
                Experienced professionals dedicated to driving innovation and delivering exceptional value
              </p>
            </header>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
              {teamData.map((member, index) => (
                <article key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-500 transform hover:scale-105 animate-slide-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-[rgb(2,126,197)] font-semibold text-sm">
                      {member.position}
                    </p>
                  </div>
                  
                  <div className="text-left">
                    <p className="text-gray-600 text-sm mb-4 line-clamp-4">
                      {member.description}
                    </p>
                    
                    <div className="space-y-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <div key={skillIndex} className="flex items-center justify-start">
                          <FaAward className="text-xs text-[rgb(2,126,197)] mr-2" aria-hidden="true" />
                          <span className="text-xs text-gray-600">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
} 