'use client';
import Head from 'next/head';
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import Button from '../../ui/Button';

const Career = () => {
    const [selectedVacancy, setSelectedVacancy] = useState('CA OR A FRESH CA');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        qualification: '',
        resume: null
    });
    
    // Custom dropdown state
    const [isQualificationDropdownOpen, setIsQualificationDropdownOpen] = useState(false);
    const qualificationDropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (qualificationDropdownRef.current && !qualificationDropdownRef.current.contains(event.target)) {
                setIsQualificationDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Handle qualification selection
    const handleQualificationSelect = (value) => {
        setFormData(prev => ({
            ...prev,
            qualification: value
        }));
        setIsQualificationDropdownOpen(false);
    };

    // Handle keyboard navigation for dropdown
    const handleQualificationKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsQualificationDropdownOpen(!isQualificationDropdownOpen);
        } else if (e.key === 'Escape') {
            setIsQualificationDropdownOpen(false);
        }
    };

    // SEO Metadata
    const seoData = {
        title: 'Career Opportunities at Resolve India - Join Our Growing Team',
        description: 'Explore exciting career opportunities at Resolve India. We\'re hiring for CA, Backend Developer, Frontend Developer, Accounts Executive, BDM, Payroll Associate, and Trainee positions in Bangalore. Apply now!',
        keywords: 'career, jobs, employment, Resolve India, Bangalore jobs, CA jobs, developer jobs, accounting jobs, payroll jobs, business development',
        canonical: 'https://resolveindia.com/career',
        ogImage: 'https://resolveindia.com/assets/career/career-bg.png',
        ogType: 'website',
        twitterCard: 'summary_large_image'
    };

    const vacancies = [
        {
            id: 'CA OR A FRESH CA',
            title: 'CA OR A FRESH CA',
            image: '/assets/career/CA-career.png',
            location: 'Bangalore',
            department: 'Accounting Services Department',
            description: 'Join our accounting team as a Chartered Accountant or fresh CA. Work on audits, financial reporting, and business consulting.',
            jobDescription: [
                'Month end closure in the books of accounts in Tally software',
                'Prepare monthly Statutory workings such as TDS, GST, ESI, PF and PT and initiate payments and filing of returns within the applicable due dates such as monthly/quarterly/Annually',
                'Bank payments and reconciliation on timely basis',
                'Preparation of invoices',
                'Monthly payroll preparation',
                'Accounts payables and receivable reports preparation',
                'Prepare monthly MIS reports as per agreed timelines',
                'Provide clarifications for any customer/Manager or other Department queries',
                'Audit preparation of schedules, workings etc',
                'Excellent maintenance of records physical papers, voucher, files, soft copies in relevant folders etc',
                'Some of the important performance measures applicable to your role are Client satisfaction and customer management, company and team alignment, adherence to company policies and guidelines, subject matter value addition to our stakeholders, functional contribution on product and software applications'
            ],
            requirements: [
                'Should have minimum 0-2 years of experience in accounting and reporting',
                'Good organizing and attention to detail',
                'Timely completion of assigned tasks',
                'Hands on experience in MS office, Tally',
                'Keen Learning ability',
                'Operating knowledge on various laws such as Income tax, GST, Companies act',
                'Proactive personality with good communication skills, verbal and written',
                'Take initiatives and fosters team spirit',
                'Commensurate with competencies & experience'
            ]
        },
        {
            id: 'BACK END DEVELOPER',
            title: 'BACK END DEVELOPER',
            image: '/assets/career/web-developer-career.jpeg',
            location: 'Bangalore',
            department: 'IT & Technology',
            description: 'We are looking for a skilled Backend Developer to join our dynamic team. You will be responsible for coding, testing, deploying, and scaling products that drive our business forward.',
            jobDescription: [
                'Responsible for coding, testing, deploying, and scaling products',
                'Requires experience with ASP.Net (C#), MySQL, and .Net MVC framework',
                'Ability to rapidly address issues and fix defects found during deployment',
                'Collaboration with other team members and stakeholders is essential',
                'Tasks include documenting and communicating designs, development, and implementation plans to program stakeholders',
                'Building reusable code and libraries for future use, and optimizing applications for maximum speed and scalability',
                'Fostering a culture of learning across the team',
                'Specific web development technologies required: ASP.Net (version 3.5 and above) using ASP.NET MVC framework, JavaScript, HTML5, CSS3, JSON, and XML'
            ],
            requirements: [
                'Preference for candidates with prior SaaS (Software as a Service) product development experience',
                'Candidates should have exposure to and experience with the entire software development cycle, from design to rollout and support',
                'Candidates accustomed to working in a DevOps environment'
            ]
        },
        {
            id: 'FRONT END DEVELOPER',
            title: 'FRONT END DEVELOPER',
            image: '/assets/career/web-developer-career.jpeg',
            location: 'Bangalore',
            department: 'IT & Technology',
            description: 'We are seeking a talented Full Stack Developer to join our dynamic team. You will be responsible for developing end-to-end solutions using modern technologies.',
            requisiteProfile: 'A self starter with 2-6 years of experience in SaaS product development in React JS as the Front End with Dot Net as the back end and Post Gres as the Database. SaaS deployment on the cloud on Microsoft Azure or AWS or Google Cloud. Should be well versed with the web app state management (e.g. redux) as well as middleware (e.g. Redux saga) for React. The candidate should be a quick learner with a strong bent of mind for design and with innovative ideas. Should be able to handle and solve complex use cases/problems and operate fairly independently. Should have deep understanding of product development process with best practices.',
            technicalSkills: [
                'Strong proficiency in JavaScript, object model, DOM manipulation and event handlers, data structures, algorithms, JSX, and Babel',
                'Strong understanding of ReactJS and its main fundamentals like JSX, Virtual DOM, component lifecycle, etc',
                'Experience with ReactJS workflows like Flux, Redux, Create React App, data structure libraries',
                'Understanding of RESTful APIs/GraphQL, HTML/CSS, ES6 (variables and scoping, array methods), code versioning tools like GIT, SVN, etc., popular frontend development tools, CI/CD tools, DevOps, performance testing frameworks like Mocha, Node + NPM'
            ],
            softSkills: [
                'Competence to translate business needs into technical requirements',
                'Open-minded team player, willing to accept feedback and offer suggestions',
                'Good time management, project management, communication, and interpersonal skills',
                'Capability to write crisp and clear code based on guidelines and best practices',
                'Awareness and willingness to learn latest tools and processes',
                'Good problem-solving, troubleshooting skills',
                'Creativity with accountability'
            ],
            requirements: [
                'Prefer candidates who have prior SaaS product development experience',
                'Candidates who have exposure and experience to the entire software development cycle from design to roll out and support'
            ]
        },
        {
            id: 'ACCOUNTS EXECUTIVE',
            title: 'ACCOUNTS EXECUTIVE',
            image: '/assets/career/Accounting-Executive-career.jpeg',
            functionalArea: 'Accounting Services Department',
            reportingTo: 'Client Manager',
            location: 'Bangalore',
            qualification: 'B.com/M.com with 2-4 years of experience in Accounting and book-keeping',
            description: 'We are looking for a skilled Accounts Executive to join our Accounting Services Department. You will be responsible for maintaining accurate financial records and ensuring compliance with statutory requirements.',
            jobDescription: [
                'Updating day to day transactions in the books of accounts in Tally software to achieve the objective of accurate accounting of transactions',
                'Prepare monthly Statutory workings such as TDS, GST, ESI, PF, and PT and initiate payments and filing of returns within the applicable due dates such as monthly/quarterly/Annually',
                'Bank payments and reconciliation on a timely basis',
                'Preparation of invoices',
                'Monthly payroll preparation',
                'Accounts payables and receivable reports preparation',
                'Prepare monthly MIS reports as per agreed timelines',
                'Provide clarifications for any customer/Manager or other Department queries',
                'Audit preparation of schedules, workings, etc',
                'Excellent maintenance of records physical papers, vouchers, files, soft copies in relevant folders, etc'
            ],
            requirements: [
                'Should have min 2-4 years of experience in accounting and book keeping',
                'Good organising and attention to detail',
                'Timely completion of assigned tasks',
                'Hands-on experience in MS Office, Tally',
                'Keen Learning ability',
                'Operating knowledge on various laws such as Income tax, GST, Companies act',
                'Proactive personality with good communication skills, verbal and written',
                'Take initiatives and fosters team spirit'
            ],
            ctc: 'Commensurate with competencies & experience'
        },
        {
            id: 'BDM',
            title: 'BUSINESS DEVELOPMENT MANAGER',
            image: '/assets/career/bdm-career.jpeg',
            description: 'We are seeking a dynamic Business Development Manager to drive sales and marketing of our SaaS products & services. You will be responsible for acquiring new customers and building strong channel partnerships.',
            jobDescription: [
                'Sales and Marketing of our Saas products & services',
                'Acquire new customers',
                'To build and develop a target customer database on our CRM',
                'Identify new & develop existing Channel Partners',
                'To participate in relevant networking events, manage stalls, conferences'
            ],
            requirements: [
                'Experience in consultative/valued-added services/services sales from any industry is a must',
                'Passionate about building a career in sales and business development with a successful track record',
                'Excellent channel partner management & excellent relationship management skills',
                'Good understanding knowledge of Bangalore market & willingness to manage hectic travel within the city',
                'Good presentation & negotiation skills',
                'Fluency in English, Hindi & Kannada is preferable'
            ]
        },
        {
            id: 'PAYROLL ASSOCIATE',
            title: 'SENIOR PAYROLL ASSOCIATE',
            image: '/assets/career/payroll-career.jpeg',
            location: 'Bangalore',
            qualification: 'BCom, BBA, or any other graduate degree',
            description: 'We are seeking a Senior Payroll Associate to manage large and complex payroll processing for clients, adhering to Service Level Agreements (SLAs) and reporting to a Team Leader.',
            positionObjective: 'The role involves managing large and complex payroll processing for clients, adhering to Service Level Agreements (SLAs), and reporting to a Team Leader.',
            experience: '3 to 6 years of work experience is required, with a preference for experience gained in an outsourced payroll service provider.',
            requiredSkills: [
                'Strong communication skills',
                'Ability to interact effectively with senior-level clients',
                'Excellent and efficient Excel skills'
            ],
            competencies: [
                'Payroll/Salary structuring',
                'Payroll processing',
                'Payroll change management (including increments, variable pay, Loss of Pay (LOP), deductions, etc.)',
                'Flexible Benefits Plan (FBP) Management',
                'Income Tax Computation for Individuals',
                'FFS Computation',
                'Comprehensive understanding of Statutory Compliances (PF, ESI, PT, LWF, Gratuity, Payment of Bonus, Leave Encashment, etc.), including computational rules, contribution statements, challan generation, return preparation, and quarterly eTDS return filing',
                'Adherence to processes and systemic working'
            ],
            requirements: [
                '3 to 6 years of work experience is required',
                'Preference for experience gained in an outsourced payroll service provider',
                'Strong communication skills',
                'Ability to interact effectively with senior-level clients',
                'Excellent and efficient Excel skills'
            ]
        },
        {
            id: 'TRAINEE',
            title: 'TRAINEE',
            image: '/assets/career/trainee-career.jpeg',
            location: 'Bangalore',
            department: 'Payroll Operations',
            description: 'This position will interact with their immediate superiors.',
            jobDescription: [
                'This position will interact with their immediate superiors.',
                'The Candidate will be in an Internship for a period of 6 months.',
                'Understanding what is expected out of them from the team or by their immediate superiors.'
            ],
            requirements: [
                'Hands-on experience in MS Office, Excel',
                'Good communication.',
                'Adequate analytical skills',
                'Keen Learning ability',
                'Strong verbal and written communication.',
                'Should be a self-starter'
            ]
        }
    ];

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: files ? files[0] : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const currentVacancy = vacancies.find(v => v.id === selectedVacancy);

    return (
        <>
            <Head>
                {/* Basic Meta Tags */}
                <title>{seoData.title}</title>
                <meta name="description" content={seoData.description} />
                <meta name="keywords" content={seoData.keywords} />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Resolve India" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                {/* Canonical URL */}
                <link rel="canonical" href={seoData.canonical} />

                {/* Open Graph Meta Tags */}
                <meta property="og:title" content={seoData.title} />
                <meta property="og:description" content={seoData.description} />
                <meta property="og:type" content={seoData.ogType} />
                <meta property="og:url" content={seoData.canonical} />
                <meta property="og:image" content={seoData.ogImage} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:site_name" content="Resolve India" />
                <meta property="og:locale" content="en_US" />

                {/* Twitter Card Meta Tags */}
                <meta name="twitter:card" content={seoData.twitterCard} />
                <meta name="twitter:title" content={seoData.title} />
                <meta name="twitter:description" content={seoData.description} />
                <meta name="twitter:image" content={seoData.ogImage} />
                <meta name="twitter:site" content="@resolveindia" />

                {/* Additional SEO Meta Tags */}
                <meta name="theme-color" content="#2563eb" />
                <meta name="msapplication-TileColor" content="#2563eb" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />

                {/* Structured Data - JobPosting Schema */}
                <script
                    type="application/ld+json"
                
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "Resolve India",
                            "url": "https://resolveindia.com",
                            "logo": "https://resolveindia.com/assets/landingPageImage/logo.png",
                            "sameAs": [
                                "https://www.linkedin.com/company/resolve-india",
                                "https://twitter.com/resolveindia"
                            ],
                            "hasOfferCatalog": {
                                "@type": "OfferCatalog",
                                "name": "Career Opportunities",
                                "itemListElement": vacancies.map(vacancy => ({
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "JobPosting",
                                        "title": vacancy.title,
                                        "description": vacancy.description,
                                        "datePosted": new Date().toISOString(),
                                        "validThrough": new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days from now
                                        "employmentType": "FULL_TIME",
                                        "jobLocation": {
                                            "@type": "Place",
                                            "address": {
                                                "@type": "PostalAddress",
                                                "addressLocality": vacancy.location || "Bangalore",
                                                "addressRegion": "Karnataka",
                                                "addressCountry": "IN"
                                            }
                                        },
                                        "qualifications": vacancy.qualification || vacancy.requirements?.join(", "),
                                        "responsibilities": vacancy.jobDescription?.join(", "),
                                        "skills": vacancy.technicalSkills?.join(", ") || vacancy.requiredSkills?.join(", "),
                                        "hiringOrganization": {
                                            "@type": "Organization",
                                            "name": "Resolve India",
                                            "url": "https://resolveindia.com"
                                        }
                                    }
                                }))
                            }
                        })
                    }}
                />

                {/* Structured Data - BreadcrumbList */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Home",
                                    "item": "https://resolveindia.com"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": "Career",
                                    "item": "https://resolveindia.com/career"
                                }
                            ]
                        })
                    }}
                />
            </Head>

            <div className="min-h-screen">
                {/* Hero Section */}
                <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden">
                    {/* Background Image with Blue Overlay */}
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: 'url(/assets/career/career-bg.png)',
                        }}
                     />

                    {/* Content */}
                    <div className="relative z-10 text-center text-white px-4">
                        <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4 tracking-wide">
                            CAREER
                        </h1>
                        <p className="text-sm md:text-lg font-light">
                            Contact us at{' '}
                            <Link
                                href="mailto:rashmi.s@resolveindia.com"
                                className="text-blue-200 hover:text-white transition-colors underline"
                            >
                                rashmi.s@resolveindia.com
                            </Link>
                        </p>
                    </div>
                </section>

                {/* Job Application and Vacancies Section */}
                <section className="py-12 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-3 gap-6 items-start">

                                                    {/* Left Section: Apply for Job Form */}
                        <div className="lg:col-span-1 bg-white rounded-xl shadow-lg p-4 border border-gray-100 h-fit self-start sticky top-4">
                            <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
                                APPLY FOR JOB
                            </h2>

                                <form onSubmit={handleSubmit} className="space-y-3">
                                    {/* Name Field */}
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                                            Name <aside className="text-red-500">*</aside>
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white text-sm"
                                            placeholder="Enter your full name"
                                        />
                                    </div>

                                    {/* Email Field */}
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                                            Email <aside className="text-red-500">*</aside>
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                                                placeholder="Enter your email address"
                                            />
                                            <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Mobile Field */}
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                                            Mobile No <aside className="text-red-500">*</aside>
                                        </label>
                                        <input
                                            type="tel"
                                            name="mobile"
                                            value={formData.mobile}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white text-sm"
                                            placeholder="Enter your mobile number"
                                        />
                                    </div>

                                    {/* Qualification Field */}
                                    <div ref={qualificationDropdownRef} className="relative">
                                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                                            Qualification <aside className="text-red-500">*</aside>
                                        </label>
                                        <div
                                            onClick={() => setIsQualificationDropdownOpen(!isQualificationDropdownOpen)}
                                            onKeyDown={handleQualificationKeyDown}
                                            tabIndex={0}
                                            role="combobox"
                                            aria-expanded={isQualificationDropdownOpen}
                                            aria-haspopup="listbox"
                                            aria-controls="qualification-listbox"
                                            className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white appearance-none cursor-pointer text-sm ${isQualificationDropdownOpen ? 'ring-2 ring-blue-500' : ''}`}
                                        >
                                            {formData.qualification || 'Select your qualification'}
                                            <svg className={`absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 transition-transform duration-200 pointer-events-none ${isQualificationDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                         {isQualificationDropdownOpen && (
                                             <div 
                                                 id="qualification-listbox"
                                                 className="absolute z-10 w-full bg-white border border-gray-200 rounded-lg shadow-lg mt-1 max-h-60 overflow-y-auto"
                                                 role="listbox"
                                             >
                                                 {vacancies.map(vacancy => (
                                                     <div
                                                         key={vacancy.id}
                                                         onClick={() => handleQualificationSelect(vacancy.id)}
                                                         onKeyDown={(e) => {
                                                             if (e.key === 'Enter' || e.key === ' ') {
                                                                 e.preventDefault();
                                                                 handleQualificationSelect(vacancy.id);
                                                             }
                                                         }}
                                                         tabIndex={0}
                                                         role="option"
                                                         aria-selected={formData.qualification === vacancy.id}
                                                         className={`px-4 py-3 cursor-pointer text-sm transition-colors duration-150 ${
                                                             formData.qualification === vacancy.id 
                                                                 ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-500' 
                                                                 : 'hover:bg-gray-50 text-gray-700'
                                                         }`}
                                                     >
                                                         <div className="font-medium">{vacancy.title}</div>
                                                         <div className="text-xs text-gray-500 mt-1">{vacancy.location}</div>
                                                     </div>
                                                 ))}
                                             </div>
                                         )}
                                    </div>

                                    {/* Resume Upload */}
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                                            Resume/CV
                                        </label>
                                        <div className="flex items-center space-x-3">
                                            <input
                                                type="file"
                                                name="resume"
                                                onChange={handleInputChange}
                                                accept=".pdf,.doc,.docx"
                                                className="hidden"
                                                id="resume-upload"
                                            />
                                            <label
                                                htmlFor="resume-upload"
                                                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer font-medium text-sm"
                                            >
                                                Choose File
                                            </label>
                                            <aside className="text-gray-500 text-xs">
                                                {formData.resume ? formData.resume.name : 'No file chosen'}
                                            </aside>
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <Button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 px-4 rounded-lg font-bold text-sm hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-105 shadow-lg"
                                    >
                                        SEND
                                    </Button>
                                </form>
                            </div>

                            {/* Right Section: Open Vacancies */}
                            <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                                    OPEN VACANCIES
                                </h2>

                                {/* Vacancy Categories */}
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-6">
                                    {vacancies.map(vacancy => (
                                        <Button
                                            key={vacancy.id}
                                            onClick={() => setSelectedVacancy(vacancy.id)}
                                            className={`px-3 py-2 text-xs font-medium rounded-lg transition-all duration-200 ${selectedVacancy === vacancy.id
                                                ? 'bg-blue-600 text-white shadow-lg'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                                }`}
                                        >
                                            {vacancy.title}
                                        </Button>
                                    ))}
                                </div>

                                {/* Selected Vacancy Details */}
                                {currentVacancy && (
                                    <div className="space-y-4">
                                        <h3 className="text-xl font-bold text-gray-800">
                                            {currentVacancy.title}
                                        </h3>

                                        {/* Location and Department */}
                                        {currentVacancy.location && (
                                            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                                                {currentVacancy.location && (
                                                    <div className="flex items-center">
                                                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        </svg>
                                                        <aside className="font-medium">{currentVacancy.location}</aside>
                                                    </div>
                                                )}
                                                {currentVacancy.department && (
                                                    <div className="flex items-center">
                                                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                                        </svg>
                                                        <aside className="font-medium">{currentVacancy.department}</aside>
                                                    </div>
                                                )}
                                            </div>
                                        )}

                                        {/* Functional Area and Reporting */}
                                        {currentVacancy.functionalArea && (
                                            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                                                <div className="flex items-center">
                                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                                    </svg>
                                                    <aside className="font-medium">{currentVacancy.functionalArea}</aside>
                                                </div>
                                                {currentVacancy.reportingTo && (
                                                    <div className="flex items-center">
                                                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                        </svg>
                                                        <aside className="font-medium">Reports to: {currentVacancy.reportingTo}</aside>
                                                    </div>
                                                )}
                                            </div>
                                        )}

                                        {/* Qualification */}
                                        {currentVacancy.qualification && (
                                            <div className="flex items-center text-sm text-gray-600">
                                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                                </svg>
                                                <aside className="font-medium">{currentVacancy.qualification}</aside>
                                            </div>
                                        )}

                                                                                 {/* Vacancy Image */}
                                         <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center overflow-hidden">
                                             <img
                                                 src={currentVacancy.image}
                                                 alt={currentVacancy.title}
                                                 className="w-full h-full object-cover"
                                                 onError={(e) => {
                                                     e.target.style.display = 'none';
                                                     e.target.nextSibling.style.display = 'flex';
                                                 }}
                                             />
                                            <div className="hidden items-center justify-center text-gray-500 text-center text-xs">
                                                {currentVacancy.title} Image<br />
                                                <aside className="text-xs">(Image placeholder)</aside>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <p className="text-gray-700 leading-relaxed text-sm">
                                                {currentVacancy.description}
                                            </p>

                                            {/* Requisite Profile */}
                                            {currentVacancy.requisiteProfile && (
                                                <div>
                                                    <h4 className="font-semibold text-gray-800 mb-2 text-sm">Requisite Profile:</h4>
                                                    <p className="text-xs leading-relaxed text-gray-700 mb-3">
                                                        {currentVacancy.requisiteProfile}
                                                    </p>
                                                </div>
                                            )}

                                            {/* Job Description */}
                                            {currentVacancy.jobDescription && (
                                                <div>
                                                    <h4 className="font-semibold text-gray-800 mb-2 text-sm">Job Description:</h4>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                        {currentVacancy.jobDescription.map((desc) => (
                                                            <li key={`job-desc-${desc.substring(0, 30).replace(/\s+/g, '-').toLowerCase()}`} className="text-xs leading-relaxed">{desc}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                            {/* Technical Skills */}
                                            {currentVacancy.technicalSkills && (
                                                <div>
                                                    <h4 className="font-semibold text-gray-800 mb-2 text-sm">Technical Skills:</h4>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                        {currentVacancy.technicalSkills.map((skill) => (
                                                            <li key={`tech-skill-${skill.replace(/\s+/g, '-').toLowerCase()}`} className="text-xs leading-relaxed">{skill}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                            {/* Soft Skills */}
                                            {currentVacancy.softSkills && (
                                                <div>
                                                    <h4 className="font-semibold text-gray-800 mb-2 text-sm">Soft Skills:</h4>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                        {currentVacancy.softSkills.map((skill) => (
                                                            <li key={`soft-skill-${skill.replace(/\s+/g, '-').toLowerCase()}`} className="text-xs leading-relaxed">{skill}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                            {/* Position Objective */}
                                            {currentVacancy.positionObjective && (
                                                <div>
                                                    <h4 className="font-semibold text-gray-800 mb-2 text-sm">Position Objective & Responsibility:</h4>
                                                    <p className="text-xs leading-relaxed text-gray-700 mb-3">
                                                        {currentVacancy.positionObjective}
                                                    </p>
                                                </div>
                                            )}

                                            {/* Experience */}
                                            {currentVacancy.experience && (
                                                <div>
                                                    <h4 className="font-semibold text-gray-800 mb-2 text-sm">Experience:</h4>
                                                    <p className="text-xs leading-relaxed text-gray-700 mb-3">
                                                        {currentVacancy.experience}
                                                    </p>
                                                </div>
                                            )}

                                            {/* Required Skills */}
                                            {currentVacancy.requiredSkills && (
                                                <div>
                                                    <h4 className="font-semibold text-gray-800 mb-2 text-sm">Required Skills:</h4>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                        {currentVacancy.requiredSkills.map((skill) => (
                                                            <li key={`req-skill-${skill.replace(/\s+/g, '-').toLowerCase()}`} className="text-xs leading-relaxed">{skill}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                            {/* Competencies */}
                                            {currentVacancy.competencies && (
                                                <div>
                                                    <h4 className="font-semibold text-gray-800 mb-2 text-sm">Competencies:</h4>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                        {currentVacancy.competencies.map((competency) => (
                                                            <li key={`competency-${competency.replace(/\s+/g, '-').toLowerCase()}`} className="text-xs leading-relaxed">{competency}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                            {/* Requirements */}
                                            <div>
                                                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Desired Profile:</h4>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    {currentVacancy.requirements.map((req) => (
                                                        <li key={`requirement-${req.substring(0, 30).replace(/\s+/g, '-').toLowerCase()}`} className="text-xs leading-relaxed">{req}</li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* CTC */}
                                            {currentVacancy.ctc && (
                                                <div className="bg-blue-50 p-3 rounded-lg">
                                                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">CTC:</h4>
                                                    <p className="text-xs text-gray-700">{currentVacancy.ctc}</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Need Help Section with Video Background */}
                <section className="relative w-full py-20 overflow-hidden">
                    {/* Video Background */}
                    <div className="absolute inset-0">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        >
                            <source src="/assets/career/Working-it.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        {/* Dark overlay for better text readability */}
                        <div className="absolute inset-0 bg-black/60" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
                        {/* Icon */}
                        <div className="mb-4">
                            <div className="inline-flex items-center justify-center w-12 h-12 border-2 border-white rounded-full mb-3">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                            </div>
                        </div>

                        {/* Title */}
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">
                            NEED HELP?
                        </h2>

                        {/* Description */}
                        <p className="text-sm md:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
                            At Resolve Biz Services and Apps, you are not just another cog in the system. Our employees are driven individuals who encouraged to grow along with our organization. Browse our career section above to know about the latest job openings in our company. Didn&apos;t find what you are looking for? Submit your resume and we will revert to you if any related jobs are found. Please click below to submit your resume.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                            <Button className="group px-6 py-3 border-2 border-white text-white font-semibold rounded-lg transition-all duration-300 hover:bg-white hover:text-gray-900 flex items-center space-x-2 text-sm">
                                <svg className="w-4 h-4 transition-colors duration-300 group-hover:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                                <aside>SUBMIT YOUR RESUME</aside>
                            </Button>

                            <Button className="group px-6 py-3 border-2 border-white text-white font-semibold rounded-lg transition-all duration-300 hover:bg-white hover:text-gray-900 flex items-center space-x-2 text-sm">
                                <svg className="w-4 h-4 transition-colors duration-300 group-hover:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <aside>LEARN MORE ABOUT US</aside>
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Career;