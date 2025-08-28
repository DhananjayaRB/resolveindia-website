"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './services.module.scss';

const servicesData = [
  {
    title: 'Accounting',
    bg: '#EDF5FF',
    description: `When you outsource your Accounting management to Resolve Biz Services & Apps, you can rest assured of the fact that we will provide the optimum service model for your business. We discuss and develop solutions that are structured especially for your business.`,
    button: 'LEARN MORE',
    buttonColor: '#4A90E2',
    aria: 'Learn more about our Accounting Services',
    url: '/services/accounting-services',
  },
  {
    title: 'Payroll',
    bg: '#EDF5FF',
    description: `Partner with Resolve Biz Services & Apps, and let us handle all your payroll processes. We support Multi-layer pay structures across different branches, sub-contractor payroll, and more. We even handle all statutory forms, manage SLA and MIS reporting.`,
    button: 'LEARN MORE',
    buttonColor: '#4A90E2',
    aria: 'Learn more about our Payroll Services',
    url: '/services/managed-payroll-services',
  },
  {
    title: 'GoodKarma for NGO',
    bg: '#EDF5FF',
    description: `Our mission is to provide global accounting standards and practices to our client Non-Profits, provide the highest level of financial transparency and enable compliance with applicable laws to be it Income Tax, FCRA, Company Law, Labour Laws etc.`,
    button: 'LEARN MORE',
    buttonColor: '#4A90E2',
    aria: 'Discover our blog articles',
    url: '/services/good-karma-for-ngo',
  },
];

function Services() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(servicesData.length / 2));
    }, 5000);
    return () => clearInterval(interval);
  }, []);



  const totalSlides = 2; // Fixed to 2 slides

  // Custom slide data to show Accounting+Payroll, then Payroll+GoodKarma
  const slideData = [
    [servicesData[0], servicesData[1]], // Accounting + Payroll
    [servicesData[1], servicesData[2]], // Payroll + GoodKarma
  ];

  return (
    <section
      className='bg-[#EDF5FF] w-full'
      aria-labelledby='services-heading'
    >
      <header className='m-[-1px] h-[100px]'>
        <h1
          id='services-heading'
          className='text-gray-800 text-3xl font-bold text-center py-10'
        >
          SERVICES
        </h1>
        <meta
          name='description'
          content='Professional Accounting, Payroll and Business Blog Services for sustained business growth'
        />
      </header>
      
      {/* Services Carousel */}
      <div className='relative max-w-6xl mx-auto px-4 pb-10'>
        <div className='overflow-hidden'>
          <div 
            className='flex transition-transform duration-500 ease-in-out'
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {Array.from({ length: totalSlides }, (_, slideIndex) => (
              <div
                key={slideIndex}
                className='w-full flex-shrink-0'
                style={{ minHeight: '440px' }}
              >
                                 <div className='flex flex-col md:flex-row w-full'>
                   {slideData[slideIndex].map((srv, idx) => (
                    <article
                      key={srv.title}
                      className='flex-1'
                      style={{ backgroundColor: srv.bg, minHeight: '440px' }}
                      aria-label={srv.title}
                    >
                      <div
                        className={`p-8 flex flex-col justify-center items-center h-full border-b md:border-b-0 ${idx === 0 ? 'md:border-r' : ''} border-gray-200`}
                      >
                        <h2 className='text-gray-800 text-2xl mb-4 font-bold'>
                          {srv.title}
                        </h2>
                        <p className='text-base text-gray-600 mb-6 max-w-md text-left'>
                          {srv.description}
                        </p>
                        <Link href={srv.url}>
                          <button
                            className={`${styles.fillButton} border border-gray-800 text-gray-800 py-1 px-6 rounded-full text-sm transition-all duration-300 cursor-pointer transform hover:scale-105`}
                            aria-label={srv.aria}
                          >
                            {srv.button}
                          </button>
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        

        
        {/* Dots Indicator */}
        <div className='flex justify-center mt-4 space-x-2'>
          {Array.from({ length: totalSlides }, (_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === currentSlide ? 'bg-gray-800' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
