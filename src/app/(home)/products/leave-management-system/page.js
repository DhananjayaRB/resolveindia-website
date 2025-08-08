"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import { IoChevronBack, IoChevronForward ,
    IoCheckmarkCircleOutline,
    IoCalendarOutline,
    IoBusinessOutline,
    IoLaptopOutline,
    IoDocumentTextOutline,
    IoEyeOutline,
    IoTimeOutline,
    IoThumbsUpOutline,
    IoDesktopOutline,
    IoPersonOutline,
    IoBriefcaseOutline,
    IoBicycleOutline
} from "react-icons/io5";

import MobileSliderModal from "../../../components/MobileSliderModal";
import Button from "../../../ui/Button";

import { faqData } from './faqData';
import styles from "./LeaveManagementSystem.module.scss";

  
const LeaveManagementSystem = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isButtonVisible, setIsButtonVisible] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isSliderAnimated, setIsSliderAnimated] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [animatedNumbers, setAnimatedNumbers] = useState({});
    const [hasAnimated, setHasAnimated] = useState(false);
    const sliderRef = useRef(null);
    const statsRef = useRef(null);
    const welcomeBgRef = useRef(null);

    // Core features data with professional icons
    const coreFeatures = [
        {
            id: 1,
            title: "SIMPLE",
            description: "Whatever your leave credit cycle or leave lapse rules, define your leave unit, leave types, leave policies, and leave EVERYTHING with Leave Management System.",
            icon: <IoCheckmarkCircleOutline size={32} className="text-[#007dc5]" />
        },
        {
            id: 2,
            title: "SET LEAVE RULES",
            description: "Set your Leave Units, Leave types, annual limits and other leave policies.",
            icon: <IoCalendarOutline size={32} className="text-[#007dc5]" />
        },
        {
            id: 3,
            title: "HR'S DREAM APP",
            description: "Keep track of everyone. Know who is on leave and who is not at a glance at the Leave Management App.",
            icon: <IoBusinessOutline size={32} className="text-[#007dc5]" />
        },
        {
            id: 4,
            title: "FREEDOM TO YOU",
            description: "Leave Management System supports to leave encashment. Manage PTO (Personal Time Off) and comp off with one app.",
            icon: <IoLaptopOutline size={32} className="text-[#007dc5]" />
        },
        {
            id: 5,
            title: "COMPLAINT",
            description: "Every business is supposed to have Form F & Form T at all times. Download these from Leave Management App with a tap.",
            icon: <IoDocumentTextOutline size={32} className="text-[#007dc5]" />
        },
        {
            id: 6,
            title: "COMPLETE TRANSPARENCY",
            description: "Check for all pending approvals with Leave Management's completely transparent leave process.",
            icon: <IoEyeOutline size={32} className="text-[#007dc5]" />
        }
    ];

    // Additional features data
    const additionalFeatures = [
        {
            id: 1,
            title: "ALL RECORDS ANYTIME",
            description: "Leave Management System brings the power to you. Know how many employees have Requested leave, their Reason for leave, leave approved or not, and much more.",
            icon: IoTimeOutline,
            seoTitle: "Real-time Leave Records Access"
        },
        {
            id: 2,
            title: "CLOUD SERVICE",
            description: "Leave Management Software is hosted on Tier III Cloud with best in class infrastructure and is completely secure. 24/7 around the clock customer service guaranteed.",
            icon: IoThumbsUpOutline,
            seoTitle: "Secure Cloud-Based Leave Management"
        },
        {
            id: 3,
            title: "ONE OF A KIND UI",
            description: "Leave Management App is available for Android, iOS and as a web-based browser application. The SaaS application boasts a great user interface and can be access across devices.",
            icon: IoDesktopOutline,
            seoTitle: "Cross-Platform Leave Management Interface"
        },
        {
            id: 4,
            title: "LEAVE PROFILING",
            description: "Profile your employee based on their leaves according to their highest/lowest banding. With Leave Management System, get insights from Leave analytics & Leave Trends.",
            icon: IoPersonOutline,
            seoTitle: "Employee Leave Analytics and Profiling"
        }
    ];

    // Statistics data
    const statisticsData = [
        {
            id: 1,
            number: "3680",
            description: "Resolve Existing Users",
            icon: IoPersonOutline,
            seoTitle: "Resolve Leave Management System Users"
        },
        {
            id: 2,
            number: "50%",
            description: "Reduction in Unplanned Leaves",
            icon: IoBriefcaseOutline,
            seoTitle: "Unplanned Leave Reduction Statistics"
        },
        {
            id: 3,
            number: "80%",
            description: "Reduction in no Shows",
            icon: IoBicycleOutline,
            seoTitle: "No Show Reduction Metrics"
        },
        {
            id: 4,
            number: "100%",
            description: "Reduction in Leave Reconciliation",
            icon: IoCalendarOutline,
            seoTitle: "Leave Reconciliation Efficiency"
        }
    ];

    // Testimonial data
    const testimonials = [
        {
            id: 1,
            name: "PRIYANKA SHRIVASTAV",
            title: "HR Manager",
            quote: "With Leave Management System, we are able to track all the aspects of the leave process. No more wasting of time by reaching out to employees in person and asking who is on leave and who is not."
        },
        {
            id: 2,
            name: "RAHUL KUMAR",
            title: "Operations Director",
            quote: "The automated leave tracking has transformed our HR operations. We now have complete visibility into leave patterns and can make better workforce planning decisions."
        },
        {
            id: 3,
            name: "ANITA PATEL",
            title: "Senior HR Executive",
            quote: "The system is incredibly user-friendly and has significantly reduced our administrative workload. Employees love the self-service features and real-time updates."
        }
    ];

    // Pricing plans data - Dynamic and extensible
    const pricingPlans = [
        {
            id: 1,
            name: "BASE VERSION",
            price: "Rs.500",
            userLimit: "up to 33 users",
            features: [
                "Rs. 15/User/Month (from 34th user)",
                "Minimum Rs. 500/Month/Legal Entity",
                "GST @ 18% Additional",
                "Web and mobile login",
                "Compliance report"
            ],
            isPopular: false,
            buttonText: "ORDER NOW",
            buttonLink: "/contact"
        },
        // Future plans can be added here
        {
            id: 2,
            name: "PREMIUM VERSION",
            price: "Rs.800",
            userLimit: "up to 50 users",
            features: [
                "Rs. 12/User/Month (from 51st user)",
                "Minimum Rs. 800/Month/Legal Entity",
                "GST @ 18% Additional",
                "Web and mobile login",
                "Compliance report",
                "Advanced analytics",
                "Priority support"
            ],
            isPopular: true,
            buttonText: "ORDER NOW",
            buttonLink: "/contact"
        }
    ];

    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [isChanging, setIsChanging] = useState(false);

    // Auto-play slider
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % 6);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, []);

    // Scroll detection for slider animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isSliderAnimated) {
                    setIsSliderAnimated(true);
                }
            },
            {
                threshold: 0.3, // Trigger when 30% of the element is visible
                rootMargin: '0px 0px -100px 0px'
            }
        );

        if (sliderRef.current) {
            observer.observe(sliderRef.current);
        }

        return () => {
            if (sliderRef.current) {
                observer.unobserve(sliderRef.current);
            }
        };
    }, [isSliderAnimated]);

    // Intersection Observer for statistics animation
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !hasAnimated) {
                // Start counting animation for each statistic only once
                statisticsData.forEach((stat) => {
                    animateNumber(stat.id, stat.number);
                });
                setHasAnimated(true); // Mark as animated so it won't run again
            }
        }, { threshold: 0.3, rootMargin: '0px 0px -100px 0px' });

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => {
            if (statsRef.current) {
                observer.unobserve(statsRef.current);
            }
        };
    }, [hasAnimated]);

    // Parallax scrolling effect for welcome section
    useEffect(() => {
        const handleScroll = () => {
            if (!welcomeBgRef.current) return;

            const scrolled = window.scrollY;
            const sectionTop = welcomeBgRef.current.offsetTop;
            const sectionHeight = welcomeBgRef.current.offsetHeight;
            const windowHeight = window.innerHeight;

            // Only animate when section is in viewport
            if (scrolled + windowHeight > sectionTop && scrolled < sectionTop + sectionHeight) {
                const rate = (scrolled - sectionTop) * 0.3;
                welcomeBgRef.current.style.transform = `translateY(${rate}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Mechanical odometer animation function
    const animateNumber = (id, targetNumber) => {
        // Extract numeric value from target number (remove % and convert to number)
        const numericValue = parseInt(targetNumber.toString().replace(/[^\d]/g, ''));
        const duration = 3000; // 3 seconds
        const steps = 120; // More steps for smoother rolling
        const increment = numericValue / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= numericValue) {
                current = numericValue;
                clearInterval(timer);
            }

            setAnimatedNumbers(prev => ({
                ...prev,
                [id]: Math.floor(current)
            }));
        }, duration / steps);
    };

    // Function to create rolling digit display
    const createRollingDigits = (statId, targetNumber) => {
        const currentValue = animatedNumbers[statId] !== undefined ? animatedNumbers[statId] : 0;
        const currentStr = currentValue.toString();
        const numericValue = parseInt(targetNumber.toString().replace(/[^\d]/g, ''));
        const targetStr = numericValue.toString();
        const maxLength = Math.max(currentStr.length, targetStr.length);

        return Array.from({ length: maxLength }, (_, index) => {
            const currentDigit = parseInt(currentStr[currentStr.length - maxLength + index] || '0');
            const isAnimating = animatedNumbers[statId] !== undefined;

            return (
                <span key={index} className={`inline-block ${styles.digitContainer}`}>
                    <span className={`${styles.digitRoll} ${isAnimating ? styles.rolling : ''}`}>
                        {currentDigit}
                    </span>
                </span>
            );
        });
    };

    useEffect(() => {
        // Trigger h1 and p animation first
        const timer1 = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        // Trigger button animation after a delay
        const timer2 = setTimeout(() => {
            setIsButtonVisible(true);
        }, 600); // 500ms delay after h1/p animation starts

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    const [openFAQ, setOpenFAQ] = useState(null);
 
    const toggleFAQ = (id) => {
        setOpenFAQ(openFAQ === id ? null : id);
    };


    return (
        
        <main>
            {/* Hero Section */}
            <section
                className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
                style={{
                    backgroundImage: "url('/assets/leave/hero-bg-leave.png')",
                    backgroundSize: 'cover',
                    // backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >

                {/* Content Container */}
                <div className="relative z-10 container mx-auto px-10 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">

                        {/* Left Side: Text Content */}
                        <div className="w-full lg:w-5/9 space-y-5 pl-5 ">
                            <h1
                                className={`text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight pb-5 transition-all duration-500 ease-out ${isVisible
                                    ? 'opacity-100 translate-x-0'
                                    : 'opacity-0 -translate-x-8'
                                    }`}
                            >
                                Real-Time Leave Records in
                                Leave Management System
                            </h1>

                            <p
                                className={`text-base sm:text-lg lg:text-xl text-blue-100 leading-relaxed max-w-2xl line-height-5 transition-all duration-500 ease-out delay-100 ${isVisible
                                    ? 'opacity-100 translate-x-0'
                                    : 'opacity-0 -translate-x-8'
                                    }`}
                            >
                                Leave Management System automates everything from leave accounting, grants, to period closing activities.
                            </p>

                            <div
                                className={`pt-2 transition-all duration-300 ease-out delay-100 ${isButtonVisible
                                    ? 'opacity-100 translate-x-0'
                                    : 'opacity-0 -translate-x-8'
                                    }`}
                            >
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center px-6 py-3 text-base font-semibold text-white bg-[rgb(2,126,197)] rounded-lg transition-all duration-300 hover:bg-[rgb(1,100,160)] hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300/50"
                                    aria-label="Schedule a demo for Leave Management System"
                                >
                                    Schedule a Demo
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Core Features Section */}
            <section className="py-16 bg-white ">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Title */}
                    <header className="text-center mb-18">
                        <h2 className="text-xl sm:text-2xl lg:text-3xl text-[#204e69] mb-10">
                            CORE FEATURES
                        </h2>
                    </header>

                    {/* Main Content */}
                    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

                        {/* Left Column - Features */}
                        <article className="w-full lg:w-1/3 space-y-3">
                            {coreFeatures.slice(0, 3).map((feature) => (
                                <div
                                    key={feature.id}
                                    className="group hover:bg-gray-50 p-4 rounded-lg transition-all duration-300"
                                >
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 mt-1">{feature.icon}</div>
                                        <div>
                                            <h3 className="text-lg font-bold text-[#204e69] mb-2 pt-2 group-hover:text-[#007dc5] transition-colors">
                                                {feature.title}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </article>

                        {/* Center - Mobile Slider */}
                        <div
                            ref={sliderRef}
                            className={`w-full lg:w-1/3 flex flex-col items-center group transition-all duration-500 ease-out ${isSliderAnimated
                                ? 'opacity-100 scale-100 translate-y-0'
                                : 'opacity-0 scale-75 translate-y-16'
                                }`}
                        >
                            <div className="relative">
                                {/* Mobile Frame with enhanced bubble and jump animation */}
                                <div
                                    className={`relative w-80 h-[500px] overflow-hidden transition-all duration-800 ease-out cursor-pointer hover:scale-105 ${isSliderAnimated
                                        ? `scale-100 rotate-0 ${styles.bounceSubtle}`
                                        : 'scale-50 rotate-12 translate-y-32'
                                        }`}
                                    onClick={() => setIsModalOpen(true)}
                                >
                                    {/* Mobile Screen Content */}
                                    <div className="w-full h-full relative">
                                        <Image
                                            src={`/assets/leave/core-feature-${currentSlide + 1}.png`}
                                            alt={`Core feature ${currentSlide + 1}`}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            className="object-cover"
                                            priority={currentSlide === 0}
                                        />
                                    </div>



                                </div>

                                {/* Navigation Arrows */}
                                <Button
                                    className="absolute -left-6 top-1/2 transform -translate-y-1/2 bg-white p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#007dc5] hover:text-white"
                                    aria-label="Previous slide"
                                    onClick={() => setCurrentSlide((prev) => (prev - 1 + 6) % 6)}
                                >
                                    <IoChevronBack size={20} />
                                </Button>
                                <Button
                                    className="absolute -right-3 top-1/2 transform -translate-y-1/2 bg-white p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#007dc5] hover:text-white"
                                    aria-label="Next slide"
                                    onClick={() => setCurrentSlide((prev) => (prev + 1) % 6)}
                                >
                                    <IoChevronForward size={20} />
                                </Button>
                            </div>

                            {/* Pagination Dots with delayed jump effect */}
                            <div className={`flex space-x-2 mt-6 transition-all duration-700 ease-out delay-500 ${isSliderAnimated
                                ? `opacity-100 translate-y-0 ${styles.bounceSubtleDelayed}`
                                : 'opacity-0 translate-y-8'
                                }`}>
                                {[0, 1, 2, 3, 4, 5].map((index) => (
                                    <Button
                                        key={index}
                                        className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide
                                            ? 'bg-[#007dc5]'
                                            : 'bg-gray-300'
                                            }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                        onClick={() => setCurrentSlide(index)}
                                    />
                                ))}
                            </div>

                            {/* Click to view text */}
                            <p className="text-sm text-gray-500 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Click to view full demo
                            </p>
                        </div>

                        {/* Right Column - Features */}
                        <article className="w-full lg:w-1/3 space-y-1">
                            {coreFeatures.slice(3, 6).map((feature) => (
                                <div
                                    key={feature.id}
                                    className="group hover:bg-gray-50 p-4 rounded-lg transition-all duration-300"
                                >
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 mt-1">{feature.icon}</div>
                                        <div>
                                            <h3 className="text-lg font-bold text-[#204e69] mb-2 pt-2 group-hover:text-[#007dc5] transition-colors">
                                                {feature.title}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </article>
                    </div>
                </div>
            </section>

            {/* Mobile Slider Modal */}
            <MobileSliderModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />

            {/* Additional Features Section */}
            <section
                className="py-16 pb-32 relative overflow-hidden"
                style={{
                    backgroundImage: "url('/assets/leave/additional-feature-bg-leave.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >


                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Section Header */}
                    <header className="text-center mb-12">
                        <h2 className="text-xl sm:text-2xl lg:text-3xl text-white mb-4 tracking-tight">
                            ADDITIONAL FEATURES
                        </h2>
                        <p className="text-sm sm:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
                            WHAT SETS RESOLVE LEAVE APART FROM OTHERS?
                        </p>
                    </header>

                    {/* Feature Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6" >
                        {additionalFeatures.map((feature) => {
                            const IconComponent = feature.icon;
                            return (
                                <article
                                    key={feature.id}
                                    className="group relative rounded-xl p-6 text-center hover:bg-[#E6E6E6] hover:transform hover:scale-105 transition-all duration-500 ease-out border border-white border-opacity-10 hover:border-opacity-20"
                                >
                                    {/* Icon Container */}
                                    <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center group-hover:bg-opacity-20 group-hover:bg-[#007dc5] transition-all duration-500 ease-out">
                                        <IconComponent
                                            size={28}
                                            className="text-white group-hover:text-white transition-all duration-500 ease-out"
                                        />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-sm lg:text-lg font-bold text-white mb-3 group-hover:text-[#007dc5] transition-all duration-500 ease-out leading-tight">
                                        {feature.title}
                                    </h3>

                                    <p className="text-blue-100 leading-relaxed text-xs lg:text-sm group-hover:text-white transition-all duration-500 ease-out">
                                        {feature.description}
                                    </p>

                                    {/* SEO-friendly hidden content */}
                                    <span className="sr-only">
                                        {feature.seoTitle}: {feature.description}
                                    </span>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Single Leave Application Section */}
            <section className="py-5 ">
                <div className="container flex justify-center">
                    <Image 
                        src="/assets/leave/Single-Leave.png" 
                        alt="Leave Application" 
                        width={1000} 
                        height={1000}
                        className="w-auto h-auto max-w-full object-contain"
                    />
                </div>
            </section>

            {/* Statistics Section */}
            <section ref={statsRef} className="py-10 pb-30 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <header className="text-center mb-16">
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#204e69] mb-6">
                            WE ARE PROUD TO SHOW NUMBERS
                        </h2>
                    </header>

                    {/* Statistics Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {statisticsData.map((stat) => {
                            const IconComponent = stat.icon;
                            return (
                                <article
                                    key={stat.id}
                                    className="group relative bg-[#20B2AA] rounded-lg p-8 text-center hover:bg-[#E6E6E6] transition-all duration-300 shadow-lg"
                                >
                                    {/* Icon */}
                                    <div className="w-16 h-16 mx-auto mb-6 bg-white rounded-full flex items-center justify-center group-hover:bg-[#008ACC] transition-all duration-300">
                                        <IconComponent
                                            size={32}
                                            className="text-[#20B2AA] group-hover:text-white transition-all duration-300"
                                        />
                                    </div>

                                    {/* Number */}
                                    <h3 className={`text-4xl font-bold text-white mb-4 group-hover:text-[#008ACC] transition-all duration-300 ${styles.mechanicalMeter}`}>
                                        <span className={`inline-block ${styles.meterRoll}`}>
                                            {createRollingDigits(stat.id, stat.number)}
                                            {stat.number.toString().includes('%') && (
                                                <span className={styles.percentageSign}>%</span>
                                            )}
                                        </span>
                                    </h3>

                                    {/* Description */}
                                    <p className="text-white font-large mb-5 text-2xl group-hover:text-[#008ACC] transition-all duration-300">
                                        {stat.description}
                                    </p>

                                    {/* Bottom Curve */}
                                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-2 bg-transparent border-t-10 border-white rounded-t-full" />

                                    {/* SEO-friendly hidden content */}
                                    <span className="sr-only">
                                        {stat.seoTitle}: {stat.number} {stat.description}
                                    </span>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Welcome Section */}
            <section className="relative py-20 overflow-hidden">
                {/* Parallax Background */}
                <div
                    ref={welcomeBgRef}
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transform-gpu"
                    style={{
                        backgroundImage: "url('/assets/leave/welcome-bg-leave.png')",
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        transform: 'translateZ(0)',
                        willChange: 'transform'
                    }}
                />

                {/* Foreground Content */}
                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-6 w-full max-w-7xl">
                        {/* Left Side - Image (Bigger) */}
                        <div className="w-full lg:w-2/5 flex justify-center lg:justify-start">
                            <div className="relative">
                                <Image
                                    src="/assets/leave/Leave-apps.png"
                                    alt="Leave Management System Mobile App"
                                    width={500}
                                    height={700}
                                    className="w-auto h-auto max-w-full max-h-[600px] object-contain"
                                />
                            </div>
                        </div>

                        {/* Right Side - Text (Left Aligned) */}
                        <div className="w-full lg:w-3/5 space-y-6 text-white lg:text-left">
                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight">
                                WELCOME LABOUR INSPECTORS WITH A SMILE
                            </h2>
                            <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-200 max-w-2xl">
                                NOW YOU CAN GREET LABOUR OFFICERS WITH A SMILE AS YOU PROVIDE ALL THE STATUTORY FORM F & T WITH A SINGLE TAP ON LEAVE MANAGEMENT SYSTEM.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Get Social Section */}
            <section className="min-h-screen flex items-center justify-center bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        {/* Section Heading */}
                        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#204e69] mb-6">
                            GET SOCIAL
                        </h2>

                        {/* Description */}
                        <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto">
                            WE BELIEVE WE ARE BUILDING A GREAT PRODUCT FOR YOU TO USE AND SHARE WITH THOSE WHO ARE IMPORTANT TO YOU.
                        </p>

                        {/* Social Media Icons */}
                        <div className="flex justify-center items-center space-x-8">
                            {/* Facebook */}
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group transition-all duration-300 hover:scale-110"
                                aria-label="Follow us on Facebook"
                            >
                                <div className="w-12 h-12 flex items-center justify-center group-hover:text-[#1877F2] transition-colors duration-300">
                                    <svg className="w-8 h-8 text-gray-600 group-hover:text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </div>
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group transition-all duration-300 hover:scale-110"
                                aria-label="Follow us on LinkedIn"
                            >
                                <div className="w-12 h-12 flex items-center justify-center group-hover:text-[#0A66C2] transition-colors duration-300">
                                    <svg className="w-8 h-8 text-gray-600 group-hover:text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </div>
                            </a>

                            {/* Twitter */}
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group transition-all duration-300 hover:scale-110"
                                aria-label="Follow us on Twitter"
                            >
                                <div className="w-12 h-12 flex items-center justify-center group-hover:text-[#1DA1F2] transition-colors duration-300">
                                    <svg className="w-8 h-8 text-gray-600 group-hover:text-[#1DA1F2]" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                    </svg>
                                </div>
                            </a>

                            {/* Instagram */}
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group transition-all duration-300 hover:scale-110"
                                aria-label="Follow us on Instagram"
                            >
                                <div className="w-12 h-12 flex items-center justify-center group-hover:text-[#E4405F] transition-colors duration-300">
                                    <svg className="w-8 h-8 text-gray-600 group-hover:text-[#E4405F]" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </div>
                            </a>
                        </div>

                        {/* SEO-friendly hidden content */}
                        <div className="sr-only">
                            <h3>Connect with Resolve India on Social Media</h3>
                            <p>Follow us on Facebook, LinkedIn, Twitter, and Instagram for the latest updates on our Leave Management System and other HR solutions.</p>
                            <ul>
                                <li>Facebook: Get updates and connect with our community</li>
                                <li>LinkedIn: Professional networking and business insights</li>
                                <li>Twitter: Real-time updates and industry news</li>
                                <li>Instagram: Visual content and behind-the-scenes</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonial Slider Section */}
            <section className="relative py-20 overflow-hidden" aria-label="Customer Testimonials">
                {/* Structured Data for SEO */}
                <script
                    type="application/ld+json"
               
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "ItemList",
                            "name": "Customer Testimonials",
                            "description": "Real feedback from HR professionals using our Leave Management System",
                            "itemListElement": testimonials.map((testimonial, index) => ({
                                "@type": "Review",
                                "position": index + 1,
                                "author": {
                                    "@type": "Person",
                                    "name": testimonial.name,
                                    "jobTitle": testimonial.title
                                },
                                "reviewBody": testimonial.quote,
                                "itemReviewed": {
                                    "@type": "SoftwareApplication",
                                    "name": "Leave Management System",
                                    "applicationCategory": "BusinessApplication",
                                    "operatingSystem": "Web, iOS, Android"
                                }
                            }))
                        })
                    }}
                />

                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/assets/leave/HR-review-bg-leave.png')",
                        backgroundPosition: 'center',
                        backgroundSize: 'cover'
                    }}
                    aria-hidden="true"
                 />

                {/* Navigation Arrows - Positioned at the extreme edges of the section */}
                <Button
                    onClick={() => {
                        setIsChanging(true);
                        setTimeout(() => {
                            setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
                            setIsChanging(false);
                        }, 150);
                    }}
                    className={`absolute left-4 lg:left-8 top-1/2 transform -translate-y-1/2 rounded-full p-2 transition-all duration-300 group z-20 hover:bg-yellow-200 hover:text-black ${styles.arrowHoverLeft}`}
                    aria-label="Previous testimonial"
                    type="button"
                >
                    <svg className="w-10 h-10 text-white group-hover:text-black transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </Button>

                <Button
                    onClick={() => {
                        setIsChanging(true);
                        setTimeout(() => {
                            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
                            setIsChanging(false);
                        }, 150);
                    }}
                    className={`absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 rounded-full p-2 transition-all duration-300 group z-20 hover:bg-yellow-200 hover:text-black ${styles.arrowHoverRight}`}
                    aria-label="Next testimonial"
                    type="button"
                >
                    <svg className="w-10 h-10 text-white group-hover:text-black transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </Button>

                {/* Content Container */}
                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        {/* Section Header for SEO */}
                        <header className="sr-only">
                            <h2>Customer Testimonials</h2>
                            <p>Real feedback from HR professionals using our Leave Management System</p>
                        </header>

                        {/* Testimonial Content */}
                        <article className="relative">
                            {/* Testimonial Content */}
                            <div className={`py-12 px-8 relative ${isChanging ? styles.testimonialSlideOut : styles.testimonialSlideIn}`}>
                                {/* Decorative Quote Icon - Larger and more prominent */}
                                <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 text-6xl sm:text-7xl lg:text-8xl text-yellow-400 font-serif opacity-80 ${styles.quotePulse}`}>
                                    &ldquo;
                                </div>

                                {/* Name and Title */}
                                <div className="mb-8 mt-8">
                                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
                                        {testimonials[currentTestimonial].name}
                                    </h3>
                                    <p className="text-blue-200 text-lg font-medium">
                                        {testimonials[currentTestimonial].title}
                                    </p>
                                </div>

                                {/* Quote - Smaller, more readable text */}
                                <div className="text-base sm:text-lg lg:text-xl text-white leading-relaxed mb-8 max-w-3xl mx-auto font-light">
                                    <p className="italic">
                                        {testimonials[currentTestimonial].quote}
                                    </p>
                                </div>

                                {/* Testimonial Indicators */}
                                <div className="flex justify-center space-x-2 mt-8">
                                    {testimonials.map((testimonial, index) => (
                                        <Button
                                            key={`testimonial-indicator-${testimonial.name.replace(/\s+/g, '-').toLowerCase()}`}
                                            onClick={() => {
                                                setIsChanging(true);
                                                setTimeout(() => {
                                                    setCurrentTestimonial(index);
                                                    setIsChanging(false);
                                                }, 150);
                                            }}
                                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentTestimonial
                                                ? 'bg-yellow-400 scale-125'
                                                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                                                }`}
                                            aria-label={`Go to testimonial ${index + 1}`}
                                            type="button"
                                        />
                                    ))}
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <header className="text-center mb-16">
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#204e69] mb-4">
                            PRICING PLAN
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            WE KNOW LEAVE MANAGEMENT APP IS EXACTLY WHAT YOU NEED.
                        </p>
                    </header>

                    {/* Pricing Cards Container */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-8 max-w-4xl mx-auto">
                        {pricingPlans.map((plan) => (
                            <article
                                key={plan.id}
                                className={`relative w-full max-w-sm bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col min-h-[500px] ${plan.isPopular ? 'ring-4 ring-[#007dc5] scale-105' : ''
                                    }`}
                            >
                                {/* Popular Badge */}
                                {plan.isPopular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#007dc5] text-white px-6 py-2 rounded-full text-sm font-semibold">
                                        MOST POPULAR
                                    </div>
                                )}

                                {/* Plan Header */}
                                <div className="p-4 border-b border-gray-100">
                                    <h3 className="text-lg font-bold text-[#204e69] text-center">
                                        {plan.name}
                                    </h3>
                                </div>

                                {/* Price Section */}
                                <div className="p-2 bg-[#204e69] text-white text-center">
                                    <div className="text-3xl font-bold">
                                        {plan.price}
                                    </div>
                                    <div className="text-base opacity-90">
                                        {plan.userLimit}
                                    </div>
                                </div>

                                {/* Features List */}
                                <div className="pl-6 pt-4 flex-1">
                                    <ul className="space-y-4">
                                        {plan.features.map((feature) => (
                                            <li key={`${plan.id}-feature-${feature.substring(0, 30).replace(/\s+/g, '-').toLowerCase()}`} className="flex items-start space-x-3">
                                                <div className="flex-shrink-0 mt-1">
                                                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                                <span className="text-sm text-gray-700 leading-relaxed">
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* CTA Button */}
                                <div className="p-8 pt-0">
                                    <Link
                                        href={plan.buttonLink}
                                        className={`block w-full py-2 px-6 text-center font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 ${plan.isPopular
                                            ? 'bg-[#007dc5] text-white hover:bg-[#005a8b] shadow-lg hover:shadow-xl'
                                            : 'bg-[#204e69] text-white hover:bg-[#1a3d5a] shadow-lg hover:shadow-xl'
                                            }`}
                                        aria-label={`Order ${plan.name} plan`}
                                    >
                                        {plan.buttonText}
                                    </Link>
                                </div>

                                {/* SEO-friendly hidden content */}
                                <div className="sr-only">
                                    <h4>{plan.name} Pricing Plan</h4>
                                    <p>Price: {plan.price} for {plan.userLimit}</p>
                                    <ul>
                                        {plan.features.map((feature) => (
                                            <li key={`${plan.id}-sr-feature-${feature.substring(0, 30).replace(/\s+/g, '-').toLowerCase()}`}>{feature}</li>
                                        ))}
                                    </ul>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Download App Section */}
            <section
                className="relative py-12 overflow-hidden"
                style={{
                    backgroundImage: "url('/assets/leave/download-resolveIndia-bg-leave.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >


                {/* Content Container */}
                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-5xl mx-auto">

                        {/* Text Content - Centered */}
                        <div className="space-y-3 mb-6">
                            {/* Main Heading */}
                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight tracking-wide">
                                DOWNLOAD RESOLVE LEAVE
                            </h2>

                            {/* Subtitle */}
                            <p className="text-sm sm:text-base lg:text-lg text-white leading-relaxed max-w-3xl mx-auto font-medium">
                                RESOLVE LEAVE CAN BE DOWNLOADED IN ANDROID FROM PLAY STORE AND IN IOS FROM APP STORE.
                            </p>
                        </div>

                        {/* App Store Buttons - Centered and Smaller */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                            {/* Google Play Store */}
                            <a
                                href="https://play.google.com/store/apps/details?id=com.resolve.leave"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group transition-all duration-300 hover:scale-105"
                                aria-label="Download Resolve Leave from Google Play Store"
                            >
                                <Image
                                    src="/assets/leave/google-play-store.png"
                                    alt="Get it on Google Play"
                                    width={160}
                                    height={60}
                                    className="h-10 w-auto object-contain filter brightness-100 group-hover:brightness-110 transition-all duration-300"
                                />
                            </a>

                            {/* App Store */}
                            <a
                                href="https://apps.apple.com/app/resolve-leave/id123456789"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group transition-all duration-300 hover:scale-105"
                                aria-label="Download Resolve Leave from App Store"
                            >
                                <Image
                                    src="/assets/leave/app-store.png"
                                    alt="Available on the App Store"
                                    width={160}
                                    height={60}
                                    className="h-10 w-auto object-contain filter brightness-100 group-hover:brightness-110 transition-all duration-300"
                                />
                            </a>
                        </div>


                    </div>
                </div>

                {/* SEO-friendly hidden content */}
                <div className="sr-only">
                    <h3>Download Resolve Leave Mobile App</h3>
                    <p>Get the Resolve Leave mobile application for Android and iOS devices. Available on Google Play Store and Apple App Store.</p>
                    <ul>
                        <li>Android: Download from Google Play Store</li>
                        <li>iOS: Download from Apple App Store</li>
                        <li>Features: Leave management, holiday tracking, approval system</li>
                    </ul>
                </div>
            </section>
            <section id="faq" className={styles.faqSection}>
                <div className={styles.container}>
                    <h2 className={styles.mainHeading}>FREQUENTLY ASKED QUESTIONS</h2>
                    <div className={styles.faqGrid}>
                        {faqData.map((faq) => (
                            <div key={faq.id} className={styles.faqItem}>
                                <button
                                    className={`${styles.faqQuestion} ${openFAQ === faq.id ? styles.active : ''}`}
                                    onClick={() => toggleFAQ(faq.id)}
                                >
                                    <span className={styles.questionText}>{faq.question}</span>
                                    <span className={styles.arrow}>
                                        {openFAQ === faq.id ? '−' : '+'}
                                    </span>
                                </button>
                                <div className={`${styles.faqAnswer} ${openFAQ === faq.id ? styles.open : ''}`}>
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </main>
    );
};

export default LeaveManagementSystem;
