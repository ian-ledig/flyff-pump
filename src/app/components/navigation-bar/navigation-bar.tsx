'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  IoHome,
  IoInformationCircle,
  IoBookmark,
  IoMailOpen,
} from 'react-icons/io5';
import ThemeSwitch from '../theme-switch/theme-switch';
import './navigation-bar.css';

const NavigationBarComponent: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    event.preventDefault();
    const targetSection = document.getElementById(sectionId);

    if (targetSection) {
      const offset = 80;
      const sectionPosition = targetSection.offsetTop - offset;

      window.scrollTo({
        top: sectionPosition,
        behavior: 'smooth',
      });
    }

    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll<HTMLElement>(
        '#home, #collaboration, #map, #contact'
      );
      let currentSection = 'home';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight / 3;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className="navigation-bar">
        <div className="navigation-bar-links">
          <a href="">
            <Image
              className="logo"
              src="/logofull.webp"
              alt="Ian LEDIG logo"
              width={100}
              height={0}
              priority
            />
          </a>
          <div className="navigation-separator">|</div>
          <a
            onClick={(e) => handleLinkClick(e, 'home')}
            className={`navigation-item font-heavy ${activeSection === 'home' ? 'active' : ''}`}
            href=""
          >
            Home
          </a>
          <div className="navigation-separator">|</div>
          <a
            onClick={(e) => handleLinkClick(e, 'collaboration')}
            className={`navigation-item font-heavy ${activeSection === 'collaboration' ? 'active' : ''}`}
            href=""
          >
            About
          </a>
          <div className="navigation-separator">|</div>
          <a
            onClick={(e) => handleLinkClick(e, 'map')}
            className={`navigation-item font-heavy ${activeSection === 'map' ? 'active' : ''}`}
            href=""
          >
            Maps
          </a>
          <div className="navigation-separator">|</div>
        </div>
        <div className="navigation-bar-links">
          <ThemeSwitch />
          <a
            onClick={(e) => handleLinkClick(e, 'contact')}
            className="navigation-item button-1 font-heavy"
            href=""
          >
            Discord
          </a>
        </div>
        <div className="navigation-bar-small">
          <a
            onClick={(e) => handleLinkClick(e, 'home')}
            className={`navigation-item font-heavy ${activeSection === 'home' ? 'active' : ''}`}
            href=""
          >
            <IoHome size={20} className="mt-2" />
            <div className="text-xs">Home</div>
          </a>
          <a
            onClick={(e) => handleLinkClick(e, 'collaboration')}
            className={`navigation-item font-heavy ${activeSection === 'collaboration' ? 'active' : ''}`}
            href=""
          >
            <IoInformationCircle size={20} className="mt-2" />
            <div className="text-xs">About</div>
          </a>
          <a
            onClick={(e) => handleLinkClick(e, 'map')}
            className={`navigation-item font-heavy ${activeSection === 'map' ? 'active' : ''}`}
            href=""
          >
            <IoBookmark size={20} className="mt-2" />
            <div className="text-xs">Maps</div>
          </a>
          <a
            onClick={(e) => handleLinkClick(e, 'contact')}
            className={`navigation-item font-heavy ${activeSection === 'contact' ? 'active' : ''}`}
            href=""
          >
            <IoMailOpen size={20} className="mt-2" />
            <div className="text-xs">Contact</div>
          </a>
          <ThemeSwitch />
        </div>
      </nav>
    </>
  );
};

export default NavigationBarComponent;
