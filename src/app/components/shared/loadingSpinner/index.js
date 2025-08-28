'use client';
import React from 'react';
import Image from 'next/image';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <div className="flex flex-col items-center space-y-6">
        {/* Company Logo */}
        <div className="relative">
          <Image
            src="/assets/landingPageImage/logo.png"
            alt="ResolveBiz Logo"
            width={120}
            height={60}
            className="object-contain"
            priority
          />
        </div>
        
        {/* CSS-based Spinning Animation */}
        <div className="relative">
          <div className="w-8 h-8 border-4 border-[#007dc5] border-t-transparent rounded-full animate-spin"></div>
        </div>
        
        {/* Loading Text with CSS Animation */}
        <p className="text-lg font-semibold text-gray-600 animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
