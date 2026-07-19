'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const navItems = [
  { href: '/#about', label: 'About' },
  { href: '/#procedures', label: 'Procedures' },
  { href: '/lymphedema-surgery-singapore', label: 'Lymphedema' },
  { href: '/#training', label: 'Training' },
  { href: '/#reconstruction', label: 'Reconstruction' },
  { href: '/#articles', label: 'Articles' }
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/" className="brand" aria-label="Dr Sun Plastic Surgery home" onClick={closeMenu}>
          <Image src="/images/brand/dr-sun-logo-nav.jpg" alt="Dr Sun Plastic Surgery logo" width={150} height={150} priority />
          <span>Dr Sun Plastic Surgery</span>
        </Link>
        <button
          className="nav-toggle"
          type="button"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
        <div className="nav-links desktop-nav">
          {navItems.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}
          <a href="/#contact" className="btn btn-primary">Enquire</a>
        </div>
      </div>
      <div id="mobile-navigation" className={`mobile-nav ${open ? 'open' : ''}`}>
        {navItems.map((item) => <a href={item.href} key={item.href} onClick={closeMenu}>{item.label}</a>)}
        <a href="/#contact" className="btn btn-primary" onClick={closeMenu}>Enquire</a>
      </div>
    </nav>
  );
}
