import React from "react";

import LeaveManagementClient from "../../../components/leave-managed-system";

import { faqData } from './faqData';

const LeaveManagementSystem = () => {
    // Core features data with icon names
    const coreFeatures = [
        {
            id: 1,
            title: "SIMPLE",
            description: "Whatever your leave credit cycle or leave lapse rules, define your leave unit, leave types, leave policies, and leave EVERYTHING with Leave Management System.",
            icon: "IoCheckmarkCircleOutline"
        },
        {
            id: 2,
            title: "SET LEAVE RULES",
            description: "Set your Leave Units, Leave types, annual limits and other leave policies.",
            icon: "IoCalendarOutline"
        },
        {
            id: 3,
            title: "HR'S DREAM APP",
            description: "Keep track of everyone. Know who is on leave and who is not at a glance at the Leave Management App.",
            icon: "IoBusinessOutline"
        },
        {
            id: 4,
            title: "FREEDOM TO YOU",
            description: "Leave Management System supports to leave encashment. Manage PTO (Personal Time Off) and comp off with one app.",
            icon: "IoLaptopOutline"
        },
        {
            id: 5,
            title: "COMPLAINT",
            description: "Every business is supposed to have Form F & Form T at all times. Download these from Leave Management App with a tap.",
            icon: "IoDocumentTextOutline"
        },
        {
            id: 6,
            title: "COMPLETE TRANSPARENCY",
            description: "Check for all pending approvals with Leave Management's completely transparent leave process.",
            icon: "IoEyeOutline"
        }
    ];

    // Additional features data
    const additionalFeatures = [
        {
            id: 1,
            title: "ALL RECORDS ANYTIME",
            description: "Leave Management System brings the power to you. Know how many employees have Requested leave, their Reason for leave, leave approved or not, and much more.",
            icon: "IoTimeOutline",
            seoTitle: "Real-time Leave Records Access"
        },
        {
            id: 2,
            title: "CLOUD SERVICE",
            description: "Leave Management Software is hosted on Tier III Cloud with best in class infrastructure and is completely secure. 24/7 around the clock customer service guaranteed.",
            icon: "IoThumbsUpOutline",
            seoTitle: "Secure Cloud-Based Leave Management"
        },
        {
            id: 3,
            title: "ONE OF A KIND UI",
            description: "Leave Management App is available for Android, iOS and as a web-based browser application. The SaaS application boasts a great user interface and can be access across devices.",
            icon: "IoDesktopOutline",
            seoTitle: "Cross-Platform Leave Management Interface"
        },
        {
            id: 4,
            title: "LEAVE PROFILING",
            description: "Profile your employee based on their leaves according to their highest/lowest banding. With Leave Management System, get insights from Leave analytics & Leave Trends.",
            icon: "IoPersonOutline",
            seoTitle: "Employee Leave Analytics and Profiling"
        }
    ];

    // Statistics data
    const statisticsData = [
        {
            id: 1,
            number: "2000+",
            description: "Resolve Existing Users",
            icon: "IoPersonOutline",
            seoTitle: "Resolve Leave Management System Users"
        },
        {
            id: 2,
            number: "50%",
            description: "Reduction in Unplanned Leaves",
            icon: "IoBriefcaseOutline",
            seoTitle: "Unplanned Leave Reduction Statistics"
        },
        {
            id: 3,
            number: "80%",
            description: "Reduction in no Shows",
            icon: "IoBicycleOutline",
            seoTitle: "No Show Reduction Metrics"
        },
        {
            id: 4,
            number: "100%",
            description: "Time Saved on Leave Reconciliation",
            icon: "IoCalendarOutline",
            seoTitle: "Leave Reconciliation Efficiency"
        }
    ];

    // Testimonial data
    const testimonials = [
        {
            id: 1,
            name: "PRIYANKA SHRIVASTAV",
            title: "HR Manager",
            quote: "With Leave Management System, we are able to track all the aspects of the leave process. No more wasting of time by reaching out to employees in person and asking who is on leave and who is not."
        },
        {
            id: 2,
            name: "RAHUL KUMAR",
            title: "Operations Director",
            quote: "The automated leave tracking has transformed our HR operations. We now have complete visibility into leave patterns and can make better workforce planning decisions."
        },
        {
            id: 3,
            name: "ANITA PATEL",
            title: "Senior HR Executive",
            quote: "The system is incredibly simple and user-friendly and has significantly reduced our administrative workload. Employees truly love the self-service features and real-time updates."
        }
    ];

    // Pricing plans data - Dynamic and extensible
    const pricingPlans = [
        {
            id: 1,
            name: "BASE VERSION",
            price: "Rs.500",
            userLimit: "up to 33 users",
            features: [
                "Rs. 15/User/Month (from 34th user)",
                "Minimum Rs. 500/Month/Legal Entity",
                "GST @ 18% Additional",
                "Web and mobile login",
                "Compliance report"
            ],
            isPopular: false,
            buttonText: "ORDER NOW",
            buttonLink: "/contact"
        }
    ];

    return (
        <main className="min-h-screen bg-white">
            {/* Pass all the data to the client component */}
            <LeaveManagementClient 
                coreFeatures={coreFeatures}
                additionalFeatures={additionalFeatures}
                statisticsData={statisticsData}
                testimonials={testimonials}
                pricingPlans={pricingPlans}
                faqData={faqData}
            />
        </main>
    );
};

export default LeaveManagementSystem;
