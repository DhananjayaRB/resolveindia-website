'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FaQuestionCircle, FaLightbulb, FaChevronDown, FaChevronUp, FaSearch, FaBookOpen, FaUsers, FaCog, FaChartLine, FaShieldAlt } from 'react-icons/fa';

const faqData = [
  {
    question: "How do I get started with Resolve's services?",
    answer: "Getting started is easy! Simply contact our team through the contact form or call us directly. We'll schedule a consultation to understand your business needs and provide a customized solution."
  },
  {
    question: "What payroll services do you offer?",
    answer: "We offer comprehensive payroll services including multi-layer pay structures, statutory compliance, tax calculations, PF/ESI management, and detailed MIS reporting. Our services are designed for businesses of all sizes."
  },
  {
    question: "Is my data secure with Resolve?",
    answer: "Absolutely! We implement enterprise-grade security measures including data encryption, secure servers, and regular backups. Your business data is protected with the highest security standards."
  },
  {
    question: "Do you provide customer support?",
    answer: "Yes, we provide 24/7 customer support through multiple channels including phone, email, and live chat. Our dedicated support team is always ready to help you with any queries."
  },
  {
    question: "Can I integrate Resolve with my existing systems?",
    answer: "Yes, our solutions are designed to integrate seamlessly with most existing business systems. We provide API access and custom integration services to ensure smooth data flow."
  },
  {
    question: "What are your pricing plans?",
    answer: "We offer flexible pricing plans tailored to your business size and requirements. Contact us for a detailed quote based on your specific needs and number of employees."
  }
];

const tipsData = [
  {
    icon: FaBookOpen,
    title: "Best Practices for Payroll Management",
    description: "Implement regular audits, maintain accurate records, and stay updated with tax regulations to ensure smooth payroll operations.",
    category: "Payroll"
  },
  {
    icon: FaUsers,
    title: "Employee Onboarding Tips",
    description: "Create a structured onboarding process with clear documentation, training schedules, and regular check-ins for new employees.",
    category: "HR"
  },
  {
    icon: FaCog,
    title: "System Integration Guidelines",
    description: "Plan your integration carefully, test thoroughly in staging environments, and maintain data backups before going live.",
    category: "Technology"
  },
  {
    icon: FaChartLine,
    title: "Performance Monitoring",
    description: "Set clear KPIs, track metrics regularly, and use data insights to optimize your business processes and employee productivity.",
    category: "Analytics"
  },
  {
    icon: FaShieldAlt,
    title: "Compliance Checklist",
    description: "Stay updated with regulatory changes, maintain proper documentation, and conduct regular compliance audits to avoid penalties.",
    category: "Compliance"
  },
  {
    icon: FaQuestionCircle,
    title: "Customer Support Best Practices",
    description: "Provide multiple support channels, maintain knowledge bases, and ensure quick response times to enhance customer satisfaction.",
    category: "Support"
  }
];

const categories = ['All', 'Payroll', 'HR', 'Technology', 'Analytics', 'Compliance', 'Support'];

export default function FaqTipsPage() {
  const [activeTab, setActiveTab] = useState('faq');
  const [openFaq, setOpenFaq] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTips = tipsData.filter(tip => {
    const matchesCategory = selectedCategory === 'All' || tip.category === selectedCategory;
    const matchesSearch = tip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tip.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[rgb(2,126,197)] to-[rgb(2,126,197)]/90 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              FAQ & Tips
            </h1>
            <p className="text-base md:text-lg opacity-90 max-w-2xl mx-auto">
              Find answers to common questions and discover helpful tips to optimize your business operations
            </p>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-md">
            <button
              onClick={() => setActiveTab('faq')}
              className={`w-72 px-6 py-4 rounded-md font-medium transition-all duration-200 cursor-pointer text-center ${
                activeTab === 'faq'
                  ? 'bg-[rgb(2,126,197)] text-white shadow-md'
                  : 'text-gray-600 hover:text-[rgb(2,126,197)] hover:bg-gray-50'
              }`}
            >
              <FaQuestionCircle className="inline mr-2" />
              <span className="whitespace-nowrap">Frequently Asked Questions</span>
            </button>
            <button
              onClick={() => setActiveTab('tips')}
              className={`w-72 px-6 py-4 rounded-md font-medium transition-all duration-200 cursor-pointer text-center ${
                activeTab === 'tips'
                  ? 'bg-[rgb(2,126,197)] text-white shadow-md'
                  : 'text-gray-600 hover:text-[rgb(2,126,197)] hover:bg-gray-50'
              }`}
            >
              <FaLightbulb className="inline mr-2" />
              <span className="whitespace-nowrap">Business Tips</span>
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        {activeTab === 'faq' && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
                             <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
                 Frequently Asked Questions
               </h2>
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                    >
                      <aside className="font-medium text-gray-800">{faq.question}</aside>
                      {openFaq === index ? (
                        <FaChevronUp className="text-[rgb(2,126,197)]" />
                      ) : (
                        <FaChevronDown className="text-[rgb(2,126,197)]" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-4">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tips Section */}
        {activeTab === 'tips' && (
          <div className="max-w-5xl mx-auto">
            {/* Search and Filter */}
            <div className="bg-white rounded-lg shadow-lg p-4 mb-6">
              <div className="flex flex-col md:flex-row gap-3">
                <div className="flex-1 relative">
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search tips..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(2,126,197)] focus:border-[rgb(2,126,197)] outline-none text-sm"
                  />
                </div>
                <div className="flex flex-wrap gap-1">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                        selectedCategory === category
                          ? 'bg-[rgb(2,126,197)] text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Tips Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
              {filteredTips.map((tip, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-[rgb(2,126,197)] rounded-lg flex items-center justify-center mr-3">
                      <tip.icon className="text-white text-lg" />
                    </div>
                    <div>
                      <aside className="text-xs font-medium text-[rgb(2,126,197)] bg-[rgb(2,126,197)]/10 px-1 py-0.5 rounded-full">
                        {tip.category}
                      </aside>
                    </div>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-800 mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              ))}
            </div>

            {filteredTips.length === 0 && (
              <div className="text-center py-12">
                <FaLightbulb className="text-6xl text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-gray-600 mb-2">No tips found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Contact CTA */}
      <div className="bg-[rgb(2,126,197)] text-white py-16 mt-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                     <h2 className="text-2xl font-bold mb-4">
             Still have questions?
           </h2>
           <p className="text-lg opacity-90 mb-8">
             Our expert team is here to help you with any specific questions or requirements
           </p>
          <Link href="/contact">
            <button className="bg-white text-[rgb(2,126,197)] px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 shadow-lg cursor-pointer">
              Contact Our Team
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
} 