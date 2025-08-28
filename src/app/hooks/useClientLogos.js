import { useMemo } from 'react';

export const useClientLogos = () => {
  const clientLogos = useMemo(() => [
    {
      id: 'client-2',
      name: 'Client 2',
      logo: '/assets/clientsLogo/client-2.webp',
      alt: 'Client 2 company logo'
    },
    {
      id: 'client-3',
      name: 'Client 3',
      logo: '/assets/clientsLogo/client-3.webp',
      alt: 'Client 3 company logo'
    },
    {
      id: 'client-4',
      name: 'Client 4',
      logo: '/assets/clientsLogo/client-4.webp',
      alt: 'Client 4 company logo'
    },
    {
      id: 'client-5',
      name: 'Client 5',
      logo: '/assets/clientsLogo/client-5.webp',
      alt: 'Client 5 company logo'
    },
    {
      id: 'client-6',
      name: 'Client 6',
      logo: '/assets/clientsLogo/client-6.webp',
      alt: 'Client 6 company logo'
    },
    {
      id: 'client-7',
      name: 'Client 7',
      logo: '/assets/clientsLogo/client-7.webp',
      alt: 'Client 7 company logo'
    },
    {
      id: 'client-8',
      name: 'Client 8',
      logo: '/assets/clientsLogo/client-8.webp',
      alt: 'Client 8 company logo'
    },
    {
      id: 'client-9',
      name: 'Client 9',
      logo: '/assets/clientsLogo/client-9.webp',
      alt: 'Client 9 company logo'
    },
    {
      id: 'client-10',
      name: 'Client 10',
      logo: '/assets/clientsLogo/client-10.webp',
      alt: 'Client 10 company logo'
    },
    {
      id: 'client-11',
      name: 'Client 11',
      logo: '/assets/clientsLogo/client-11.webp',
      alt: 'Client 11 company logo'
    },
    {
      id: 'client-12',
      name: 'Client 12',
      logo: '/assets/clientsLogo/client-12.webp',
      alt: 'Client 12 company logo'
    },
    {
      id: 'client-13',
      name: 'Client 13',
      logo: '/assets/clientsLogo/client-13.webp',
      alt: 'Client 13 company logo'
    },
    {
      id: 'client-14',
      name: 'Client 14',
      logo: '/assets/clientsLogo/client-14.webp',
      alt: 'Client 14 company logo'
    }
  ], []);

  

  // Create exactly 2 rows by dividing total clients by 2
  const clientRows = useMemo(() => {
    const halfLength = Math.ceil(clientLogos.length / 2);
    return [
      clientLogos.slice(0, halfLength),
      clientLogos.slice(halfLength)
    ];
  }, [clientLogos]);

  return {
    clientLogos,
    clientRows
  };
}; 