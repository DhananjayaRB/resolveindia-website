import React from 'react';
import Link from 'next/link';

const GPSAttendancePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-6xl mb-6">📍</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              GPS Attendance System
            </h1>
            <p className="text-xl text-gray-600">
              Track employee attendance using GPS location with precision and reliability
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="text-green-500 text-xl">✓</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Real-time Location Tracking</h3>
                  <p className="text-gray-600">Monitor employee location in real-time with GPS accuracy</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-green-500 text-xl">✓</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Geofencing</h3>
                  <p className="text-gray-600">Set virtual boundaries for attendance zones</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-green-500 text-xl">✓</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Offline Support</h3>
                  <p className="text-gray-600">Works even when internet connectivity is limited</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-green-500 text-xl">✓</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Battery Efficient</h3>
                  <p className="text-gray-600">Optimized for minimal battery consumption</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">How It Works</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-semibold">1</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Employee opens the app</h3>
                  <p className="text-gray-600">Simple one-tap attendance marking</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-semibold">2</div>
                <div>
                  <h3 className="font-semibold text-gray-900">GPS location is captured</h3>
                  <p className="text-gray-600">Accurate location data with timestamp</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-semibold">3</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Data is synchronized</h3>
                  <p className="text-gray-600">Attendance records are saved to the cloud</p>
                </div>
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
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GPSAttendancePage; 