'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AppLogo from '@/components/ui/AppLogo';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-card/80 backdrop-blur-xl border-b border-border' :'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group" aria-label="FazyyPortfolio Home">
            <AppLogo
              size={36}
              iconName="SparklesIcon"
              className="group-hover:scale-110 transition-transform duration-300"
            />
            <span className="font-display text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
              Fazyy
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks?.map((link) => (
              <Link
                key={link?.href}
                href={link?.href}
                className={`text-sm font-medium transition-all duration-300 relative group ${
                  pathname === link?.href
                    ? 'text-accent' :'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link?.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px transition-all duration-300 bg-accent ${
                    pathname === link?.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                  style={{ boxShadow: '0 0 8px rgba(232, 121, 249, 0.6)' }}
                />
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://www.instagram.com/yourx.fazy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-primary border border-primary/30 bg-primary/10 hover:bg-primary/20 hover:border-primary/60 transition-all duration-300 hover:scale-105"
              style={{ boxShadow: '0 0 15px rgba(124, 58, 237, 0.2)' }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              @yourx.fazy
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 group"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </header>
      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ background: 'rgba(8, 8, 16, 0.95)', backdropFilter: 'blur(20px)' }}
        onClick={() => setMenuOpen(false)}
      >
        <div
          className="flex flex-col items-center justify-center h-full gap-8"
          onClick={(e) => e?.stopPropagation()}
        >
          {navLinks?.map((link, i) => (
            <Link
              key={link?.href}
              href={link?.href}
              onClick={() => setMenuOpen(false)}
              className={`text-3xl font-display font-bold transition-all duration-300 ${
                pathname === link?.href
                  ? 'text-accent text-neon-accent' :'text-foreground hover:text-primary'
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {link?.label}
            </Link>
          ))}
          <a
            href="https://www.instagram.com/yourx.fazy"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-4 flex items-center gap-2 px-6 py-3 rounded-full text-base font-semibold text-primary border border-primary/40 bg-primary/10"
          >
            @yourx.fazy
          </a>
        </div>
      </div>
    </>
  );
}