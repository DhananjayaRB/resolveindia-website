import React from 'react';
import Link from 'next/link';

const AttendancePage = () => {
  const attendanceOptions = [
    {
      title: 'GPS Attendance',
      description: 'Track attendance using GPS location',
      href: '/attendance/gps',
      icon: '📍'
    },
    {
      title: 'Biometric Attendance',
      description: 'Fingerprint and face recognition attendance',
      href: '/attendance/bio-metric',
      icon: '👆'
    },
    {
      title: 'USB Fingerprint',
      description: 'USB-based fingerprint attendance system',
      href: '/attendance/usb-fingerprint',
      icon: '💾'
    },
    {
      title: 'Web Login',
      description: 'Web-based attendance login system',
      href: '/attendance/web-login',
      icon: '🌐'
    },
    {
      title: 'Work From Home',
      description: 'Remote work attendance tracking',
      href: '/attendance/work-from-home',
      icon: '🏠'
    },
    {
      title: 'Demo Enquiry',
      description: 'Request a demo of our attendance solutions',
      href: '/attendance/demo-enquiry',
      icon: '📞'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Attendance Management Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the attendance tracking method that best fits your organization's needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {attendanceOptions.map((option, index) => (
            <Link
              key={index}
              href={option.href}
              className="group block"
            >
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200">
                <div className="text-4xl mb-4">{option.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {option.title}
                </h3>
                <p className="text-gray-600">
                  {option.description}
                </p>
                <div className="mt-4 text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                  Learn More →
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AttendancePage; 