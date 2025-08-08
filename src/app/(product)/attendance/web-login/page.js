import React from 'react';
import Link from 'next/link';

const WebLoginPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-6xl mb-6">🌐</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Web Login Attendance System
            </h1>
            <p className="text-xl text-gray-600">
              Browser-based attendance tracking accessible from any device
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Web-Based Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="text-blue-500 text-xl">✓</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Cross-Platform</h3>
                  <p className="text-gray-600">Works on desktop, tablet, and mobile devices</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-blue-500 text-xl">✓</div>
                <div>
                  <h3 className="font-semibold text-gray-900">No Installation</h3>
                  <p className="text-gray-600">Access directly through web browser</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-blue-500 text-xl">✓</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Real-time Sync</h3>
                  <p className="text-gray-600">Data synchronized instantly across devices</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-blue-500 text-xl">✓</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Secure Access</h3>
                  <p className="text-gray-600">SSL encryption and user authentication</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Login Methods</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 border border-blue-200 rounded-lg">
                <div className="text-3xl mb-3">🔐</div>
                <h3 className="font-semibold text-gray-900 mb-2">Username/Password</h3>
                <p className="text-sm text-gray-600">Traditional login with secure credentials</p>
              </div>
              <div className="text-center p-6 border border-blue-200 rounded-lg">
                <div className="text-3xl mb-3">📱</div>
                <h3 className="font-semibold text-gray-900 mb-2">OTP Verification</h3>
                <p className="text-sm text-gray-600">One-time password sent to mobile</p>
              </div>
              <div className="text-center p-6 border border-blue-200 rounded-lg">
                <div className="text-3xl mb-3">🔑</div>
                <h3 className="font-semibold text-gray-900 mb-2">SSO Integration</h3>
                <p className="text-sm text-gray-600">Single sign-on with existing systems</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Dashboard Features</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-semibold">📊</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Attendance Reports</h3>
                  <p className="text-gray-600">Detailed reports with charts and analytics</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-semibold">👥</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Employee Management</h3>
                  <p className="text-gray-600">Add, edit, and manage employee profiles</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-semibold">⚙️</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Settings & Permissions</h3>
                  <p className="text-gray-600">Configure system settings and user roles</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">System Requirements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Client Requirements</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Modern web browser (Chrome, Firefox, Safari, Edge)</li>
                  <li>• Internet connection</li>
                  <li>• JavaScript enabled</li>
                  <li>• Responsive design for mobile access</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Server Requirements</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Cloud-hosted solution</li>
                  <li>• 99.9% uptime guarantee</li>
                  <li>• Daily backups</li>
                  <li>• 24/7 technical support</li>
                </ul>
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
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebLoginPage; 