'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';

const TIMELINE = [
  {
    year: '2017',
    title: 'Started Playing Minecraft',
    description: 'My brother introduced me to Minecraft and we started playing Bedrock Edition survival together. That was the beginning of everything.',
    icon: '🎮',
  },
  {
    year: '2019',
    title: 'Moved to Java Edition',
    description: 'Switched to Java Edition and discovered the competitive PvP scene. Started learning Sword PvP and immediately fell in love with it.',
    icon: '⚔️',
  },
  {
    year: '2021',
    title: 'Mastered Sword PvP',
    description: 'After years of grinding, fully mastered Sword PvP — sprint-reset, W-tap, combo mechanics, and everything in between. This became my primary specialization.',
    icon: '🏆',
  },
  {
    year: '2022',
    title: 'Mastered Crystal PvP & Started Developing',
    description: 'Mastered CPvP mechanics — end crystals, anchor tech, totem clutches. Also started developing Minecraft servers and Discord servers.',
    icon: '💎',
  },
  {
    year: '2025',
    title: 'Deep in Development',
    description: 'Developed many Discord servers and Minecraft server projects. Contributed heavily to Prime X Anarchy — Kerala\'s #1 anarchy server.',
    icon: '🖥️',
  },
  {
    year: 'Feb 2026',
    title: 'Retired from Development',
    description: 'Officially retired from server and Discord development. Decided to focus on what matters most — gaming, entertainment, watching movies and K-dramas.',
    icon: '🌸',
  },
];

export default function PersonalStory() {
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
    <section className="relative py-16 pb-24 px-6 overflow-hidden" aria-labelledby="story-title">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] blob-magenta opacity-15 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div
          ref={(el) => { cardRefs.current[0] = el; }}
          className="reveal-hidden text-center mb-16">
          <span className="tag-pill mb-4 inline-block">The Journey</span>
          <h2
            id="story-title"
            className="text-section-title font-display font-bold text-foreground mt-4">
            My{' '}
            <span className="shimmer-text">Story</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px"
            style={{ background: 'linear-gradient(180deg, transparent, #7C3AED 10%, #E879F9 50%, #7C3AED 90%, transparent)' }} />

          <div className="space-y-10">
            {TIMELINE.map((item, i) => (
              <div
                key={item.year}
                ref={(el) => { cardRefs.current[i + 1] = el; }}
                className={`reveal-hidden relative flex gap-6 md:gap-0 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}>
                {/* Card */}
                <div className={`flex-1 pl-14 md:pl-0 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="glass-card rounded-xl p-5 glass-card-hover">
                    <div className={`flex items-center gap-3 mb-2 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <span className="text-xl">{item.icon}</span>
                      <span
                        className="text-xs font-bold uppercase tracking-widest"
                        style={{ color: '#E879F9', textShadow: '0 0 8px rgba(232,121,249,0.4)' }}>
                        {item.year}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>

                {/* Dot */}
                <div
                  className="absolute left-[18px] md:left-1/2 top-6 w-4 h-4 rounded-full -translate-x-1.5 md:-translate-x-2 flex-shrink-0 pulse-glow"
                  style={{ background: i % 2 === 0 ? '#7C3AED' : '#E879F9', boxShadow: `0 0 12px ${i % 2 === 0 ? 'rgba(124,58,237,0.6)' : 'rgba(232,121,249,0.6)'}` }} />

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          ref={(el) => { cardRefs.current[TIMELINE.length + 1] = el; }}
          className="reveal-hidden text-center mt-16"
          style={{ transitionDelay: `${TIMELINE.length * 80}ms` }}>
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:scale-105 transition-all duration-300 neon-glow-primary">
            See My Projects
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="M5 12h14m-7-7 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}