'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

export default function AboutHero() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contentRef?.current;
    if (!el) return;
    const timer = setTimeout(() => {
      el?.classList?.add('fade-in-up');
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative pt-28 pb-16 px-6 overflow-hidden" aria-label="About hero">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] blob-violet opacity-25 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div ref={contentRef} style={{ opacity: 0 }}>
            <span className="tag-pill mb-6 inline-block">The Person Behind The Screen</span>
            <h1 className="text-section-title font-display font-bold text-foreground mb-6">
              About{' '}
              <span className="shimmer-text">fazyyy</span>
            </h1>
            <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
              <p>
                I&apos;m fazyyy — a competitive Minecraft PvP player with over{' '}
                <span className="text-foreground font-semibold">7 years of experience</span>. My brother
                introduced me to Minecraft and we started playing Bedrock survival together. Later I moved
                to Java and fell in love with PvP — especially Sword PvP, which I mastered and made my
                primary specialization.
              </p>
              <p>
                Beyond gaming, I spent time as a Discord developer, building and managing many Discord
                servers and Minecraft server projects. My most notable work was contributing to{' '}
                <a
                  href="https://www.primexanarchy.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-primary transition-colors duration-300 font-semibold"
                  style={{ textShadow: '0 0 10px rgba(232,121,249,0.3)' }}>
                  Prime X Anarchy
                </a>
                {' '}— Kerala&apos;s #1 anarchy server. I retired from developing in February 2026.
              </p>
              <p>
                Off-screen, I&apos;m drawn to anime (Naruto is the GOAT, no debate), K-dramas like Bloodhounds,
                and movies like The Roundup. Aesthetic matters — in games, in code, and in life.
              </p>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              {[
                { value: '7+', label: 'Years Gaming' },
                { value: '2017', label: 'Started' },
                { value: 'KL', label: 'Based In Kerala' },
              ]?.map((stat) => (
                <div
                  key={stat?.label}
                  className="glass-card rounded-xl p-4 text-center neon-border-anim">
                  <div
                    className="text-2xl font-display font-bold text-primary mb-1"
                    style={{ textShadow: '0 0 15px rgba(124,58,237,0.5)' }}>
                    {stat?.value}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest">{stat?.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Glow ring */}
              <div
                className="absolute inset-0 rounded-full pulse-glow pointer-events-none"
                style={{ transform: 'scale(1.15)' }} />

              {/* Image */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/40">
                <AppImage
                  src="/assets/images/e27fe9bf2bfeff80e8bb42ddc278ad62_0-1778562071407.png"
                  alt="fazyyy profile picture"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 288px, 384px"
                  priority />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>

              {/* Sharingan overlay — decorative */}
              <div
                className="absolute -top-8 -right-8 w-24 h-24 opacity-30 pointer-events-none float-anim"
                aria-hidden="true">
                <svg viewBox="0 0 200 200" className="w-full h-full sharingan-spin">
                  <circle cx="100" cy="100" r="90" fill="none" stroke="#7C3AED" strokeWidth="3" />
                  <circle cx="100" cy="100" r="18" fill="#7C3AED" opacity="0.8" />
                  {[0, 120, 240]?.map((angle, i) => {
                    const rad = angle * Math.PI / 180;
                    const cx = 100 + 38 * Math.cos(rad);
                    const cy = 100 + 38 * Math.sin(rad);
                    return (
                      <ellipse
                        key={i}
                        cx={cx}
                        cy={cy}
                        rx="11"
                        ry="18"
                        fill="#E879F9"
                        opacity="0.8"
                        transform={`rotate(${angle + 90}, ${cx}, ${cy})`} />
                    );
                  })}
                </svg>
              </div>

              {/* Floating badge */}
              <div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass-card px-5 py-2.5 rounded-full text-sm font-semibold text-foreground whitespace-nowrap"
                style={{ border: '1px solid rgba(232,121,249,0.3)', boxShadow: '0 0 20px rgba(232,121,249,0.15)' }}>
                🎮 Active Gamer
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}