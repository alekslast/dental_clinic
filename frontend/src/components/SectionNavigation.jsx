import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BurgerMenu from './BurgerMenu';

export default function SectionNavigation(props) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const path = props.path;
  let sectionDependentNavStyle;

  switch (path) {
    case '/stomatologie':
      sectionDependentNavStyle = 'dent-section-navigation';
      break;
    case '/farmacie':
      sectionDependentNavStyle = 'farm-section-navigation';
      break;
    case '/beauty':
      sectionDependentNavStyle = 'beauty-section-navigation';
      break;
    default:
      sectionDependentNavStyle = 'section-navigation';
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="nav-header">
        <nav className={`${sectionDependentNavStyle} desktop-menu`}>
          <Link to="/" onClick={closeMobileMenu}>
            PRINCIPALA
          </Link>
          <a href="#promoții" onClick={closeMobileMenu}>
            PROMOȚII
          </a>
          <a href="#services" onClick={closeMobileMenu}>
            SERVICII
          </a>
          <a href="#contacts" onClick={closeMobileMenu}>
            CONTACTE
          </a>
        </nav>

        {/* BurgerMenu для мобильных устройств */}
        <BurgerMenu
          items={[
            { label: 'PRINCIPALA', link: '/' },
            { label: 'PROMOȚII', link: '#promoții' },
            { label: 'SERVICII', link: '#services' },
            { label: 'CONTACTE', link: '#contacts' },
          ]}
          isOpen={isMobileMenuOpen}
          toggleMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />
      </header>
    </>
  );
}
