"use client";
import React from 'react';
import Link from 'next/link';

const AttendancePage = () => {

  const attendanceOptions = [
    {
      title: 'GPS Attendance',
      description: 'Track attendance using GPS location',
      href: '/products/attendance/gps',
      icon: '📍'
    },
    {
      title: 'Biometric Attendance',
      description: 'Fingerprint and face recognition attendance',
      href: '/products/attendance/bio-metric',
      icon: '👆'
    },
    {
      title: 'USB Fingerprint',
      description: 'USB-based fingerprint attendance system',
      href: '/products/attendance/usb-fingerprint',
      icon: '💾'
    },
    {
      title: 'Web Login',
      description: 'Web-based attendance login system',
      href: '/products/attendance/web-login',
      icon: '🌐'
    },
    {
      title: 'Work From Home',
      description: 'Remote work attendance tracking',
      href: '/products/attendance/work-from-home',
      icon: '🏠'
    },
    {
      title: 'Demo Enquiry',
      description: 'Request a demo of our attendance solutions',
      href: '/products/attendance/demo-enquiry',
      icon: '📞'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">
          Attendance coming soon...
        </h1>
      </div>
    </div>
  );
};

export default AttendancePage; 