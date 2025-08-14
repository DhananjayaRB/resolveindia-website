'use client';
import React, { useState } from 'react';
import { FaLightbulb, FaSearch, FaBookOpen, FaUsers, FaCog, FaChartLine, FaShieldAlt, FaHandshake, FaRocket, FaAward, FaClock, FaCheckCircle, FaStar, FaDownload, FaShare } from 'react-icons/fa';

const tipsData = [
  {
    icon: FaBookOpen,
    title: "Best Practices for Payroll Management",
    description: "Implement regular audits, maintain accurate records, and stay updated with tax regulations to ensure smooth payroll operations.",
    category: "Payroll",
    difficulty: "Intermediate",
    readTime: "5 min read"
  },
  {
    icon: FaUsers,
    title: "Employee Onboarding Tips",
    description: "Create a structured onboarding process with clear documentation, training schedules, and regular check-ins for new employees.",
    category: "HR",
    difficulty: "Beginner",
    readTime: "3 min read"
  },
  {
    icon: FaCog,
    title: "System Integration Guidelines",
    description: "Plan your integration carefully, test thoroughly in staging environments, and maintain data backups before going live.",
    category: "Technology",
    difficulty: "Advanced",
    readTime: "7 min read"
  },
  {
    icon: FaChartLine,
    title: "Performance Monitoring",
    description: "Set clear KPIs, track metrics regularly, and use data insights to optimize your business processes and employee productivity.",
    category: "Analytics",
    difficulty: "Intermediate",
    readTime: "6 min read"
  },
  {
    icon: FaShieldAlt,
    title: "Compliance Checklist",
    description: "Stay updated with regulatory changes, maintain proper documentation, and conduct regular compliance audits to avoid penalties.",
    category: "Compliance",
    difficulty: "Advanced",
    readTime: "8 min read"
  },
  {
    icon: FaHandshake,
    title: "Customer Support Best Practices",
    description: "Provide multiple support channels, maintain knowledge bases, and ensure quick response times to enhance customer satisfaction.",
    category: "Support",
    difficulty: "Beginner",
    readTime: "4 min read"
  },
  {
    icon: FaRocket,
    title: "Business Process Optimization",
    description: "Identify bottlenecks, streamline workflows, and implement automation to improve efficiency and reduce operational costs.",
    category: "Operations",
    difficulty: "Intermediate",
    readTime: "6 min read"
  },
  {
    icon: FaAward,
    title: "Quality Assurance Strategies",
    description: "Establish quality standards, implement regular reviews, and create feedback loops to maintain high service quality.",
    category: "Quality",
    difficulty: "Intermediate",
    readTime: "5 min read"
  },
  {
    icon: FaClock,
    title: "Time Management Techniques",
    description: "Prioritize tasks effectively, use time-tracking tools, and implement productivity systems to maximize team efficiency.",
    category: "Productivity",
    difficulty: "Beginner",
    readTime: "4 min read"
  },
  {
    icon: FaCheckCircle,
    title: "Project Management Essentials",
    description: "Define clear objectives, set realistic timelines, and maintain regular communication to ensure project success.",
    category: "Management",
    difficulty: "Intermediate",
    readTime: "5 min read"
  },
  {
    icon: FaStar,
    title: "Employee Engagement Strategies",
    description: "Foster a positive work culture, recognize achievements, and provide growth opportunities to boost employee morale.",
    category: "HR",
    difficulty: "Beginner",
    readTime: "4 min read"
  },
  {
    icon: FaDownload,
    title: "Data Backup and Recovery",
    description: "Implement automated backup systems, test recovery procedures, and maintain multiple backup locations for data security.",
    category: "Technology",
    difficulty: "Intermediate",
    readTime: "6 min read"
  }
];

const categories = ['All', 'Payroll', 'HR', 'Technology', 'Analytics', 'Compliance', 'Support', 'Operations', 'Quality', 'Productivity', 'Management'];
const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

export default function TipsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTips = tipsData.filter(tip => {
    const matchesCategory = selectedCategory === 'All' || tip.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'All' || tip.difficulty === selectedDifficulty;
    const matchesSearch = tip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tip.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesDifficulty && matchesSearch;
  });

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[rgb(2,126,197)] to-[rgb(2,126,197)]/90 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">
              Business Tips & Best Practices
            </h1>
            <p className="text-base md:text-lg opacity-90 max-w-3xl mx-auto">
              Discover expert tips and strategies to optimize your business operations and drive success
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-lg shadow-lg p-4 mb-6">
          <div className="flex flex-col gap-3">
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
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex flex-wrap gap-1">
                <aside className="text-xs font-medium text-gray-700 mr-2">Category:</aside>
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
              <div className="flex flex-wrap gap-1">
                <aside className="text-xs font-medium text-gray-700 mr-2">Difficulty:</aside>
                {difficulties.map((difficulty) => (
                  <button
                    key={difficulty}
                    onClick={() => setSelectedDifficulty(difficulty)}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                      selectedDifficulty === difficulty
                        ? 'bg-[rgb(2,126,197)] text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {difficulty}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {filteredTips.map((tip, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 bg-[rgb(2,126,197)] rounded-lg flex items-center justify-center mr-3">
                  <tip.icon className="text-white text-lg" />
                </div>
                <div className="flex flex-col items-end">
                  <aside className="text-xs font-medium text-[rgb(2,126,197)] bg-[rgb(2,126,197)]/10 px-1 py-0.5 rounded-full mb-1">
                    {tip.category}
                  </aside>
                  <aside className={`text-xs font-medium px-1 py-0.5 rounded-full ${getDifficultyColor(tip.difficulty)}`}>
                    {tip.difficulty}
                  </aside>
                </div>
              </div>
              <h3 className="text-sm font-semibold text-gray-800 mb-2">
                {tip.title}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed mb-3">
                {tip.description}
              </p>
              <div className="flex items-center justify-between">
                <aside className="text-xs text-gray-500 flex items-center">
                  <FaClock className="mr-1" />
                  {tip.readTime}
                </aside>
                <div className="flex gap-1">
                  <button className="text-[rgb(2,126,197)] hover:text-[rgb(2,126,197)]/80 transition-colors duration-200">
                    <FaDownload className="text-xs" />
                  </button>
                  <button className="text-[rgb(2,126,197)] hover:text-[rgb(2,126,197)]/80 transition-colors duration-200">
                    <FaShare className="text-xs" />
                  </button>
                </div>
              </div>
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

      {/* Newsletter CTA */}
      <div className="bg-[rgb(2,126,197)] text-white py-16 mt-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-4">
            Get More Tips Delivered to Your Inbox
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Subscribe to our newsletter for the latest business tips, industry insights, and best practices
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button className="bg-white text-[rgb(2,126,197)] px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 shadow-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 