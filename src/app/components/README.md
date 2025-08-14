# Components Organization

This directory contains all React components organized by their purpose and usage.

## Structure

```
components/
├── landing/          # Landing page specific components
│   ├── HeroSection/  # Hero section component
│   ├── Slider/       # Slider/carousel component
│   ├── clients/      # Clients/partners section
│   ├── products/     # Products showcase section
│   ├── services/     # Services section
│   ├── servicesB/    # Additional services section
│   └── index.js      # Landing components exports
├── shared/           # Shared/common components
│   ├── Navbar/       # Navigation component
│   ├── Footer/       # Footer component
│   ├── ScrollToTop/  # Scroll to top button
│   └── index.js      # Shared components exports
└── README.md         # This file
```

## Usage

### Landing Page Components
```javascript
import { HeroSection, Slider, Clients, Products, Services, ServicesB } from './components/landing';
```

### Shared Components
```javascript
import { Navbar, Footer, ScrollToTop } from './components/shared';
```

## Benefits

- **Better Organization**: Components are grouped by their purpose
- **Cleaner Imports**: Use index files for cleaner import statements
- **Scalability**: Easy to add new components to appropriate folders
- **Maintainability**: Clear separation between page-specific and shared components 