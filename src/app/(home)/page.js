import { HeroSection, Slider, Clients, Products, Services, ServicesB } from '../components/landing';
import styles from '../page.module.css';
import React from 'react';

export const metadata = {
  title: "ResolveBiz - Business Process Management Solutions",
  description: "ResolveBiz provides comprehensive business process management solutions including payroll services, attendance management, and HR automation. Streamline your business operations with our innovative technology.",
  keywords: ["business process management", "payroll services", "attendance management", "HR automation", "employee management", "time tracking", "biometric attendance", "GPS attendance", "workforce management"],
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
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "ResolveBiz - Business Process Management Solutions",
    description: "ResolveBiz provides comprehensive business process management solutions including payroll services, attendance management, and HR automation.",
    url: "https://resolvebiz.com",
    publisher: {
      "@type": "Organization",
      name: "ResolveBiz",
      url: "https://resolvebiz.com",
      logo: "https://resolvebiz.com/logo.png",
      description: "Business Process Management Solutions"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className={styles.page}>
        <article>
          <section>
            <HeroSection />
          </section>
          <section>
            <Slider />
          </section>
          <section>
            <Products />
          </section>
          <section>
            <Services />
          </section>
          <section>
            <ServicesB />
          </section>
          <section>
            <Clients />
          </section>
        </article>
      </div>
    </>
  );
}
