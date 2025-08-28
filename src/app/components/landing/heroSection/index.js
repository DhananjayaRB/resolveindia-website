"use client";
import React from "react";
import { useClientLogos } from "../../../hooks/useClientLogos";

function HeroSection() {
  const { clientLogos } = useClientLogos();

  // Duplicate array for smooth looping
  const logosLoop = [...clientLogos, ...clientLogos];

  return (
    <section className="w-full h-auto min-h-[calc(100vh-5rem)] bg-white px-4 sm:px-6 md:px-5 rounded-md flex flex-col">
      {/* Top Row */}
      <div className="flex flex-col md:flex-row gap-4 flex-1">
        {/* Left Tall Box with text */}
        <div className="flex-1 rounded-lg flex flex-col justify-center px-3 md:px-4 text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1f4f6b] mb-4">
            Resolve Your Business Processes
          </h1>
          <p className="text-base sm:text-lg text-[#1f4f6b] mb-6">
            Software And Domain Services
          </p>
          <button className="bg-[#01649D] text-white py-3 rounded-md  hover:bg-[#0369a1] transition mt-6 md:mt-10 mx-auto md:mx-0 w-[150px] cursor-pointer">
            GET STARTED
          </button>
        </div>

        {/* Right Wide Box with Image */}
        <div className="flex-[1.5] rounded-lg flex items-center justify-center">
          <img
            src="https://resolveindia-website.vercel.app/assets/landingPageImage/Resolve-Edge.png"
            alt="Resolve Edge"
            className="w-full  md:w-[75%] h-auto object-cover h-full"
          />
        </div>
      </div>

      {/* Bottom Row (Marquee effect, 5 logos visible) */}
      <div className=" flex-shrink-0 overflow-hidden   py-3">
        <div className="flex animate-marquee ">
          {logosLoop.map((client, idx) => (
            <div
              key={`${client.id}-${idx}`}
              className="rounded-lg flex   items-center justify-center w-[30%] sm:w-[18%] md:w-[15%] flex-shrink-0 "
            
            >
              <img
                src={client.logo}
                alt={client.alt}
                className="max-h-[60px] sm:max-h-[80px] md:max-h-[100px] w-full object-contain "
              />
            </div>
          ))}
        </div>
      </div>

      {/* Custom Styles */}
      <style >{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </section>
  );
}

export default HeroSection;
