import React from 'react';

const ComplianceServices = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center px-4 py-8">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Main Heading */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent font-[var(--font-geist-sans)] leading-tight mb-4">
            Compliance Services
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Subtitle */}
        <div className="mb-12 animate-fade-in-delay">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 font-[var(--font-source-sans-3)] mb-6">
            Coming Soon
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-[var(--font-source-sans-3)]">
            We&apos;re developing comprehensive compliance services to help your business stay ahead of regulatory requirements. 
            Our expert team is crafting solutions for seamless compliance management.
          </p>
        </div>

        {/* Feature Preview */}
        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 shadow-lg mb-8 animate-fade-in-delay-2">
          <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4 font-[var(--font-geist-sans)]">
            Regulatory Compliance Made Simple
          </h3>
          <p className="text-gray-600 font-[var(--font-source-sans-3)]">
            Stay compliant with changing regulations through our automated compliance monitoring and reporting system.
          </p>
        </div>

        {/* Back to Services */}
        <div className="animate-fade-in-delay-3">
          <a 
            href="/services/accounting-services" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-[var(--font-geist-sans)]"
          >
            Explore Our Services
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

      </div>
    </div>
  );
};

export default ComplianceServices;
