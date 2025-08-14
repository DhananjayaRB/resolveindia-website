import React from 'react';
import Link from 'next/link';

const BiometricAttendancePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-6xl mb-6">👆</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Biometric Attendance System
            </h1>
            <p className="text-xl text-gray-600">
              Advanced fingerprint and face recognition for secure attendance tracking
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Biometric Technologies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center p-6 border border-purple-200 rounded-lg">
                <div className="text-4xl mb-4">👆</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Fingerprint Recognition</h3>
                <p className="text-gray-600 mb-4">High-precision fingerprint scanning with 99.9% accuracy</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Multi-finger enrollment</li>
                  <li>• Anti-spoofing protection</li>
                  <li>• Works with all skin types</li>
                </ul>
              </div>
              <div className="text-center p-6 border border-purple-200 rounded-lg">
                <div className="text-4xl mb-4">👁️</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Face Recognition</h3>
                <p className="text-gray-600 mb-4">Advanced facial recognition with 3D depth sensing</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 3D face mapping</li>
                  <li>• Liveness detection</li>
                  <li>• Works in various lighting</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Key Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="text-purple-500 text-xl">✓</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Enhanced Security</h3>
                  <p className="text-gray-600">Biometric data cannot be duplicated or shared</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-purple-500 text-xl">✓</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Contactless Operation</h3>
                  <p className="text-gray-600">Hygienic face recognition option available</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-purple-500 text-xl">✓</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Fast Processing</h3>
                  <p className="text-gray-600">Attendance marked in under 2 seconds</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-purple-500 text-xl">✓</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Scalable Solution</h3>
                  <p className="text-gray-600">Supports thousands of employees</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Setup Process</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center font-semibold">1</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Employee Registration</h3>
                  <p className="text-gray-600">Enroll employee biometric data securely</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center font-semibold">2</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Device Installation</h3>
                  <p className="text-gray-600">Install biometric devices at entry points</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center font-semibold">3</div>
                <div>
                  <h3 className="font-semibold text-gray-900">System Integration</h3>
                  <p className="text-gray-600">Connect with your existing HR systems</p>
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
              className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BiometricAttendancePage; 