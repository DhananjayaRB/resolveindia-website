import React from 'react';
import Link from 'next/link';

const WorkFromHomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-emerald-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-6xl mb-6">🏠</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Work From Home Attendance System
            </h1>
            <p className="text-xl text-gray-600">
              Seamless attendance tracking for remote and hybrid work environments
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Remote Work Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="text-teal-500 text-xl">✓</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Flexible Check-in</h3>
                  <p className="text-gray-600">Mark attendance from anywhere in the world</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-teal-500 text-xl">✓</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Time Zone Support</h3>
                  <p className="text-gray-600">Automatic timezone detection and conversion</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-teal-500 text-xl">✓</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Activity Monitoring</h3>
                  <p className="text-gray-600">Track productivity and work patterns</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-teal-500 text-xl">✓</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Break Management</h3>
                  <p className="text-gray-600">Track breaks and lunch times automatically</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Attendance Methods</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 border border-teal-200 rounded-lg">
                <div className="text-3xl mb-3">📱</div>
                <h3 className="font-semibold text-gray-900 mb-2">Mobile App</h3>
                <p className="text-sm text-gray-600">Dedicated mobile app for iOS and Android</p>
              </div>
              <div className="text-center p-6 border border-teal-200 rounded-lg">
                <div className="text-3xl mb-3">💻</div>
                <h3 className="font-semibold text-gray-900 mb-2">Desktop App</h3>
                <p className="text-sm text-gray-600">Windows and Mac desktop applications</p>
              </div>
              <div className="text-center p-6 border border-teal-200 rounded-lg">
                <div className="text-3xl mb-3">🌐</div>
                <h3 className="font-semibold text-gray-900 mb-2">Web Portal</h3>
                <p className="text-sm text-gray-600">Browser-based attendance portal</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Productivity Tools</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-teal-100 text-teal-600 rounded-full w-8 h-8 flex items-center justify-center font-semibold">⏰</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Time Tracking</h3>
                  <p className="text-gray-600">Accurate time tracking with start/stop functionality</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-teal-100 text-teal-600 rounded-full w-8 h-8 flex items-center justify-center font-semibold">📊</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Productivity Reports</h3>
                  <p className="text-gray-600">Detailed reports on work hours and productivity</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-teal-100 text-teal-600 rounded-full w-8 h-8 flex items-center justify-center font-semibold">🎯</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Goal Setting</h3>
                  <p className="text-gray-600">Set and track daily/weekly work goals</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Security Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Authentication</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Multi-factor authentication</li>
                  <li>• Biometric login (fingerprint/face)</li>
                  <li>• PIN-based security</li>
                  <li>• Session management</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Data Protection</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• End-to-end encryption</li>
                  <li>• GDPR compliance</li>
                  <li>• Regular security audits</li>
                  <li>• Secure data transmission</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Benefits for Remote Teams</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="text-teal-500 text-xl">✓</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Flexibility</h3>
                  <p className="text-gray-600">Work from anywhere with flexible hours</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-teal-500 text-xl">✓</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Transparency</h3>
                  <p className="text-gray-600">Clear visibility into work patterns</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-teal-500 text-xl">✓</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Cost Savings</h3>
                  <p className="text-gray-600">Reduce office overhead and commute costs</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-teal-500 text-xl">✓</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Work-Life Balance</h3>
                  <p className="text-gray-600">Better balance between work and personal life</p>
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
              className="inline-flex items-center px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkFromHomePage; 