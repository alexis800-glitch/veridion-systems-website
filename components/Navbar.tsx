'use client';

import { useState, useEffect } from 'react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <div className="nav-inner">
        <a href="#" className="nav-logo" aria-label="Veridion Systems Ltd Home">
          <div className="logo-badge">
            <svg width="36" height="36" viewBox="0 0 48 48" fill="none" aria-hidden="true">
              <rect width="48" height="48" rx="10" fill="#071923"/>
              <path d="M 6 13 H 15 L 24 35" stroke="#2BB9C8" strokeWidth="5" strokeLinecap="square" strokeLinejoin="bevel" fill="none"/>
              <path d="M 24 35 L 33 13 H 42" stroke="#2BB9C8" strokeWidth="5" strokeLinecap="square" strokeLinejoin="bevel" fill="none"/>
              <rect x="21.5" y="32.5" width="5" height="5" fill="#D6A93B"/>
            </svg>
          </div>
          <div className="logo-type">
            <span className="logo-brand">Veridion <em>Systems</em></span>
            <span className="logo-sub">Ltd</span>
          </div>
        </a>

        <ul className="nav-links" role="list">
          <li><a href="#services">Services</a></li>
          <li><a href="#industries">Industries</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#case-studies">Case Studies</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <a href="#contact" className="btn btn-primary nav-cta">Schedule Consultation</a>

        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          id="hamburger"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
        <ul>
          <li><a href="#services" onClick={closeMenu}>Services</a></li>
          <li><a href="#industries" onClick={closeMenu}>Industries</a></li>
          <li><a href="#portfolio" onClick={closeMenu}>Portfolio</a></li>
          <li><a href="#case-studies" onClick={closeMenu}>Case Studies</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
        <a href="#contact" className="btn btn-primary" onClick={closeMenu}>Schedule Consultation</a>
      </div>
    </nav>
  );
}
