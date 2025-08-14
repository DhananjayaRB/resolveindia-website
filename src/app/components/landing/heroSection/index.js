import React from 'react';
import Clients from '../clients';

function HeroSection() {
    return (
      <section className="w-full min-h-[calc(100vh-5rem)] bg-white px-6 md:px-10 py-8 md:py-12 flex flex-col justify-between ">
        {/* Main Content Container */}
        <div className='flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-12'>
          {/* Left Side: Text Content */}
          <div className=" max-w-xl text-center  lg:text-left mt-15">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#204e69] leading-tight">
              Resolve Your Business Processes
            </h1>
            <p className="text-lg md:text-lg lg:text-xl text-[#204e69] mb-8 leading-relaxed">
              Software And Domain Services
            </p>
            <button className="bg-[#007dc5] text-white px-8 py-4 text-sm font-bold rounded-lg hover:bg-[#08c] transition-colors duration-300 transform hover:scale-105">
              GET STARTED
            </button>
          </div>
      
          {/* Right Side: Image */}
          <div className="flex-1 w-full lg:w-auto flex justify-center lg:justify-end">
            <img
              src="/assets/landingPageImage/Resolve-Edge.png"
              alt="Resolve Business Illustration"
              className="w-full max-w-[500px] lg:max-w-[400px] h-auto object-contain"
            />
          </div>
        </div>

        {/* Clients Section */}
        <div className="w-full">
          <Clients />
        </div>
      </section>
    );
  }
  
  export default HeroSection;
  