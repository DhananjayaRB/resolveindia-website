import React from 'react';
import ContactForm from '../../components/contactForm';
import { FiPhone, FiMapPin } from 'react-icons/fi';

const ContactPage = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">
                {/* Background Image with Blue Overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('/assets/contact/contact-hero-bg.png')`,
                        height: '100%',
                        width: '100%',
                        maxHeight: 'calc(100vh - 80px)',
                        minHeight: 'calc(100vh - 80px)'
                    }}
                >

                </div>

                {/* Content Container */}
                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-8 lg:py-12 h-full flex items-center">
                    <div className="flex flex-col lg:flex-row justify-around items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-full h-full max-w-7xl mx-auto">
                        
                        {/* Left Side - Content */}
                        <div className="text-white space-y-3 sm:space-y-10 md:space-y-5 lg:space-y-6 ml-0 lg:ml-10 flex-1 flex flex-col justify-center sm:justify-center text-center lg:text-left order-2 lg:order-1 w-full lg:w-auto">
                            {/* Main Heading */}
                            <div className="space-y-2 sm:space-y-3">
                                <h1 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-tight">
                                    Customer Support
                                </h1>
                                <p className="text-base sm:text-sm md:text-base lg:text-lg xl:text-xl text-blue-100 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto lg:mx-0">
                                    Our Customer Executive will get back to your query
                                </p>
                            </div>

                            {/* Contact Information */}
                            <div className="space-y-2 sm:space-y-3 md:space-y-4 max-w-sm sm:max-w-md mx-auto lg:mx-0">
                                {/* Address */}
                                <div className="flex items-start justify-center lg:justify-start space-x-2 sm:space-x-3">
                                    <FiMapPin className="text-blue-300 text-base sm:text-sm md:text-lg lg:text-xl mt-1 flex-shrink-0" />
                                    <div className="space-y-1 text-center lg:text-left">
                                        <p className="text-blue-100 font-medium text-sm sm:text-xs md:text-sm lg:text-sm">Address</p>
                                        <p className="text-blue-50 leading-relaxed text-sm sm:text-xs md:text-sm lg:text-sm">
                                            535, 12th Cross, 5th Main Road, RMV Extension,<br />
                                            HIG Dollars Colony, Bangalore - 560094
                                        </p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-center justify-center lg:justify-start space-x-2 sm:space-x-3">
                                    <FiPhone className="text-blue-300 text-base sm:text-sm md:text-lg lg:text-xl flex-shrink-0" />
                                    <div className="space-y-1 text-center lg:text-left">
                                        <p className="text-blue-100 font-medium text-sm sm:text-xs md:text-sm lg:text-sm">Phone</p>
                                        <p className="text-blue-50 text-sm sm:text-xs md:text-base lg:text-base font-semibold">
                                            +91 7337849102
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Right Side - Contact Form */}
                        <div className="flex justify-center lg:justify-end w-full lg:w-auto flex-1 flex items-start lg:items-center order-1 lg:order-2 px-2 sm:px-4 md:px-6 lg:px-0 pt-8 sm:pt-12 md:pt-16 lg:pt-0">
                            <ContactForm />
                        </div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-0 left-0 w-full h-16 sm:h-20 md:h-24 lg:h-32 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
            </section>

            {/* Opening Timings & Office Details Section */}
            <section className="py-8 bg-[#0072C5]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

                        {/* Opening Timings */}
                        <div className="text-white space-y-4">
                            <h2 className="text-lg md:text-xl font-bold leading-tight">
                                OPENING TIMINGS
                            </h2>
                            <div className="space-y-2 text-base">
                                <p>Mon-Fri: 9:30AM - 6:30PM</p>
                                <p>Sat: 9:30AM - 1:30PM</p>
                                <p>Sun: Closed</p>
                            </div>
                        </div>

                        {/* Bangalore Office */}
                        <div className="text-white space-y-4">
                            <h2 className="text-lg md:text-xl font-bold leading-tight">
                                BANGALORE OFFICE
                            </h2>
                            <div className="space-y-2 text-sm">
                                <p>535, 12th Cross, 5th Main Road,</p>
                                <p>RMV Extension, HIG Dollars Colony, Bangalore - 560094</p>
                                <p>Phone: +91 8904426424, +91 9886520475</p>
                                <p>Email: itcontracts@resolveindia.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Google Maps Section */}
            <section className=" bg-gray-50">
                <div className="w-full">
                    <div className="w-full">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3893.6704835791616!2d77.56356920116822!3d13.040183886775159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae144df9a32f77%3A0xa6075c056ba22af!2sResolveBiz%20Services%20and%20Apps%20Private%20Limited!5e0!3m2!1sen!2sin!4v1754982332861!5m2!1sen!2sin&gestureHandling=cooperative&scrollwheel=false"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full"
                            title="ResolveBiz Office Location"
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* Contact Us Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('/assets/contact/contact-footer-bg.png')`
                    }}
                ></div>

                {/* Content */}
                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="max-w-4xl mx-auto">
                        {/* Icon and Heading */}
                        <div className="flex flex-col items-center mb-8">
                            <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h2 className="text-5xl md:text-6xl  text-white tracking-wide mb-6 mt-8">
                                CONTACT US
                            </h2>
                        </div>

                        {/* Description Text */}
                        <div className="text-center text-white space-y-2 text-base leading-relaxed mb-12">
                            <p>
                                Need Help? Our customer support team at Resolve Biz Services & Apps can help you with any queries that you might have regarding our products and services.
                            </p>
                            <p>
                                Our panel of experts are updated with the latest information currently available and are available for consultations.
                            </p>
                        </div>


                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
