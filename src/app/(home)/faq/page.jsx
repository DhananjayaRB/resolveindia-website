'use client';
import React, { useState } from 'react';
import { FaQuestionCircle, FaChevronDown, FaChevronUp, FaSearch, FaPhone, FaEnvelope, FaComments } from 'react-icons/fa';

const faqData = [
  {
    category: "General",
    questions: [
      {
        question: "How do I get started with Resolve's services?",
        answer: "Getting started is easy! Simply contact our team through the contact form or call us directly. We'll schedule a consultation to understand your business needs and provide a customized solution."
      },
      {
        question: "What makes Resolve different from other service providers?",
        answer: "Resolve stands out with our comprehensive approach, cutting-edge technology, dedicated support team, and proven track record of helping businesses streamline their operations efficiently."
      },
      {
        question: "Do you offer free consultations?",
        answer: "Yes, we offer free initial consultations to understand your business requirements and provide tailored recommendations without any obligation."
      }
    ]
  },
  {
    category: "Payroll Services",
    questions: [
      {
        question: "What payroll services do you offer?",
        answer: "We offer comprehensive payroll services including multi-layer pay structures, statutory compliance, tax calculations, PF/ESI management, and detailed MIS reporting. Our services are designed for businesses of all sizes."
      },
      {
        question: "How do you handle statutory compliance?",
        answer: "We ensure full compliance with all statutory requirements including PF, ESI, TDS, and other tax obligations. Our team stays updated with the latest regulations to keep you compliant."
      },
      {
        question: "Can you handle multi-location payroll?",
        answer: "Absolutely! We specialize in managing payroll for businesses with multiple locations, different pay structures, and varying compliance requirements across states."
      }
    ]
  },
  {
    category: "Security & Data",
    questions: [
      {
        question: "Is my data secure with Resolve?",
        answer: "Absolutely! We implement enterprise-grade security measures including data encryption, secure servers, and regular backups. Your business data is protected with the highest security standards."
      },
      {
        question: "How do you protect sensitive employee information?",
        answer: "We use industry-standard encryption, secure data centers, access controls, and regular security audits to ensure all employee information remains confidential and protected."
      },
      {
        question: "Do you provide data backup and recovery?",
        answer: "Yes, we maintain regular automated backups and have robust disaster recovery procedures in place to ensure your data is always safe and accessible."
      }
    ]
  },
  {
    category: "Support & Service",
    questions: [
      {
        question: "Do you provide customer support?",
        answer: "Yes, we provide 24/7 customer support through multiple channels including phone, email, and live chat. Our dedicated support team is always ready to help you with any queries."
      },
      {
        question: "What are your response times for support requests?",
        answer: "We typically respond to urgent issues within 2 hours and general queries within 24 hours. Our priority is to ensure minimal disruption to your business operations."
      },
      {
        question: "Do you provide training for your systems?",
        answer: "Yes, we provide comprehensive training for all our systems including user guides, video tutorials, and personalized training sessions for your team."
      }
    ]
  },
  {
    category: "Integration & Technology",
    questions: [
      {
        question: "Can I integrate Resolve with my existing systems?",
        answer: "Yes, our solutions are designed to integrate seamlessly with most existing business systems. We provide API access and custom integration services to ensure smooth data flow."
      },
      {
        question: "What platforms do you support?",
        answer: "We support integration with major ERP systems, accounting software, HR platforms, and custom business applications. Contact us to discuss your specific integration needs."
      },
      {
        question: "Do you provide mobile access?",
        answer: "Yes, our solutions include mobile apps and responsive web interfaces that allow you to access your data and manage operations from anywhere, anytime."
      }
    ]
  },
  {
    category: "Pricing & Plans",
    questions: [
      {
        question: "What are your pricing plans?",
        answer: "We offer flexible pricing plans tailored to your business size and requirements. Contact us for a detailed quote based on your specific needs and number of employees."
      },
      {
        question: "Do you offer volume discounts?",
        answer: "Yes, we offer competitive pricing and volume discounts for larger organizations. Our pricing is transparent with no hidden costs."
      },
      {
        question: "Can I change my plan later?",
        answer: "Absolutely! You can upgrade or modify your plan at any time based on your changing business needs. We ensure smooth transitions without service disruption."
      }
    ]
  }
];

const categories = ['All', 'General', 'Payroll Services', 'Security & Data', 'Support & Service', 'Integration & Technology', 'Pricing & Plans'];

export default function FaqPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFaqs = faqData.flatMap(category => 
    category.questions.map(q => ({ ...q, category: category.category }))
  ).filter(faq => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[rgb(2,126,197)] to-[rgb(2,126,197)]/90 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
              Find answers to common questions about our services, support, and solutions
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-lg shadow-lg p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1 relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search questions..."
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
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
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

        {/* FAQ Section */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-lg font-bold text-gray-800 mb-4 text-center">
              Find Your Answers
            </h2>
            
            {filteredFaqs.length > 0 ? (
              <div className="space-y-1">
                {filteredFaqs.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-sm">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-3 py-2 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                    >
                      <div className="flex-1">
                        <span className="font-medium text-gray-800 text-xs">{faq.question}</span>
                        <div className="mt-1">
                          <span className="text-xs font-medium text-[rgb(2,126,197)] bg-[rgb(2,126,197)]/10 px-1 py-0.5 rounded-full">
                            {faq.category}
                          </span>
                        </div>
                      </div>
                      {openFaq === index ? (
                        <FaChevronUp className="text-[rgb(2,126,197)] ml-2" />
                      ) : (
                        <FaChevronDown className="text-[rgb(2,126,197)] ml-2" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-3 pb-2">
                        <p className="text-gray-600 leading-relaxed text-xs">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <FaQuestionCircle className="text-6xl text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-gray-600 mb-2">No questions found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </div>
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[rgb(2,126,197)] px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 shadow-lg flex items-center justify-center">
              <FaPhone className="mr-2" />
              Call Us
            </button>
            <button className="bg-white text-[rgb(2,126,197)] px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 shadow-lg flex items-center justify-center">
              <FaEnvelope className="mr-2" />
              Email Us
            </button>
            <button className="bg-white text-[rgb(2,126,197)] px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 shadow-lg flex items-center justify-center">
              <FaComments className="mr-2" />
              Live Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 