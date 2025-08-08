'use client';
import React from 'react';
import Link from 'next/link';
import { FaLinkedin, FaTwitter, FaFacebook, FaYoutube, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const AttendanceFooter = () => {
  return (
    <footer className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Leftmost Section - Logo, App Store Badges, Social Media */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[rgb(2,126,197)] rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">WORK</h3>
                <p className="text-sm text-gray-600">ATTENDANCE ANYWHERE</p>
              </div>
            </div>

            {/* App Store Badges */}
            <div className="space-y-3">
              <Link 
                href="#" 
                className="block w-full bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                aria-label="Download from Google Play Store"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-white rounded-sm flex-shrink-0"></div>
                  <div className="text-left">
                    <div className="text-xs opacity-90">Get it on</div>
                    <div className="text-sm font-medium">Google Play</div>
                  </div>
                </div>
              </Link>
              
              <Link 
                href="#" 
                className="block w-full bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                aria-label="Download from Apple App Store"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-white rounded-sm flex-shrink-0"></div>
                  <div className="text-left">
                    <div className="text-xs opacity-90">Available on the</div>
                    <div className="text-sm font-medium">App Store</div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-3">
              <Link 
                href="#" 
                className="w-10 h-10 bg-[rgb(2,126,197)] text-white rounded-lg flex items-center justify-center hover:bg-[rgb(1,100,150)] transition-colors"
                aria-label="Follow us on LinkedIn"
              >
                <FaLinkedin size={16} />
              </Link>
              <Link 
                href="#" 
                className="w-10 h-10 bg-[rgb(2,126,197)] text-white rounded-lg flex items-center justify-center hover:bg-[rgb(1,100,150)] transition-colors"
                aria-label="Follow us on Twitter"
              >
                <FaTwitter size={16} />
              </Link>
              <Link 
                href="#" 
                className="w-10 h-10 bg-[rgb(2,126,197)] text-white rounded-lg flex items-center justify-center hover:bg-[rgb(1,100,150)] transition-colors"
                aria-label="Follow us on Facebook"
              >
                <FaFacebook size={16} />
              </Link>
              <Link 
                href="#" 
                className="w-10 h-10 bg-[rgb(2,126,197)] text-white rounded-lg flex items-center justify-center hover:bg-[rgb(1,100,150)] transition-colors"
                aria-label="Follow us on YouTube"
              >
                <FaYoutube size={16} />
              </Link>
              <Link 
                href="#" 
                className="w-10 h-10 bg-[rgb(2,126,197)] text-white rounded-lg flex items-center justify-center hover:bg-[rgb(1,100,150)] transition-colors"
                aria-label="Follow us on Instagram"
              >
                <FaInstagram size={16} />
              </Link>
            </div>
          </div>

          {/* Second Section - Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Links</h4>
            <nav aria-label="Footer navigation links">
              <ul className="space-y-2">
                <li>
                  <Link href="/blog" className="text-[rgb(2,126,197)] hover:text-[rgb(1,100,150)] transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="text-[rgb(2,126,197)] hover:text-[rgb(1,100,150)] transition-colors">
                    Resources
                  </Link>
                </li>
                <li>
                  <Link href="/career" className="text-[rgb(2,126,197)] hover:text-[rgb(1,100,150)] transition-colors">
                    Career
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-[rgb(2,126,197)] hover:text-[rgb(1,100,150)] transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-[rgb(2,126,197)] hover:text-[rgb(1,100,150)] transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Third Section - Products & Services */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Products & Services</h4>
            <nav aria-label="Products and services links">
              <ul className="space-y-2">
                <li>
                  <Link href="/products/expense" className="text-[rgb(2,126,197)] hover:text-[rgb(1,100,150)] transition-colors">
                    Expense
                  </Link>
                </li>
                <li>
                  <Link href="/products/leave" className="text-[rgb(2,126,197)] hover:text-[rgb(1,100,150)] transition-colors">
                    Leave
                  </Link>
                </li>
                <li>
                  <Link href="/services/accounting" className="text-[rgb(2,126,197)] hover:text-[rgb(1,100,150)] transition-colors">
                    Accounting
                  </Link>
                </li>
                <li>
                  <Link href="/services/payroll" className="text-[rgb(2,126,197)] hover:text-[rgb(1,100,150)] transition-colors">
                    Payroll
                  </Link>
                </li>
                <li>
                  <Link href="/products/resolve-tax" className="text-[rgb(2,126,197)] hover:text-[rgb(1,100,150)] transition-colors">
                    Resolve My Tax
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Rightmost Section - Contact */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Contact</h4>
            <address className="not-italic space-y-3">
              <div className="flex items-start space-x-3">
                <FaEnvelope className="text-[rgb(2,126,197)] mt-1 flex-shrink-0" size={16} />
                <Link 
                  href="mailto:sales@resolveindia.com" 
                  className="text-[rgb(2,126,197)] hover:text-[rgb(1,100,150)] transition-colors"
                >
                  sales@resolveindia.com
                </Link>
              </div>
              
              <div className="flex items-start space-x-3">
                <FaPhone className="text-[rgb(2,126,197)] mt-1 flex-shrink-0" size={16} />
                <Link 
                  href="tel:+919844810424" 
                  className="text-[rgb(2,126,197)] hover:text-[rgb(1,100,150)] transition-colors"
                >
                  +91 9844810424
                </Link>
              </div>
              
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-[rgb(2,126,197)] mt-1 flex-shrink-0" size={16} />
                <span className="text-[rgb(2,126,197)]">
                  535, 12th Cross, 5th Main Road, RMV Extension, HIG Dollars Colony, Bangalore - 560094
                </span>
              </div>
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AttendanceFooter;
