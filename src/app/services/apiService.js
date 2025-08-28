// API service for contact form and related functionality
const API_BASE_URL = 'https://apiv1.resolvepay.in';

/**
 * Fetch product types from the API
 * @returns {Promise<Array>} Array of product types
 */
export const fetchProductTypes = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/organization/product-types`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Handle different possible API response formats
        if (Array.isArray(data)) {
            // If API returns array directly
            return data.map(item => ({
                name: item.name || item.title || item.value || item,
                value: item.value || item.name || item.title || item
            }));
        } else if (data.data && Array.isArray(data.data)) {
            // If API returns { data: [...] }
            return data.data.map(item => ({
                name: item.name || item.title || item.value || item,
                value: item.value || item.name || item.title || item
            }));
        } else {
            throw new Error('Unexpected API response format');
        }
    } catch (error) {
        console.error('Error fetching product types:', error);
        throw error;
    }
};

/**
 * Submit contact form data
 * @param {Object} formData - Form data object
 * @returns {Promise<Object>} API response
 */
export const submitContactForm = async (formData) => {
    try {
        // Prepare payload according to API specification
        const payload = {
            email: formData.email,
            phone: formData.phone,
            name: formData.name,
            company_name: formData.company,
            service_type: formData.feature
        };

        console.log('Submitting form with payload:', payload);
        console.log('API endpoint:', `${API_BASE_URL}/organization/submit-client/false`);

        const response = await fetch(`${API_BASE_URL}/organization/submit-client/false`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            let errorMessage = 'Failed to submit form. Please try again.';
            try {
                const errorData = await response.json();
                console.error('API Error:', errorData);
                if (errorData.message) {
                    errorMessage = errorData.message;
                } else if (errorData.error) {
                    errorMessage = errorData.error;
                }
            } catch (parseError) {
                console.error('Error parsing error response:', parseError);
            }
            throw new Error(errorMessage);
        }

        const result = await response.json();
        console.log('Form submitted successfully:', result);
        return result;
    } catch (error) {
        console.error('Error submitting form:', error);
        throw error;
    }
};

/**
 * Get fallback product types (used when API fails)
 * @returns {Array} Array of fallback product types
 */
export const getFallbackProductTypes = () => [
    { name: "Attendance Management System", value: "Attendance Management System" },
    { name: "Leave Management System", value: "Leave Management System" },
    { name: "Payroll Services", value: "Payroll Services" },
    { name: "Accounting Services", value: "Accounting Services" },
    { name: "GoodKarmaforNGO Services", value: "GoodKarmaforNGO Services" },
    { name: "Other", value: "Other" }
];
