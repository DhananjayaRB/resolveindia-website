import React from 'react';

const CircularsNotifications = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center px-4 py-8">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Main Heading */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent font-[var(--font-geist-sans)] leading-tight mb-4">
            Circulars & Notifications
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Subtitle */}
        <div className="mb-12 animate-fade-in-delay">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 font-[var(--font-source-sans-3)] mb-6">
            Coming Soon
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-[var(--font-source-sans-3)]">
            Stay updated with the latest government circulars, tax notifications, and regulatory updates. 
            We&apos;re building a comprehensive notification system to keep you informed.
          </p>
        </div>

        {/* Feature Preview */}
        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 shadow-lg mb-8 animate-fade-in-delay-2">
          <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
            <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4 font-[var(--font-geist-sans)]">
            Real-time Updates & Alerts
          </h3>
          <p className="text-gray-600 font-[var(--font-source-sans-3)]">
            Get instant notifications about important regulatory changes, tax updates, and compliance requirements.
          </p>
        </div>

        {/* Back to Resources */}
        <div className="animate-fade-in-delay-3">
          <a 
            href="/resources/blogs" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-[var(--font-geist-sans)]"
          >
            Explore Our Resources
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

      </div>
    </div>
  );
};

export default CircularsNotifications;
