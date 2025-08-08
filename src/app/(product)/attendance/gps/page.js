"use client";
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const GPSPage = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqData = [
    {
      question: "What is Attendance Management Software?",
      answer: "Attendance Management Software is a digital solution that helps organizations track employee attendance, manage work schedules, and generate reports for better workforce management."
    },
    {
      question: "Is the New Attendance Technology provided available on cloud and also in user mobile phones.",
      answer: "Yes, our attendance technology is available both on cloud platforms and mobile applications, ensuring accessibility from anywhere."
    },
    {
      question: "Is the New Attendance Available On Desktop and Web?",
      answer: "Absolutely! Our attendance system is accessible on desktop computers and web browsers, providing flexibility for different work environments."
    },
    {
      question: "What are the benefits of using an Attendance Management System?",
      answer: "Benefits include improved accuracy, reduced manual work, real-time tracking, better compliance, and comprehensive reporting capabilities."
    },
    {
      question: "I am a very small business, can I still benefit from your Attendance Management System? What are the minimum requirements?",
      answer: "Yes, our system is designed to scale from small businesses to large enterprises. Minimum requirements include internet connectivity and basic devices."
    },
    {
      question: "Can Employees Check In/Out from any location (Work From Home)?",
      answer: "Yes, our GPS-based attendance system allows employees to check in/out from any location, making it perfect for remote work scenarios."
    },
    {
      question: "How does the Attendance Management System handle different shifts and schedules?",
      answer: "Our system supports multiple shift configurations, flexible schedules, and can accommodate various work patterns and time zones."
    },
    {
      question: "What kind of reports can I generate from the Attendance Management System?",
      answer: "You can generate attendance reports, late arrival reports, overtime reports, leave reports, and custom analytics based on your needs."
    },
    {
      question: "Can I integrate different Attendance Tracking Methods (e.g., Biometric, GPS)?",
      answer: "Yes, our system supports multiple tracking methods including GPS, biometric, USB fingerprint, and web login - all integrated seamlessly."
    },
    {
      question: "Is the system capable of providing real-time attendance data and alerts?",
      answer: "Absolutely! Our system provides real-time attendance data, instant alerts for late arrivals, and live dashboard updates."
    },
    {
      question: "How do I get started with the Attendance Management System?",
      answer: "Getting started is simple! Contact our team for a personalized demo, choose your plan, and we'll help you set up your organization."
    }
  ];

  const setupSteps = [
    { title: "Organization Setup", icon: "/assets/gpsPageImg/Organization-Setup-e1595328409411.png", color: "bg-teal-500" },
    { title: "Employee Master", icon: "/assets/gpsPageImg/Employee-Master-e1595328398129.png", color: "bg-blue-400" },
    { title: "Business Hours", icon: "/assets/gpsPageImg/Business-Hour-e1595328067356.png", color: "bg-red-400" },
    { title: "Attendance Mode", icon: "/assets/gpsPageImg/Attendance-Mode-e1595328383507.png", color: "bg-blue-600" },
    { title: "Weekly off", icon: "/assets/gpsPageImg/Weekly-Off-e1595328375561.png", color: "bg-purple-500" },
    { title: "Commute", icon: "/assets/gpsPageImg/Commute-e1595328367855.png", color: "bg-purple-400" },
    { title: "Check", icon: "/assets/gpsPageImg/Break-e1595328357389.png", color: "bg-blue-400" },
    { title: "Public Holidays", icon: "/assets/gpsPageImg/Pubic-Holiday-e1595328341964.png", color: "bg-red-400" },
    { title: "E-Mail Alert", icon: "/assets/gpsPageImg/Email-Alert-e1595328311805.png", color: "bg-teal-500" },
    { title: "Punctuality", icon: "/assets/gpsPageImg/Punctulaity-e1595328501892.png", color: "bg-blue-600" }
  ];

  const features = [
    { 
      title: "GPS", 
      icon: "/assets/gpsPageImg/GPS.png", 
      description: "Our GPS mode provides flexibility & independence to your field teams & at the same time real-time information to your Managers as well. Not only does it track location but also provides detailed analytics for better workforce management.",
      color: "border-blue-400"
    },
    { 
      title: "Biometric Integration", 
      icon: "/assets/gpsPageImg/Biometric-Integration.png", 
      description: "Biometric devices & their supporting software provide localised information to a HR Manager & call for manual intervention of synchronisation. Our system automates this process completely.",
      color: "border-red-400"
    },
    { 
      title: "USB Fingerprint", 
      icon: "/assets/gpsPageImg/USB-Fingerprint.png", 
      description: "USB Fingerprint device is relevant for small setups like retail chains, co-working spaces and is an inexpensive option as compared to a Bio-Metric device.",
      color: "border-green-400"
    },
    { 
      title: "Web Login", 
      icon: "/assets/gpsPageImg/Web-Login.png", 
      description: "Not all organizations and all teams may have a biometric system and may not necessarily be requiring a mobility-based attendance system as well.",
      color: "border-orange-400"
    },
    { 
      title: "Work From Home", 
      icon: "/assets/gpsPageImg/Work-From-Home.png", 
      description: "Work from home has been gaining increased acceptance across many organizations, which provides flexibility to the worker & cuts out hours of commute time.",
      color: "border-purple-400"
    }
  ];

  const pricingPlans = [
    {
      name: "BASIC VERSION",
      subtitle: "Non GPS",
      price: "Rs.500",
      period: "Per Month",
      features: [
        "Upto 33 users",
        "Rs. 15/User/Month (from 34th user)",
        "Powerful Dashboard",
        "Bio-metric Login",
        "Web and Mobile Login",
        "Biometric Integration for GPS*"
      ]
    },
    {
      name: "ECONOMY",
      subtitle: "Geo Tag",
      price: "Rs.750",
      period: "Per Month",
      features: [
        "Upto 10 users",
        "Rs. 75/user/month",
        "Powerful Dashboard",
        "Auto-generated Daily Reports",
        "Bio-metric Login",
        "Web and Mobile Login"
      ]
    },
    {
      name: "PREMIUM",
      subtitle: "Google Route Map",
      price: "Rs.1000",
      period: "Per Month",
      features: [
        "Upto 5 users",
        "Rs. 210/user/month",
        "Powerful Dashboard",
        "Auto-generated Daily Reports",
        "Bio-metric Login",
        "Web and Mobile Login"
      ]
    }
  ];

  const clientLogos = [
    "altech.png", "IPC.png", "tally.png", "vmr.png", "janacare.png", "blackbug.png",
    "unacadamy.png", "indecomm.png", "unitus.png", "atlas-system.png", "ngx.png", "telit.png",
    "prasa.png", "novalife.png", "lkq.png", "cothas.png", "spc.png", "dfy.png"
  ];

  return (
    <div className="pt-20 text-sm">
             {/* Hero Section */}
       <section className="bg-white py-16">
         <div className="max-w-7xl mx-auto px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
             <div>
               <h1 className="text-3xl lg:text-4xl font-bold text-[rgb(2,126,197)] mb-6 animate-slide-in-left">
                 Your Attendance - <span className="text-gray-600">Look No Further -</span> Resolved!
               </h1>
               <button className="bg-[rgb(2,126,197)] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[rgb(1,100,150)] transition-colors animate-slide-in-left-delayed">
                 GET IN TOUCH
               </button>
             </div>
             <div className="relative">
               <img 
                 src="/assets/gpsPageImg/Resolve-Attendance.png" 
                 alt="GPS Attendance System Dashboard" 
                 className="w-full h-auto scale-110"
               />
             </div>
           </div>
         </div>
       </section>

      {/* Work From Anywhere Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-[rgb(2,126,197)] mb-6">
            You can work from anywhere – We Resolve your Attendance!
          </h2>
          <p className="text-base text-gray-600 mb-12 max-w-4xl mx-auto">
            Our comprehensive attendance management solution provides multiple tracking methods including GPS, biometric, USB fingerprint, web login, and work from home options. Track attendance from anywhere with real-time visibility and automated reporting.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className={`w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center  ${feature.color} bg-white`}>
                  <img src={feature.icon} alt={feature.title} className="w-full h-full" />
                </div>
                <h3 className="font-semibold text-[rgb(2,126,197)] mb-3 text-base">{feature.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Setup Steps Section */}
        <section className="py-16 bg-[#F4F4F4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-[rgb(2,126,197)] mb-12">
            Simple 10 Step Attendance Setup
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {setupSteps.map((step, index) => (
              <div key={index} >
                <img src={step.icon} alt={step.title} className="w-50 h-50 mx-auto mb-4" />
              
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Attendance is Resolved Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/assets/gpsPageImg/Attendance-Management-System.gif" 
                alt="Attendance Dashboard" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="animate-zoom-in">
              <h2 className="text-2xl lg:text-2xl font-bold text-[rgb(2,126,197)] mb-6">
                This is how your Attendance is Resolved
              </h2>
              <p className="text-base text-gray-600 mb-8">
              All that your HR Manager or our Attendance Experts need to do is set up your Organisation structure the way it is, Import your Employee database in excel with their Names, ID’s, designations their, Reporting Managers, set up Public Holidays, Weekly Offs, Working Days and Working Hours, either as common to all or multiple rules for different teams, Punctuality rules if it is important to your organisation, assign which mode suits whom, be it Bio Metric, GPS, Web login, USB Fingerprint or Work from Home. With this setup, all your team members can download the mobile app or register themselves to the web app and your whole Attendance system is set.


              </p>
              <button className="bg-[rgb(2,126,197)] text-white px-4 py-2 rounded-md  hover:bg-[rgb(1,100,150)] transition-colors">
                GET IN TOUCH
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Real Time Visibility Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-2xl lg:text-2xl font-bold text-[rgb(2,126,197)] mb-6">
                Real Time Visibility!
              </h2>
              <p className="text-base text-gray-600 mb-8">
              The expectation of attendance and timeliness is a kind of unstated given and yet keeps escaping being on top of for most organizations. Employees by norm would follow policies and conventional attendance systems serve well for conventional environments. With changing times, the exception, the mobility demands of work for those on the move and for that matter the flexibility needs of work from home call for new age attendance solutions. Resolve Attendance attempts to harmonize this diversity of work and attendance needs into a common solution and provides real-time visibility. Be it by location, Department, Projector for those on the move and all can be viewed from a mobile app or a web app.

</p>
              <button className="bg-[rgb(2,126,197)] text-white px-2 py-2 rounded-md  hover:bg-[rgb(1,100,150)] transition-colors">
                GET IN TOUCH
              </button>
            </div>
            <div className="relative">
              <div className="flex space-x-4">
                <img 
                  src="/assets/gpsPageImg/workimg-2-e1595318007102.png" 
                  alt="Mobile Dashboard" 
                  className="w-200 h-auto transform rotate-12"
                />
            
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl  text-[rgb(2,126,197)] mb-12">
            PRICING - ANNUAL SUBSCRIPTION PLANS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                {/* Header */}
                  <div className="bg-[#F0F3F2] p-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{plan.name}</h3>
                  <p className="text-sm text-gray-600">{plan.subtitle}</p>
                </div>
                
                {/* Price Section */}
                <div className="bg-gradient-to-r from-[rgb(2,126,197)] to-[rgb(1,100,150)] text-white p-6 text-center">
                  <div className="text-3xl font-bold mb-1">{plan.price}</div>
                  <div className="text-sm opacity-90">{plan.period}</div>
                </div>
                
                {/* Features */}
                <div className="bg-[#F0F3F2]">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="border-b border-[#E0E0E0] py-3 px-4 text-left">
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <button className="bg-[rgb(2,126,197)] text-white px-4 py-2 rounded-md font-semibold hover:bg-[rgb(1,100,150)] transition-colors">
            GET IN TOUCH
          </button>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-[rgb(2,126,197)] mb-12">
            Our Clients
          </h2>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
            {clientLogos.map((logo, index) => (
              <div key={index} className="flex items-center justify-center border-1">
                <img 
                  src={`/assets/gpsPageImg/${logo}`} 
                  alt={`Client logo ${index + 1}`} 
                  className="h-40 w-40 object-contain grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-[rgb(2,126,197)] mb-12 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <span className="font-semibold text-[rgb(2,126,197)] text-sm">{faq.question}</span>
                  {openFAQ === index ? (
                    <FaChevronUp className="text-gray-500" />
                  ) : (
                    <FaChevronDown className="text-gray-500" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 text-sm">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo CTA Section */}
      <section className="py-16 bg-gradient-to-b from-blue-200 to-[rgb(2,126,197)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-xl lg:text-2xl font-bold text-white mb-6">
            Schedule your personalized demonstration today
          </h2>
          <button className="bg-[rgb(2,126,197)] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[rgb(1,100,150)] transition-colors shadow-lg">
            GET IN TOUCH
          </button>
        </div>
      </section>
    </div>
  );
};

export default GPSPage; 