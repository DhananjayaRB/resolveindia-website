'use client';
import {
  EnvironmentOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  MailOutlined,
  MessageOutlined,
  PhoneOutlined,
  TwitterOutlined,
  YoutubeOutlined
} from '@ant-design/icons';
import { Col, Row } from 'antd';
import styles from './Footer.module.scss';
import React from 'react';

const Footer = () => {
  const logo = '/assets/landingPageImage/logo.png';
  
  const productsServices = [
    'Attendance Management',
    'Leave Management', 
    'Expense Management',
    'Payroll Services',
    'Accounting Services',
    'Resolve My Tax',
    'Good Karma for NGO\'s'
  ];

  const siteDisclaimer = [
    'Terms & Conditions',
    'Privacy Policy',
    'Resolve Blogs',
    'Resources',
    'Career',
    'Help Desk',
    'About Us'
  ];

  return (
    <>
      <footer className={styles.footer} role="contentinfo" aria-label="ResolveBiz Footer">
        <div className={styles.container}>
          <Row gutter={[32, 32]}>
            {/* Leftmost Column - Branding & Downloads */}
            <Col xs={24} sm={24} md={6} lg={6} xl={6}>
              <section className={styles.brandingSection} aria-labelledby="footer-branding">
                <h2 id="footer-branding" className="sr-only">Branding and Downloads</h2>
                <div className={styles.logoContainer}>
                  <div className={styles.logo}>
                    <img 
                      src={logo}
                      alt="ResolveBiz Logo"
                      className={styles.logoImage}
                    />
                  </div>
                </div>
                
                <div className={styles.appStores}>
                  <a href="#" className={styles.appStoreBadge} target="_blank" rel="noopener noreferrer" aria-label="Download ResolveBiz app from Google Play Store">
                    <img 
                      src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
                      alt="Get it on Google Play"
                      className={styles.googlePlayBadge}
                    />
                  </a>
                  <a href="#" className={styles.appStoreBadge} target="_blank" rel="noopener noreferrer" aria-label="Download ResolveBiz app from Apple App Store">
                    <img 
                      src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg" 
                      alt="Download on the App Store"
                      className={styles.appStoreBadge}
                    />
                  </a>
                </div>
                
                <nav className={styles.socialIcons} aria-label="Social media links">
                  <a href="#" aria-label="Visit ResolveBiz on LinkedIn">
                    <LinkedinOutlined className={styles.socialIcon} />
                  </a>
                  <a href="#" aria-label="Follow ResolveBiz on Twitter">
                    <TwitterOutlined className={styles.socialIcon} />
                  </a>
                  <a href="#" aria-label="Like ResolveBiz on Facebook">
                    <FacebookOutlined className={styles.socialIcon} />
                  </a>
                  <a href="#" aria-label="Subscribe to ResolveBiz on YouTube">
                    <YoutubeOutlined className={styles.socialIcon} />
                  </a>
                </nav>
              </section>
            </Col>

            {/* Second Column - Products & Services */}
            <Col xs={24} sm={12} md={6} lg={6} xl={6}>
              <section className={styles.column} aria-labelledby="footer-products">
                <h3 id="footer-products" className={styles.columnTitle}>Products & Services</h3>
                <nav aria-label="Products and services links">
                  <ul className={styles.linkList}>
                    {productsServices.map((item, index) => (
                      <li key={index}>
                        <a href="#" className={styles.footerLink}>{item}</a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </section>
            </Col>

            {/* Third Column - Site Disclaimer */}
            <Col xs={24} sm={12} md={6} lg={6} xl={6}>
              <section className={styles.column} aria-labelledby="footer-disclaimer">
                <h3 id="footer-disclaimer" className={styles.columnTitle}>Site Disclaimer</h3>
                <nav aria-label="Site disclaimer links">
                  <ul className={styles.linkList}>
                    {siteDisclaimer.map((item, index) => (
                      <li key={index}>
                        <a href="#" className={styles.footerLink}>{item}</a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </section>
            </Col>

            {/* Rightmost Column - Where to find Us */}
            <Col xs={24} sm={24} md={6} lg={6} xl={6}>
              <section className={styles.column} aria-labelledby="footer-contact">
                <h3 id="footer-contact" className={styles.columnTitle}>Where to find Us</h3>
                <address className={styles.contactInfo}>
                  <div className={styles.contactItem}>
                    <MailOutlined className={styles.contactIcon} aria-hidden="true" />
                    <a href="mailto:sales@resolveindia.com" className={styles.contactText}>
                      sales@resolveindia.com
                    </a>
                  </div>
                  <div className={styles.contactItem}>
                    <PhoneOutlined className={styles.contactIcon} aria-hidden="true" />
                    <a href="tel:+919844810424" className={styles.contactText}>
                      +91 9844810424
                    </a>
                  </div>
                  <div className={styles.contactItem}>
                    <EnvironmentOutlined className={styles.contactIcon} aria-hidden="true" />
                    <div className={styles.address}>
                      <div>535, 12th Cross, 5th Main Road,</div>
                      <div>RMV Extension, HIG Dollars Colony,</div>
                      <div>Bangalore - 560094</div>
                    </div>
                  </div>
                </address>
              </section>
            </Col>
          </Row>
        </div>
        
        {/* Floating Chat Button */}
        <button className={styles.chatButton} aria-label="Start chat with ResolveBiz support">
          <MessageOutlined className={styles.chatIcon} aria-hidden="true" />
        </button>
      </footer>
      
      {/* Copyright Section */}
      <section className={styles.copyrightSection}>
        <div className={styles.copyrightContainer}>
          <p className={styles.copyrightText}>
            Copyright@2019, ResolveBiz Services and Apps Pvt Ltd.
          </p>
        </div>
      </section>
    </>
  );
};

export default Footer;
