'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <div className="flex flex-col items-center space-y-4">
        {/* Company Logo with Spinning Globe */}
        <div className="relative">
          <Image
            src="/assets/landingPageImage/logo.png"
            alt="ResolveBiz Logo"
            width={120}
            height={60}
            className="object-contain"
          />
          {/* Spinning Globe Overlay - Positioned over the 'O' globe in the logo */}
          <motion.div
            className="absolute top-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            animate={{ rotate: 360 }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {/* Globe element positioned to match the logo's globe */}
            <div className="w-6 h-6 rounded-full bg-[#007dc5] shadow-lg">
              {/* Horizontal lines to match the globe design */}
              <div className="w-full h-full relative">
                <div className="absolute top-1/3 left-0 right-0 h-0.5 bg-[white] rounded-full"></div>
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[white] rounded-full"></div>
                <div className="absolute top-2/3 left-0 right-0 h-0.5 bg-[white] rounded-full"></div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Loading Text */}
        <motion.p
          className="text-lg font-semibold text-gray-600 mt-4"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          Loading...
        </motion.p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
