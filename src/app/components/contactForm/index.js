"use client";

import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        feature: '',
        query: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) { newErrors.name = 'Name is required'; }
        if (!formData.email.trim()) { newErrors.email = 'Email is required'; } else if (!/\S+@\S+\.\S+/.test(formData.email)) { newErrors.email = 'Please enter a valid email'; }
        if (!formData.phone.trim()) { newErrors.phone = 'Phone number is required'; } else if (!/^[+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/\s/g, ''))) { newErrors.phone = 'Please enter a valid phone number'; }
        if (!formData.company.trim()) { newErrors.company = 'Company name is required'; }
        if (!formData.feature) { newErrors.feature = 'Please select a feature'; }
        if (!formData.query.trim()) { newErrors.query = 'Please describe your query'; }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) { return; }
        setIsSubmitting(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            setFormData({ name: '', email: '', phone: '', company: '', feature: '', query: '' });
            alert("Thank you! Your query has been submitted successfully. We will get back to you soon.");
        } catch {
            alert('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-xl">
            <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Help Desk</h3>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <div className="relative">
                        <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-700 text-base w-5 h-5 z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name*"
                            className={`w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm placeholder-gray-500 bg-white/70 backdrop-blur-sm ${
                                errors.name ? 'border-red-500' : 'border-gray-300'
                            }`}
                        />
                    </div>
                    {errors.name && (<p className="text-red-500 text-sm mt-1 ml-1">{errors.name}</p>)}
                </div>
                <div>
                    <div className="relative">
                        <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-700 text-base w-5 h-5 z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email*"
                            className={`w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm placeholder-gray-500 bg-white/70 backdrop-blur-sm ${
                                errors.email ? 'border-red-500' : 'border-gray-300'
                            }`}
                        />
                    </div>
                    {errors.email && (<p className="text-red-500 text-sm mt-1 ml-1">{errors.email}</p>)}
                </div>
                <div>
                    <div className="relative">
                        <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-700 text-base w-5 h-5 z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Your Phone*"
                            className={`w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm placeholder-gray-500 bg-white/70 backdrop-blur-sm ${
                                errors.phone ? 'border-red-500' : 'border-gray-300'
                            }`}
                        />
                    </div>
                    {errors.phone && (<p className="text-red-500 text-sm mt-1 ml-1">{errors.phone}</p>)}
                </div>
                <div>
                    <div className="relative">
                        <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-700 text-base w-5 h-5 z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Company Name*"
                            className={`w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm placeholder-gray-500 bg-white/70 backdrop-blur-sm ${
                                errors.company ? 'border-red-500' : 'border-gray-300'
                            }`}
                        />
                    </div>
                    {errors.company && (<p className="text-red-500 text-sm mt-1 ml-1">{errors.company}</p>)}
                </div>
                <div>
                    <div className="relative">
                        <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-700 text-base w-5 h-5 z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                        <select
                            name="feature"
                            value={formData.feature}
                            onChange={handleChange}
                            className={`w-full pl-10 pr-8 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none cursor-pointer text-sm text-gray-700 bg-white/70 backdrop-blur-sm ${
                                errors.feature ? 'border-red-500' : 'border-gray-300'
                            }`}
                        >
                            <option value="">Select Feature*</option>
                            <option value="Attendance Management System">Attendance Management System</option>
                            <option value="Leave Management System">Leave Management System</option>
                            <option value="Payroll Services">Payroll Services</option>
                            <option value="Accounting Services">Accounting Services</option>
                            <option value="GoodKarmaforNGO Services">GoodKarmaforNGO Services</option>
                            <option value="Other">Other</option>
                        </select>
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none z-10">
                            <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                    {errors.feature && (<p className="text-red-500 text-sm mt-1 ml-1">{errors.feature}</p>)}
                </div>
                <div>
                    <div className="relative">
                        <svg className="absolute left-3 top-4 text-gray-700 text-base w-5 h-5 z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <textarea
                            name="query"
                            value={formData.query}
                            onChange={handleChange}
                            placeholder="Describe your query*"
                            rows={4}
                            className={`w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm placeholder-gray-500 bg-white/70 backdrop-blur-sm resize-none ${
                                errors.query ? 'border-red-500' : 'border-gray-300'
                            }`}
                        ></textarea>
                    </div>
                    {errors.query && (<p className="text-red-500 text-sm mt-1 ml-1">{errors.query}</p>)}
                </div>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 text-sm active:scale-95 shadow-lg ${
                        isSubmitting
                            ? 'bg-gray-400 cursor-not-allowed hover:bg-gray-400'
                            : 'bg-[rgb(2,126,197)] hover:bg-[rgb(1,100,156)] active:bg-[rgb(2,140,220)]'
                    }`}
                >
                    {isSubmitting ? 'Submitting...' : 'SUBMIT'}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;