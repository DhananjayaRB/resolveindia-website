'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { FaHome, FaArrowLeft, FaSearch } from 'react-icons/fa';

const NotFound = ({ 
  title = "Page Not Found", 
  message = "The page you're looking for doesn't exist or has been moved.", 
  showHomeButton = true, 
  showBackButton = true, 
  showSearchButton = true 
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center animate-fade-in">
          {/* Company Logo */}
          <div className="flex justify-center mb-8">
            <Image
              src="/assets/landingPageImage/logo.png"
              alt="ResolveBiz Logo"
              width={150}
              height={75}
              className="object-contain"
            />
          </div>

          {/* 404 Icon */}
          <div className="mb-8 animate-scale-in">
            <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-[#007dc5]">
              <span className="text-4xl font-bold text-white">404</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4 animate-fade-in-delay">
            {title}
          </h1>

          {/* Message */}
          <p className="text-gray-600 mb-8 animate-fade-in-delay-2">
            {message}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-3">
            {showHomeButton && (
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#007dc5] hover:bg-[#005a8f] transition-colors duration-200"
              >
                <FaHome className="mr-2" />
                Go Home
              </Link>
            )}

            {showBackButton && (
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                <FaArrowLeft className="mr-2" />
                Go Back
              </button>
            )}

            {showSearchButton && (
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                <FaSearch className="mr-2" />
                Contact Us
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

NotFound.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  showHomeButton: PropTypes.bool,
  showBackButton: PropTypes.bool,
  showSearchButton: PropTypes.bool,
};
