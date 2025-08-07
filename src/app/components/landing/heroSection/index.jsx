import React from 'react';

const logos = [
  {
    name: 'Tally',
    src: '/assets/clientsLogo/Tally.png',
    alt: 'Tally logo'
  },
  {
    name: 'LKQ',
    src: '/assets/clientsLogo/LKQ.png',
    alt: 'LKQ logo'
  },
  {
    name: 'VWR',
    src: '/assets/clientsLogo/VWR.png',
    alt: 'VWR logo'
  },
  {
    name: 'Gilbarco',
    src: '/assets/clientsLogo/Gilbarco.png',
    alt: 'Gilbarco logo'
  },
  {
    name: 'Encora',
    src: '/assets/clientsLogo/encora.png',
    alt: 'Encora logo'
  },
  {
    name: 'Twin Health',
    src: '/assets/clientsLogo/TwinHealthLogo-1-e1618989522815.png',
    alt: 'Twin Health logo'
  },
  {
    name: 'SVAARI',
    src: '/assets/clientsLogo/SavaariLogo.png',
    alt: 'SVAARI logo'
  },
  {
    name: 'Indecomm',
    src: '/assets/clientsLogo/ubmtech.png',
    alt: 'Indecomm logo'
  }
];

function HeroSection() {
    return (
      <section className="w-full bg-white px-10 py-24 md:py-0 flex flex-col lg:flex-row items-left md:items-center justify-between gap-5 mt-0 md:mt-20">
        {/* Left Side: Text */}
        <div className="max-w-xl  lg:text-left">
          <h1 className="text-[30px] font-semibold text-[#204e69] leading-snug mb-6">
            Resolve Your Business Processes
          </h1>
          <p className="text-[22px] text-[#204e69] mb-8">
            Software And Domain Services
          </p>
          <button className="bg-[#007dc5] text-white px-6 py-3 text-sm font-bold rounded hover:bg-[#08c] transition-colors">
            GET STARTED
          </button>

          {/* Logo Marquee with Fade Effect */}
          <div className="mt-8 relative">
            {/* Left Fade Overlay - Hidden on mobile */}
            <div className="hidden md:block absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            
        
            <div className="hidden md:block absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
            
            {/* Marquee Container */}
            <div className="overflow-hidden">
              <div className="flex animate-marquee-left space-x-8 hover:[animation-play-state:paused] p-5">
                {/* First set of logos */}
                {logos.map((logo, index) => (
                  <div key={index} className="flex-shrink-0 bg-[white] shadow-lg rounded-lg p-2">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="h-20 w-auto object-contain opacity-100 transition-opacity"
                      title={logo.name}
                    />
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {logos.map((logo, index) => (
                  <div key={`duplicate-${index}`} className="flex-shrink-0 bg-[white] shadow-lg rounded-lg p-2">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="h-20 w-auto object-contain opacity-100 transition-opacity"
                      title={logo.name}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
  
        {/* Right Side: Image */}
        <div className="w-full lg:w-[55%] flex justify-center">
          <img
            src="/assets/landingPageImage/Resolve-Edge.png"
            alt="Resolve Business Illustration"
            className="w-full max-w-[650px] h-auto object-contain"
          />
        </div>
        
      </section>
    );
  }
  
  export default HeroSection;
  