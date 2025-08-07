'use client';

import React, { useEffect, useState } from 'react';
import {
  FaBuilding,
  FaChartBar,
  FaClipboardList,
  FaComments,
  FaDesktop,
  FaFileAlt,
  FaHandshake,
  FaMobileAlt,
  FaShieldAlt,
  FaUsers,
} from 'react-icons/fa';
import styles from './ManagedPayrollServices.module.scss';

const ManagedPayrollServices = () => {
  const [cardsVisible, setCardsVisible] = useState(false);
  const [coreVisible, setCoreVisible] = useState(false);
  const [featuresVisible, setFeaturesVisible] = useState(false);
  const [blogsVisible, setBlogsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Cards section in viewport
      const cardsSection = document.getElementById('services-cards');
      if (cardsSection) {
        const rect = cardsSection.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight * 0.8;
        if (isInViewport && !cardsVisible) {
          setCardsVisible(true);
        }
      }

      // Core undertakings viewport
      const coreSection = document.getElementById('core-undertakings');
      if (coreSection) {
        const rect = coreSection.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight * 0.8;
        if (isInViewport && !coreVisible) {
          setCoreVisible(true);
        }
      }

      // Features viewport
      const featuresSection = document.getElementById('standout-features');
      if (featuresSection) {
        const rect = featuresSection.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight * 0.8;
        if (isInViewport && !featuresVisible) {
          setFeaturesVisible(true);
        }
      }

      // Blogs viewport
      const blogsSection = document.getElementById('blogs-section');
      if (blogsSection) {
        const rect = blogsSection.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight * 0.8;
        if (isInViewport && !blogsVisible) {
          setBlogsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [cardsVisible, coreVisible, featuresVisible, blogsVisible]);

  const serviceCards = [
    {
      id: 1,
      image: '/assets/Inclusive_control.jpg',
      title: 'Inclusive Controls',
      description:
        'Manage multiple payroll controls; be it head count, compensation changes, deduction, payment, or compliance reassurances.',
      buttonText: 'Request for Quote',
    },
    {
      id: 2,
      image: '/assets/available_on_mobile.jpg',
      title: 'Available on Mobile',
      description:
        'Everything you need to know about your Payroll readily available on your mobile device. Whether it be Payslip, Tax workings, FBP Declarations and Claims, Savings Declarations and Proofs etc.',
      buttonText: 'Request for Quote',
    },
    {
      id: 3,
      image: '/assets/Connect_to_Experts.jpg',
      title: 'Connect with Experts',
      description:
        'Our experts are readily available for consultation. Whether it be email queries, on-site periodic helpdesk, even 1 on 1 counselling',
      buttonText: 'Request for Quote',
    },
  ];

  const coreUndertakings = [
    {
      id: 1,
      icon: FaChartBar,
      title: 'PAYROLL MIS',
      description:
        'Incredible MIS on your highest costs. Monthly payroll costs segregated based on Division, Department, Location, Cost Center, & etc.',
    },
    {
      id: 2,
      icon: FaFileAlt,
      title: 'SLA REPORTING',
      description:
        'We undertake periodic SLA tracking and reporting of actuals versus agreement to measure service performance.',
    },
    {
      id: 3,
      icon: FaClipboardList,
      title: 'STATUTORY FILINGS',
      description:
        'Be it TDS, eTDS, PT, PF, ESI, S&E, Contract Labour, or etc, We compute, prepare and return these statutory filings as defined per the law.',
    },
  ];

  const allFeatures = [
    {
      id: 1,
      icon: FaUsers,
      iconColor: 'bg-blue-500',
      title: 'MULTIPLE PAYROLL STRUCTURE',
      description:
        'Multiple Payroll structures can be designed to group similar category of employees at the same time optimising labour laws and tax laws.',
    },
    {
      id: 2,
      icon: FaBuilding,
      iconColor: 'bg-blue-500',
      title: 'MULTI LOCATION STRUCTURE',
      description:
        'Consolidated and segregated views and workflows based on relative roles and access rights. Ability to empower and delegate to Branches.',
    },
    {
      id: 3,
      icon: FaHandshake,
      iconColor: 'bg-blue-500',
      title: 'SUB CONTRACTOR PAYROLL',
      description:
        'Easily manage Contract workers on our platform with different structures, payslips. Confidently meet principal employer obligations.',
    },
    {
      id: 4,
      icon: FaShieldAlt,
      iconColor: 'bg-blue-500',
      title: 'SUPER CONTROLS ENABLED',
      description:
        'Be it on payments, compliances, taxes, head count movement, special instructions, arrears, increments etc - We have a way with it.',
    },
    {
      id: 5,
      icon: FaMobileAlt,
      iconColor: 'bg-blue-500',
      title: 'MOBILE APPLICATION READY',
      description:
        'Market Leaders in providing mobile app for outsourced payroll services. Check and approve everything from your mobile device.',
    },
    {
      id: 6,
      icon: FaDesktop,
      iconColor: 'bg-blue-500',
      title: 'CONSULTATION READILY AVAILABLE',
      description:
        'Our experts are readily available. Employee queries on mail, phone, periodic help desks or one to one payroll counselling.',
    },
  ];

  const blogPosts = [
    {
      id: 1,
      image: '/assets/Multiple_Payroll_structures.jpg',
      fallbackImage: '/assets/Multiple_Payroll_structures.jpg',
      title: 'PF Scheme - Features & Benefits',
      description:
        'As an employee who is working in a corporate set-up there are several things that one would like to know about the Employee Provident Fund (EPF). This Blog attempts to discuss the features and Benefits of the PF scheme and how it can benefit employees in the long run.',
      buttonText: 'Know More',
    },
    {
      id: 2,
      image: '/assets/ESI_Contribution_Reduces_By.jpg',
      fallbackImage: '/assets/ESI_Contribution_Reduces_By.jpg',
      title: 'ESI Contribution Reduces By 40%',
      description:
        "The government to change it's health welfare paradigm from numbers and revenues to ensuring they reach across the country of ESI dispensaries and hospitals, monitoring quality and receiving feedback from beneficiaries.",
      buttonText: 'Know More',
    },
    {
      id: 3,
      image: '/assets/Double_Income_No_Kids_Couples.jpg',
      fallbackImage: '/assets/Double_Income_No_Kids_Couples.jpg',
      title: 'Double Income No Kids Couples',
      description:
        "Ravi and Jayashree with Venkatesh's help were convinced that they can now declare to their HR Manager's the options that they were choosing. He was picking on the Old Tax Regime since he would save more money.",
      buttonText: 'Know More',
    },
  ];

  return (
    <div className='min-h-screen'>
      {/* Hero Section with Blue Background */}
      <div
        className='py-16 lg:py-5 relative overflow-hidden'
        style={{ backgroundColor: 'rgb(2, 126, 197)' }}
      >
        {/* Main Content */}
        <div className='px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto'>
          <div className='flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12'>
            {/* Left Side - Single Image */}
            <div className='pt-[10px] flex-1 flex justify-center lg:justify-start'>
              <img
                src='/assets/payroll-banner (1).png'
                alt='Managed Payroll Services'
                className='max-w-full h-auto w-full max-w-md lg:max-w-lg xl:max-w-xl'
              />
            </div>

            {/* Right Side - Content */}
            <div className='flex-1 text-white space-y-4 lg:space-y-8'>
              <div className='space-y-4 lg:space-y-6'>
                <h1 className='text-xl sm:text-xl md:text-2xl lg:text-3xl leading-tight'>
                  Outsource your Payroll to Resolve
                </h1>

                <p className='text-lg sm:text-xl lg:text-2xl text-blue-100 leading-relaxed'>
                  We take care of the rest – Accuracy, Timeliness, Expert
                  guidance
                </p>

                <p className='text-base sm:text-lg text-blue-200 leading-relaxed'>
                  Be It Payslip, Tax Workings, FBP Declarations And Claims,
                  Savings Declaration And Proofs Etc.
                </p>
              </div>

              <button className='bg-white text-blue-800 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg text-base sm:text-lg hover:bg-blue-50 transition-colors duration-300 shadow-lg'>
                Request a Quote
              </button>
            </div>
          </div>
        </div>

        {/* Chat Icon */}
        <div className='fixed bottom-8 right-8 z-40'>
          <div className='bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 cursor-pointer'>
            <FaComments size={24} />
          </div>
        </div>
      </div>

      <div className='max-w-7xl mx-auto'>
        {/* Services Cards Section */}
        <div
          id='services-cards'
          className='bg-white py-16 lg:py-24 px-4 sm:px-8 lg:px-16'
        >
          <div className=' mx-auto w-full'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12'>
              {serviceCards.map((card, index) => (
                <div
                  key={card.id}
                  className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-1000 transform ${
                    cardsVisible
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-20 opacity-0'
                  }`}
                  style={{
                    transitionDelay: `${index * 200}ms`,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  {/* Card Image */}
                  <div className='relative h-48 sm:h-56 lg:h-64 overflow-hidden'>
                    <img
                      src={card.image}
                      alt={card.title}
                      className='w-full h-full object-cover transition-transform duration-300 hover:scale-105'
                    />
                  </div>

                  {/* Card Content */}
                  <div className='p-6 lg:p-8 flex-1 flex flex-col'>
                    {/* Title */}
                    <h3 className='text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600 mb-4 lg:mb-6'>
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className='text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed mb-6 lg:mb-8 flex-1'>
                      {card.description}
                    </p>

                    {/* Button */}
                    <button className='bg-blue-600 text-white font-semibold py-3 lg:py-4 px-6 lg:px-8 rounded-lg text-sm sm:text-base lg:text-lg hover:bg-blue-700 transition-colors duration-300 w-full'>
                      {card.buttonText}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Undertakings Section */}
        <div id='core-undertakings' className='bg-white py-16 px-6 lg:px-12'>
          <div className='max-w-8xl mx-auto text-center'>
            <h2 className='text-3xl font-bold text-gray-700 mb-16'>
              CORE UNDERTAKINGS
            </h2>
          </div>

          <div className={`${styles.timelineWrapper} relative max-w-10xl `}>
            {/* Vertical Line (Left side) */}
            <div
              className={styles.timelineLine}
              style={{ height: '90%' }}
            ></div>

            <div className='flex flex-col gap-20 mb-16'>
              {coreUndertakings.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.id}
                    className={`${styles.timelineItem} ${coreVisible ? styles.zoomIn : ''}`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className='flex items-start gap-6 group'>
                      {/* Icon */}
                      <div
                        className={`${styles.timelineIcon} size-30 text-4xl group-hover:scale-115 transition-all duration-400 ease-out`}
                      >
                        <IconComponent />
                      </div>

                      {/* Text */}
                      <div>
                        <h3 className='text-xl font-semibold text-slate-700 uppercase mb-2 transition-colors group-hover:text-blue-600'>
                          {item.title}
                        </h3>
                        <p className='text-gray-500 text-md max-w-2xl'>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom banner section */}
      <div
        className='relative py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-16 text-white '
        style={{
          backgroundImage: " url('/assets/banner-bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className='max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6 lg:gap-8'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <img
              src='https://www.resolveindia.com/wp-content/uploads/2018/06/resolve_logo_1-1.png'
              alt='Resolve Logo'
              className='h-8 sm:h-10 lg:h-12 w-auto'
            />
          </div>

          {/* Text Content */}
          <div className='flex-1 text-center space-y-1 sm:space-y-2'>
            <p className='text-sm sm:text-base lg:text-lg xl:text-xl font-light leading-tight'>
              Let us handle your{' '}
              <span className='font-semibold'>Outsource Payroll Services</span>
              <br />
              so you can focus on what truly matters:
              <br />
              <span className='font-bold text-white text-sm sm:text-base lg:text-lg xl:text-xl'>
                your Business!
              </span>
            </p>
          </div>

          {/* CTA Button */}
          <div className='flex-shrink-0'>
            <button className='bg-transparent border-2 border-white text-white font-bold uppercase text-xs sm:text-sm py-2 sm:py-2.5 px-4 sm:px-6 rounded-full hover:bg-white hover:text-[#214572] transition duration-300'>
              Request For Quote
            </button>
          </div>
        </div>
      </div>

      <div className='max-w-7xl mx-auto'>
        {/* Unified Features Section */}
        <div
          id='standout-features'
          className='bg-white py-16 lg:py-24 px-4 sm:px-8 lg:px-16'
        >
          <div className='max-w-7xl mx-auto'>
            {/* Section Title */}
            <h2 className='text-xl sm:text-2xl lg:text-3xl font-bold text-gray-700 mb-12 lg:mb-16 text-center'>
              STANDOUT FEATURES
            </h2>

            {/* Features Grid - 6 Cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12'>
              {allFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={feature.id}
                    className={`group cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                      featuresVisible
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-20 opacity-0'
                    }`}
                    style={{
                      transitionDelay: `${index * 10}ms`,
                    }}
                  >
                    {/* Card Container */}
                    <div className='bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 lg:p-8 border border-gray-100 hover:border-blue-200 h-full flex flex-col'>
                      {/* Icon */}
                      <div
                        className={`${feature.iconColor} w-14 h-14 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl mx-auto`}
                      >
                        <IconComponent
                          className='text-white text-xl lg:text-2xl group-hover:text-blue-100 transition-colors duration-300'
                          size={28}
                        />
                      </div>

                      {/* Content */}
                      <div className='text-center flex-1 flex flex-col justify-center'>
                        <h3 className='text-base sm:text-lg lg:text-xl font-bold text-gray-700 mb-3 lg:mb-4 uppercase tracking-wide group-hover:text-blue-600 transition-colors duration-300 leading-tight'>
                          {feature.title}
                        </h3>

                        <p className='text-sm sm:text-sm lg:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300'>
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Blogs Section */}
        <div
          id='blogs-section'
          className='bg-white py-16 lg:py-24 px-4 sm:px-8 lg:px-16'
        >
          <div className='max-w-7xl mx-auto w-full'>
            {/* Section Title */}
            <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-700 mb-12 lg:mb-16 text-center'>
              BLOGS
            </h2>

            {/* Blog Posts Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12'>
              {blogPosts.map((blog, index) => (
                <div
                  key={blog.id}
                  className={`group cursor-pointer transition-all duration-400 transform hover:scale-105 ${
                    blogsVisible
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-20 opacity-0'
                  }`}
                  style={{
                    transitionDelay: `${index * 200}ms`,
                  }}
                >
                  {/* Blog Card Container */}
                  <div className='bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-700 h-full flex flex-col'>
                    {/* Blog Image */}
                    <div className='relative h-40 sm:h-44 overflow-hidden bg-gray-100'>
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
                        onError={e => {
                          if (blog.fallbackImage) {
                            e.target.src = blog.fallbackImage;
                          } else {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }
                        }}
                      />

                      <div
                        className='absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-500 text-sm'
                        style={{ display: 'none' }}
                      >
                        Image not available
                      </div>
                    </div>

                    {/* Blog Content */}
                    <div className='p-5 lg:p-6 flex-1 flex flex-col'>
                      {/* Title */}
                      <h3 className='text-base sm:text-lg lg:text-xl font-bold text-gray-700 mb-3 group-hover:text-blue-600 text-center transition-colors duration-300 leading-tight'>
                        {blog.title}
                      </h3>

                      {/* Description */}
                      <p className='text-sm sm:text-sm lg:text-base text-gray-600 leading-relaxed mb-4 flex-1 group-hover:text-gray-700 text-center transition-colors duration-300 line-clamp-5 overflow-hidden min-h-[80px]'>
                        {blog.description}
                      </p>
                      {/* Button */}
                      <button className='bg-blue-600 text-white font-semibold py-2.5 lg:py-3 px-5 lg:px-6 rounded-lg text-sm hover:bg-blue-700 transition-all duration-300 w-full group-hover:shadow-lg transform group-hover:-translate-y-1'>
                        {blog.buttonText}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagedPayrollServices;
