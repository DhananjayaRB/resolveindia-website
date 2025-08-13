'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect, useRef } from 'react';
import { 
  FaBars, 
  FaTimes, 
  FaChevronDown
} from 'react-icons/fa';
import { 
  FcCalculator,
  FcMoneyTransfer,
  FcLike,
  FcLock,
  FcCalendar,
  FcClock,
  FcDocument,
  FcSpeaker,
  FcDownload,
  FcVideoCall,
  FcQuestions,
  FcIdea
} from 'react-icons/fc';

const menus = [
  { key: 'home', label: 'HOME', href: '/' },
  { key: 'services', label: 'SERVICES', href: '/', hasDropdown: true },
  { key: 'products', label: 'PRODUCTS', href: '/', hasDropdown: true },
  { key: 'resources', label: 'RESOURCES', href: '/', hasDropdown: true },
  { key: 'faq-tips', label: 'FAQ & TIPS', href: '/faq-tips', hasDropdown: true },
  { key: 'contact', label: 'CONTACT', href: '/contact' },
  { key: 'about-us', label: 'ABOUT US', href: '/about-us' },
];

// Menu data for each tab
const menuData = {
  services: [
    { label: 'Accounting Services', href: '/services/accounting-services', icon: FcCalculator },
    {
      label: 'Managed Payroll Services',
      href: '/services/managed-payroll-services',
      icon: FcMoneyTransfer
    },
    { label: 'GoodKarmaforNGO Services', href: '/services/good-karma-for-ngo', icon: FcLike },
    { label: 'Compliance Services', href: '/services/compliance', icon: FcLock },
  ],
  products: [
    { label: 'Leave Management System', href: '/products/leave-management-system', icon: FcCalendar },
    { label: 'Attendance Management', href: '/attendance', icon: FcClock },
  ],
  resources: [
    { label: 'Blogs', href: '/resources/blogs', icon: FcDocument },
    { label: 'Circulars / Notifications', href: '/resources/circulars', icon: FcSpeaker },
    { label: 'Free Downloads', href: '/resources/downloads', icon: FcDownload },
    { label: 'Webinars / Podcasts', href: '/resources/webinars', icon: FcVideoCall },
  ],
  'faq-tips': [
    { label: 'FAQ', href: '/faq', icon: FcQuestions },
    { label: 'Tips', href: '/tips', icon: FcIdea },
  ],
};

const logo = '/assets/landingPageImage/logo.png';

const pathToKey = pathname => {
  if (pathname === '/') return 'home';
  if (pathname.startsWith('/services')) return 'services';
  if (pathname.startsWith('/products')) return 'products';
  if (pathname.startsWith('/resources')) return 'resources';
  if (pathname.startsWith('/faq-tips') || pathname.startsWith('/faq') || pathname.startsWith('/tips')) return 'faq-tips';
  if (pathname.startsWith('https://services.resolvepay.in/login')) return 'login';
  if (pathname.startsWith('/contact')) return 'contact';
  if (pathname.startsWith('/about-us')) return 'about-us';
  return null;
};

export default function Navbar() {
  const pathname = usePathname();
  const activeKey = pathToKey(pathname);

  // Track which dropdowns are open
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [clickedMenu, setClickedMenu] = useState(null);
  const [navHovered, setNavHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Refs for dropdown containers
  const dropdownRefs = useRef({});
  const hoverTimeoutRef = useRef(null);

  // Add scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl transition-all duration-300
        ${navHovered ? 'bg-white/90' : ''}
        ${isScrolled ? 'shadow-lg' : ''}
        border-b border-gray-100/30
      `}
      role='navigation'
      aria-label='Main Navigation'
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
              alt='Resolve Logo'
              className='h-10 w-auto object-contain hover:scale-105 transition-all duration-300'
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
                    ${
                      activeKey === menu.key
                        ? 'text-[rgb(2,126,197)] font-semibold transition-colors duration-300'
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
                    <span className='absolute left-0 right-0 -bottom-1 h-0.5 bg-[rgb(2,126,197)] rounded-full transition-all' />
                  )}
                </Link>
              </div>

              {/* Enhanced Dropdown Menu with Hover Gap */}
              {isDropdownOpen(menu.key) && menuData[menu.key] && (
                <div
                  className={`
                    absolute left-0 top-full w-60 bg-white/95 backdrop-blur-xl border border-gray-200/50 shadow-2xl z-30 
                     overflow-hidden
                    ${clickedMenu === menu.key 
                      ? 'animate-in slide-in-from-top-2 duration-200 ease-out' 
                      : 'animate-in fade-in duration-150 ease-out'
                    }
                  `}
                  style={{
                    marginTop: '8px',
                    boxShadow: '0 25px 50px rgba(0,0,0,0.12), 0 12px 24px rgba(0,0,0,0.08)',
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
            className='px-4 py-2 bg-[rgb(2,126,197)] text-white text-sm font-medium rounded-md hover:bg-[rgb(1,100,157)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[rgb(2,126,197)] focus:ring-opacity-50'
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
              {menus.map(menu => (
                <div key={menu.key}>
                  <div className='flex items-center justify-between'>
                    <Link
                      href={menu.href}
                      className={`
                        block text-xs font-medium tracking-wide transition-all duration-300 relative px-4 py-3 rounded-xl group 
                        ${
                          activeKey === menu.key
                            ? 'text-[rgb(2,126,197)] font-semibold transition-colors duration-300'
                            : 'text-gray-600 hover:text-[rgb(2,126,197)] hover:bg-gray-50/60 transition-colors duration-300'
                        }
                      `}
                      onClick={() => !menu.hasDropdown && setIsMobileMenuOpen(false)}
                    >
                      {menu.label}
                      {activeKey === menu.key && (
                        <span className='absolute left-0 right-0 -bottom-1 h-0.5 bg-[rgb(2,126,197)] rounded-full transition-all' />
                      )}
                    </Link>
                    {menu.hasDropdown && (
                      <button
                        onClick={() => setClickedMenu(clickedMenu === menu.key ? null : menu.key)}
                        className='p-2 text-gray-500 hover:text-[rgb(2,126,197)] transition-colors duration-200'
                        aria-label={`Toggle ${menu.label} submenu`}
                      >
                        <FaChevronDown 
                          size={12} 
                          className={`transition-transform duration-200 ${clickedMenu === menu.key ? 'rotate-180' : ''}`}
                        />
                      </button>
                    )}
                  </div>

                  {/* Mobile Dropdown Items */}
                  {clickedMenu === menu.key && menuData[menu.key] && (
                    <div className='ml-4 mt-2 space-y-1 bg-gray-50/50 rounded-lg p-2'>
                      {menuData[menu.key].map((item) => (
                        <Link
                          key={`mobile-${menu.key}-${item.label.replace(/\s+/g, '-').toLowerCase()}`}
                          href={item.href}
                          className={`
                            flex items-center space-x-3 px-4 py-2.5 text-gray-700 font-medium relative rounded-lg
                            hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-[rgb(2,126,197)] 
                            cursor-pointer group transition-all duration-200
                            ${pathname === item.href ? 'bg-gradient-to-r from-blue-50 to-indigo-50 text-[rgb(2,126,197)]' : ''}
                          `}
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setClickedMenu(null);
                          }}
                        >
                          {pathname === item.href && (
                            <div className='absolute left-0 top-0 bottom-0 w-0.5 bg-[rgb(2,126,197)] shadow-sm' />
                          )}
                                                     <item.icon 
                             className={`text-base transition-all duration-200 ${pathname === item.href ? 'text-[rgb(2,126,197)]' : 'text-gray-500 group-hover:text-[rgb(2,126,197)]'}`} 
                             size={18} 
                             style={{
                               filter: pathname === item.href ? 'drop-shadow(0 2px 4px rgba(2,126,197,0.3))' : 'none'
                             }}
                           />
                          <aside className={`text-sm ${pathname === item.href ? 'font-semibold' : 'font-medium'}`}>
                            {item.label}
                          </aside>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile Login Button */}
              <div className='pt-4 border-t border-gray-200/60'>
                <Link
                  href='https://services.resolvepay.in/login'
                  className='block w-full px-4 py-2 bg-[rgb(2,126,197)] text-white text-sm font-medium rounded-md hover:bg-[rgb(1,100,157)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[rgb(2,126,197)] focus:ring-opacity-50 text-center'
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