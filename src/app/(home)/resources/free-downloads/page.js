import React from 'react';

const FreeDownloads = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center px-4 py-8">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Main Heading */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent font-[var(--font-geist-sans)] leading-tight mb-4">
            Free Downloads
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Subtitle */}
        <div className="mb-12 animate-fade-in-delay">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 font-[var(--font-source-sans-3)] mb-6">
            Coming Soon
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-[var(--font-source-sans-3)]">
            Access valuable business resources, templates, guides, and tools - all for free! 
            We&apos;re curating a comprehensive library of downloadable resources for your business success.
          </p>
        </div>

        {/* Feature Preview */}
        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 shadow-lg mb-8 animate-fade-in-delay-2">
          <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4 font-[var(--font-geist-sans)]">
            Business Templates & Guides
          </h3>
          <p className="text-gray-600 font-[var(--font-source-sans-3)]">
            Download professional templates, compliance checklists, tax guides, and business planning resources.
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

export default FreeDownloads;
