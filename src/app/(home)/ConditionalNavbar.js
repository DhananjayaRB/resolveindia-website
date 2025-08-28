'use client';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { Navbar } from '../components/shared';
import React from 'react';

export default function ConditionalNavbar() {
  const pathname = usePathname();
  const isLandingPage = pathname === '/';
  
  // Apply navbar height padding to body for non-landing pages
  useEffect(() => {
    if (!isLandingPage) {
      // Add padding-top for non-home pages so content starts after navbar
      document.body.style.paddingTop = '80px'; // navbar height
    } else {
      // Remove padding for landing page
      document.body.style.paddingTop = '0';
    }
    
    // Cleanup function to reset on unmount
    return () => {
      document.body.style.paddingTop = '0';
    };
  }, [isLandingPage]);
  
  // Only render navbar if NOT on the landing page
  // Landing page has its own navbar embedded in the hero section
  if (isLandingPage) {
    return null;
  }
  
  return <Navbar />;
}
