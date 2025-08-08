"use client";

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FaShieldAlt, FaSyncAlt, FaMapMarkerAlt, FaComments as FaOffsite, FaUsers, FaCogs } from 'react-icons/fa';

const AccountingServices = () => {

    const [isVideoPlaying, setIsVideoPlaying] = useState(true);
    const [isTextAnimated, setIsTextAnimated] = useState(false);
    const [isButtonAnimated, setIsButtonAnimated] = useState(false);
    const [isMacBookAnimated, setIsMacBookAnimated] = useState(false);
    const [isServicesCardsAnimated, setIsServicesCardsAnimated] = useState(false);
    const [isCoreUndertakingsAnimated, setIsCoreUndertakingsAnimated] = useState(false);
    const [isBottomBannerAnimated, setIsBottomBannerAnimated] = useState(false);
    const [isStandoutFeaturesAnimated, setIsStandoutFeaturesAnimated] = useState(false);
    const videoRef = React.useRef(null);

    // Services cards data
    const servicesCards = [
        {
            id: 1,
            title: "CONNECT WITH EXPERTS",
            description: "Team comprising of CA, CS, CWA, MBA, Domain experts manage the accounting services would strive for value to the customer.",
            image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop&crop=center",
            alt: "Professional desk setup with experts",
            gradient: "from-blue-500 to-purple-600",
            hoverColor: "group-hover:text-blue-600"
        },
        {
            id: 2,
            title: "AUTOMATED PROCESS",
            description: "Deployment of in-house software tools and mobile applications in delivery of services is our differentiating factor.",
            image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop&crop=center",
            alt: "Modern office with technology setup",
            gradient: "from-green-500 to-blue-600",
            hoverColor: "group-hover:text-green-600"
        },
        {
            id: 3,
            title: "COMPLIANCE REASSURANCE",
            description: "With knowledge of Indian GAAP and Statutory requirements and periodical status reports on compliances, customer would be reassured on compliances.",
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&crop=center",
            alt: "Person working on laptop with compliance documents",
            gradient: "from-purple-500 to-pink-600",
            hoverColor: "group-hover:text-purple-600"
        }
    ];

    // Core undertakings data
    const coreUndertakings = [
        {
            id: 1,
            title: "ACCOUNTING MIS",
            description: "Monthly MIS reports with Balance Sheet, Segment-wise P&L account, Bill-wise, ageing reports on Collections and Payables, etc.",
            icon: "📊",
            iconColor: "text-orange-400",
            hoverColor: "group-hover:text-orange-400"
        },
        {
            id: 2,
            title: "SLA REPORTING",
            description: "Periodic tracking of activities with SLA and reporting of actual deliverables versus agreement to measure service performance.",
            icon: "📈",
            iconColor: "text-green-400",
            hoverColor: "group-hover:text-green-400"
        },
        {
            id: 3,
            title: "STATUTORY FILINGS",
            description: "Payment and filing would be done relating to Companies Act, Income Tax, GST, TDS, ETDS, PF, ESI, PT, Labour laws, RBI, STPI, FCRA, etc.",
            icon: "📋",
            iconColor: "text-blue-400",
            hoverColor: "group-hover:text-blue-400"
        }
    ];

    // Standout features data
    const standoutFeatures = [
        {
            id: 1,
            title: "SOFTWARE DEPLOY",
            description: "We deploy software applications and mobile applications in the services to increase efficiency of the processes with user convenience.",
            icon: <FaShieldAlt />,
            iconColor: "text-white",
            hoverColor: "group-hover:text-yellow-300"
        },
        {
            id: 2,
            title: "AUDIT SUPPORT",
            description: "We understand the requirements under Indian GAAP, IFC, ICDS, etc. and provide the support to Statutory auditors in preparation of financial statements.",
            icon: <FaSyncAlt />,
            iconColor: "text-white",
            hoverColor: "group-hover:text-yellow-300"
        },
        {
            id: 3,
            title: "COMPETITIVE COST",
            description: "Our Team with multiple skill sets and qualifications works efficiently and effectively with minimal cost.",
            icon: <FaMapMarkerAlt />,
            iconColor: "text-white",
            hoverColor: "group-hover:text-yellow-300"
        },
        {
            id: 4,
            title: "OFF-SITE SERVICES",
            description: "We provide off-site accounting services, customized to the requirements of the client. Consultation is available at any time on Call.",
            icon: <FaOffsite />,
            iconColor: "text-white",
            hoverColor: "group-hover:text-yellow-300"
        },
        {
            id: 5,
            title: "DEDICATED TEAM",
            description: "A dedicated team shall be assigned to the customer so that one-point of contact can be made for any query/clarification.",
            icon: <FaUsers />,
            iconColor: "text-white",
            hoverColor: "group-hover:text-yellow-300"
        },
        {
            id: 6,
            title: "SHARED RESOURCES",
            description: "Team comprises of shared resources and work shall be assigned on need basis.",
            icon: <FaCogs />,
            iconColor: "text-white",
            hoverColor: "group-hover:text-yellow-300"
        }
    ];

    useEffect(() => {
        const handleScroll = () => {


            // Check if Services Cards section is in view
            const servicesSection = document.getElementById('services-cards-section');
            if (servicesSection) {
                const rect = servicesSection.getBoundingClientRect();
                const isInView = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
                if (isInView && !isServicesCardsAnimated) {
                    setIsServicesCardsAnimated(true);
                }
            }

            // Check if Core Undertakings section is in view
            const coreUndertakingsSection = document.getElementById('core-undertakings-section');
            if (coreUndertakingsSection) {
                const rect = coreUndertakingsSection.getBoundingClientRect();
                const isInView = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
                if (isInView && !isCoreUndertakingsAnimated) {
                    setIsCoreUndertakingsAnimated(true);
                }
            }

            // Check if Bottom Banner section is in view
            const bottomBannerSection = document.getElementById('bottom-banner-section');
            if (bottomBannerSection) {
                const rect = bottomBannerSection.getBoundingClientRect();
                const isInView = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
                if (isInView && !isBottomBannerAnimated) {
                    setIsBottomBannerAnimated(true);
                }
            }

            // Check if Standout Features section is in view
            const standoutFeaturesSection = document.getElementById('standout-features-section');
            if (standoutFeaturesSection) {
                const rect = standoutFeaturesSection.getBoundingClientRect();
                const isInView = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
                if (isInView && !isStandoutFeaturesAnimated) {
                    setIsStandoutFeaturesAnimated(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isServicesCardsAnimated]);

    useEffect(() => {
        // Trigger MacBook animation first - show when half done
        const macBookTimer = setTimeout(() => {
            setIsMacBookAnimated(true);
        }, 150); // Reduced from 300ms

        // Trigger text animation after MacBook starts - show when half done
        const textTimer = setTimeout(() => {
            setIsTextAnimated(true);
        }, 500); // Reduced from 1000ms

        // Trigger button animation after text animation - show when half done
        const buttonTimer = setTimeout(() => {
            setIsButtonAnimated(true);
        }, 750); // Reduced from 1500ms

        return () => {
            clearTimeout(macBookTimer);
            clearTimeout(textTimer);
            clearTimeout(buttonTimer);
        };
    }, []);



    return (
        <>
            <Head>
                {/* Primary Meta Tags */}
                <title>Outsource Accounting Services | Resolve BIZ Services & Apps</title>
                <meta name="title" content="Outsource Accounting Services | Resolve BIZ Services & Apps" />
                <meta name="description" content="Professional outsourced accounting services in India. Expert CA, CS, CWA team providing MIS reports, statutory filings, audit support, and compliance assurance. Get competitive pricing and dedicated support." />
                <meta name="keywords" content="outsource accounting services, accounting outsourcing India, CA services, statutory filings, MIS reports, audit support, compliance assurance, accounting software, Indian GAAP, GST filing, TDS filing" />
                <meta name="robots" content="index, follow" />
                <meta name="language" content="English" />
                <meta name="author" content="Resolve BIZ Services & Apps" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://resolveindia.com/services/accounting-services" />
                <meta property="og:title" content="Outsource Accounting Services | Resolve BIZ Services & Apps" />
                <meta property="og:description" content="Professional outsourced accounting services in India. Expert CA, CS, CWA team providing MIS reports, statutory filings, audit support, and compliance assurance." />
                <meta property="og:image" content="https://resolveindia.com/assets/accounting-services-bg.png" />
                <meta property="og:site_name" content="Resolve BIZ Services & Apps" />
                <meta property="og:locale" content="en_US" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://resolveindia.com/services/accounting-services" />
                <meta property="twitter:title" content="Outsource Accounting Services | Resolve BIZ Services & Apps" />
                <meta property="twitter:description" content="Professional outsourced accounting services in India. Expert CA, CS, CWA team providing MIS reports, statutory filings, audit support, and compliance assurance." />
                <meta property="twitter:image" content="https://resolveindia.com/assets/accounting-services-bg.png" />

                {/* Additional SEO Meta Tags */}
                <meta name="theme-color" content="#027EC5" />
                <meta name="msapplication-TileColor" content="#027EC5" />
                <link rel="canonical" href="https://resolveindia.com/services/accounting-services" />

                {/* Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Service",
                            "name": "Outsource Accounting Services",
                            "description": "Professional outsourced accounting services including MIS reports, statutory filings, audit support, and compliance assurance.",
                            "provider": {
                                "@type": "Organization",
                                "name": "Resolve BIZ Services & Apps",
                                "url": "https://resolveindia.com"
                            },
                            "serviceType": "Accounting Services",
                            "areaServed": "India",
                            "hasOfferCatalog": {
                                "@type": "OfferCatalog",
                                "name": "Accounting Services",
                                "itemListElement": [
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Accounting MIS",
                                            "description": "Monthly MIS reports with Balance Sheet, Segment-wise P&L account, Bill-wise, ageing reports"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "SLA Reporting",
                                            "description": "Periodic tracking of activities with SLA and reporting of actual deliverables"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Statutory Filings",
                                            "description": "Payment and filing for Companies Act, Income Tax, GST, TDS, ETDS, PF, ESI, PT, Labour laws"
                                        }
                                    }
                                ]
                            },
                            "offers": {
                                "@type": "Offer",
                                "description": "Competitive pricing for professional accounting services"
                            }
                        })
                    }}
                />
            </Head>
            <main className="min-h-screen">
                {/* Hero Section with Background Image */}
                <header
                    className='pt-2 pb-6 lg:pt-4 lg:pb-16 relative overflow-hidden min-h-[80vh] flex items-center '
                    style={{
                        backgroundImage: 'url("/assets/accounting-services-bg.png")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                    aria-label="Hero section for accounting services"
                >

                    {/* Main Content */}
                    <div className="pt-[80px] px-4 sm:px-8 lg:px-16 max-w-[96rem] mx-auto w-full">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                            {/* Left Side - MacBook with Video */}
                            <div className="flex-1 flex justify-center lg:justify-start group">
                                <div className={`relative transform transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-1 ${isMacBookAnimated
                                    ? 'translate-x-0 opacity-100'
                                    : '-translate-x-full opacity-0'
                                    }`}>
                                    <Image
                                        src="/assets/macbookpro.png"
                                        alt="MacBook Pro displaying accounting software interface"
                                        width={900}
                                        height={600}
                                        className="w-full h-auto max-w-[900px]"
                                        priority
                                    />
                                    {/* Video inside MacBook screen */}
                                    <div className="absolute top-[14%] left-[17%] w-[66%] h-[69%] bg-transparent rounded-sm overflow-hidden">
                                        <video
                                            ref={videoRef}
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="w-full h-full object-cover"
                                        >
                                            <source src="/assets/Account-Video.mp4" type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>

                                        {/* Video Controls on Hover */}
                                        <div className="absolute inset-0 bg-transparent group-hover:bg-transparent transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                            <button
                                                onClick={() => {
                                                    if (isVideoPlaying) {
                                                        videoRef.current?.pause();
                                                        setIsVideoPlaying(false);
                                                    } else {
                                                        videoRef.current?.play();
                                                        setIsVideoPlaying(true);
                                                    }
                                                }}
                                                className="bg-white bg-opacity-95 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-opacity-100 transition-all duration-200 flex items-center gap-3 shadow-lg"
                                            >
                                                {isVideoPlaying ? (
                                                    <span className="text-xl">⏸️</span>
                                                ) : (
                                                    <span className="text-xl">▶️</span>
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side - Content */}
                            <div className="flex-1 text-white space-y-4 lg:space-y-8 group flex flex-col justify-center items-center text-center">
                                <div className="space-y-4 lg:space-y-6 text-center">
                                    <h1 className="text-xl sm:text-base md:text-lg lg:text-xl leading-tight group-hover:scale-105 transition-transform duration-500 flex flex-wrap justify-center" role="banner">
                                        {'OUTSOURCE ACCOUNTING SERVICES'.split('').map((char, index) => (
                                            <i
                                                key={index}
                                                className={`inline-block transform transition-all duration-400 ease-in-out not-italic ${isTextAnimated
                                                    ? 'translate-x-0 rotate-0 opacity-100'
                                                    : 'translate-x-20 rotate-12 opacity-0'
                                                    }`}
                                                style={{
                                                    transitionDelay: `${index * 50}ms`
                                                }}
                                            >
                                                {char === ' ' ? '\u00A0' : char}
                                            </i>
                                        ))}
                                    </h1>

                                    <h2 className="text-sm sm:text-base lg:text-lg text-blue-100 leading-relaxed">
                                        Your <strong>Reliable Accounting Partner</strong>
                                    </h2>

                                    <p className="text-xs sm:text-sm text-blue-200 leading-relaxed">
                                        From design of your <em>chart of accounts</em> to <strong>Insightful MIS</strong> for your decision making.
                                    </p>
                                </div>

                                <Link
                                    href="/contact"
                                    className={`inline-block text-white font-bold py-1.5 sm:py-2 px-3 sm:px-4 rounded-lg text-xs sm:text-sm transition-all duration-400 ease-in-out shadow-lg transform hover:bg-[rgb(1,101,158)] ${isButtonAnimated
                                        ? 'translate-x-0 opacity-100'
                                        : 'translate-x-20 opacity-0'
                                        }`} style={{ backgroundColor: 'rgb(2, 126, 197)' }}
                                >
                                    Request for Quote
                                </Link>
                            </div>
                        </div>
                    </div>

                    
                </header>

                {/* Services Cards Section */}
                <section id="services-cards-section" className="bg-gray-50 py-16 lg:py-24 px-4 sm:px-8 lg:px-16" aria-labelledby="services-heading">
                    <div className="max-w-7xl mx-auto">
                        <h2 id="services-heading" className="sr-only">Our Accounting Services</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">

                            {servicesCards.map((card, index) => (
                                <article
                                    key={card.id}
                                    className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-400 transform hover:-translate-y-2 group ${isServicesCardsAnimated
                                        ? 'translate-y-0 opacity-100'
                                        : 'translate-y-16 opacity-0'
                                        }`}
                                    style={{
                                        transitionDelay: `${index * 100}ms`
                                    }}
                                >
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={card.image}
                                            alt={card.alt}
                                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-6 text-center">
                                        <h3 className="text-sm sm:text-base font-bold mb-3 transition-colors duration-300 font-['Inter']" style={{ color: 'rgb(2, 126, 197)' }}>
                                            {card.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6 font-['Inter']">
                                            {card.description}
                                        </p>
                                        <Link href="/contact" className="inline-block w-full text-center text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg text-sm font-['Inter'] hover:bg-[rgb(1,101,158)]" style={{ backgroundColor: 'rgb(2, 126, 197)' }}>
                                            Request for Quote
                                        </Link>
                                    </div>
                                </article>
                            ))}

                        </div>
                    </div>
                </section>

                {/* Core Undertakings Section */}
                <section
                    id="core-undertakings-section"
                    className="py-16 lg:py-24 px-4 sm:px-8 lg:px-16 relative"
                    style={{
                        backgroundImage: 'url("/assets/core-undertaking-bg.png")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundClip: 'padding-box'
                    }}
                    aria-labelledby="core-heading"
                >
                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="text-center mb-8 lg:mb-20 -mt-8 lg:-mt-12">
                            <h2 id="core-heading" className="text-xl sm:text-2xl lg:text-3xl text-white mb-4 font-['Inter']">
                                OUR <strong>CORE UNDERTAKINGS</strong>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">

                            {coreUndertakings.map((undertaking, index) => (
                                <article key={undertaking.id} className="text-center group cursor-pointer">
                                    <div className="mb-4">
                                        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-700 transform group-hover:scale-110 ${isCoreUndertakingsAnimated
                                            ? 'scale-100 opacity-100'
                                            : 'scale-0 opacity-0'
                                            }`}
                                            style={{
                                                transitionDelay: `${index * 100}ms`,
                                                backgroundColor: 'rgb(2, 126, 197)'
                                            }}>
                                            <cite className={`text-2xl transition-colors duration-200 not-italic ${undertaking.iconColor} ${undertaking.hoverColor}`}>
                                                {undertaking.icon}
                                            </cite>
                                        </div>
                                    </div>

                                    <h3 className="text-base sm:text-lg text-white mb-3 transition-colors duration-200 font-['Inter'] group-hover:text-[rgb(2,126,197)]">
                                        <strong>{undertaking.title}</strong>
                                    </h3>

                                    <p className="text-xs sm:text-sm text-white leading-relaxed font-['Inter'] max-w-full break-words">
                                        {undertaking.description}
                                    </p>
                                </article>
                            ))}

                        </div>
                    </div>
                </section>

                {/* Bottom Banner Section */}
                <section id="bottom-banner-section" className="bg-white py-12 lg:py-16 px-4 sm:px-8 lg:px-16 relative" aria-label="Call to action banner">
                    {/* Top gradient bar */}


                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                            {/* Left Side - Logo */}
                            <div className="flex-shrink-0">
                                <Image
                                    src="/assets/resolve-logo-2.png"
                                    alt="Resolve BIZ Services & Apps - Professional Accounting Services"
                                    width={200}
                                    height={48}
                                    className="h-12 lg:h-12 w-auto"
                                />
                            </div>

                            {/* Center - Tagline */}
                            <div className="flex-1 text-center">
                                <p className="text-sm sm:text-base lg:text-lg leading-relaxed font-medium font-['Inter']" style={{ color: 'rgb(2, 126, 197)' }}>
                                    Let us handle your <strong>accounting function</strong> so that you can focus on what truly matters: <em>Your business!</em> <strong>Enquire Now.</strong>
                                </p>
                            </div>

                            {/* Right Side - CTA Button */}
                            <div className="flex-shrink-0">
                                <Link href="/contact" className={`inline-block text-white font-semibold py-3 px-6 rounded-lg transition-all duration-700 transform hover:scale-105 shadow-md hover:shadow-lg text-sm lg:text-base font-['Inter'] hover:bg-[rgb(1,101,158)] ${isBottomBannerAnimated
                                    ? 'translate-x-0 opacity-100'
                                    : 'translate-x-16 opacity-0'
                                    }`} style={{ backgroundColor: 'rgb(2, 126, 197)' }}>
                                    Request a Quote
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Standout Features Section */}
                <section
                    id="standout-features-section"
                    className="py-16 lg:py-24 px-4 sm:px-8 lg:px-16 relative"
                    style={{
                        backgroundImage: 'url("/assets/contact-us.png")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                    aria-labelledby="features-heading"
                >
                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="text-center mb-12 lg:mb-16">
                            <h2 id="features-heading" className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 font-['Inter']">
                                OUR <strong>STANDOUT FEATURES</strong>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                            {standoutFeatures.map((feature, index) => (
                                <article key={feature.id} className="text-center group cursor-pointer p-6 rounded-lg transition-all duration-300 hover:bg-[#5E936C] hover:bg-opacity-20 hover:shadow-lg">
                                    <div className="mb-6">
                                        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-700 transform group-hover:scale-110 ${isStandoutFeaturesAnimated
                                            ? 'scale-100 opacity-100'
                                            : 'scale-0 opacity-0'
                                            }`}
                                            style={{
                                                transitionDelay: `${index * 200}ms`,
                                                backgroundColor: 'rgb(2, 126, 197)'
                                            }}>
                                            <cite className={`text-2xl transition-colors duration-300 not-italic ${feature.iconColor} ${feature.hoverColor}`}>
                                                {feature.icon}
                                            </cite>
                                        </div>
                                    </div>

                                    <h3 className="text-lg sm:text-xl font-bold text-white mb-4 transition-colors duration-300 font-['Inter'] group-hover:text-[rgb(2,126,197)]">
                                        <strong>{feature.title}</strong>
                                    </h3>

                                    <p className="text-sm sm:text-base text-white leading-relaxed font-['Inter']">
                                        {feature.description}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

            </main>
        </>
    );
};

export default AccountingServices;
