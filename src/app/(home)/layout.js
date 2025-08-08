import React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Navbar, Footer } from "../components/shared";

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

export default function HomeLayout({ children }) {
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
      <body style={{ paddingTop: "var(--navbar-height)" }} className={`${geistSans.variable} ${geistMono.variable}`}>
       
        <header>
          <Navbar />
        </header>
        <main id="main-content">
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
