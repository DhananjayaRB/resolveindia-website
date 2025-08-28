import React, { Suspense } from "react";
import { Geist, Geist_Mono, Source_Sans_3 } from "next/font/google";
import PropTypes from "prop-types";

import "../globals.css";
import { Footer } from "../components/shared";
import ConditionalNavbar from "./ConditionalNavbar";

const sourceSans3 = Source_Sans_3({
  variable: "--font-source-sans-3",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata = {
  title: {
    default: "ResolveBiz - Business Process Management Solutions",
    template: "%s | ResolveBiz"
  },
  description: "ResolveBiz provides comprehensive business process management solutions including payroll services, attendance management, and HR automation. Streamline your business operations with our innovative technology.",
  keywords: ["business process management", "payroll services", "attendance management", "HR automation", "employee management", "time tracking", "biometric attendance", "GPS attendance", "workforce management"],
  authors: [{ name: "ResolveBiz" }],
  creator: "ResolveBiz",
  publisher: "ResolveBiz",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://resolvebiz.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ResolveBiz - Business Process Management Solutions",
    description: "ResolveBiz provides comprehensive business process management solutions including payroll services, attendance management, and HR automation.",
    url: "https://resolvebiz.com",
    siteName: "ResolveBiz",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ResolveBiz - Business Process Management Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ResolveBiz - Business Process Management Solutions",
    description: "ResolveBiz provides comprehensive business process management solutions including payroll services, attendance management, and HR automation.",
    images: ["/og-image.jpg"],
    creator: "@resolvebiz",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};

function HomeLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ResolveBiz",
    url: "https://resolvebiz.com",
    logo: "https://resolvebiz.com/logo.png",
    description: "Business Process Management Solutions",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Your Street Address",
      addressLocality: "Your City",
      addressRegion: "Your State",
      postalCode: "Your Postal Code",
      addressCountry: "IN"
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9844810424",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: "English"
    },
    sameAs: [
      "https://www.facebook.com/resolvebiz",
      "https://www.twitter.com/resolvebiz",
      "https://www.linkedin.com/company/resolvebiz"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${sourceSans3.variable}`}>

        <header>
          <ConditionalNavbar />
        </header>
        <main id="main-content">
          <Suspense fallback={
            <div className="min-h-screen bg-white flex items-center justify-center">
              <div className="text-center">
                <div className="w-8 h-8 rounded-full border-4 border-[#007dc5] border-t-transparent animate-spin mx-auto"></div>
                <h2 className="text-2xl font-semibold text-gray-700 mt-4">Loading...</h2>
              </div>
            </div>
          }>
            {children}
          </Suspense>
        
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HomeLayout;
