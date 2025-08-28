'use client'
import React from 'react';
import Button from '../../../ui/Button';
import Head from 'next/head';

const GoodKarmaForNGO = () => {
    return (
        <>
            {/* SEO Metadata */}
            <Head>
                <title>Good Karma for NGO - Specialized Accounting & Compliance Services | ResolveBiz</title>
                <meta name="description" content="Professional NGO accounting services with Chartered Accountants, Senior Accountants, and Book Keepers. Specialized in FCRA, Income Tax, Company Law compliance for non-profits." />
                <meta name="keywords" content="NGO accounting, FCRA compliance, non-profit accounting, financial reporting, balance sheet, restricted assets, unrestricted assets, social sector accounting" />
                <meta property="og:title" content="Good Karma for NGO - Specialized Accounting & Compliance Services" />
                <meta property="og:description" content="Professional NGO accounting services with global standards, financial transparency, and regulatory compliance for non-profit organizations." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://resolvebiz.com/services/good-karma-for-ngo" />
                <meta property="og:image" content="/assets/goodkarma/hero-goodkarma.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Good Karma for NGO - Specialized Accounting & Compliance Services" />
                <meta name="twitter:description" content="Professional NGO accounting services with global standards and regulatory compliance." />
                <meta name="twitter:image" content="/assets/goodkarma/hero-goodkarma.png" />
            </Head>

            <div className="w-full bg-white">
                {/* Hero Section */}
                <section className="relative w-full h-[calc(100vh-5rem)] bg-red-500 overflow-hidden">
  {/* Hero Image */}
  <img
    src="/assets/goodkarma/hero-goodkarma.png"
    alt="NGO Accounting and Compliance Services - Modern office environment with business professionals and digital dashboards"
    className="absolute inset-0 w-full h-full object-cover"
  />
</section>



                {/* Team Section */}
                <section className="w-full relative py-15 px-4 md:px-10">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/assets/goodkarma/color-bg-goodkarma.png"
                            alt="Good Karma Team Background"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Content Overlay */}
                    <div className="relative z-10 max-w-6xl mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8 leading-tight">
                            OUR DEDICATED GOOD KARMA ACCOUNTING TEAM
                        </h2>

                        <div className="text-white max-w-6xl mx-auto">
                            <p className="text-sm md:text-md text-justify leading-relaxed">
                                Our Good Karma Accounting team comprises of Chartered Accountants, Senior Accountants, and Book Keepers, who have several many years of NGO experience, across many social causes. Our mission is to provide global accounting standards and practices to our client Non-Profits, provide the highest level of financial transparency and enable compliance with applicable laws to be it Income Tax, FCRA, Company Law, Labour Laws etc. Our service approach is team based with an assigned SPOC to each engagement, who would be supported by Associates, Professionals and subject matter experts.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Financial Reporting Section */}
                <section className="w-full py-15 px-4 md:px-10">
                    <div className="max-w-7xl mx-auto ">
                        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ">
                            {/* Left Side - Image */}
                            <div className="w-full lg:w-1/2">
                                <div className="relative">
                                    <img
                                        src="/assets/goodkarma/financial-report-goodkarma.png"
                                        alt="Financial Reporting Dashboard - Desktop monitor showing financial charts, sales performance, revenue by quarter, and balance sheet data"
                                        className="w-full h-auto object-contain "
                                    />
                                </div>
                            </div>

                            {/* Right Side - Content */}
                            <div className="w-full lg:w-1/2">
                                <div className="mt-10">
                                    <h2 className="text-xl md:text-2xl font-bold text-[#204e69] leading-tight">
                                        FINANCIAL REPORTING – BALANCE SHEET – RESTRICTED & UNRESTRICTED NET ASSETS
                                    </h2>

                                    <div className="space-y-3">


                                        <ul className="space-y-2 ">
                                            <li className="flex items-start space-x-3">
                                                <div className="w-1.5 h-1.5 bg-[#007dc5] rounded-full mt-2 flex-shrink-0"></div>
                                                <aside className="text-lg text-[#204e69] opacity-80">Statement of Functional Activities</aside>
                                            </li>
                                            <li className="flex items-start space-x-3">
                                                <div className="w-1.5 h-1.5 bg-[#007dc5] rounded-full mt-2 flex-shrink-0"></div>
                                                <aside className="text-lg text-[#204e69] opacity-80">Income & Expenditure Statement – Natural Classification</aside>
                                            </li>
                                            <li className="flex items-start space-x-3">
                                                <div className="w-1.5 h-1.5 bg-[#007dc5] rounded-full mt-2 flex-shrink-0"></div>
                                                <aside className="text-lg text-[#204e69] opacity-80">Budget versus Actuals</aside>
                                            </li>
                                            <li className="flex items-start space-x-3">
                                                <div className="w-1.5 h-1.5 bg-[#007dc5] rounded-full mt-2 flex-shrink-0"></div>
                                                <aside className="text-lg text-[#204e69] opacity-80">Grant Reporting</aside>
                                            </li>
                                            <li className="flex items-start space-x-3">
                                                <div className="w-1.5 h-1.5 bg-[#007dc5] rounded-full mt-2 flex-shrink-0"></div>
                                                <aside className="text-lg text-[#204e69] opacity-80">Costs of delivery of Social outcomes</aside>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Chart of Accounts Section */}
                <section className="w-full py-15 px-4 md:px-10">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                            {/* Left Side - Text */}
                            <div className="w-full lg:w-1/2 flex items-center">
                                <div className="max-w-md ml- lg:mx-15">
                                    <h2 className="text-lg md:text-2xl font-bold text-[#204e69] leading-snug">
                                        CHART OF ACCOUNTS – ALIGNMENT
                                        <br />
                                        WITH FINANCIAL REPORTING NEEDS
                                        <br />
                                        & COMPLIANCE.
                                    </h2>
                                </div>
                            </div>

                            {/* Right Side - Image */}
                            <div className="w-full lg:w-1/2">
                                <div className="relative">
                                    <img
                                        src="/assets/goodkarma/accounting-chart-goodkarma.png"
                                        alt="Chart of Accounts - Financial Policy and Compliance Framework"
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                
                {/* Financial Policies & Procedures Section */}
                <section className="w-full bg-white py-15 px-4 md:px-10">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
                            {/* Left Side - Content */}
                            <div className="w-full lg:w-1/2 space-y-6">
                                <div className="space-y-6">
                                    <h2 className="text-xl md:text-2xl font-bold text-[#204e69] leading-tight">
                                        FINANCIAL POLICIES & PROCEDURES
                                    </h2>

                                    <div className="space-y-4" >
                                        <ul className="space-y-3 ">
                                            <li className="flex items-start space-x-3">
                                                <div className="w-1.5 h-1.5 bg-[#007dc5] rounded-full mt-2 flex-shrink-0"></div>
                                                <aside className="text-md text-[#204e69] opacity-80">Organization Structure – Roles & Responsibilities</aside>
                                            </li>
                                            <li className="flex items-start space-x-3">
                                                <div className="w-1.5 h-1.5 bg-[#007dc5] rounded-full mt-2 flex-shrink-0"></div>
                                                <aside className="text-md text-[#204e69] opacity-80">Authorization Matrix</aside>
                                            </li>
                                            <li className="flex items-start space-x-3">
                                                <div className="w-1.5 h-1.5 bg-[#007dc5] rounded-full mt-2 flex-shrink-0"></div>
                                                <aside className="text-md text-[#204e69] opacity-80">Revenue policies - Donations, Grants Received, Service Income, Sale Income, Events & Sponsorships Income</aside>
                                            </li>
                                            <li className="flex items-start space-x-3">
                                                <div className="w-1.5 h-1.5 bg-[#007dc5] rounded-full mt-2 flex-shrink-0"></div>
                                                <aside className="text-md text-[#204e69] opacity-80">Payroll policies - Payroll structure, Income Tax, Flexible Benefit Plan, On Boarding, Exit & Final Settlements, Increments, Promotions etc</aside>
                                            </li>
                                            <li className="flex items-start space-x-3">
                                                <div className="w-1.5 h-1.5 bg-[#007dc5] rounded-full mt-2 flex-shrink-0"></div>
                                                <aside className="text-md text-[#204e69] opacity-80">Programme Expenses - Indent, vendor selection, Purchase Order, Service Order, Receipt of goods/services, purchase booking, check run</aside>
                                            </li>
                                            <li className="flex items-start space-x-3">
                                                <div className="w-1.5 h-1.5 bg-[#007dc5] rounded-full mt-2 flex-shrink-0"></div>
                                                <aside className="text-md text-[#204e69] opacity-80">Banking & Treasury Operations - Savings & Fixed Deposit accounts, Restricted Bank accounts for Grant Receipts</aside>
                                            </li>
                                            <li className="flex items-start space-x-3">
                                                <div className="w-1.5 h-1.5 bg-[#007dc5] rounded-full mt-2 flex-shrink-0"></div>
                                                <aside className="text-md text-[#204e69] opacity-80">Petty Cash - Imprest system</aside>
                                            </li>
                                            <li className="flex items-start space-x-3">
                                                <div className="w-1.5 h-1.5 bg-[#007dc5] rounded-full mt-2 flex-shrink-0"></div>
                                                <aside className="text-md text-[#204e69] opacity-80">Internal Controls & Checks - Maker Checker & Authoriser roles, Bank Reconciliation statement, Physical Verification, Procedure adherences, custom control computations, Expense trends, Support to external auditors & Grant and social audits</aside>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side - Image */}
                            <div className="w-full lg:w-1/2">
                                <div className="relative">
                                    <img
                                        src="/assets/goodkarma/financial-policy.jpeg"
                                        alt="Financial Policies & Procedures - Modern office setting with laptop showing financial dashboard and collaborative work environment"
                                        className="w-full h-auto object-contain rounded-lg shadow-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Compliance Section */}
                <section className="w-full py-15 px-4 md:px-10">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
                            {/* Left Side - Image and Secretarial Support */}
                            <div className="w-full lg:w-1/2 space-y-8">
                                {/* Image */}
                                <div className="relative">
                                    <img
                                        src="/assets/goodkarma/compliance-goodkarma.png"
                                        alt="Compliance Framework - Flowchart diagram showing Governance, Standards, Risk, Policy, Law, Rules, Audit, and Practices connected to Compliance"
                                        className="w-full h-auto object-contain"
                                    />
                                </div>

                                {/* Secretarial Support Section */}
                                <div className="space-y-3 mt-25">
                                    <h3 className="text-lg font-semibold text-[#204e69]">Secretarial Support (For Sec 8 Companies):</h3>
                                    <ul className="space-y-2 ">
                                        <li className="flex items-start space-x-3">
                                            <div className="w-1.5 h-1.5 bg-[#007dc5] rounded-full mt-2 flex-shrink-0"></div>
                                            <aside className="text-md text-[#204e69] opacity-80">Preparation of Company Law filings AOC-4, MGT-7</aside>
                                        </li>
                                        <li className="flex items-start space-x-3">
                                            <div className="w-1.5 h-1.5 bg-[#007dc5] rounded-full mt-2 flex-shrink-0"></div>
                                            <aside className="text-md text-[#204e69] opacity-80">Drafting AGM Notices, Agenda and Minutes</aside>
                                        </li>
                                        <li className="flex items-start space-x-3">
                                            <div className="w-1.5 h-1.5 bg-[#007dc5] rounded-full mt-2 flex-shrink-0"></div>
                                            <aside className="text-md text-[#204e69] opacity-80">Drafting Board Meeting Notices, Agendas and Minutes</aside>
                                        </li>
                                        <li className="flex items-start space-x-3">
                                            <div className="w-1.5 h-1.5 bg-[#007dc5] rounded-full mt-2 flex-shrink-0"></div>
                                            <aside className="text-md text-[#204e69] opacity-80">Preparations & ROC filings based on applicable events and changes- Director induction, resignation, address changes, auditors appointment, modifications to MOA/AOA, changes in Members etc</aside>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Right Side - Content */}
                            <div className="w-full lg:w-1/2 space-y-8">
                                <div className="space-y-5">
                                    <h2 className="text-xl md:text-2xl font-bold text-[#204e69] leading-tight">
                                        COMPLIANCES
                                    </h2>

                                    <div className="space-y-5">
                                        {/* COMPLIANCES Section */}
                                        <div className="space-y-3">

                                            {/* Annual Cycle */}
                                            <div className="space-y-1">
                                                <h4 className="text-base font-bold text-[#204e69]">Annual Cycle:</h4>
                                                <ul className="space-y-2 ">
                                                    <li className="flex items-start space-x-3">
                                                        <div className="w-1.5 h-1.5 bg-[#007dc5] rounded-full mt-2 flex-shrink-0"></div>
                                                        <aside className="text-md text-[#204e69] opacity-80">Preparation of Annual auditable Financial Statements</aside>
                                                    </li>
                                                    <li className="flex items-start space-x-3">
                                                        <div className="w-1.5 h-1.5 bg-[#007dc5] rounded-full mt-2 flex-shrink-0"></div>
                                                        <aside className="text-md text-[#204e69] opacity-80">Preparation of Annual Income Tax returns</aside>
                                                    </li>
                                                    <li className="flex items-start space-x-3">
                                                        <div className="w-1.5 h-1.5 bg-[#007dc5] rounded-full mt-2 flex-shrink-0"></div>
                                                        <aside className="text-md text-[#204e69] opacity-80">Preparation of Annual FCRA Returns FC-4</aside>
                                                    </li>
                                                    <li className="flex items-start space-x-3">
                                                        <div className="w-1.5 h-1.5 bg-[#007dc5] rounded-full mt-2 flex-shrink-0"></div>
                                                        <aside className="text-md text-[#204e69] opacity-80">Preparation of Annual Form 16 for Employees</aside>
                                                    </li>
                                                    <li className="flex items-start space-x-3">
                                                        <div className="w-1.5 h-1.5 bg-[#007dc5] rounded-full mt-2 flex-shrink-0"></div>
                                                        <aside className="text-md text-[#204e69] opacity-80">Preparation of State wise Annual Professional Tax Returns</aside>
                                                    </li>
                                                    <li className="flex items-start space-x-3">
                                                        <div className="w-1.5 h-1.5 bg-[#007dc5] rounded-full mt-2 flex-shrink-0"></div>
                                                        <aside className="text-md text-[#204e69] opacity-80">Preparation of Annual GST Return GSTR-9</aside>
                                                    </li>
                                                </ul>
                                            </div>

                                            {/* Half Yearly Cycle */}
                                            <div className="space-y-3">
                                                <h4 className="text-base font-bold text-[#204e69]">Half Yearly Cycle:</h4>
                                                <ul className="space-y-2 ">
                                                    <li className="flex items-start space-x-3">
                                                        <div className="w-1.5 h-1.5 bg-[#007dc5] rounded-full mt-2 flex-shrink-0"></div>
                                                        <aside className="text-md text-[#204e69] opacity-80">Preparation of Half Yearly ESI Return</aside>
                                                    </li>
                                                </ul>
                                            </div>

                                            {/* Quarterly Cycle */}
                                            <div className="space-y-3">
                                                <h4 className="text-base font-bold text-[#204e69]">Quarterly Cycle:</h4>
                                                <ul className="space-y-2 ">
                                                    <li className="flex items-start space-x-3">
                                                        <div className="w-1.5 h-1.5 bg-[#007dc5] rounded-full mt-2 flex-shrink-0"></div>
                                                        <aside className="text-md text-[#204e69] opacity-80">Preparation of eTDS Return</aside>
                                                    </li>
                                                    <li className="flex items-start space-x-3">
                                                        <div className="w-1.5 h-1.5 bg-[#007dc5] rounded-full mt-2 flex-shrink-0"></div>
                                                        <aside className="text-md text-[#204e69] opacity-80">Preparation of Form 16 A</aside>
                                                    </li>
                                                    <li className="flex items-start space-x-3">
                                                        <div className="w-1.5 h-1.5 bg-[#007dc5] rounded-full mt-2 flex-shrink-0"></div>
                                                        <aside className="text-md text-[#204e69] opacity-80">Preparation of FCRA quarterly Return FC ?</aside>
                                                    </li>
                                                    <li className="flex items-start space-x-3">
                                                        <div className="w-1.5 h-1.5 bg-[#007dc5] rounded-full mt-2 flex-shrink-0"></div>
                                                        <aside className="text-md text-[#204e69] opacity-80">Preparation of quarterly GST Return GSTR-1</aside>
                                                    </li>
                                                </ul>
                                            </div>

                                            {/* Monthly Cycle */}
                                            <div className="space-y-3">
                                                <h4 className="text-base font-bold text-[#204e69]">Monthly Cycle:</h4>
                                                <ul className="space-y-2 ">
                                                    <li className="flex items-start space-x-3">
                                                        <div className="w-1.5 h-1.5 bg-[#007dc5] rounded-full mt-2 flex-shrink-0"></div>
                                                        <aside className="text-md text-[#204e69] opacity-80">Preparation of TDS computations for Salaries, Rent, Professionals, Contractors, etc.</aside>
                                                    </li>
                                                    <li className="flex items-start space-x-3">
                                                        <div className="w-1.5 h-1.5 bg-[#007dc5] rounded-full mt-2 flex-shrink-0"></div>
                                                        <aside className="text-md text-[#204e69] opacity-80">Preparation of PF Computations</aside>
                                                    </li>
                                                    <li className="flex items-start space-x-3">
                                                        <div className="w-1.5 h-1.5 bg-[#007dc5] rounded-full mt-2 flex-shrink-0"></div>
                                                        <aside className="text-md text-[#204e69] opacity-80">Preparation of ESI computations</aside>
                                                    </li>
                                                    <li className="flex items-start space-x-3">
                                                        <div className="w-1.5 h-1.5 bg-[#007dc5] rounded-full mt-2 flex-shrink-0"></div>
                                                        <aside className="text-md text-[#204e69] opacity-80">Preparation of State-wise Professional Tax dues</aside>
                                                    </li>
                                                    <li className="flex items-start space-x-3">
                                                        <div className="w-1.5 h-1.5 bg-[#007dc5] rounded-full mt-2 flex-shrink-0"></div>
                                                        <aside className="text-md text-[#204e69] opacity-80">Preparation of GST return GSTR-3b and GSTR-1</aside>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action Section */}
                <section className="w-full relative py-20 px-4 md:px-10">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/assets/goodkarma/color-bg-goodkarma.png"
                            alt="Call to Action Background"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Content Overlay */}
                    <div className="relative z-10 max-w-4xl mx-auto text-center">
                        <div className="space-y-8 w-fit mx-auto ">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                                FOR MORE DETAILS
                            </h2>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center mx-auto" >
                                <div className="flex-1 relative group cursor-pointer">
                                    <Button
                                        className="w-full text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-2xl relative overflow-hidden"
                                        style={{
                                            border: '2px solid #fff',
                                            transition: 'all 0.5s ease',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        <span className="relative z-10 group-hover:text-[#204e69] transition-colors duration-500">Request a Quote</span>
                                        <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                                    </Button>
                                </div>
                                <div className="flex-1 relative group cursor-pointer">
                                    <Button
                                        className="w-full text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-2xl relative overflow-hidden"
                                        style={{
                                            border: '2px solid #fff',
                                            transition: 'all 0.5s ease',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        <span className="relative z-10 group-hover:text-[#204e69] transition-colors duration-500">FAQ&apos;s</span>
                                        <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default GoodKarmaForNGO;