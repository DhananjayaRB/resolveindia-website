import { HeroSection, Slider, Clients, Products, Services, ServicesB } from './components/landing';
import styles from './page.module.css';
import React from 'react';
export default function Home() {
  return (
    <div className={styles.page}>
      <div>
        <div className=''>
          <HeroSection />
          <Slider />
          <Products />
          <Services />
          <ServicesB />
          <Clients />
        </div>
      </div>
    </div>
  );
}
