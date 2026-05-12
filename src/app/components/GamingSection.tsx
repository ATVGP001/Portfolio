'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

const SPECIALIZATIONS = [
  {
    title: 'Sword PvP',
    subtitle: 'Primary Specialization',
    description: 'My main mastery. Sharp combo timing, sprint-reset mechanics, W-tap, jitter clicking, and butterfly clicking. 5 years of grinding made this my strongest discipline.',
    iconType: 'sword',
    color: 'from-accent/20 to-primary/10',
    borderColor: 'rgba(232,121,249,0.4)',
    glowColor: 'rgba(232,121,249,0.3)',
    years: '5 yrs',
  },
  {
    title: 'Crystal PvP',
    subtitle: 'CPvP Advanced',
    description: 'Mastered end-crystal mechanics, anchor tech, and totem clutches. One of the most technical PvP modes in Minecraft.',
    iconType: 'crystal',
    color: 'from-primary/20 to-accent/10',
    borderColor: 'rgba(124,58,237,0.4)',
    glowColor: 'rgba(124,58,237,0.3)',
    years: '3 yrs',
  },
  {
    title: 'UHC',
    subtitle: 'Ultra Hardcore',
    description: 'No natural regeneration. Every heart matters. Fast webbing, fast combo, tactical mining, efficient crafting, and high-pressure duels.',
    iconType: 'uhc',
    color: 'from-secondary/40 to-primary/10',
    borderColor: 'rgba(124,58,237,0.3)',
    glowColor: 'rgba(124,58,237,0.2)',
    years: '2 yrs',
  },
  {
    title: 'Cart PvP',
    subtitle: 'Minecart Combat',
    description: 'Niche but lethal. Fast carting, mastered movement prediction and momentum exploitation in cart-based combat scenarios.',
    iconType: 'cart',
    color: 'from-accent/15 to-secondary/30',
    borderColor: 'rgba(232,121,249,0.3)',
    glowColor: 'rgba(232,121,249,0.2)',
    years: '2 yrs',
  },
];

const OTHER_GAMES = [
  {
    name: 'Forza Horizon 4',
    icon: '🏎️',
    desc: 'Open-world racing in a beautiful seasonal Britain.',
  },
  {
    name: 'Terraria',
    icon: '⛏️',
    desc: 'Fully completed the game. Achieved the legendary Zenith sword — the ultimate endgame weapon.',
  },
  {
    name: 'Roblox — Blox Fruits',
    icon: '🌊',
    desc: 'MAX level 2800. Unlocked Cyborg V4 transformation.',
  },
];

function SpecIcon({ type }: { type: string }) {
  if (type === 'crystal') {
    return (
      <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="16,2 26,10 22,28 10,28 6,10" fill="rgba(124,58,237,0.3)" stroke="#C4B5FD" strokeWidth="1.5" />
        <polygon points="16,6 23,12 20,25 12,25 9,12" fill="rgba(232,121,249,0.2)" stroke="#E879F9" strokeWidth="1" />
        <line x1="16" y1="2" x2="16" y2="6" stroke="#E879F9" strokeWidth="1" />
        <circle cx="16" cy="14" r="3" fill="#E879F9" opacity="0.8" />
        <line x1="16" y1="2" x2="9" y2="12" stroke="#C4B5FD" strokeWidth="0.5" opacity="0.5" />
        <line x1="16" y1="2" x2="23" y2="12" stroke="#C4B5FD" strokeWidth="0.5" opacity="0.5" />
      </svg>
    );
  }
  if (type === 'sword') return <span className="text-2xl">⚔️</span>;
  if (type === 'uhc') return <span className="text-2xl">🏆</span>;
  return <span className="text-2xl">🛒</span>;
}

export default function GamingSection() {
  const sectionRef = useRef<HTMLElement>(null);
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
      { threshold: 0.15 }
    );
    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-6 overflow-hidden"
      id="gaming"
      aria-labelledby="gaming-title">

      {/* Background blob */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] blob-violet pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div
          ref={(el) => { cardRefs.current[0] = el; }}
          className="reveal-hidden text-center mb-16"
          style={{ transitionDelay: '0ms' }}>
          <span className="tag-pill mb-4 inline-block">7 Years of Combat</span>
          <h2
            id="gaming-title"
            className="text-section-title font-display font-bold text-foreground mt-4">
            Gaming{' '}
            <span className="shimmer-text">Specializations</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Not just a casual player. Every mode listed below is something I&apos;ve put serious hours into mastering.
          </p>
        </div>

        {/* Specialization cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {SPECIALIZATIONS.map((spec, i) => (
            <div
              key={spec.title}
              ref={(el) => { cardRefs.current[i + 1] = el; }}
              className="reveal-hidden glass-card glass-card-hover rounded-2xl p-8 group relative overflow-hidden"
              style={{
                transitionDelay: `${i * 100}ms`,
                borderColor: spec.borderColor,
              }}>
              {/* Gradient bg */}
              <div className={`absolute inset-0 bg-gradient-to-br ${spec.color} opacity-50 pointer-events-none`} />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{ background: `rgba(124,58,237,0.15)`, border: `1px solid ${spec.borderColor}` }}>
                    <SpecIcon type={spec.iconType} />
                  </div>
                  <span
                    className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                    style={{
                      background: `rgba(124,58,237,0.15)`,
                      border: `1px solid ${spec.borderColor}`,
                      color: '#C4B5FD',
                    }}>
                    {spec.years}
                  </span>
                </div>

                <h3 className="text-xl font-display font-bold text-foreground mb-1">{spec.title}</h3>
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-3"
                  style={{ color: '#E879F9', textShadow: '0 0 10px rgba(232,121,249,0.4)' }}>
                  {spec.subtitle}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">{spec.description}</p>

                {/* Hover glow bar */}
                <div
                  className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
                  style={{ background: `linear-gradient(90deg, ${spec.glowColor}, transparent)` }} />
              </div>
            </div>
          ))}
        </div>

        {/* Experience bar */}
        <div
          ref={(el) => { cardRefs.current[5] = el; }}
          className="reveal-hidden glass-card rounded-2xl p-8 mb-8"
          style={{ transitionDelay: '500ms' }}>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h3 className="text-xl font-display font-bold text-foreground mb-2">Gaming Journey</h3>
              <p className="text-muted-foreground text-sm mb-6">Started with vanilla Minecraft. Found PvP. Never looked back.</p>
              <div className="space-y-4">
                {[
                  { label: 'Sword PvP', pct: 97 },
                  { label: 'Crystal PvP', pct: 88 },
                  { label: 'UHC', pct: 80 },
                  { label: 'Cart PvP', pct: 78 },
                ].map((skill) => (
                  <div key={skill.label}>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-foreground font-medium">{skill.label}</span>
                      <span className="text-muted-foreground">{skill.pct}%</span>
                    </div>
                    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000"
                        style={{
                          width: `${skill.pct}%`,
                          background: 'linear-gradient(90deg, #7C3AED, #E879F9)',
                          boxShadow: '0 0 8px rgba(232,121,249,0.4)',
                        }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full md:w-64 h-48 relative rounded-xl overflow-hidden flex-shrink-0">
              <AppImage
                src="https://images.unsplash.com/photo-1716389934387-e8efbddaffbc"
                alt="Dark gaming setup with purple neon lighting, dim atmospheric environment, moody shadows"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 256px" />
              <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-xs text-muted-foreground uppercase tracking-widest">Est.</p>
                <p className="text-2xl font-display font-bold text-primary" style={{ textShadow: '0 0 15px rgba(124,58,237,0.6)' }}>2017</p>
              </div>
            </div>
          </div>
        </div>

        {/* Other Games */}
        <div
          ref={(el) => { cardRefs.current[6] = el; }}
          className="reveal-hidden glass-card rounded-2xl p-8"
          style={{ transitionDelay: '600ms' }}>
          <h3 className="text-xl font-display font-bold text-foreground mb-2">Other Games I Play</h3>
          <p className="text-muted-foreground text-sm mb-6">Beyond Minecraft — I explore other worlds too.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {OTHER_GAMES.map((game) => (
              <div
                key={game.name}
                className="p-4 rounded-xl glass-card-hover"
                style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.2)' }}>
                <div className="text-2xl mb-2">{game.icon}</div>
                <p className="text-sm font-bold text-foreground mb-1">{game.name}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{game.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
