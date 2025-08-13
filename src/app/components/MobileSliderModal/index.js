"use client";
import Image from 'next/image';
import PropTypes from 'prop-types';
import React, { useState, useEffect, useRef } from 'react';
import { IoChevronBack, IoChevronForward, IoClose, IoExpand , IoPlay, IoPause } from 'react-icons/io5';

import Button from '../../ui/Button';

const MobileSliderModal = ({ isOpen, onClose }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const autoPlayRef = useRef(null);

    // Mobile slider images data
    const mobileSlides = [
        {
            id: 1,
            title: "Leave Application",
            image: "/assets/leave/core-feature-1.png",
            description: "Simple and intuitive leave application form"
        },
        {
            id: 2,
            title: "Leave Rules Setup",
            image: "/assets/leave/core-feature-2.png",
            description: "Configure leave policies and rules"
        },
        {
            id: 3,
            title: "HR Dashboard",
            image: "/assets/leave/core-feature-3.png",
            description: "HR's dream app for leave management"
        },
        {
            id: 4,
            title: "Freedom & Flexibility",
            image: "/assets/leave/core-feature-4.png",
            description: "Manage PTO and comp off with ease"
        },
        {
            id: 5,
            title: "Compliance Forms",
            image: "/assets/leave/core-feature-5.png",
            description: "Download Form F & Form T instantly"
        },
        {
            id: 6,
            title: "Complete Transparency",
            image: "/assets/leave/core-feature-6.png",
            description: "Transparent leave approval process"
        }
    ];

    // Auto-play functionality
    useEffect(() => {
        if (isOpen && isAutoPlaying) {
            autoPlayRef.current = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % mobileSlides.length);
            }, 3000);
        }

        return () => {
            if (autoPlayRef.current) {
                clearInterval(autoPlayRef.current);
            }
        };
    }, [isOpen, isAutoPlaying, mobileSlides.length]);

    // Navigation functions
    const goToPrevious = () => {
        setCurrentSlide((prev) => (prev - 1 + mobileSlides.length) % mobileSlides.length);
    };

    const goToNext = () => {
        setCurrentSlide((prev) => (prev + 1) % mobileSlides.length);
    };

    // Handle escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop - Black transparent background */}
            <div 
                className="absolute inset-0 "
                onClick={onClose}
            />
            
            {/* Modal Content */}
            <div className="relative bg-white rounded-lg shadow-2xl w-80 h-[500px] overflow-hidden">
                {/* Header with expand and close buttons */}
                <div className="flex items-center justify-end p-4 border-b border-gray-200">
                    <Button
                        className="p-2 hover:bg-gray-100 rounded transition-colors mr-2"
                        aria-label="Expand modal"
                    >
                        <IoExpand size={20} className="text-gray-600" />
                    </Button>
                    <Button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                        aria-label="Close modal"
                    >
                        <IoClose size={20} className="text-gray-600" />
                    </Button>
                </div>

                {/* Mobile Display Container */}
                <div className="flex justify-center items-center p-8 relative">
                    {/* Large Navigation Arrow - Left */}
                    <Button
                        onClick={goToPrevious}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-4 bg-white hover:bg-gray-50 rounded-full shadow-lg transition-all duration-300 z-10"
                        aria-label="Previous slide"
                    >
                        <IoChevronBack size={24} className="text-gray-700" />
                    </Button>

                    {/* Mobile Phone Frame */}
                    <div className="relative w-80 h-[600px]  bg-white">
                        {/* Mobile Screen Content */}
                        <div className="w-full h-full relative">
                            <Image
                                src={mobileSlides[currentSlide].image}
                                alt={mobileSlides[currentSlide].title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                    {/* Large Navigation Arrow - Right */}
                    <Button
                        onClick={goToNext}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-4 bg-white hover:bg-gray-50 rounded-full shadow-lg transition-all duration-300 z-10"
                        aria-label="Next slide"
                    >
                        <IoChevronForward size={24} className="text-gray-700" />
                    </Button>
                </div>

                {/* Bottom Controls */}
                <div className="flex items-center justify-center space-x-8 pb-8 px-8">
                    {/* Play/Pause Button */}
                    <Button
                        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                        className="p-3 bg-[#007dc5] hover:bg-[#005a8f] text-white rounded-full transition-colors shadow-lg"
                        aria-label={isAutoPlaying ? 'Pause' : 'Play'}
                    >
                        {isAutoPlaying ? (
                            <IoPause size={20} />
                        ) : (
                            <IoPlay size={20} />
                        )}
                    </Button>

                    {/* Pagination */}
                    <aside className="text-lg font-semibold text-gray-700 bg-gray-100 px-4 py-2 rounded-lg">
                        {currentSlide + 1} / {mobileSlides.length}
                    </aside>

                    {/* Thumbnail Navigation */}
                    <div className="flex space-x-2">
                        {mobileSlides.map((slide, index) => (
                            <div
                                key={slide.id}
                                className={`w-12 h-16 rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${
                                    index === currentSlide
                                        ? 'border-[#007dc5] scale-110 shadow-lg'
                                        : 'border-gray-300 hover:border-gray-400'
                                }`}
                                onClick={() => setCurrentSlide(index)}
                            >
                                <Image
                                    src={slide.image}
                                    alt={slide.title}
                                    fill
                                    className="object-cover"
                                />
                                {index === currentSlide && (
                                    <div className="absolute inset-0 bg-[#007dc5] bg-opacity-20" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileSliderModal;

MobileSliderModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
}; 