'use client';

import React, { useEffect, useRef } from 'react';

const PVP_SKILLS = [
  {
    name: 'Sword PvP',
    icon: '⚔️',
    level: 'Master',
    description: 'My primary specialization. Sprint-reset, W-tap, jitter clicking, butterfly clicking — 5 years of mastery.',
    tags: ['Sprint Reset', 'W-Tap', 'CPS Mastery'],
    pct: 97,
  },
  {
    name: 'Crystal PvP (CPvP)',
    icon: '🔮',
    level: 'Advanced',
    description: 'End-crystal mechanics, anchor PvP, totem clutches, and coordinated base raids.',
    tags: ['End Crystals', 'Anchor Tech', 'Totem Clutch'],
    pct: 88,
  },
  {
    name: 'UHC',
    icon: '🏆',
    level: 'Advanced',
    description: 'Fast webbing, fast combo, efficient mining routes, golden apple crafting timing, and clutch final fights.',
    tags: ['Fast Webbing', 'Fast Combo', 'High Stakes'],
    pct: 80,
  },
  {
    name: 'Cart PvP',
    icon: '🛒',
    level: 'Advanced',
    description: 'Fast carting, momentum manipulation, cart stacking, and prediction-based attacks.',
    tags: ['Fast Carting', 'Movement', 'Prediction'],
    pct: 78,
  },
];

const DEV_SKILLS = [
  { name: 'Discord Development', icon: '💬', pct: 90 },
  { name: 'Minecraft Server Dev', icon: '🖥️', pct: 85 },
  { name: 'Server Administration', icon: '⚙️', pct: 80 },
  { name: 'Community Management', icon: '👥', pct: 88 },
];

export default function SkillsGrid() {
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
    <section className="relative py-16 px-6" aria-labelledby="skills-title">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          ref={(el) => { cardRefs.current[0] = el; }}
          className="reveal-hidden text-center mb-14">
          <span className="tag-pill mb-4 inline-block">Skill Set</span>
          <h2
            id="skills-title"
            className="text-section-title font-display font-bold text-foreground mt-4">
            What I{' '}
            <span className="shimmer-text">Specialize In</span>
          </h2>
        </div>

        {/* PvP Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {PVP_SKILLS.map((skill, i) => (
            <div
              key={skill.name}
              ref={(el) => { cardRefs.current[i + 1] = el; }}
              className="reveal-hidden glass-card glass-card-hover rounded-2xl p-6 group"
              style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.3)' }}>
                  {skill.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <h3 className="text-base font-bold text-foreground">{skill.name}</h3>
                    <span className="tag-pill text-xs">{skill.level}</span>
                  </div>
                  <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{skill.description}</p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {skill.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-0.5 rounded-md bg-secondary/50 text-secondary-foreground">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Progress */}
              <div className="h-1 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${skill.pct}%`,
                    background: 'linear-gradient(90deg, #7C3AED, #E879F9)',
                    boxShadow: '0 0 8px rgba(232,121,249,0.4)',
                  }} />
              </div>
              <div className="flex justify-between text-xs text-muted-foreground mt-1.5">
                <span>Proficiency</span>
                <span>{skill.pct}%</span>
              </div>
            </div>
          ))}
        </div>

        {/* Dev Skills */}
        <div
          ref={(el) => { cardRefs.current[5] = el; }}
          className="reveal-hidden glass-card rounded-2xl p-8"
          style={{ transitionDelay: '400ms' }}>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">💬</span>
            <div>
              <h3 className="text-lg font-bold text-foreground">Developer Background</h3>
              <p className="text-muted-foreground text-sm">Discord Developer — developed many Discord servers. Retired Feb 2026.</p>
            </div>
            <span className="ml-auto tag-pill">Retired</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {DEV_SKILLS.map((skill) => (
              <div key={skill.name}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-base">{skill.icon}</span>
                  <span className="text-sm font-medium text-foreground">{skill.name}</span>
                  <span className="ml-auto text-xs text-muted-foreground">{skill.pct}%</span>
                </div>
                <div className="h-1 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${skill.pct}%`,
                      background: 'linear-gradient(90deg, #5B21B6, #7C3AED)',
                      boxShadow: '0 0 6px rgba(124,58,237,0.3)',
                    }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}