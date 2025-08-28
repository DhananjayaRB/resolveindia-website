"use client";
import React from "react";
import { useEffect, useState } from "react";
import { LazyMotion, m, AnimatePresence } from "framer-motion";

const slideImages = [
  "/assets/landingPageImage/sliderImages/work.png",
  "/assets/landingPageImage/sliderImages/leave.png",
  "/assets/landingPageImage/sliderImages/resolvex.png",
];

const leftContent = [
  {
    content1: "SUPREM",
    content2: "WORK",
    content3: "TRACK",
  },
  {
    content1: "INNOVATIVE",
    content2: "RESPONSIVE",
    content3: "VERSATILE",
  },
  {
    content1: "SOLVE",
    content2: "SMARTLY",
    content3: "EASILY",
  },
];

const rightImage = [
  "/assets/landingPageImage/sliderImages/usb.png",
  null,
  "/assets/landingPageImage/sliderImages/coffee_cup-v2.png",
];

const rightContent = [
  {
    content1: "Your Attendance –",
    content2: "Look No Further",
    content3: "Resolved!",
    color: "#147a8a",
  },
  {
    content1: "RESOLVE LEAVE",
    content2: null,
    content3: "Convenient",
    color: "#ffffff",
  },
  {
    content1: "Your Business Expenses",
    content2: null,
    content3: "Resolved!",
    color: "#ffffff",
  },
];

const backGroundColor = ["#DDDDDD", "#F9C887", "#5D7DE9"];

function Slider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slideImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="hidden lg:block w-full h-[450px]  md:h-[700px] relative overflow-hidden flex items-center justify-center"
      style={{ backgroundColor: backGroundColor[current] }}
    >
      <LazyMotion features={() => import("framer-motion").then((res) => res.domAnimation)}>
      {/* Left Watermark Text */}
      <m.div
        key={current + "-left"}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 0.25 }}
        transition={{ duration: 1 }}
        className="absolute left-5 sm:left-10 top-1/2 -translate-y-1/2 z-10 text-[white] font-black text-[40px] sm:text-[80px] md:text-[100px] leading-[60px] sm:leading-[90px] pointer-events-none select-none"
      >
        <h1>{leftContent[current].content1}</h1>
        <h1>{leftContent[current].content2}</h1>
        <h1>{leftContent[current].content3}</h1>
      </m.div>

      {/* Phone with Screen Image */}
      <div className="absolute left-[5%] sm:left-[20%] top-1/2 -translate-y-1/2 z-20">
        <div className="relative h-[450px] sm:h-[550px] w-[225px] sm:w-[275px]">
          <div className="absolute top-[94px] left-[94px] w-[167px] h-[291px] bg-black overflow-hidden z-10">
            <AnimatePresence mode="wait">
              <m.img
                key={current + "-slide"}
                src={slideImages[current]}
                alt="Mobile Screen"
                className="w-full h-full object-cover"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6 }}
              />
            </AnimatePresence>
          </div>
          <img
            src="https://www.resolveindia.com/wp-content/uploads/revslider/sleeklandingpage/iphone_cutout.png"
            alt="Mobile Frame"
            className="h-full w-full object-contain relative z-20"
          />
        </div>
      </div>

      {/* Right Text Content */}
      <m.div
        key={current + "-right-text"}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="absolute left-[55%] top-[25%] z-20 w-[300px] sm:w-[400px]"
        style={{ color: rightContent[current].color }}
      >
        <h1 className="text-[18px] sm:text-[26px] font-medium">
          {rightContent[current].content1}
        </h1>
        {rightContent[current].content2 && (
          <h1 className="text-[18px] sm:text-[26px] font-medium mb-2 ml-10 sm:ml-20">
            {rightContent[current].content2}
          </h1>
        )}
        <h1 className="text-[28px] sm:text-[40px] font-bold">
          {rightContent[current].content3}
        </h1>

        {/* App download button */}
        <div className="mt-6">
          <button className=" bg-[white] border border-gray-400 px-4 py-2 rounded-md shadow-md text-sm text-[black] flex items-center gap-2">
            GET OUR APP
            <img
              src="https://img.icons8.com/ios-filled/24/000000/mac-os.png"
              alt="Apple"
            />
            <img
              src="https://img.icons8.com/ios-filled/24/000000/android.png"
              alt="Android"
            />
          </button>
        </div>
      </m.div>

      {/* Right Side Image */}
      {rightImage[current] && (
        <m.div
          key={current + "-right-img"}
          initial={{ y: 500, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute right-5 sm:right-10 top-[20%] z-10"
        >
          <img
            src={rightImage[current]}
            alt="Right Side"
            className={`object-contain ${
              current === 2
                ? "h-[180px] sm:h-[700px] w-[180px] sm:w-[500px]"
                : "h-[140px] sm:h-[220px] w-auto"
            }`}
          />
        </m.div>
      )}

      {/* Dot Indicator Buttons */}
      <div className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-30">
        {slideImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-4 h-4 rounded-full border border-white transition duration-300 ${
              current === index ? "bg-white" : "bg-transparent"
            }`}
           />
        ))}
      </div>
      </LazyMotion>
    </div>
  );
}

export default Slider;
