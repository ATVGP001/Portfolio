'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';

/* BENTO AUDIT
  Array has 4 cards: [GamingProfile, AnimeList, KDramaCard, ContactCard]
  Grid: md:grid-cols-3
  Row 1: [col-1+2: GamingProfile cs-2] [col-3: AnimeList cs-1]
  Row 2: [col-1: KDramaCard cs-1]      [col-2+3: ContactCard cs-2]
  Placed 4/4 ✓
*/

const BENTO_CARDS = [
  {
    id: 'gaming',
    colSpan: 'md:col-span-2',
    title: 'Gaming Profile',
    subtitle: 'Competitive Minecraft',
    description: '7+ years of PvP across Crystal, Sword, UHC, and Cart modes. Still active and still improving.',
    icon: '🎮',
    tag: 'Active',
    accent: '#7C3AED',
    link: '/about',
    linkLabel: 'See Skills',
  },
  {
    id: 'anime',
    colSpan: 'md:col-span-1',
    title: 'Anime Watchlist',
    subtitle: 'Currently: Boruto',
    description: 'Sasuke Uchiha is the peak character design. The Sharingan aesthetic lives rent-free.',
    icon: '⛩️',
    tag: 'Ongoing',
    accent: '#E879F9',
    link: '/',
    linkLabel: 'About Me',
  },
  {
    id: 'kdrama',
    colSpan: 'md:col-span-1',
    title: 'K-Drama Pick',
    subtitle: 'Bloodhounds (2023)',
    description: 'Two fighters vs a loan shark empire. Best action choreography in K-drama history.',
    icon: '🎬',
    tag: 'Recommended',
    accent: '#E879F9',
    link: '/',
    linkLabel: 'Interests',
  },
  {
    id: 'contact',
    colSpan: 'md:col-span-2',
    title: 'Let\'s Connect',
    subtitle: '@yourx.fazy on Instagram',
    description: 'For PvP collabs, server talks, or just vibing about anime — my DMs are open.',
    icon: '📱',
    tag: 'Open',
    accent: '#7C3AED',
    link: 'https://www.instagram.com/yourx.fazy',
    linkLabel: 'Follow',
    external: true,
  },
];

export default function ProjectsBento() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('reveal-hidden');
            entry.target.classList.add('reveal-visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    cardRefs.current.forEach((c) => { if (c) observer.observe(c); });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-16 pb-24 px-6 overflow-hidden" aria-labelledby="more-title">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] blob-magenta opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div
          ref={(el) => { cardRefs.current[0] = el; }}
          className="reveal-hidden mb-12"
        >
          <span className="tag-pill mb-4 inline-block">More About Me</span>
          <h2
            id="more-title"
            className="text-section-title font-display font-bold text-foreground mt-4"
          >
            Beyond{' '}
            <span className="shimmer-text">Development</span>
          </h2>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {BENTO_CARDS.map((card, i) => (
            <div
              key={card.id}
              ref={(el) => { cardRefs.current[i + 1] = el; }}
              className={`reveal-hidden glass-card glass-card-hover rounded-2xl p-6 flex flex-col ${card.colSpan} group`}
              style={{
                transitionDelay: `${i * 100}ms`,
                borderColor: `${card.accent}30`,
                minHeight: '200px',
              }}
            >
              {/* Top */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                  style={{ background: `${card.accent}15`, border: `1px solid ${card.accent}30` }}
                >
                  {card.icon}
                </div>
                <span
                  className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                  style={{ background: `${card.accent}15`, border: `1px solid ${card.accent}30`, color: card.accent }}
                >
                  {card.tag}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg font-bold text-foreground mb-1">{card.title}</h3>
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-2"
                  style={{ color: card.accent }}
                >
                  {card.subtitle}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">{card.description}</p>
              </div>

              {/* Link */}
              <div className="mt-5">
                {card.external ? (
                  <a
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-3"
                    style={{ color: card.accent }}
                    aria-label={`${card.linkLabel} — opens in new tab`}
                  >
                    {card.linkLabel}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                ) : (
                  <Link
                    href={card.link}
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-3"
                    style={{ color: card.accent }}
                  >
                    {card.linkLabel}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M5 12h14m-7-7 7 7-7 7" />
                    </svg>
                  </Link>
                )}
              </div>

              {/* Hover bottom bar */}
              <div
                className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full rounded-b-2xl transition-all duration-500"
                style={{ background: `linear-gradient(90deg, ${card.accent}, transparent)` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}