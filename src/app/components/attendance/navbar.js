'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';



const attendanceTabs = [
  { key: 'home', label: 'HOME', href: '/' },
  { key: 'gps', label: 'GPS', href: '/attendance/gps' },
  { key: 'biometric', label: 'BIOMETRIC INTEGRATION', href: '/attendance/bio-metric' },
  { key: 'usb-fingerprint', label: 'USB FINGERPRINT', href: '/attendance/usb-fingerprint' },
  { key: 'web-login', label: 'WEB LOGIN', href: '/attendance/web-login' },
  { key: 'work-from-home', label: 'WORK FROM HOME', href: '/attendance/work-from-home' },
  { key: 'enquiry', label: 'ENQUIRY', href: '/attendance/demo-enquiry' },
];

const logo = '/assets/attendancePageImg/attendancePageNavLogo.png';

const pathToKey = pathname => {
  if (pathname === '/') return 'home';
  if (pathname.startsWith('/attendance/gps')) return 'gps';
  if (pathname.startsWith('/attendance/bio-metric')) return 'biometric';
  if (pathname.startsWith('/attendance/usb-fingerprint')) return 'usb-fingerprint';
  if (pathname.startsWith('/attendance/web-login')) return 'web-login';
  if (pathname.startsWith('/attendance/work-from-home')) return 'work-from-home';
  if (pathname.startsWith('/attendance/demo-enquiry')) return 'enquiry';
  return null;
};

export default function AttendanceNavbar() {
  const pathname = usePathname();
  const activeKey = pathToKey(pathname);
  const [navHovered, setNavHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl transition-all duration-300
        ${navHovered ? 'bg-white/90' : ''}
        ${isScrolled ? 'shadow-lg' : ''}
        border-b border-gray-100/30
      `}
      role='navigation'
      aria-label='Attendance Navigation'
      onMouseEnter={() => setNavHovered(true)}
      onMouseLeave={() => setNavHovered(false)}
    >
      <div className={`max-w-7xl mx-auto flex items-center justify-between h-20 px-6 lg:px-8`}>
        {/* Logo and Mobile Menu Button Container */}
        <div className='flex items-center justify-between w-full lg:w-auto'>
          {/* Logo */}
          <div className='flex items-center space-x-3'>
            <img
              src={logo}
              alt='Resolve Attendance Logo'
              className='h-16 w-auto object-contain hover:scale-105 transition-all duration-300'
            />
          </div>

          {/* Mobile Menu Button */}
          <div className='lg:hidden'>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className='text-gray-600 hover:text-[rgb(2,126,197)] p-2 rounded-lg hover:bg-gray-50/60 transition-all duration-200'
              aria-label='Toggle mobile menu'
            >
              {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* Desktop Menu Items */}
        <div className='hidden lg:flex items-center space-x-1'>
          {attendanceTabs.map(menu => (
            <div
              key={menu.key}
              className='relative'
            >
              <Link
                href={menu.href}
                className={`
                  text-xs font-medium tracking-wide transition-all duration-300 relative px-4 py-3 rounded-xl group 
                  ${activeKey === menu.key
                    ? 'text-[rgb(2,126,197)] font-semibold transition-colors duration-300'
                    : 'text-gray-600 hover:text-[rgb(2,126,197)] hover:bg-gray-50/60 transition-colors duration-300'
                  }
                `}
              >
                {menu.label}
                {activeKey === menu.key && (
                  <span className='absolute left-0 right-0 -bottom-1 h-0.5 bg-[rgb(2,126,197)] rounded-full transition-all' />
                )}
              </Link>
            </div>
          ))}
        </div>

        {/* Desktop Login Button */}
        <div className='hidden lg:flex items-center space-x-4'>
          <Link
            href='/login'
            className='px-4 py-2 bg-[rgb(2,126,197)] text-white text-sm font-medium rounded-md hover:bg-[rgb(2,126,197)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[rgb(2,126,197)] focus:ring-opacity-50'
            style={{
              fontWeight: 500,
              letterSpacing: '0.01em',
            }}
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className='lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-gray-200/50 shadow-lg z-40'>
            <div className='px-6 py-4 space-y-2'>
              {attendanceTabs.map(menu => (
                <div key={menu.key}>
                  <Link
                    href={menu.href}
                    className={`
                      block text-xs font-medium tracking-wide transition-all duration-300 relative px-4 py-3 rounded-xl group 
                      ${activeKey === menu.key
                        ? 'text-[rgb(2,126,197)] font-semibold transition-colors duration-300'
                        : 'text-gray-600 hover:text-[rgb(2,126,197)] hover:bg-gray-50/60 transition-colors duration-300'
                      }
                    `}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {menu.label}
                    {activeKey === menu.key && (
                      <span className='absolute left-0 right-0 -bottom-1 h-0.5 bg-[rgb(2,126,197)] rounded-full transition-all' />
                    )}
                  </Link>
                </div>
              ))}

              {/* Mobile Login Button */}
              <div className='pt-4 border-t border-gray-200/60'>
                <Link
                  href='/login'
                  className='block w-full px-4 py-2 bg-[rgb(2,126,197)] text-white text-sm font-medium rounded-md hover:bg-[rgb(2,126,197)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[rgb(2,126,197)] focus:ring-opacity-50 text-center'
                  style={{
                    fontWeight: 500,
                    letterSpacing: '0.01em',
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
