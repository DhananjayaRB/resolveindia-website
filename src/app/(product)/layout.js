import React, { Suspense } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import PropTypes from "prop-types";
import "./../globals.css";
import AttendanceNavbar from "../components/attendance/navbar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Attendance Management - ResolveBiz",
  description: "Comprehensive attendance management solutions including GPS, biometric, and web-based tracking systems.",
  keywords: ["attendance management", "GPS attendance", "biometric attendance", "fingerprint attendance", "web attendance", "remote attendance"],
  openGraph: {
    title: "Attendance Management - ResolveBiz",
    description: "Comprehensive attendance management solutions including GPS, biometric, and web-based tracking systems.",
    url: "https://resolvebiz.com/products/attendance",
    siteName: "ResolveBiz",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Attendance Management - ResolveBiz",
    description: "Comprehensive attendance management solutions including GPS, biometric, and web-based tracking systems.",
  },
};

function AttendanceLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
 
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Attendance Management Solutions",
              description: "Comprehensive attendance management solutions including GPS, biometric, and web-based tracking systems.",
              url: "https://resolvebiz.com/products/attendance",
              publisher: {
                "@type": "Organization",
                name: "ResolveBiz"
              }
            })
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AttendanceNavbar />
        <div style={{
          width: '100%',
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <main style={{ flex: 1 }}>
            <Suspense fallback={
              <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="text-center">
                  <div className="w-8 h-8 rounded-full border-4 border-[#007dc5] border-t-transparent animate-spin mx-auto"></div>
                  <h2 className="text-2xl font-semibold text-gray-700 mt-4">Loading Attendance Management...</h2>
                </div>
              </div>
            }>
              {children}
            </Suspense>
          </main>
          
          
        </div>
      </body>
    </html>
  );
}

AttendanceLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AttendanceLayout;
