import React from 'react';
import Link from 'next/link';

const USBFingerprintPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-6xl mb-6">💾</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              USB Fingerprint Attendance System
            </h1>
            <p className="text-xl text-gray-600">
              Portable USB-based fingerprint scanner for flexible attendance tracking
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">USB Device Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="text-orange-500 text-xl">✓</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Plug & Play</h3>
                  <p className="text-gray-600">No installation required, works instantly</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-orange-500 text-xl">✓</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Portable Design</h3>
                  <p className="text-gray-600">Easy to carry and deploy anywhere</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-orange-500 text-xl">✓</div>
                <div>
                  <h3 className="font-semibold text-gray-900">High Accuracy</h3>
                  <p className="text-gray-600">99.9% fingerprint recognition accuracy</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-orange-500 text-xl">✓</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Offline Storage</h3>
                  <p className="text-gray-600">Stores data locally when offline</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Technical Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 border border-orange-200 rounded-lg">
                <div className="text-2xl font-bold text-orange-600 mb-2">500</div>
                <div className="text-sm text-gray-600">Fingerprint Capacity</div>
              </div>
              <div className="text-center p-4 border border-orange-200 rounded-lg">
                <div className="text-2xl font-bold text-orange-600 mb-2">50,000</div>
                <div className="text-sm text-gray-600">Attendance Records</div>
              </div>
              <div className="text-center p-4 border border-orange-200 rounded-lg">
                <div className="text-2xl font-bold text-orange-600 mb-2">0.5s</div>
                <div className="text-sm text-gray-600">Response Time</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Use Cases</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 text-orange-600 rounded-full w-8 h-8 flex items-center justify-center font-semibold">🏢</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Office Environments</h3>
                  <p className="text-gray-600">Perfect for small to medium-sized offices</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 text-orange-600 rounded-full w-8 h-8 flex items-center justify-center font-semibold">🏭</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Manufacturing Units</h3>
                  <p className="text-gray-600">Reliable attendance tracking in industrial settings</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 text-orange-600 rounded-full w-8 h-8 flex items-center justify-center font-semibold">🏫</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Educational Institutions</h3>
                  <p className="text-gray-600">Student and staff attendance management</p>
                </div>

              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Setup Instructions</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-orange-100 text-orange-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">1</div>
                <aside className="text-gray-700">Connect USB device to computer</aside>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-orange-100 text-orange-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">2</div>
                <aside className="text-gray-700">Install attendance software</aside>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-orange-100 text-orange-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">3</div>
                <aside className="text-gray-700">Enroll employee fingerprints</aside>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-orange-100 text-orange-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">4</div>
                <aside className="text-gray-700">Start tracking attendance</aside>
              </div>
            </div>
          </div>

          <div className="text-center space-x-4">
            <Link
              href="/attendance"
              className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              ← Back to Attendance
            </Link>
            <Link
              href="/attendance/demo-enquiry"
              className="inline-flex items-center px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default USBFingerprintPage; 