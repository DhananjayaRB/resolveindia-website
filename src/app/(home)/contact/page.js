import React from 'react';
import ContactForm from '../../components/contactForm';
import { FiPhone, FiMapPin } from 'react-icons/fi';

const ContactPage = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image with Blue Overlay */}
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('/assets/contact/contact-hero-bg.png')`
                    }}
                >
                  
                </div>
                
                {/* Content Container */}
                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="flex flex-row justify-around items-center">
                        
                        {/* Left Side - Content */}
                        <div className="text-white space-y-6 ml-10">
                            {/* Main Heading */}
                            <div className="space-y-3">
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                                    Customer Support
                                </h1>
                                <p className="text-base sm:text-lg text-blue-100 max-w-lg">
                                    Our Customer Executive will get back to your query
                                </p>
                            </div>
                            
                            {/* Contact Information */}
                            <div className="space-y-4">
                                {/* Address */}
                                <div className="flex items-start space-x-3">
                                    <FiMapPin className="text-blue-300 text-lg mt-1 flex-shrink-0" />
                                    <div className="space-y-1">
                                        <p className="text-blue-100 font-medium text-sm">Address</p>
                                        <p className="text-blue-50 leading-relaxed text-sm">
                                            535, 12th Cross, 5th Main Road, RMV Extension,<br />
                                            HIG Dollars Colony, Bangalore - 560094
                                        </p>
                                    </div>
                                </div>
                                
                                {/* Phone */}
                                <div className="flex items-center space-x-3">
                                    <FiPhone className="text-blue-300 text-lg flex-shrink-0" />
                                    <div className="space-y-1">
                                        <p className="text-blue-100 font-medium text-sm">Phone</p>
                                        <p className="text-blue-50 text-base font-semibold">
                                            +91 9844810424
                                        </p>
                                    </div>
                                </div>
                            </div>

        </div>

                        {/* Right Side - Contact Form */}
                        <div className="flex justify-center lg:justify-end w-120">
                            <ContactForm />
                        </div>
                    </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
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
                                <p>Phone: +91 8067586758, +91 8067586700</p>
                                <p>Email: contact@resolveindia.com</p>
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
                            style={{border: 0}} 
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
