'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "../../shared";
import { useClientLogos } from "../../../hooks/useClientLogos";

// Add global styles to prevent horizontal scroll
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    html, body {
      overflow-x: hidden !important;
      max-width: 100vw !important;
      box-sizing: border-box;
    }
    
    *, *::before, *::after {
      box-sizing: border-box;
    }
    
    .marquee-container {
      overflow: hidden !important;
      max-width: 100% !important;
    }

    @keyframes marquee-left {
      0% { 
        transform: translateX(0%); 
      }
      100% { 
        transform: translateX(-50%); 
      }
    }

    @keyframes marquee-right {
      0% { 
        transform: translateX(-50%); 
      }
      100% { 
        transform: translateX(0%); 
      }
    }

    .animate-marquee-left {
      animation: marquee-left 45s linear infinite;
      will-change: transform;
    }

    .animate-marquee-right {
      animation: marquee-right 45s linear infinite;
      will-change: transform;
    }

    .client-logo {
      width: 140px;
      height: 60px;
      
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
      flex-shrink: 0;
      padding: 0.1rem;
    }

    .client-logo:hover .client-image {
      transform: scale(1.35);
    }

    .client-image {
      max-width: 140%;
      max-height: 140%;
      object-fit: contain;
   
      transition: all 0.3s ease;
      transform: scale(1.25);
      opacity: 1;
      filter: brightness(1) contrast(1.1) saturate(1.2);
    }

    .marquee-wrapper {
      position: relative;
      overflow: hidden;
    }

    .fade-overlay-left {
      position: absolute;
      left: 0;
      top: 0;
      width: 2rem;
      height: 100%;
      background: linear-gradient(to right, white, transparent);
      z-index: 10;
      pointer-events: none;
    }

    .fade-overlay-right {
      position: absolute;
      right: 0;
      top: 0;
      width: 2rem;
      height: 100%;
      background: linear-gradient(to left, white, transparent);
      z-index: 10;
      pointer-events: none;
    }

    .progress-fill-button {
      position: relative;
      overflow: hidden;
    }
    
    .progress-fill-button::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: #01649D;
      transition: left 0.5s ease-out;
      z-index: 1;
    }
    
    .progress-fill-button:hover::before {
      left: 0;
    }
    
    .progress-fill-button:hover span {
      color: #000000;
    }
    
    .progress-fill-button:hover svg {
      color: #000000;
    }
    
    .progress-fill-button span {
      position: relative;
      z-index: 2;
      transition: color 0.5s ease-out;
    }

    .marquee-content {
      display: flex;
      gap: 0.2rem;
      width: max-content;
    }

    @media (max-width: 768px) {
      .animate-marquee-left,
      .animate-marquee-right {
        animation-duration: 30s;
      }
      
      .fade-overlay-left,
      .fade-overlay-right {
        display: none;
      }

      .client-logo {
        width: 120px;
        height: 50px;
      }

      .client-image {
        max-width: 130%;
        max-height: 130%;
        transform: scale(1.15);
        opacity: 1;
        filter: brightness(1) contrast(1.1) saturate(1.2);
      }

      .client-logo:hover .client-image {
        transform: scale(1.25);
      }

      .mobile-stack {
        flex-direction: column !important;
        gap: 2rem;
      }

      .mobile-full-width {
        margin-left: 0 !important;
        min-width: auto !important;
      }
    }

    @media (min-width: 1024px) {
      .large-screen-layout {
        justify-content: flex-start !important;
        gap: 2rem;
      }
    }
  `;
  document.head.appendChild(style);
}



export default function AnotherHeroSection(){
    const { clientLogos } = useClientLogos();
    const [isPaused, setIsPaused] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Dashboard images from lp folder
    const dashboardImages = [
        {
            src: "/assets/lp/leaveDashboard.webp",
            alt: "Leave Management Dashboard"
        },
        {
            src: "/assets/lp/payrollDashBoard.webp", 
            alt: "Payroll Dashboard"
        }
    ];

    // Auto-rotate images every 4 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % dashboardImages.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [dashboardImages.length]);

    return(
        <>
            {/* Hero Section - Full Screen Height */}
            <section 
                className="relative h-screen flex flex-col overflow-hidden w-full"
                style={{
                    background: '#EDF5FF'
                }}
            >
                {/* Navbar embedded in hero section */}
                <div className="relative z-50">
                    <Navbar />
                </div>

                {/* Background Pattern/Overlay */}
                <div className="absolute inset-0 bg-black/10"></div>
                
                {/* Floating Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
                    <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse delay-1000"></div>
                    <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-white/5 rounded-full blur-2xl animate-pulse delay-500"></div>
                </div>

                {/* Hero Content - Left Text, Right Dashboard */}
                <div className="relative z-10 flex-1 flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 lg:pb-16 pt-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center w-full">
                        {/* Left Side - Text Content */}
                        <div className="text-left">
                            {/* Main Heading */}
                            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 mb-6 leading-tight">
                                Resolve your Business Processes
                            </h1>

                            {/* Subtitle */}
                            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                                We provide cutting-edge software and domain services tailored to streamline your business operations. From robust applications to reliable domain solutions, we ensure growth, security, and scalability.
                            </p>

                            {/* Get Started Button */}
                            <div className="flex justify-start mb-8">
                                <Link
                                    href="/contact"
                                    className="progress-fill-button inline-flex items-center px-6 py-3 bg-white text-blue-900 rounded-lg font-medium text-base transition-all duration-300 hover:scale-105  hover:shadow-lg relative overflow-hidden"
                                >
                                    <span className="relative z-10">Get Started</span>
                                    <svg className="ml-2 w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        {/* Right Side - Modern Dashboard Image Slider */}
                        <div className="relative mt-8 lg:mt-0">
                            <div className="max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto lg:mx-0">
                                {/* Modern Slider Container */}
                                <div className="relative bg-white shadow-lg overflow-hidden border border-gray-100">
                                    {/* Slider Images */}
                                    <div className="relative h-[250px] sm:h-[300px] md:h-[350px] overflow-hidden">
                                        {dashboardImages.map((image, index) => (
                                            <div
                                                key={index}
                                                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                                                    index === currentImageIndex 
                                                        ? 'opacity-100 scale-100' 
                                                        : 'opacity-0 scale-95'
                                                }`}
                                            >
                                                <img 
                                                    src={image.src}
                                                    alt={image.alt}
                                                    className="w-full h-full object-contain"
                                                />
                                                {/* Gradient Overlay */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Modern Navigation Arrows */}
                                    <button
                                        onClick={() => setCurrentImageIndex((prev) => 
                                            prev === 0 ? dashboardImages.length - 1 : prev - 1
                                        )}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                                        aria-label="Previous image"
                                    >
                                        <svg className="w-5 h-5 text-white group-hover:text-gray-200 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </button>

                                    <button
                                        onClick={() => setCurrentImageIndex((prev) => 
                                            (prev + 1) % dashboardImages.length
                                        )}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                                        aria-label="Next image"
                                    >
                                        <svg className="w-5 h-5 text-white group-hover:text-gray-200 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>



                                    {/* Modern Dots Indicator */}
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                                        {dashboardImages.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setCurrentImageIndex(index)}
                                                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                                                    index === currentImageIndex 
                                                        ? 'bg-white scale-125 shadow-lg' 
                                                        : 'bg-white/50 hover:bg-white/75'
                                                }`}
                                                aria-label={`Go to image ${index + 1}`}
                                            />
                                        ))}
                                    </div>

                                    {/* Image Counter */}
                                    <div className="absolute top-4 right-4 bg-black/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                                        {currentImageIndex + 1} / {dashboardImages.length}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                        </section>

            {/* Client Logos Section */}
            <section className="w-full pb-10 bg-[#D6DDE6]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center mobile-stack large-screen-layout">
                        {/* Left Side - Text */}
                        <div className="flex-shrink-0">
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 leading-tight">
                                Trusted by<br />
                                Organizations
                            </h2>
                        </div>

                        {/* Vertical Divider */}
                        <div className="hidden md:block w-3 h-12 bg-gray-300 mx-6"></div>

                        {/* Right Side - Logos */}
                        <div className="ml-1 mobile-full-width " style={{minWidth: '400px'}}>
                            <div className="marquee-wrapper"
                                 onMouseEnter={() => setIsPaused(true)}
                                 onMouseLeave={() => setIsPaused(false)}
                            >
                                {/* Right Fade Overlay */}
                                <div className="fade-overlay-right " />
                                
                                <div className="overflow-hidden">
                                    <div
                                        className="marquee-content animate-marquee-left"
                                        style={{
                                            animationPlayState: isPaused ? 'paused' : 'running'
                                        }}
                                    >
                                        {/* First set of logos */}
                                        {clientLogos.map((client, i) => (
                                            <div
                                                key={`${client.id}-first-${i}`}
                                                className="client-logo"
                                                title={client.name}
                                            >
                                                <Image
                                                    src={client.logo}
                                                    alt={client.alt}
                                                    width={160}
                                                    height={80}
                                                    className="client-image"
                                                    loading="lazy"
                                                />
                                            </div>
                                        ))}

                                        {/* Duplicate set for seamless loop */}
                                        {clientLogos.map((client, i) => (
                                            <div
                                                key={`${client.id}-duplicate-${i}`}
                                                className="client-logo"
                                                title={client.name}
                                            >
                                                <Image
                                                    src={client.logo}
                                                    alt={client.alt}
                                                    width={160}
                                                    height={80}
                                                    className="client-image"
                                                    loading="lazy"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
