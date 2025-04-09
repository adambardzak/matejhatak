'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button 
        className="mobile-menu-button"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          {isOpen ? (
            <path d="M18 6L6 18M6 6l12 12" />
          ) : (
            <>
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </>
          )}
        </svg>
      </button>

      <nav className={`mobile-menu ${isOpen ? 'active' : ''}`}>
        <div className="flex flex-col space-y-4">
          <Link 
            href="/"
            className="text-xl font-medium hover:text-accent"
            onClick={() => setIsOpen(false)}
          >
            Domů
          </Link>
          <Link 
            href="/portfolio"
            className="text-xl font-medium hover:text-accent"
            onClick={() => setIsOpen(false)}
          >
            Portfolio
          </Link>
          <Link 
            href="/o-mne"
            className="text-xl font-medium hover:text-accent"
            onClick={() => setIsOpen(false)}
          >
            O mně
          </Link>
          <Link 
            href="/kontakt"
            className="text-xl font-medium hover:text-accent"
            onClick={() => setIsOpen(false)}
          >
            Kontakt
          </Link>
        </div>
      </nav>
    </>
  );
} 