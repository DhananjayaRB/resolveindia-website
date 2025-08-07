import Image from 'next/image';
import backgroundimg from './bg-footer.jpg_1.jpeg';
import React from 'react';
const featureData = [
  {
    icon: (
      <svg width='36' height='36' fill='none' viewBox='0 0 36 36'>
        <circle cx='18' cy='18' r='18' fill='#236792' />
        <rect x='11' y='15' width='3' height='9' rx='1' fill='white' />
        <rect x='17' y='11' width='3' height='13' rx='1' fill='white' />
        <rect x='23' y='19' width='3' height='5' rx='1' fill='white' />
      </svg>
    ),
    title: 'LATEST',
    desc: 'All our products are updated to the latest business standards for continued business operations.',
  },
  {
    icon: (
      <svg width='36' height='36' fill='none' viewBox='0 0 36 36'>
        <circle cx='18' cy='18' r='18' fill='#236792' />
        <rect x='14' y='12' width='8' height='2' rx='1' fill='white' />
        <rect x='14' y='17' width='8' height='2' rx='1' fill='white' />
        <rect x='14' y='22' width='8' height='2' rx='1' fill='white' />
      </svg>
    ),
    title: 'INSTANT',
    desc: 'All tasks performed within our products are instantaneously processed to never interrupt your workflow.',
  },
  {
    icon: (
      <svg width='36' height='36' fill='none' viewBox='0 0 36 36'>
        <circle cx='18' cy='18' r='18' fill='#236792' />
        <polyline
          points='13,19 17,23 24,15'
          fill='none'
          stroke='white'
          strokeWidth='2.5'
        />
      </svg>
    ),
    title: 'CONVENIENT',
    desc: 'All our products require minimal capital cost. Instant setup, configuration and ready to use.',
  },
  {
    icon: (
      <svg width='36' height='36' fill='none' viewBox='0 0 36 36'>
        <circle cx='18' cy='18' r='18' fill='#236792' />
        <rect x='14' y='15' width='8' height='2' rx='1' fill='white' />
        <rect x='14' y='19' width='8' height='2' rx='1' fill='white' />
      </svg>
    ),
    title: 'AFFORDABLE',
    desc: 'All our products are geared towards MSMEs and boast the lowest price on the market.',
  },
];

export default function ServicesB() {
  return (
    <section className='relative w-full min-h-[480px] flex items-center justify-center overflow-hidden'>
      <Image
        src={backgroundimg}
        alt='Decorative background'
        fill
        style={{ objectFit: 'cover', zIndex: 0 }}
        className='pointer-events-none select-none'
        priority
      />
      {/* Centered floating white feature box */}
      <div
        className='
          relative z-10 w-full
          max-w-[2000px] h-[1000px]
          md:max-w-[1200px] md:max-h-[420px]
          mx-auto px-2 sm:px-8 py-12 sm:py-16 flex justify-center
        '
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div className='bg-[#EEEEEE] rounded shadow-lg w-full h-full flex flex-col md:flex-row justify-between items-center md:items-stretch'>
          {featureData.map((feature, idx) => (
            <div
              key={feature.title}
              className={`flex-1 flex flex-col items-center text-center px-4 md:px-6 py-8 md:py-12 ${
                idx < featureData.length - 1 ? 'md:border-r' : ''
              } border-gray-200`}
            >
              <span className='mb-4'>{feature.icon}</span>
              <h3 className='uppercase font-semibold text-[#22547B] mb-2 tracking-wide text-[15px]'>
                {feature.title}
              </h3>
              <p className='text-gray-700 text-[13px]'>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
