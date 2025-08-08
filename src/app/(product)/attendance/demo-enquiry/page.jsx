import React from 'react';
import Link from 'next/link';

const DemoEnquiryPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-6xl mb-6">📞</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Request a Demo
            </h1>
            <p className="text-xl text-gray-600">
              Experience our attendance solutions firsthand with a personalized demo
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Enter your company name"
                  />
                </div>

                <div>
                  <label htmlFor="employees" className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Employees
                  </label>
                  <select
                    id="employees"
                    name="employees"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  >
                    <option value="">Select employee count</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-100">51-100 employees</option>
                    <option value="101-500">101-500 employees</option>
                    <option value="500+">500+ employees</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="solution" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Solution
                  </label>
                  <select
                    id="solution"
                    name="solution"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  >
                    <option value="">Select a solution</option>
                    <option value="gps">GPS Attendance</option>
                    <option value="biometric">Biometric Attendance</option>
                    <option value="usb-fingerprint">USB Fingerprint</option>
                    <option value="web-login">Web Login</option>
                    <option value="work-from-home">Work From Home</option>
                    <option value="multiple">Multiple Solutions</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Requirements
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Tell us about your specific requirements..."
                   />
                </div>

                <button
                  type="submit"
                  className="w-full bg-pink-600 text-white py-3 px-6 rounded-lg hover:bg-pink-700 transition-colors font-semibold"
                >
                  Request Demo
                </button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">What to Expect</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-pink-100 text-pink-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">1</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Personalized Demo</h3>
                      <p className="text-gray-600">Tailored to your specific needs and requirements</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-pink-100 text-pink-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">2</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Live Demonstration</h3>
                      <p className="text-gray-600">See the system in action with real scenarios</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-pink-100 text-pink-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">3</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Q&A Session</h3>
                      <p className="text-gray-600">Get answers to all your questions</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-pink-100 text-pink-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">4</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Implementation Plan</h3>
                      <p className="text-gray-600">Detailed roadmap for deployment</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Details</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-pink-500 text-xl">📧</div>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-600">demo@resolve.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-pink-500 text-xl">📞</div>
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-pink-500 text-xl">⏰</div>
                    <div>
                      <p className="font-semibold text-gray-900">Business Hours</p>
                      <p className="text-gray-600">Mon-Fri: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/attendance"
              className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              ← Back to Attendance
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoEnquiryPage; 