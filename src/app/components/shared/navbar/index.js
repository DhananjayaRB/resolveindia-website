'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect, useRef } from 'react';
import {
  FaBars,
  FaTimes,
  FaChevronDown
} from 'react-icons/fa';


const menus = [
  { key: 'home', label: 'HOME', href: '/' },
  { key: 'services', label: 'SERVICES', href: '', hasDropdown: true },
  { key: 'products', label: 'PRODUCTS', href: '', hasDropdown: true },
  { key: 'resources', label: 'RESOURCES', href: '', hasDropdown: true },
  { key: 'faq-tips', label: 'FAQ & TIPS', href: '/faq-tips', },
  { key: 'contact', label: 'CONTACT', href: '/contact' },
  { key: 'about-us', label: 'ABOUT US', href: '/about-us' },
];

// Menu data for each tab
const menuData = {
  services: [
    { label: 'Accounting Services', href: '/services/accounting-services' },
    {
      label: 'Managed Payroll Services',
      href: '/services/managed-payroll-services'
    },
    { label: 'GoodKarmaforNGO Services', href: '/services/good-karma-for-ngo' },
    { label: 'Compliance Services', href: '/services/compliance-services' },
  ],
  products: [
    { label: 'Leave Management System', href: '/products/leave-management-system' },
    { label: 'Attendance Management', href: '/attendance' },
  ],
  resources: [
    { label: 'Blogs', href: '/resources/blogs' },
    { label: 'Circulars / Notifications', href: '/resources/circulars-notifications' },
    { label: 'Free Downloads', href: '/resources/free-downloads' },
    { label: 'Webinars / Podcasts', href: '/resources/webinars-podcasts' },
  ],


};

const logo = '/assets/landingPageImage/logo.png';

const pathToKey = pathname => {
  // Exact matches first
  if (pathname === '/') return 'home';
  if (pathname === '/contact') return 'contact';
  if (pathname === '/about-us') return 'about-us';
  if (pathname === '/faq-tips') return 'faq-tips';
  if (pathname === '/faq') return 'faq-tips';
  if (pathname === '/tips') return 'faq-tips';

  // For dropdown items, only return the parent key if we're on a specific page
  // This way, the parent menu only highlights when we're actually on a sub-page
  if (pathname.startsWith('/services/')) return 'services';
  if (pathname.startsWith('/products/')) return 'products';
  if (pathname.startsWith('/resources/')) return 'resources';
  if (pathname.startsWith('/attendance')) return 'products'; // attendance is under products

  // External login link
  if (pathname.startsWith('https://services.resolvepay.in/login')) return 'login';

  return null;
};

export default function Navbar() {
  const pathname = usePathname();
  const activeKey = pathToKey(pathname);

  // Track which dropdowns are open
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [clickedMenu, setClickedMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Refs for dropdown containers
  const dropdownRefs = useRef({});
  const hoverTimeoutRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (clickedMenu && dropdownRefs.current[clickedMenu] && !dropdownRefs.current[clickedMenu].contains(event.target)) {
        setClickedMenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [clickedMenu]);

  // Close dropdowns when pressing Escape
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setClickedMenu(null);
        setHoveredMenu(null);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  const handleMenuClick = (menuKey) => {
    if (menuData[menuKey]) {
      setClickedMenu(clickedMenu === menuKey ? null : menuKey);
      setHoveredMenu(null);
    }
  };

  const handleMouseEnter = (menuKey) => {
    if (menuData[menuKey]) {
      // Clear any existing timeout
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
      setHoveredMenu(menuKey);
    }
  };

  const handleMouseLeave = (menuKey) => {
    if (menuData[menuKey]) {
      // Add a small delay before closing to allow moving to dropdown
      hoverTimeoutRef.current = setTimeout(() => {
        setHoveredMenu(null);
      }, 150); // 150ms delay
    }
  };

  const handleDropdownMouseEnter = (menuKey) => {
    // Clear the timeout when hovering over dropdown
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setHoveredMenu(menuKey);
  };

  const handleDropdownMouseLeave = () => {
    // Add delay when leaving dropdown
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredMenu(null);
    }, 100);
  };

  const isDropdownOpen = (menuKey) => {
    return hoveredMenu === menuKey || clickedMenu === menuKey;
  };

  const handleMobileMenuClick = (menu) => {
    if (menu.hasDropdown) {
      setClickedMenu(clickedMenu === menu.key ? null : menu.key);
    } else {
      // For non-dropdown items, navigate and close mobile menu
      window.location.href = menu.href;
      setIsMobileMenuOpen(false);
    }
  };

  const handleMobileSubmenuClick = (href) => {
    // Navigate to submenu item and close mobile menu
    window.location.href = href;
    setIsMobileMenuOpen(false);
    setClickedMenu(null);
  };

  return (
    <nav
      className={`
        w-full transition-all duration-500 ease-in-out
        bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-100/30 fixed top-0 left-0 z-50
      `}
      role='navigation'
      aria-label='Main Navigation'
    >
      <div className={`max-w-screen mx-auto flex items-center justify-between h-20 px-6 lg:px-8`}>
        {/* Logo and Mobile Menu Button Container */}
        <div className='flex items-center justify-between w-full lg:w-auto'>
          {/* Logo - Conditional based on page and scroll state */}
          <div className='flex items-center space-x-3'>
                          <Link href='/'>
                <img
                  src={logo}
                  alt='Resolve Logo'
                  className='h-10 w-auto object-contain hover:scale-105 transition-all duration-300'

                />
              </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className='lg:hidden'>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-all duration-200 text-gray-600 hover:text-[rgb(2,126,197)] hover:bg-gray-50/60`}
              aria-label='Toggle mobile menu'
            >
              {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* Desktop Menu Items */}
        <div className='hidden lg:flex items-center space-x-1'>
          {menus.map(menu => (
            <div
              key={menu.key}
              className='relative'
              ref={el => dropdownRefs.current[menu.key] = el}
              onMouseEnter={() => handleMouseEnter(menu.key)}
              onMouseLeave={() => handleMouseLeave(menu.key)}
            >
              <div className='flex items-center'>
                <Link
                  href={menu.href}
                  className={`
                    text-xs font-medium tracking-wide transition-all duration-300 relative px-4 py-3 rounded-xl group 
                    flex items-center space-x-1
                    ${activeKey === menu.key
                      ? 'text-gray-600 font-semibold transition-colors duration-300'
                      : 'text-gray-600 hover:text-[rgb(2,126,197)] hover:bg-gray-50/60 transition-colors duration-300'
                    }
                  `}
                  onClick={() => handleMenuClick(menu.key)}
                  aria-haspopup={menu.hasDropdown ? 'true' : 'false'}
                  aria-expanded={isDropdownOpen(menu.key)}
                >
                  <aside>{menu.label}</aside>
                  {menu.hasDropdown && (
                    <FaChevronDown
                      size={10}
                      className={`transition-transform duration-200 ${isDropdownOpen(menu.key) ? 'rotate-180' : ''}`}
                    />
                  )}
                  {activeKey === menu.key && (
                    <span className={`absolute left-0 right-0 -bottom-1 h-0.5 rounded-full transition-all bg-gray-600`} />
                  )}
                </Link>
              </div>

              {/* Enhanced Dropdown Menu with Hover Gap */}
              {isDropdownOpen(menu.key) && menuData[menu.key] && (
                <div
                  className={`
                    absolute left-0 top-full w-60 bg-white rounded-lg backdrop-blur-xl border border-gray-200/50 shadow-2xl z-30 
                     overflow-hidden
                    ${clickedMenu === menu.key
                      ? 'animate-in slide-in-from-top-2 duration-200 ease-out'
                      : 'animate-in fade-in duration-150 ease-out'
                    }
                  `}
                  style={{
                    marginTop: '8px',
                    boxShadow: '0 25px 50px rgba(20, 19, 19, 0.12), 0 12px 24px rgba(0,0,0,0.08)',
                  }}
                  role='menu'
                  aria-label={`${menu.label} submenu`}
                  onMouseEnter={() => handleDropdownMouseEnter(menu.key)}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  {/* Invisible hover gap to prevent accidental closing */}
                  <div className='absolute -top-2 left-0 right-0 h-2 bg-transparent' />

                  {/* Menu Items */}
                  <div className='p-3'>
                    {menuData[menu.key].map((item, idx) => (
                      <div key={`${menu.key}-${item.label.replace(/\s+/g, '-').toLowerCase()}`}>
                        <Link
                          href={item.href}
                          role='menuitem'
                          tabIndex={0}
                          className={`
                            flex items-center justify-between px-1 py-1.5 text-gray-700 font-medium relative rounded-lg
                            hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-[rgb(2,126,197)] 
                            cursor-pointer group transition-all duration-200 focus:bg-blue-50 focus:text-[rgb(2,126,197)]
                            ${pathname === item.href ? 'bg-gradient-to-r from-blue-50 to-indigo-50 text-[rgb(2,126,197)]' : ''}
                          `}
                          style={{
                            fontWeight: 500,
                            letterSpacing: '0.01em',
                          }}
                          onClick={() => {
                            setClickedMenu(null);
                            setHoveredMenu(null);
                          }}
                        >
                          {pathname === item.href && (
                            <div className='absolute left-0 top-0 bottom-0 w-0.5 bg-[rgb(2,126,197)] shadow-sm' />
                          )}
                          <div className='flex items-center space-x-3'>
                            <aside className={`text-sm ${pathname === item.href ? 'font-semibold' : 'font-medium'}`}>
                              {item.label}
                            </aside>
                          </div>
                        </Link>
                        {idx < menuData[menu.key].length - 1 && (
                          <div className='mx-2 my-1 h-px bg-gray-200/60' />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Login Button */}
        <div className='hidden lg:flex items-center space-x-4'>
          <Link
            href='https://services.resolvepay.in/login'
            className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[rgb(2,126,197)] focus:ring-opacity-50 bg-[rgb(2,126,197)] text-white hover:bg-[rgb(1,100,157)]`}
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
          <div className='lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-gray-200/50 shadow-lg z-[9999] max-h-[80vh] overflow-y-auto'>
            <div className='px-6 py-4 space-y-2'>
              {menus.map(menu => (
                <div key={menu.key}>


                  <div className='flex items-center justify-between'>
                    <button
                      className={`
                        block text-xs font-medium tracking-wide transition-all duration-300 relative px-4 py-3 rounded-xl group text-left w-full
                        ${activeKey === menu.key
                          ? 'text-gray-600 font-semibold transition-colors duration-300'
                          : 'text-gray-600 hover:text-[rgb(2,126,197)] hover:bg-gray-50/60 transition-colors duration-300'
                        }
                      `}
                      onClick={() => handleMobileMenuClick(menu)}
                    >
                      {menu.label}
                      {activeKey === menu.key && (
                        <span className={`absolute left-0 right-0 -bottom-1 h-0.5 rounded-full transition-all bg-gray-600`} />
                      )}
                    </button>

                  </div>

                  {/* Mobile Dropdown Items */}
                  {menu.hasDropdown && menuData[menu.key] && (
                    <div className="ml-4 mt-2 space-y-1 bg-gray-50/50 rounded-lg p-2">
                      {menuData[menu.key].map((item) => (
                        <button
                          key={`mobile-${menu.key}-${item.label.replace(/\s+/g, '-').toLowerCase()}`}
                          className={`
                              block w-full text-left px-4 py-2.5 text-gray-700 font-medium relative rounded-lg
                              hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-[rgb(2,126,197)] 
                              cursor-pointer group transition-all duration-200
                              ${pathname === item.href ? 'bg-gradient-to-r from-blue-50 to-indigo-50 text-[rgb(2,126,197)]' : ''}
                            `}
                          onClick={() => handleMobileSubmenuClick(item.href)}
                        >
                          {pathname === item.href && (
                            <div className='absolute left-0 top-0 bottom-0 w-0.5 bg-[rgb(2,126,197)] shadow-sm' />
                          )}
                          <span className={`text-sm ${pathname === item.href ? 'font-semibold' : 'font-medium'}`}>
                            {item.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  )

                  }

                </div>


              ))}

              {/* Mobile Login Button */}
              <div className='pt-4 border-t border-gray-200/60'>
                <button
                  onClick={() => {
                    window.open('https://services.resolvepay.in/login', '_blank');
                    setIsMobileMenuOpen(false);
                  }}
                  className='block w-full px-4 py-2 bg-[rgb(2,126,197)] text-white text-sm font-medium rounded-md hover:bg-[rgb(1,100,157)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[rgb(2,126,197)] focus:ring-opacity-50 text-center'
                  style={{
                    fontWeight: 500,
                    letterSpacing: '0.01em',
                  }}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}