'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const TYPING_PHRASES = [
  "Hey, I'm fazyyy",
  "Sword PvP Master",
  "Retired Developer",
  "Anime Enthusiast",
];

export default function HeroSection() {
  const [displayText, setDisplayText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const currentPhrase = TYPING_PHRASES[phraseIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (displayText.length < currentPhrase.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2200);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 40);
      } else {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % TYPING_PHRASES.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, phraseIndex]);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const mx = (e.clientX - rect.left) / rect.width - 0.5;
      const my = (e.clientY - rect.top) / rect.height - 0.5;

      const blob1 = hero.querySelector<HTMLElement>('.blob-1');
      const blob2 = hero.querySelector<HTMLElement>('.blob-2');
      if (blob1) blob1.style.transform = `translate(${mx * 40}px, ${my * 30}px)`;
      if (blob2) blob2.style.transform = `translate(${mx * -30}px, ${my * -20}px)`;
    };

    hero.addEventListener('mousemove', handleMouseMove);
    return () => hero.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient noise-overlay"
      aria-label="Hero section">

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-40 pointer-events-none" />

      {/* Atmospheric blobs */}
      <div
        className="blob-1 absolute w-[600px] h-[600px] blob-violet pointer-events-none"
        style={{ top: '10%', left: '-10%', transition: 'transform 0.3s ease-out' }} />
      <div
        className="blob-2 absolute w-[500px] h-[500px] blob-magenta pointer-events-none"
        style={{ bottom: '10%', right: '-5%', transition: 'transform 0.3s ease-out' }} />

      {/* Cinematic hero image with scrim */}
      <div className="absolute inset-0">
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_1c19815f9-1772297947676.png"
          alt="Dark atmospheric gaming setup with deep shadows, neon violet lighting, moody low-key environment with dramatic contrast"
          fill
          priority
          className="object-cover opacity-20"
          sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/40" />
      </div>

      {/* Scan lines */}
      <div className="absolute inset-0 scan-line pointer-events-none opacity-30" />

      {/* Sharingan decoration */}
      <div
        className="absolute top-20 right-8 md:right-20 w-32 h-32 md:w-48 md:h-48 opacity-10 pointer-events-none float-anim"
        aria-hidden="true">
        <svg viewBox="0 0 200 200" className="w-full h-full sharingan-spin">
          <circle cx="100" cy="100" r="95" fill="none" stroke="#7C3AED" strokeWidth="2" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="#E879F9" strokeWidth="1.5" />
          <circle cx="100" cy="100" r="20" fill="#7C3AED" opacity="0.6" />
          {[0, 120, 240].map((angle, i) => {
            const rad = angle * Math.PI / 180;
            const cx = 100 + 40 * Math.cos(rad);
            const cy = 100 + 40 * Math.sin(rad);
            return (
              <ellipse
                key={i}
                cx={cx}
                cy={cy}
                rx="12"
                ry="20"
                fill="#E879F9"
                opacity="0.7"
                transform={`rotate(${angle + 90}, ${cx}, ${cy})`} />
            );
          })}
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-28 pb-20 flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Profile Picture */}
        <div className="flex-shrink-0 fade-in-up stagger-1">
          <div className="relative w-36 h-36 md:w-48 md:h-48">
            <div
              className="absolute inset-0 rounded-full pulse-glow pointer-events-none"
              style={{ transform: 'scale(1.12)' }} />
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/50"
              style={{ boxShadow: '0 0 30px rgba(124,58,237,0.4)' }}>
              <AppImage
                src="/assets/images/e27fe9bf2bfeff80e8bb42ddc278ad62_0-1778562071407.png"
                alt="fazyyy profile picture"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 144px, 192px" />
            </div>
          </div>
        </div>

        {/* Text content */}
        <div className="text-center md:text-left flex-1">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 tag-pill mb-6 fade-in-up stagger-1">
            <span className="w-2 h-2 rounded-full bg-accent pulse-glow" />
            Gamer · Developer · Anime Fan
          </div>

          {/* Typing headline */}
          <h1 className="text-hero-xl font-display font-bold text-foreground mb-6 fade-in-up stagger-2">
            <span className="shimmer-text">{displayText}</span>
            <span className="typing-cursor" aria-hidden="true" />
          </h1>

          {/* Sub text */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed fade-in-up stagger-3">
            Sword PvP specialist with 5+ years of mastery. Retired developer behind{' '}
            <a
              href="https://www.primexanarchy.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-primary transition-colors duration-300 font-semibold"
              style={{ textShadow: '0 0 10px rgba(232,121,249,0.4)' }}>
              Kerala&apos;s #1 Anarchy Server
            </a>
            . Now living the gamer life and watching too many K-dramas.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start fade-in-up stagger-4">
            <Link
              href="/about"
              className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:scale-105 transition-all duration-300 neon-glow-primary">
              About Me
            </Link>
            <Link
              href="/projects"
              className="px-8 py-4 rounded-full border border-accent/40 text-accent font-semibold text-sm hover:bg-accent/10 hover:border-accent/70 transition-all duration-300 hover:scale-105"
              style={{ boxShadow: '0 0 15px rgba(232,121,249,0.1)' }}>
              View Projects
            </Link>
          </div>

          {/* Stat row */}
          <div className="mt-16 flex flex-wrap gap-8 justify-center md:justify-start fade-in-up stagger-5">
            {[
              { value: '7+', label: 'Years Gaming' },
              { value: '#1', label: 'Kerala Anarchy' },
              { value: '65+', label: 'Daily Players' },
            ].map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <div
                  className="text-3xl font-display font-bold text-primary"
                  style={{ textShadow: '0 0 20px rgba(124,58,237,0.5)' }}>
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
}
