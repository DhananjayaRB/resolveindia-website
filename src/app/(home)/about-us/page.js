import React from 'react';

export const metadata = {
  title: "About Us - ResolveBiz Services and Apps Pvt Ltd",
  description: "Learn about ResolveBiz, a leading provider of business process management solutions. Discover our mission, vision, team, and commitment to empowering SMEs and enterprises with innovative technology solutions.",
  keywords: ["about ResolveBiz", "business process management", "SME solutions", "enterprise software", "payroll services", "accounting services", "team", "mission", "vision"],
  openGraph: {
    title: "About Us - ResolveBiz Services and Apps Pvt Ltd",
    description: "Learn about ResolveBiz, a leading provider of business process management solutions for SMEs and enterprises.",
    url: 'https://resolveindia.com/about-us',
    siteName: 'ResolveBiz',
    images: [
      {
        url: '/assets/landingPageImage/logo.png',
        width: 1200,
        height: 630,
        alt: 'ResolveBiz About Us',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "About Us - ResolveBiz Services and Apps Pvt Ltd",
    description: "Learn about ResolveBiz, a leading provider of business process management solutions.",
    images: ['/assets/landingPageImage/logo.png'],
  },
  alternates: {
    canonical: '/about-us',
  },
};



export default function AboutUsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About ResolveBiz",
    "description": "Learn about ResolveBiz, a leading provider of business process management solutions for SMEs and enterprises.",
    "url": "https://resolveindia.com/about-us",
    "mainEntity": {
      "@type": "Organization",
      "name": "ResolveBiz Services and Apps Pvt Ltd",
      "url": "https://resolveindia.com",
      "logo": "https://resolveindia.com/assets/landingPageImage/logo.png",
      "description": "Comprehensive business process management solutions for SMEs and enterprises",
      "foundingDate": "2019",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "535, 12th Cross, 5th Main Road, RMV Extension, HIG Dollars Colony",
        "addressLocality": "Bangalore",
        "postalCode": "560094",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9844810424",
        "contactType": "customer service",
        "email": "sales@resolveindia.com"
      },
      "employee": [
        {
          "@type": "Person",
          "name": "Mr. Sudev Rao",
          "jobTitle": "CEO",
          "description": "Chartered Accountant with diverse experience in development banking, investment banking, and business consulting."
        },
        {
          "@type": "Person",
          "name": "Dr. Sheela Rao",
          "jobTitle": "COO",
          "description": "PhD from IISc with expertise in technology development and Tally platform integration."
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gray-50">

        {/* Introduction Section */}
        <section className="text-white py-20" aria-labelledby="introduction-heading" style={{ background: 'linear-gradient(135deg, rgb(0, 138, 204) 0%, rgb(0, 138, 204) 0%, rgb(25, 3, 122) 100%, rgb(25, 3, 122) 100%)' }}>
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              {/* Left Image */}
              <div className="w-1/6 flex justify-start">
                <img
                  src="/assets/aboutUs/object_deco_1.webp"
                  alt="Decorative Object"
                  className="w-75 h-75 object-contain"
                />
              </div>

              {/* Center Content */}
              <div className="w-4/6 text-center px-8">
                <header className="transform transition-all duration-700 hover:scale-105 animate-fade-in">
                  <div className="w-16 h-1 bg-teal-300 mx-auto mb-4"></div>
                  <h1 id="introduction-heading" className="text-3xl md:text-4xl font-bold mb-6 text-gray-300 uppercase">
                    About Us
                  </h1>
                  <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                    Resolve Biz Services & Apps
                  </h2>
                  <p className="text-sm md:text-md opacity-90 max-w-5xl mx-auto leading-relaxed text-justify">
                    Our company and team has an in depth experience in the domain and have worked with SME&apos;s and appreciate their difficulties and wish to offer products and services that are designed specifically to meet their needs. Our products are highly configurable to suit existing practices rather than attempting the business to force fit any notion of best practice. The software is based on a Mobile first paradigm considering the widespread adoption of smartphones. The customer comes first and can decide to take only ONE product and pay only for that or with the Single Sign On feature can incrementally add more products as is required by him as and when he needs the same. This way the price function ratio is fully optimized. In any case the prices are set at highly affordable rates so that cost is not an inhibitor for customer adoption and value is.
                  </p>
                </header>
              </div>

              {/* Right Image */}
              <div className="w-1/6 flex justify-end">
                <img
                  src="/assets/aboutUs/object_plant_1.webp"
                  alt="Plant Object"
                  className="w-75 h-75 object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Us? LEARN OUR METHODOLOGY Section */}
        <section className="py-20" style={{ backgroundColor: '#F4F4F0' }} aria-labelledby="why-us-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="text-center mb-16 animate-fade-in">
              <div className="w-16 h-1 bg-teal-400 mx-auto mb-4"></div>
              <h2 id="why-us-heading" className="text-3xl md:text-4xl text-gray-800 mb-4 group cursor-pointer">
                <strong>Why Us?</strong> <br />
                <p className='font-light pt-3'>LEARN OUR METHODOLOGY</p>
                                 {/* Hover underline effect */}
                 <div className="relative mt-4">
                   <div className="absolute left-1/2 transform -translate-x-1/2 w-0 h-1 bg-teal-400 transition-all duration-500 group-hover:w-full group-hover:scale-x-100 group-hover:origin-center"></div>
                 </div>
              </h2>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* MSME Focus Card */}
              <article className="relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105 animate-slide-in-up">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 opacity-90"></div>
                <div className="relative p-8 text-black">
                  <h3 className="text-2xl font-bold mb-6">MSME Focus</h3>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center">
                      <span className="text-black mr-3">✓</span>
                      <span className="font-semibold">36MIL UNITS EMPLOYING 80MIL</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-black mr-3">✓</span>
                      <span className="font-semibold">45% OF MANUFACTURING OUTPUT</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-black mr-3">✓</span>
                      <span className="font-semibold">8% OF NATIONAL GDP</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-black mr-3">✓</span>
                      <span className="font-semibold">40% OF NATIONAL EXPORT</span>
                    </li>
                  </ul>
                  <p className="text-lg font-bold">
                    PIVOTAL TO <span className="text-black">INDIA&apos;S</span> EVOLUTION
                  </p>
                </div>
              </article>

              {/* Current MSME Problems Card */}
              <article className="relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105 animate-slide-in-up" style={{ animationDelay: '200ms' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-blue-900 opacity-90"></div>
                <div className="relative p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">Current MSME Problems</h3>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center">
                      <span className="text-teal-400 mr-3">✓</span>
                      <span className="font-semibold">CAPITAL ISSUES</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-teal-400 mr-3">✓</span>
                      <span className="font-semibold">TECHNOLOGY INACCESSIBLE</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-teal-400 mr-3">✓</span>
                      <span className="font-semibold">LACK OF MANAGEMENT DEPTH & EXPERTISE</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-teal-400 mr-3">✓</span>
                      <span className="font-semibold">COMPOUND, COMPLICATED & DIVERSE PROBLEMS</span>
                    </li>
                  </ul>
                  <p className="text-lg font-bold">
                    CURRENTLY <span className="text-teal-400">NO</span> SOLUTION
                  </p>
                </div>
              </article>

              {/* USING Current Trend Card */}
              <article className="relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105 animate-slide-in-up" style={{ animationDelay: '400ms' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black opacity-90"></div>
                <div className="relative p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">USING Current Trend</h3>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center">
                      <span className="text-teal-400 mr-3">✓</span>
                      <span className="font-semibold">COST EFFICIENT</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-teal-400 mr-3">✓</span>
                      <span className="font-semibold">USE THE CURRENT SMARTPHONE PENETRATION</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-teal-400 mr-3">✓</span>
                      <span className="font-semibold">OPTIMUM UTILIZATION OF PRE-OWNED RESOURCES</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-teal-400 mr-3">✓</span>
                      <span className="font-semibold">VALUE PROVIDED THROUGH MOBILE APPS</span>
                    </li>
                  </ul>
                  <p className="text-lg font-bold">
                    AVAIL AT <span className="text-teal-400">LOWEST</span> PRICES
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Connect With Us Section */}
        <section className="py-20 relative overflow-hidden" aria-labelledby="connect-heading">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/assets/aboutUs/about_us_img13.webp"
              alt="Background"
              className="w-full h-50% object-cover"
            />
            {/* Gradient Overlay for better text visibility */}
          </div>

          {/* Top Banner */}
          <div className="relative z-10 text-center py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 id="connect-heading" className="text-4xl md:text-5xl font-bold text-white uppercase mb-6 drop-shadow-lg">
                Connect With Us
              </h2>
              <p className="text-xl text-white max-w-4xl mx-auto leading-relaxed drop-shadow-lg font-medium">
                Contact us through our various channels. We would be glad to hear from you regarding any queries. We deeply appreciate your interest.
              </p>
            </div>
          </div>

                     {/* Contact Details */}
             <div className="relative z-10 pb-20" style={{backgroundColor: '#F0F3F2'}}>
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-12 border border-gray-100">
                                       {/* Contact Information with Icons Above */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
                      {/* Address */}
                      <article className="text-center group hover:transform hover:scale-105 transition-all duration-300 relative">
                        {/* Address Icon positioned above the card */}
                        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-teal-400 to-teal-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group">
                          <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        
                        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 sm:p-6 h-full border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all duration-300 pt-16 sm:pt-20 lg:pt-24">
                          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 group-hover:text-teal-600 transition-colors duration-300">OUR ADDRESS</h3>
                          <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">
                            535, 12th Cross, 5th Main Road, RMV Extension, HIG Dollars Colony, Bangalore - 94
                          </p>
                        </div>
                      </article>

                      {/* Email */}
                      <article className="text-center group hover:transform hover:scale-105 transition-all duration-300 relative">
                        {/* Email Icon positioned above the card */}
                        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group">
                          <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                        </div>
                        
                        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 sm:p-6 h-full border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all duration-300 pt-16 sm:pt-20 lg:pt-24">
                          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 group-hover:text-purple-600 transition-colors duration-300">OUR EMAIL</h3>
                          <div className="space-y-1 sm:space-y-2">
                            <p className="text-gray-600 text-xs sm:text-sm hover:text-purple-600 transition-colors duration-300">itcontracts@resolveindia.com</p>
                            <p className="text-gray-600 text-xs sm:text-sm hover:text-purple-600 transition-colors duration-300">sales@resolveindia.com</p>
                          </div>
                        </div>
                      </article>

                      {/* Phone */}
                      <article className="text-center group hover:transform hover:scale-105 transition-all duration-300 sm:col-span-2 lg:col-span-1 relative">
                        {/* Phone Icon positioned above the card */}
                        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group">
                          <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                            <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                          </svg>
                        </div>
                        
                        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 sm:p-6 h-full border border-gray-200 hover:border-red-300 hover:shadow-md transition-all duration-300 pt-16 sm:pt-20 lg:pt-24">
                          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 group-hover:text-red-600 transition-colors duration-300">OUR NO.</h3>
                          <div className="space-y-1 sm:space-y-2">
                            <p className="text-gray-600 text-xs sm:text-sm hover:text-red-600 transition-colors duration-300">+91 8904426424</p>
                            <p className="text-gray-600 text-xs sm:text-sm hover:text-red-600 transition-colors duration-300">+91 9886520475</p>
                          </div>
                        </div>
                      </article>
                    </div>
                 </div>
               </div>
             </div>
        </section>


      </div>
    </>
  );
} 