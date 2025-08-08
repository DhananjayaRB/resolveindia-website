'use client';
import lato from '@/app/ui/fonts';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { FaCalculator, FaMoneyBillWave, FaHandshake, FaCheckCircle, FaCalendarAlt, FaClock, FaFileAlt, FaBullhorn, FaDownload, FaVideo, FaQuestionCircle, FaLightbulb, FaBars, FaTimes } from 'react-icons/fa';

const menus = [
  { key: 'home', label: 'HOME', href: '/' },
  { key: 'services', label: 'SERVICES', href: '/' },
  { key: 'products', label: 'PRODUCTS', href: '/' },
  { key: 'resources', label: 'RESOURCES', href: '/' },
  { key: 'faq-tips', label: 'FAQ & TIPS', href: '/faq-tips' },
  { key: 'contact', label: 'CONTACT', href: '/contact' },
  { key: 'about-us', label: 'ABOUT US', href: '/about-us' },
];

// Menu data for each tab (removed login, contact, about-us)
const menuData = {
  services: [
    { label: 'Accounting Services', href: '/services/accounting-services', icon: FaCalculator },
    {
      label: 'Managed Payroll Services',
      href: '/services/managed-payroll-services',
      icon: FaMoneyBillWave
    },
    { label: 'GoodKarmaforNGO Services', href: '/services/goodkarma', icon: FaHandshake },
    { label: 'Compliance Services', href: '/services/compliance', icon: FaCheckCircle },
  ],
  products: [
    { label: 'Leave', href: '/products/leave-management-system', icon: FaCalendarAlt },
    { label: 'Attendance', href: '/attendance', icon: FaClock },
  ],
  resources: [
    { label: 'Blogs', href: '/resources/blogs', icon: FaFileAlt },
    { label: 'Circulars / Notifications', href: '/resources/circulars', icon: FaBullhorn },
    { label: 'Free Downloads', href: '/resources/downloads', icon: FaDownload },
    { label: 'Webinars / Podcasts - Future', href: '/resources/webinars', icon: FaVideo },
  ],
  'faq-tips': [
    { label: 'FAQ', href: '/faq', icon: FaQuestionCircle },
    { label: 'Tips', href: '/tips', icon: FaLightbulb },
  ],
};

const logo = '/assets/landingPageImage/logo.png';

const pathToKey = pathname => {
  if (pathname === '/') return 'home';
  if (pathname.startsWith('/services')) return 'services';
  if (pathname.startsWith('/products')) return 'products';
  if (pathname.startsWith('/resources')) return 'resources';
  if (pathname.startsWith('/faq-tips') || pathname.startsWith('/faq') || pathname.startsWith('/tips')) return 'faq-tips';
  if (pathname.startsWith('/login')) return 'login';
  if (pathname.startsWith('/contact')) return 'contact';
  if (pathname.startsWith('/about-us')) return 'about-us';
  return null;
};

export default function Navbar() {
  const pathname = usePathname();
  const activeKey = pathToKey(pathname);

  // Track which dropdowns are open
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [navHovered, setNavHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-sm
        ${navHovered ? 'bg-white/90 transition-all duration-300' : 'transition-all duration-300'}
        border-b border-gray-100/30
      `}
      role='navigation'
      aria-label='Main Navigation'
      onMouseEnter={() => setNavHovered(true)}
      onMouseLeave={() => setNavHovered(false)}
    >
             <div className={`max-w-7xl mx-auto flex items-center justify-between h-20 px-6 lg:px-8 ${lato.className}`}>
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
               onMouseEnter={() => setHoveredMenu(menu.key)}
               onMouseLeave={() => setHoveredMenu(null)}
             >
               <Link
                 href={menu.href}
                                   className={`
                    text-xs font-medium tracking-wide transition-all duration-300 relative px-4 py-3 rounded-xl group 
                    ${
                      activeKey === menu.key
                        ? 'text-[rgb(2,126,197)] font-semibold transition-colors duration-300'
                        : 'text-gray-600 hover:text-[rgb(2,126,197)] hover:bg-gray-50/60 transition-colors duration-300'
                    }
                  `}
                 aria-haspopup={menuData[menu.key] ? 'true' : 'false'}
                 aria-expanded={hoveredMenu === menu.key}
               >
                 {menu.label}
                 {activeKey === menu.key && (
                   <span className='absolute left-0 right-0 -bottom-1 h-0.5 bg-[rgb(2,126,197)] rounded-full transition-all' />
                 )}
               </Link>

               {/* Enhanced Dropdown Menu */}
               {hoveredMenu === menu.key && menuData[menu.key] && (
                 <div
                   className={`
                     absolute left-0 top-full w-64 bg-white/95 backdrop-blur-xl border border-gray-200/50  shadow-2xl z-30 
                     origin-top scale-95 opacity-0 animate-in slide-in-from-top-2 duration-200 ease-out
                     scale-100 opacity-100 pointer-events-auto
                   `}
                   style={{
                     marginTop: '12px',
                     boxShadow: '0 25px 50px rgba(0,0,0,0.12), 0 12px 24px rgba(0,0,0,0.08)',
                   }}
                   role='menu'
                   aria-label={menu.label}
                 >
                   {/* Menu Items */}
                   <div className='p-3'>
                     {menuData[menu.key].map((item, idx) => (
                       <div key={idx}>
                         <Link
                           href={item.href}
                           role='menuitem'
                           tabIndex={0}
                           className={`
                             flex items-center justify-between px-3 py-2.5 text-gray-700 font-medium relative rounded-lg
                             hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-[rgb(2,126,197)] 
                             cursor-pointer group transition-all duration-200 focus:bg-blue-50 focus:text-[rgb(2,126,197)]
                             ${pathname === item.href ? 'bg-gradient-to-r from-blue-50 to-indigo-50 text-[rgb(2,126,197)]' : ''}
                           `}
                           style={{
                             fontWeight: 500,
                             letterSpacing: '0.01em',
                           }}
                         >
                           {pathname === item.href && (
                             <div className='absolute left-0 top-0 bottom-0 w-0.5 bg-[rgb(2,126,197)] shadow-sm'></div>
                           )}
                           <div className='flex items-center space-x-2'>
                             <item.icon className={`text-base ${pathname === item.href ? 'text-[rgb(2,126,197)]' : 'text-[rgb(2,126,197)]'}`} size={16} />
                             <span className={`text-sm ${pathname === item.href ? 'font-semibold' : 'font-medium'}`}>{item.label}</span>
                           </div>
                         </Link>
                         {idx < menuData[menu.key].length - 1 && (
                           <div className='mx-3 my-1 h-px bg-gray-200/60'></div>
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
               {menus.map(menu => (
                 <div key={menu.key}>
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
                     onClick={() => setIsMobileMenuOpen(false)}
                   >
                     {menu.label}
                     {activeKey === menu.key && (
                       <span className='absolute left-0 right-0 -bottom-1 h-0.5 bg-[rgb(2,126,197)] rounded-full transition-all' />
                     )}
                   </Link>

                   {/* Mobile Dropdown Items */}
                   {menuData[menu.key] && (
                     <div className='ml-4 mt-2 space-y-1'>
                       {menuData[menu.key].map((item, idx) => (
                         <Link
                           key={idx}
                           href={item.href}
                           className={`
                             flex items-center space-x-2 px-4 py-2.5 text-gray-700 font-medium relative rounded-lg
                             hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-[rgb(2,126,197)] 
                             cursor-pointer group transition-all duration-200
                             ${pathname === item.href ? 'bg-gradient-to-r from-blue-50 to-indigo-50 text-[rgb(2,126,197)]' : ''}
                           `}
                           onClick={() => setIsMobileMenuOpen(false)}
                         >
                           {pathname === item.href && (
                             <div className='absolute left-0 top-0 bottom-0 w-0.5 bg-[rgb(2,126,197)] shadow-sm'></div>
                           )}
                           <item.icon className={`text-base ${pathname === item.href ? 'text-[rgb(2,126,197)]' : 'text-[rgb(2,126,197)]'}`} size={16} />
                           <span className={`text-sm ${pathname === item.href ? 'font-semibold' : 'font-medium'}`}>{item.label}</span>
                         </Link>
                       ))}
                     </div>
                   )}
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