import React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./../globals.css";
import AttendanceNavbar from "@/app/components/attendance/Navbar";
import AttendanceFooter from "@/app/components/attendance/Footer";

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

export default function AttendanceLayout({ children }) {
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
        <AttendanceNavbar/>
        <div style={{ 
          width: '100%',
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <main style={{ flex: 1 }}>
            {children}
          </main>
          <AttendanceFooter />
        </div>
      </body>
    </html>
  );
}
