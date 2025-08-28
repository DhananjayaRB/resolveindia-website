"use client";

import React, { useState, useEffect } from 'react';
import { fetchProductTypes, submitContactForm, getFallbackProductTypes } from '../../services/apiService';
import formStyles from './contactForm.module.scss';

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
    const [formScale, setFormScale] = useState(1);
    const [productTypes, setProductTypes] = useState([]);
    const [isFeatureDropdownOpen, setIsFeatureDropdownOpen] = useState(false);

    // Initialize with fallback product types and fetch from API on page load
    useEffect(() => {
        const initializeProductTypes = async () => {
            try {
                console.log('Fetching product types on page load...');
                const apiProductTypes = await fetchProductTypes();
                setProductTypes(apiProductTypes);
                console.log('Product types loaded from API:', apiProductTypes);
            } catch (error) {
                console.error('Failed to fetch product types from API, using fallback:', error);
                const fallbackTypes = getFallbackProductTypes();
                setProductTypes(fallbackTypes);
            }
        };

        initializeProductTypes();
    }, []);

    // Calculate form scale based on screen height
    useEffect(() => {
        const calculateFormScale = () => {
            const screenHeight = window.innerHeight;
            let scale = 1;

            // Adjust scale based on screen height
            if (screenHeight < 600) {
                scale = 0.8; // Very small screens
            } else if (screenHeight < 700) {
                scale = 0.9; // Small screens
            } else if (screenHeight < 800) {
                scale = 1; // Medium screens
            } else if (screenHeight < 900) {
                scale = 1.1; // Large screens
            } else if (screenHeight < 1000) {
                scale = 1.2; // Very large screens
            } else {
                scale = 1.3; // Extra large screens
            }

            setFormScale(scale);
        };

        calculateFormScale();
        window.addEventListener('resize', calculateFormScale);

        return () => window.removeEventListener('resize', calculateFormScale);
    }, []);

    // Fetch product types when feature dropdown is opened (refresh from API)
    const refreshProductTypes = async () => {
        try {
            console.log('Refreshing product types from API...');
            const apiProductTypes = await fetchProductTypes();
            setProductTypes(apiProductTypes);
            console.log('Product types refreshed from API:', apiProductTypes);
        } catch (error) {
            console.error('Failed to refresh product types from API:', error);
            // Keep existing product types if refresh fails
        }
    };

    const handleFeatureDropdownClick = () => {
        if (!isFeatureDropdownOpen) {
            console.log('Refreshing product types from API...');
            refreshProductTypes();
        }
        setIsFeatureDropdownOpen(!isFeatureDropdownOpen);
    };

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
            await submitContactForm(formData);
            setFormData({ name: '', email: '', phone: '', company: '', feature: '', query: '' });
            alert("Thank you! Your query has been submitted successfully. We will get back to you soon.");
        } catch (error) {
            console.error('Error submitting form:', error);
            alert(error.message || 'Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    // Dynamic styles based on form scale
    const getDynamicStyles = () => ({
        container: {
            transform: `scale(${formScale})`,
            transformOrigin: 'center center',
            maxHeight: `${90 / formScale}vh`,
            width: `${100 / formScale}%`,
        },
        padding: Math.max(16, Math.round(24 * formScale)),
        spacing: Math.max(12, Math.round(16 * formScale)),
        inputHeight: Math.max(40, Math.round(48 * formScale)),
        fontSize: Math.max(14, Math.round(16 * formScale)),
        iconSize: Math.max(16, Math.round(20 * formScale)),
        borderRadius: Math.max(8, Math.round(12 * formScale)),
    });

    const styles = getDynamicStyles();

    return (
        <div
            className="bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/20 rounded-2xl shadow-2xl w-full max-w-lg lg:max-w-xl xl:max-w-2xl overflow-hidden px-8 pb-8 hidden sm:block border border-gray-100/50 backdrop-blur-sm"
            style={styles.container}
        >
            <div
                className="text-center w-full bg-gradient-to-r text-white py-6"
                style={{ padding: styles.padding, paddingBottom: styles.spacing }}
            >
                <h3
                    className="font-bold text-black text-2xl mb-1"
                    style={{ fontSize: styles.fontSize * 1.5 }}
                >
                    Help Desk
                </h3>
                <p className="text-black text-sm">We&apos;re here to help you</p>
            </div>

            <form onSubmit={handleSubmit} className="w-full" style={{ padding: `0 ${styles.padding} ${styles.padding}` }}>
                <div style={{ marginBottom: styles.spacing }}>
                    <div className={`${formStyles['contact-input-container']} ${errors.name ? formStyles['has-error'] : ''}`}>
                        <svg
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            style={{ width: styles.iconSize, height: styles.iconSize }}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder=""
                            className={formStyles['contact-input-field']}
                            style={{
                                height: styles.inputHeight,
                                fontSize: styles.fontSize,
                                paddingLeft: styles.iconSize + 12
                            }}
                        />
                        <label className={formStyles['contact-input-label']} style={{ left: styles.iconSize + 12 }}>
                            Your Name*
                        </label>
                        <div className={formStyles['contact-input-highlight']}></div>
                    </div>
                    {errors.name && (
                        <p
                            className="text-red-500 mt-1 ml-1"
                            style={{ fontSize: styles.fontSize * 0.875 }}
                        >
                            {errors.name}
                        </p>
                    )}
                </div>

                <div style={{ marginBottom: styles.spacing }}>
                    <div className={`${formStyles['contact-input-container']} ${errors.email ? formStyles['has-error'] : ''}`}>
                        <svg
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            style={{ width: styles.iconSize, height: styles.iconSize }}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder=""
                            className={formStyles['contact-input-field']}
                            style={{
                                height: styles.inputHeight,
                                fontSize: styles.fontSize,
                                paddingLeft: styles.iconSize + 12
                            }}
                        />
                        <label className={formStyles['contact-input-label']} style={{ left: styles.iconSize + 12 }}>
                            Your Email*
                        </label>
                        <div className={formStyles['contact-input-highlight']}></div>
                    </div>
                    {errors.email && (
                        <p
                            className="text-red-500 mt-1 ml-1"
                            style={{ fontSize: styles.fontSize * 0.875 }}
                        >
                            {errors.email}
                        </p>
                    )}
                </div>

                <div style={{ marginBottom: styles.spacing }}>
                    <div className={`${formStyles['contact-input-container']} ${errors.phone ? formStyles['has-error'] : ''}`}>
                        <svg
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            style={{ width: styles.iconSize, height: styles.iconSize }}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder=""
                            className={formStyles['contact-input-field']}
                            style={{
                                height: styles.inputHeight,
                                fontSize: styles.fontSize,
                                paddingLeft: styles.iconSize + 12
                            }}
                        />
                        <label className={formStyles['contact-input-label']} style={{ left: styles.iconSize + 12 }}>
                            Your Phone*
                        </label>
                        <div className={formStyles['contact-input-highlight']}></div>
                    </div>
                    {errors.phone && (
                        <p
                            className="text-red-500 mt-1 ml-1"
                            style={{ fontSize: styles.fontSize * 0.875 }}
                        >
                            {errors.phone}
                        </p>
                    )}
                </div>

                <div style={{ marginBottom: styles.spacing }}>
                    <div className={`${formStyles['contact-input-container']} ${errors.company ? formStyles['has-error'] : ''}`}>
                        <svg
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            style={{ width: styles.iconSize, height: styles.iconSize }}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder=""
                            className={formStyles['contact-input-field']}
                            style={{
                                height: styles.inputHeight,
                                fontSize: styles.fontSize,
                                paddingLeft: styles.iconSize + 12
                            }}
                        />
                        <label className={formStyles['contact-input-label']} style={{ left: styles.iconSize + 12 }}>
                            Company Name*
                        </label>
                        <div className={formStyles['contact-input-highlight']}></div>
                    </div>
                    {errors.company && (
                        <p
                            className="text-red-500 mt-1 ml-1"
                            style={{ fontSize: styles.fontSize * 0.875 }}
                        >
                            {errors.company}
                        </p>
                    )}
                </div>

                <div style={{ marginBottom: styles.spacing }}>
                    <div className={`${formStyles['contact-input-container']} ${errors.feature ? formStyles['has-error'] : ''}`}>
                        <svg
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            style={{ width: styles.iconSize, height: styles.iconSize }}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                        <select
                            name="feature"
                            value={formData.feature}
                            onChange={handleChange}
                            onClick={handleFeatureDropdownClick}
                            className={`w-full border focus:outline-none focus:ring-2focus:border-transparent transition-all duration-200 appearance-none cursor-pointer text-gray-700 bg-transparent ${errors.feature ? 'border-red-500' : 'border-transparent'
                                }`}
                            style={{
                                height: styles.inputHeight,
                                fontSize: styles.fontSize,
                                borderRadius: styles.borderRadius,
                                paddingLeft: styles.iconSize + 10,
                                paddingRight: styles.iconSize + 12
                            }}
                        >
                            <option value="">Select Feature*</option>
                            {productTypes.map(type => (
                                <option key={type.value} value={type.value}>{type.name}</option>
                            ))}
                        </select>
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none z-10">
                            <svg
                                className="text-gray-700"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                style={{ width: styles.iconSize * 0.8, height: styles.iconSize * 0.8 }}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                    {errors.feature && (
                        <p
                            className="text-red-500 mt-1 ml-1"
                            style={{ fontSize: styles.fontSize * 0.875 }}
                        >
                            {errors.feature}
                        </p>
                    )}
                </div>

                <div style={{ marginBottom: styles.spacing }}>
                    <div className={`${formStyles['contact-input-container']} ${errors.query ? formStyles['has-error'] : ''}`}>
                        <svg
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            style={{ width: styles.iconSize, height: styles.iconSize, top: 25 }}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <textarea
                            name="query"
                            value={formData.query}
                            onChange={handleChange}
                            placeholder=""
                            className={formStyles['contact-input-field']}
                            style={{
                                fontSize: styles.fontSize,
                                paddingLeft: 35,
                                paddingTop: 16,
                                minHeight: 40
                            }}
                        ></textarea>
                        <label className={formStyles['contact-input-label']} style={{ left: 35, top: 8 }}>
                            Describe your query*
                        </label>
                        <div className={formStyles['contact-input-highlight']}></div>
                    </div>
                    {errors.query && (
                        <p
                            className="text-red-500 mt-1 ml-1"
                            style={{ fontSize: styles.fontSize * 0.875 }}
                        >
                            {errors.query}
                        </p>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full font-bold text-white transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/30 focus:ring-offset-2 active:scale-98 shadow-xl rounded-xl ${isSubmitting
                            ? 'bg-gray-400 cursor-not-allowed hover:bg-gray-400'
                            : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 active:from-blue-800 active:to-indigo-800'
                        }`}
                    style={{
                        height: styles.inputHeight,
                        fontSize: styles.fontSize,
                        borderRadius: styles.borderRadius,
                        marginTop: styles.spacing + 8
                    }}
                >
                    {isSubmitting ? (
                        <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Submitting...
                        </span>
                    ) : (
                        'SUBMIT'
                    )}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;