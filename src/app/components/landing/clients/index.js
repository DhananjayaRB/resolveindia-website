'use client';
import Image from 'next/image';
import React from 'react';

import { useClientLogos } from '../../../hooks/useClientLogos';

import styles from './clients.module.scss';



function Clients() {
  const { clientRows } = useClientLogos();
  const [pausedRows, setPausedRows] = React.useState(new Set());

  const handleRowHover = (rowIndex, isHovering) => {
    setPausedRows(prev => {
      const newSet = new Set(prev);
      if (isHovering) {
        newSet.add(rowIndex);
      } else {
        newSet.delete(rowIndex);
      }
      return newSet;
    });
  };

  return (
    <section
      className={styles.clientsSection}
      aria-labelledby='clients-heading'
    >
      <div className={styles.container}>
        <header className={styles.header}>
          <h1
            id='clients-heading'
            className={styles.title}
          >
            Our Trusted Clients
          </h1>
        </header>

        <div className={styles.logosContainer}>
          {clientRows.map((row, rowIndex) => (
            <div
              key={`row-${rowIndex}`}
              className={styles.marqueeWrapper}
              aria-label={`Client logos row ${rowIndex + 1}`}
              onMouseEnter={() => handleRowHover(rowIndex, true)}
              onMouseLeave={() => handleRowHover(rowIndex, false)}
            >
              {/* Left Fade Overlay */}
              <div className={styles.fadeOverlayLeft} />
              
              {/* Right Fade Overlay */}
              <div className={styles.fadeOverlayRight} />
              
              <div
                className={styles.marqueeContainer}
              >
                <div
                  className={`
                    ${styles.marqueeContent}
                    ${rowIndex % 2 === 0 ? styles.animateMarqueeLeft : styles.animateMarqueeRight}
                    ${pausedRows.has(rowIndex) ? '[animation-play-state:paused]' : ''}
                  `}
                >
                  {/* First set of logos */}
                  {row.map((client, i) => (
                    <div
                      key={`${client.id}-first-${i}`}
                      className={styles.clientLogo}
                      title={client.name}
                    >
                      <Image
                        src={client.logo}
                        alt={client.alt}
                        width={100}
                        height={100}
                        className={styles.clientImage}
                        loading='lazy'
                      />
                    </div>
                  ))}

                  {/* Duplicate set for seamless loop */}
                  {row.map((client, i) => (
                    <div
                      key={`${client.id}-duplicate-${i}`}
                      className={styles.clientLogo}
                      title={client.name}
                    >
                      <Image
                        src={client.logo}
                        alt={client.alt}
                        width={100}
                        height={100}
                        className={styles.clientImage}
                        loading='lazy'
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;
