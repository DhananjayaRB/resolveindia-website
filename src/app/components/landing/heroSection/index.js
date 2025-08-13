import React from 'react';


function HeroSection() {
    return (
      <section className="w-full bg-white px-10 py-15 md:py-0 flex flex-col lg:flex-row items-left md:items-center justify-between gap-5 mt-0 md:mt-2">
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
  