import { useMemo } from 'react';

export const useClientLogos = () => {
  const clientLogos = useMemo(() => [
    {
      id: 'alltech',
      name: 'Alltech',
      logo: '/assets/clientsLogo/alltech.png',
      alt: 'Alltech company logo'
    },
    {
      id: 'tibil',
      name: 'TIBIL',
      logo: '/assets/clientsLogo/TIBIL.png',
      alt: 'TIBIL company logo'
    },
    {
      id: 'fundemax',
      name: 'Fundemax',
      logo: '/assets/clientsLogo/fundemax-logo.png',
      alt: 'Fundemax company logo'
    },
    {
      id: 'atlas-systems',
      name: 'Atlas Systems',
      logo: '/assets/clientsLogo/atlas-systems.png',
      alt: 'Atlas Systems company logo'
    },
    {
      id: 'unacademy',
      name: 'Unacademy',
      logo: '/assets/clientsLogo/Unacademy.png',
      alt: 'Unacademy company logo'
    },
    {
      id: 'cothas-coffee',
      name: 'Cothas Coffee',
      logo: '/assets/clientsLogo/cothas-coffee.png',
      alt: 'Cothas Coffee company logo'
    },
    {
      id: 'jana-care',
      name: 'Jana Care',
      logo: '/assets/clientsLogo/jana-care-logo.png',
      alt: 'Jana Care company logo'
    },
    {
      id: 'elematic',
      name: 'Elematic',
      logo: '/assets/clientsLogo/elematic-logo.png',
      alt: 'Elematic company logo'
    },
    {
      id: 'praras',
      name: 'Praras',
      logo: '/assets/clientsLogo/praras-logo.png',
      alt: 'Praras company logo'
    },
    {
      id: 'bmst',
      name: 'BMST',
      logo: '/assets/clientsLogo/bmst-logo.png',
      alt: 'BMST company logo'
    },
    {
      id: 'ubmtech',
      name: 'UBMTech',
      logo: '/assets/clientsLogo/ubmtech.png',
      alt: 'UBMTech company logo'
    },
    {
      id: 'tally',
      name: 'Tally',
      logo: '/assets/clientsLogo/Tally.png',
      alt: 'Tally company logo'
    },
    {
      id: 'vwr',
      name: 'VWR',
      logo: '/assets/clientsLogo/VWR.png',
      alt: 'VWR company logo'
    },
    {
      id: 'willow',
      name: 'Willow',
      logo: '/assets/clientsLogo/willow.png',
      alt: 'Willow company logo'
    },
    {
      id: 'unitus',
      name: 'Unitus',
      logo: '/assets/clientsLogo/Unitus.png',
      alt: 'Unitus company logo'
    },
    {
      id: 'nadathur',
      name: 'Nadathur',
      logo: '/assets/clientsLogo/Nadathur.png',
      alt: 'Nadathur company logo'
    },
    {
      id: 'lkq',
      name: 'LKQ',
      logo: '/assets/clientsLogo/LKQ.png',
      alt: 'LKQ company logo'
    },
    {
      id: 'shubloan',
      name: 'ShubLoan',
      logo: '/assets/clientsLogo/Shubloan.png',
      alt: 'ShubLoan company logo'
    },
    {
      id: 'desicrew',
      name: 'DesiCrew',
      logo: '/assets/clientsLogo/desicrew.png',
      alt: 'DesiCrew company logo'
    },
    {
      id: 'greenestep',
      name: 'Greenestep',
      logo: '/assets/clientsLogo/Greenestep.png',
      alt: 'Greenestep company logo'
    },
    {
      id: 'jamcracker',
      name: 'Jamcracker',
      logo: '/assets/clientsLogo/Jamcracker.png',
      alt: 'Jamcracker company logo'
    },
    {
      id: 'gilbarco',
      name: 'Gilbarco',
      logo: '/assets/clientsLogo/Gilbarco.png',
      alt: 'Gilbarco company logo'
    },
    {
      id: 'cision',
      name: 'Cision',
      logo: '/assets/clientsLogo/Cision.png',
      alt: 'Cision company logo'
    },
    {
      id: 'encora',
      name: 'Encora',
      logo: '/assets/clientsLogo/encora.png',
      alt: 'Encora company logo'
    },
    {
      id: 'spc',
      name: 'SPC',
      logo: '/assets/clientsLogo/spc.png',
      alt: 'SPC company logo'
    },
    {
      id: 'radiant',
      name: 'Radiant',
      logo: '/assets/clientsLogo/radiant.png',
      alt: 'Radiant company logo'
    },
    {
      id: 's',
      name: 'S',
      logo: '/assets/clientsLogo/s.png',
      alt: 'S company logo'
    },
    {
      id: 'terex',
      name: 'Terex',
      logo: '/assets/clientsLogo/terex.png',
      alt: 'Terex company logo'
    },
    {
      id: 'aaf',
      name: 'AAF',
      logo: '/assets/clientsLogo/aaf.png',
      alt: 'AAF company logo'
    },
    {
      id: 'expense',
      name: 'Expense',
      logo: '/assets/clientsLogo/Expense-Logo.png',
      alt: 'Expense company logo'
    },
    {
      id: 'twin-health',
      name: 'Twin Health',
      logo: '/assets/clientsLogo/TwinHealthLogo-1-e1618989522815.png',
      alt: 'Twin Health company logo'
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