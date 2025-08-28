"use client";

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect, useMemo } from 'react';
import { FaUsers, FaBuilding, FaHandshake, FaShieldAlt, FaMobileAlt, FaDesktop, FaChartBar, FaFileAlt, FaClipboardList } from 'react-icons/fa';

import styles from './managedPayrollServices.module.scss';

const ManagedPayrollServices = () => {

    const [cardsVisible, setCardsVisible] = useState(false);
    const [coreVisible, setCoreVisible] = useState(false);
    const [featuresVisible, setFeaturesVisible] = useState(false);
    const [blogsVisible, setBlogsVisible] = useState(false);
    const [headerAnimationsStarted, setHeaderAnimationsStarted] = useState(false);

    // Throttle function for performance
    const throttle = (func, limit) => {
        let inThrottle;
        return function () {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    };

    // Start header animations when component mounts
    useEffect(() => {
        setHeaderAnimationsStarted(true);
    }, []);

    // Function to animate characters one by one
    const animateText = (text) => {
        return text.split('').map((char, index) => (
            <aside
                key={index}
                className={`${styles.charAnimation}`}
                style={{
                    animationDelay: `${index * 0.1}s`
                }}
            >
                {char === ' ' ? '\u00A0' : char}
            </aside>
        ));
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = [
                { id: 'services-cards', setter: setCardsVisible, visible: cardsVisible },
                { id: 'core-undertakings', setter: setCoreVisible, visible: coreVisible },
                { id: 'standout-features', setter: setFeaturesVisible, visible: featuresVisible },
                { id: 'blogs-section', setter: setBlogsVisible, visible: blogsVisible }
            ];

            sections.forEach(({ id, setter, visible }) => {
                const section = document.getElementById(id);
                if (section && !visible) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top < window.innerHeight * 0.8) {
                        setter(true);
                    }
                }
            });
        };

        const throttledHandleScroll = throttle(handleScroll, 100);
        window.addEventListener('scroll', throttledHandleScroll, { passive: true });
        return () => window.removeEventListener('scroll', throttledHandleScroll);
    }, [cardsVisible, coreVisible, featuresVisible, blogsVisible]);


    const serviceCards = useMemo(() => [
        {
            id: 1,
            image: "/assets/payroll/Inclusive_control.jpg",
            title: "Inclusive Controls",
            description: "Manage multiple payroll controls; be it head count, compensation changes, deduction, payment, or compliance reassurances.",
            buttonText: "Request for Quote"
        },
        {
            id: 2,
            image: "/assets/payroll/available_on_mobile.jpg",
            title: "Available on Mobile",
            description: "Everything you need to know about your Payroll readily available on your mobile device. Whether it be Payslip, Tax workings, FBP Declarations and Claims, Savings Declarations and Proofs etc.",
            buttonText: "Request for Quote"
        },
        {
            id: 3,
            image: "/assets/payroll/Connect_to_Experts.jpg",
            title: "Connect with Experts",
            description: "Our experts are readily available for consultation. Whether it be email queries, on-site periodic helpdesk, even 1 on 1 counselling",
            buttonText: "Request for Quote"
        }
    ], []);

    const coreUndertakings = [
        {
            id: 1,
            icon: FaChartBar,
            title: "PAYROLL MIS",
            description: "Incredible MIS on your highest costs. Monthly payroll costs segregated based on Division, Department, Location, Cost Center, & etc."
        },
        {
            id: 2,
            icon: FaFileAlt,
            title: "SLA REPORTING",
            description: "We undertake periodic SLA tracking and reporting of actuals versus agreement to measure service performance."
        },
        {
            id: 3,
            icon: FaClipboardList,
            title: "STATUTORY FILINGS",
            description: "Be it TDS, eTDS, PT, PF, ESI, S&E, Contract Labour, or etc, We compute, prepare and return these statutory filings as defined per the law."
        }
    ];

    const allFeatures = [
        {
            id: 1,
            icon: FaUsers,
            iconColor: "bg-blue-500",
            title: "MULTIPLE PAYROLL STRUCTURE",
            description: "Multiple Payroll structures can be designed to group similar category of employees at the same time optimising labour laws and tax laws."
        },
        {
            id: 2,
            icon: FaBuilding,
            iconColor: "bg-blue-500",
            title: "MULTI LOCATION STRUCTURE",
            description: "Consolidated and segregated views and workflows based on relative roles and access rights. Ability to empower and delegate to Branches."
        },
        {
            id: 3,
            icon: FaHandshake,
            iconColor: "bg-blue-500",
            title: "SUB CONTRACTOR PAYROLL",
            description: "Easily manage Contract workers on our platform with different structures, payslips. Confidently meet principal employer obligations."
        },
        {
            id: 4,
            icon: FaShieldAlt,
            iconColor: "bg-blue-500",
            title: "SUPER CONTROLS ENABLED",
            description: "Be it on payments, compliances, taxes, head count movement, special instructions, arrears, increments etc - We have a way with it."
        },
        {
            id: 5,
            icon: FaMobileAlt,
            iconColor: "bg-blue-500",
            title: "MOBILE APPLICATION READY",
            description: "Market Leaders in providing mobile app for outsourced payroll services. Check and approve everything from your mobile device."
        },
        {
            id: 6,
            icon: FaDesktop,
            iconColor: "bg-blue-500",
            title: "CONSULTATION READILY AVAILABLE",
            description: "Our experts are readily available. Employee queries on mail, phone, periodic help desks or one to one payroll counselling."
        }
    ];

    const blogPosts = [
        {
            id: 1,
            image: "/assets/payroll/Multiple_Payroll_structures.jpg",
            fallbackImage: "/assets/payroll/Multiple_Payroll_structures.jpg",
            title: "PF Scheme - Features & Benefits",
            description: "As an employee who is working in a corporate set-up there are several things that one would like to know about the Employee Provident Fund (EPF). This Blog attempts to discuss the features and Benefits of the PF scheme and how it can benefit employees in the long run.",
            buttonText: "Know More"
        },
        {
            id: 2,
            image: "/assets/payroll/ESI_Contribution_Reduces_By.jpg",
            fallbackImage: "/assets/payroll/ESI_Contribution_Reduces_By.jpg",
            title: "ESI Contribution Reduces By 40%",
            description: "The government to change it's health welfare paradigm from numbers and revenues to ensuring they reach across the country of ESI dispensaries and hospitals, monitoring quality and receiving feedback from beneficiaries.",
            buttonText: "Know More"
        },
        {
            id: 3,
            image: "/assets/payroll/Double_Income_No_Kids_Couples.jpg",
            fallbackImage: "/assets/payroll/Double_Income_No_Kids_Couples.jpg",
            title: "Double Income No Kids Couples",
            description: "Ravi and Jayashree with Venkatesh's help were convinced that they can now declare to their HR Manager's the options that they were choosing. He was picking on the Old Tax Regime since he would save more money.",
            buttonText: "Know More"
        }
    ];

    return (
        <>
            <Head>
                {/* Performance Optimizations */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link rel="dns-prefetch" href="//www.resolveindia.com" />

                {/* Primary Meta Tags */}
                <title>Managed Payroll Services | Resolve India - Professional Payroll Outsourcing</title>
                <meta name="title" content="Managed Payroll Services | Resolve India - Professional Payroll Outsourcing" />
                <meta name="description" content="Outsource your payroll to Resolve India. Professional payroll processing, tax management, compliance services, and statutory filings with accuracy and expert guidance." />
                <meta name="keywords" content="payroll services, payroll outsourcing, payroll processing, tax management, compliance services, statutory filings, managed payroll, India payroll services, payroll solutions" />
                <meta name="robots" content="index, follow" />
                <meta name="language" content="English" />
                <meta name="author" content="Resolve India" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.resolveindia.com/services/managed-payroll-services" />
                <meta property="og:title" content="Managed Payroll Services | Resolve India" />
                <meta property="og:description" content="Professional payroll outsourcing services with accuracy, timeliness, and expert guidance. Comprehensive payroll solutions for businesses." />
                <meta property="og:image" content="https://www.resolveindia.com/assets/payroll-banner (1).png" />
                <meta property="og:site_name" content="Resolve India" />
                <meta property="og:locale" content="en_US" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.resolveindia.com/services/managed-payroll-services" />
                <meta property="twitter:title" content="Managed Payroll Services | Resolve India" />
                <meta property="twitter:description" content="Professional payroll outsourcing services with accuracy, timeliness, and expert guidance. Comprehensive payroll solutions for businesses." />
                <meta property="twitter:image" content="https://www.resolveindia.com/assets/payroll-banner (1).png" />

                {/* Additional SEO Meta Tags */}
                <meta name="theme-color" content="#027EC5" />
                <meta name="msapplication-TileColor" content="#027EC5" />
                <link rel="canonical" href="https://www.resolveindia.com/services/managed-payroll-services" />

                {/* Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Service",
                            "name": "Managed Payroll Services",
                            "description": "Professional payroll outsourcing services including payroll processing, tax management, compliance services, and statutory filings.",
                            "provider": {
                                "@type": "Organization",
                                "name": "Resolve India",
                                "url": "https://www.resolveindia.com",
                                "logo": "https://www.resolveindia.com/assets/resolve-logo-2.png"
                            },
                            "serviceType": "Payroll Outsourcing",
                            "areaServed": "India",
                            "hasOfferCatalog": {
                                "@type": "OfferCatalog",
                                "name": "Payroll Services",
                                "itemListElement": [
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Payroll MIS",
                                            "description": "Incredible MIS on your highest costs. Monthly payroll costs segregated based on Division, Department, Location, Cost Center."
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "SLA Reporting",
                                            "description": "Periodic SLA tracking and reporting of actuals versus agreement to measure service performance."
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Statutory Filings",
                                            "description": "TDS, eTDS, PT, PF, ESI, S&E, Contract Labour filings as defined per the law."
                                        }
                                    }
                                ]
                            },
                            "offers": {
                                "@type": "Offer",
                                "description": "Competitive pricing for professional managed payroll services"
                            }
                        })
                    }}
                />
            </Head>
            <main className="min-h-screen">
                {/* Hero Section with Blue Background */}
                <header className='h-screen relative overflow-hidden flex items-center' style={{ backgroundColor: 'rgb(2, 126, 197)' }} aria-label="Managed Payroll Services Hero Section">

                    {/* Main Content */}
                    <div className="px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto w-full -mt-20">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">

                            {/* Left Side - Single Image */}
                            <div className="flex-1 flex justify-center lg:justify-start" style={{ backgroundColor: 'transparent' }}>
                                <div className={headerAnimationsStarted ? styles.gbPopupBounceToRight : styles.imageHidden}>
                                    <Image
                                        src="/assets/payroll/payroll-hero-img2.png"
                                        alt="Managed Payroll Services - Professional payroll management solutions"
                                        width={600}
                                        height={400}
                                        className=" h-auto w-full max-w-xs lg:max-w-sm xl:max-w-md"
                                        priority
                                        placeholder="empty"
                                        style={{
                                            backgroundColor: 'transparent'
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Right Side - Content */}
                            <div className="flex-1 text-white space-y-4 lg:space-y-8">
                                <div className="space-y-4 lg:space-y-6">
                                    <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl leading-tight">
                                        {headerAnimationsStarted ? animateText("Outsource your ") : "Outsource your "}
                                        {headerAnimationsStarted ? animateText("Payroll") : "Payroll"}
                                        {headerAnimationsStarted ? animateText(" to Resolve") : " to Resolve"}
                                    </h1>

                                    <h2 className="text-lg sm:text-xl lg:text-2xl text-blue-100 leading-relaxed">
                                        We take care of the rest – <strong>Accuracy, Timeliness, Expert guidance</strong>
                                    </h2>

                                    <p className="text-base sm:text-lg text-blue-200 leading-relaxed">
                                        Be It <em>Payslip, Tax Workings, FBP Declarations And Claims</em>, <strong>Savings Declaration And Proofs</strong> Etc.
                                    </p>
                                </div>

                                <Link href="/contact" className={`inline-block bg-white text-blue-800 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg text-base sm:text-lg hover:bg-blue-50 transition-colors duration-300 shadow-lg ${headerAnimationsStarted ? styles.buttonSlideUp : ''}`}>
                                    Request a Quote
                                </Link>
                            </div>
                        </div>
                    </div>


                </header>

                <div className='max-w-7xl mx-auto'>
                    {/* Services Cards Section */}
                    <section id="services-cards" className="bg-white py-16 lg:py-24 px-4 sm:px-8 lg:px-16" aria-labelledby="services-heading">
                        <div className=" mx-auto w-full">
                            <h2 id="services-heading" className="sr-only">Our Payroll Services</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                                {serviceCards.map((card, index) => (
                                    <article
                                        key={card.id}
                                        className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-1000 transform ${cardsVisible
                                            ? 'translate-y-0 opacity-100'
                                            : 'translate-y-20 opacity-0'
                                            }`}
                                        style={{
                                            transitionDelay: `${index * 200}ms`,
                                            height: '100%',
                                            display: 'flex',
                                            flexDirection: 'column'
                                        }}
                                    >
                                        {/* Card Image */}
                                        <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                                            <Image
                                                src={card.image}
                                                alt={card.title}
                                                width={400}
                                                height={300}
                                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                                loading="lazy"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                        </div>

                                        {/* Card Content */}
                                        <div className="p-6 lg:p-8 flex-1 flex flex-col text-center">
                                            {/* Title */}
                                            <h3 className="text-base sm:text-lg lg:text-xl font-normal text-justify mb-4 lg:mb-6" style={{ color: 'rgb(2, 126, 197)' }}>
                                                {card.title}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-xs sm:text-sm lg:text-base text-justify text-gray-600 leading-relaxed mb-6 lg:mb-8 flex-1">
                                                {card.description}
                                            </p>

                                            {/* Button */}
                                            <Link href="/contact" className="inline-block w-full text-center text-white font-normal py-3 lg:py-4 px-6 lg:px-8 rounded-lg text-xs sm:text-sm lg:text-base transition-colors duration-300 hover:bg-[rgb(1,101,158)] cursor-pointer" style={{ backgroundColor: 'rgb(2, 126, 197)' }}>
                                                {card.buttonText}
                                            </Link>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Core Undertakings Section */}
                    <section id="core-undertakings" className="bg-white py-10 px-6 lg:px-12" aria-labelledby="core-heading">
                        <div className="max-w-8xl mx-auto text-center">
                            <h2 id="core-heading" className="text-3xl text-gray-700 mb-16"><strong>CORE UNDERTAKINGS</strong></h2>
                        </div>

                        <div className={`${styles.timelineWrapper} relative max-w-6xl mx-auto`}>
                            {/* Vertical Line (Left side) */}
                            <div className={styles.timelineLine} style={{ height: '70%', top: '10%' }} />

                            <div className="flex flex-col gap-12 sm:gap-16 lg:gap-20 mb-16">
                                {coreUndertakings.map((item, index) => {
                                    const IconComponent = item.icon;
                                    return (
                                        <article
                                            key={item.id}
                                            className={`${styles.timelineItem} ${coreVisible ? styles.zoomIn : ''}`}
                                            style={{ transitionDelay: `${index * 200}ms` }}
                                        >
                                            <div className="flex items-start gap-4 sm:gap-5 lg:gap-6 group relative">
                                                {/* Icon */}
                                                <div className={`${styles.timelineIcon} group-hover:scale-110 transition-all duration-400 ease-out flex-shrink-0 relative z-10`}>
                                                    <IconComponent />
                                                </div>

                                                {/* Text */}
                                                <div className="flex-1 pt-1">
                                                    <h3 className="text-sm sm:text-base lg:text-xl font-semibold text-slate-700 uppercase mb-2 transition-colors group-hover:text-[rgb(2,126,197)]">
                                                        <strong>{item.title}</strong>
                                                    </h3>
                                                    <p className="text-xs sm:text-sm text-justify lg:text-base text-gray-500 leading-relaxed max-w-2xl">{item.description}</p>
                                                </div>
                                            </div>
                                        </article>
                                    );
                                })}
                            </div>
                        </div>
                    </section>

                </div>

                {/* Bottom banner section */}
                <section
                    className="relative py-1 sm:py-15 lg:py-20 px-4 sm:px-8 lg:px-16 text-white "
                    style={{
                        backgroundImage:
                            " url('/assets/payroll/banner-bg.png')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                    aria-label="Call to action banner"
                >
                    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6 lg:gap-8">

                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <Image
                                src="/assets/resolve-logo-2.png"
                                alt="Resolve Logo - Professional Payroll Services"
                                width={150}
                                height={48}
                                className="h-8 sm:h-10 lg:h-12 w-auto"
                                style={{ filter: 'brightness(0) invert(1)' }}
                                loading="lazy"
                            />
                        </div>

                        {/* Text Content */}
                        <div className="flex-1 text-center space-y-1 sm:space-y-2">
                            <p className="text-sm sm:text-base lg:text-lg xl:text-xl font-light leading-tight">
                                Let us handle your <strong>Outsource Payroll Services</strong>
                                <br />
                                so you can focus on what truly matters:
                                <br />
                                <strong>your Business!</strong>
                            </p>
                        </div>

                        {/* CTA Button */}
                        <div className="flex-shrink-0">
                            <Link href="/contact" className="inline-block bg-transparent border-2 border-white text-white font-bold uppercase text-xs sm:text-sm py-2 sm:py-2.5 px-4 sm:px-6 rounded-full hover:bg-white hover:text-[#214572] transition duration-300">
                                Request For Quote
                            </Link>
                        </div>
                    </div>
                </section>

                <div className='max-w-7xl mx-auto'>
                    {/* Unified Features Section */}
                    <section id="standout-features" className="bg-white py-16 lg:py-24 px-4 sm:px-8 lg:px-16" aria-labelledby="features-heading">
                        <div className="max-w-7xl mx-auto">
                            {/* Section Title */}
                            <h2 id="features-heading" className="text-xl sm:text-2xl lg:text-3xl text-gray-700 mb-12 lg:mb-16 text-center">
                                <strong>STANDOUT FEATURES</strong>
                            </h2>

                            {/* Features Grid - 6 Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                                {allFeatures.map((feature, index) => {
                                    const IconComponent = feature.icon;
                                    return (
                                        <article
                                            key={feature.id}
                                            className={`group cursor-pointer transition-all duration-500 transform hover:scale-105 ${featuresVisible
                                                ? 'translate-y-0 opacity-100'
                                                : 'translate-y-20 opacity-0'
                                                }`}
                                            style={{
                                                transitionDelay: `${index * 10}ms`
                                            }}
                                        >
                                            {/* Card Container */}
                                            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 lg:p-8 border border-gray-100 h-full flex flex-col" style={{ borderColor: 'inherit' }} onMouseEnter={(e) => e.target.style.borderColor = 'rgb(2, 126, 197)'} onMouseLeave={(e) => e.target.style.borderColor = 'inherit'}>
                                                {/* Icon */}
                                                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl mx-auto" style={{ backgroundColor: 'rgb(2, 126, 197)' }}>
                                                    <IconComponent
                                                        className="text-white text-xl lg:text-2xl group-hover:text-blue-100 transition-colors duration-300"
                                                        size={28}
                                                    />
                                                </div>

                                                {/* Content */}
                                                <div className="text-center flex-1 flex  flex-col justify-center">
                                                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-700 mb-3 lg:mb-4 uppercase tracking-wide transition-colors duration-300 leading-tight group-hover:text-[rgb(2,126,197)]">
                                                        <strong>{feature.title}</strong>
                                                    </h3>

                                                    <p className="text-sm sm:text-sm lg:text-base text-justify text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                                                        {feature.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </article>
                                    );
                                })}
                            </div>
                        </div>
                    </section>

                    {/* Blogs Section */}
                    <section id="blogs-section" className="bg-white py-16 lg:py-24 px-4 sm:px-8 lg:px-16" aria-labelledby="blogs-heading">
                        <div className="max-w-7xl mx-auto w-full">
                            {/* Section Title */}
                            <h2 id="blogs-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-700 mb-12 lg:mb-16 text-center">
                                <strong>BLOGS</strong>
                            </h2>

                            {/* Blog Posts Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                                {blogPosts.map((blog, index) => (
                                    <article
                                        key={blog.id}
                                        className={`group cursor-pointer transition-all duration-400 transform hover:scale-105 ${blogsVisible
                                            ? 'translate-y-0 opacity-100'
                                            : 'translate-y-20 opacity-0'
                                            }`}
                                        style={{
                                            transitionDelay: `${index * 200}ms`
                                        }}
                                    >
                                        {/* Blog Card Container */}
                                        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-700 h-full flex flex-col">
                                            {/* Blog Image */}
                                            <div className="relative h-40 sm:h-44 overflow-hidden bg-gray-100">
                                                <Image
                                                    src={blog.image}
                                                    alt={blog.title}
                                                    width={400}
                                                    height={300}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                    loading="lazy"
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                    onError={(e) => {
                                                        if (blog.fallbackImage) {
                                                            e.target.src = blog.fallbackImage;
                                                        } else {
                                                            e.target.style.display = 'none';
                                                            e.target.nextSibling.style.display = 'flex';
                                                        }
                                                    }}
                                                />

                                                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-500 text-sm" style={{ display: 'none' }}>
                                                    Image not available
                                                </div>
                                                {/* <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div> */}
                                            </div>

                                            {/* Blog Content */}
                                            <div className="p-5 lg:p-6 flex-1 flex flex-col">
                                                {/* Title */}
                                                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-700 mb-3 text-center transition-colors duration-300 leading-tight group-hover:text-[rgb(2,126,197)]">
                                                    <strong>{blog.title}</strong>
                                                </h3>

                                                {/* Description */}
                                                <p className="text-sm text-justify sm:text-sm lg:text-base text-gray-600 leading-relaxed mb-4 flex-1 group-hover:text-gray-700 text-center transition-colors duration-300 line-clamp-5 overflow-hidden min-h-[80px]">
                                                    {blog.description}
                                                </p>
                                                {/* Button */}
                                                <Link href="/contact" className="inline-block w-full text-center text-white font-semibold py-2.5 lg:py-3 px-5 lg:px-6 rounded-lg text-sm transition-all duration-300 group-hover:shadow-lg transform group-hover:-translate-y-1 hover:bg-[rgb(1,101,158)]" style={{ backgroundColor: 'rgb(2, 126, 197)' }}>
                                                    {blog.buttonText}
                                                </Link>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </section>

                </div>
            </main>
        </>
    );
};


export default React.memo(ManagedPayrollServices);