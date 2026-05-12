'use client';

import React, { useRef, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';

const SERVER_STATS = [
{ value: '#1', label: 'Kerala Anarchy Server', icon: '🏆' },
{ value: '65+', label: 'Active Players Daily', icon: '👥' },
{ value: '2022', label: 'Founded', icon: '📅' },
{ value: 'Live', label: 'Server Status', icon: '🟢' }];


const SERVER_FEATURES = [
{ name: 'Anarchy Gameplay', desc: 'No rules, no resets. Pure vanilla chaos.' },
{ name: 'Active Community', desc: "Kerala\'s most dedicated Minecraft players." },
{ name: 'Custom Anti-Cheat', desc: 'Fair play enforced through smart detection.' },
{ name: 'Regular Events', desc: 'Community wars, hunts, and seasonal events.' }];


export default function PrimeXShowcase() {
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
      { threshold: 0.1 }
    );
    cardRefs.current.forEach((c) => {if (c) observer.observe(c);});
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 px-6 overflow-hidden"
      aria-labelledby="primex-title">

      <div className="absolute inset-0 blob-violet opacity-10 pointer-events-none" style={{ top: '20%', left: '-20%', width: '60%', height: '60%' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section label */}
        <div
          ref={(el) => {cardRefs.current[0] = el;}}
          className="reveal-hidden mb-10">
          <span className="tag-pill">Featured Project</span>
        </div>

        {/* Main showcase card */}
        <div
          ref={(el) => {cardRefs.current[1] = el;}}
          className="reveal-hidden glass-card rounded-3xl overflow-hidden mb-8"
          style={{ transitionDelay: '100ms' }}>

          {/* Hero image with scrim */}
          <div className="relative h-64 md:h-80 w-full">
            <AppImage
              src="https://img.rocket.new/generatedImages/rocket_gen_img_1a70b102c-1768477294006.png"
              alt="Minecraft PvP and griefing action — intense combat scene with explosions and player battles in a dark server environment"
              fill
              className="object-cover"
              sizes="100vw"
              priority />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-card/70 to-transparent" />

            {/* Live badge */}
            <div className="absolute top-6 left-6 flex items-center gap-2 glass-card px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-green-400" style={{ boxShadow: '0 0 8px rgba(74,222,128,0.6)' }} />
              <span className="text-xs font-semibold text-green-400">Server Online</span>
            </div>

            {/* Overlay text */}
            <div className="absolute bottom-6 left-6 right-6">
              <h2
                id="primex-title"
                className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
                Prime X Anarchy
              </h2>
              <p className="text-stone-300 text-sm md:text-base max-w-lg">
                Kerala&apos;s #1 Minecraft Anarchy Server — no rules, no resets, pure survival. 65+ active players daily.
              </p>
            </div>
          </div>

          {/* Content below image */}
          <div className="p-6 md:p-8">
            {/* Stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {SERVER_STATS.map((stat) =>
              <div
                key={stat.label}
                className="text-center p-4 rounded-xl"
                style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.2)' }}>
                  <div className="text-xl mb-1">{stat.icon}</div>
                  <div
                  className="text-xl font-display font-bold text-primary mb-0.5"
                  style={{ textShadow: '0 0 12px rgba(124,58,237,0.5)' }}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              )}
            </div>

            {/* Two columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Description */}
              <div>
                <h3 className="text-lg font-bold text-foreground mb-3">About The Server</h3>
                <div className="space-y-3 text-muted-foreground text-sm leading-relaxed">
                  <p>
                    Prime X Anarchy is the definitive anarchy Minecraft experience for Kerala&apos;s gaming community.
                    Built with the philosophy that true survival means no hand-holding — no rules, no moderator
                    interference, and no map resets.
                  </p>
                  <p>
                    I contributed to its development infrastructure, server configuration, and early community
                    building. It has since grown to become the region&apos;s most active anarchy server with
                    always 65+ active players daily.
                  </p>
                </div>
                <a
                  href="https://www.primexanarchy.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-5 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:scale-105 transition-all duration-300 neon-glow-primary">
                  Visit Server Website
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-lg font-bold text-foreground mb-3">Server Highlights</h3>
                <div className="space-y-3">
                  {SERVER_FEATURES.map((feat) =>
                  <div
                    key={feat.name}
                    className="flex items-start gap-3 p-3 rounded-xl transition-all duration-300 hover:bg-primary/10"
                    style={{ border: '1px solid rgba(124,58,237,0.1)' }}>
                      <div
                      className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                      style={{ background: '#E879F9', boxShadow: '0 0 6px rgba(232,121,249,0.6)' }} />
                      <div>
                        <p className="text-sm font-semibold text-foreground">{feat.name}</p>
                        <p className="text-xs text-muted-foreground">{feat.desc}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* My Role card */}
        <div
          ref={(el) => {cardRefs.current[2] = el;}}
          className="reveal-hidden glass-card rounded-2xl p-6 md:p-8"
          style={{ transitionDelay: '200ms' }}>
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
              style={{ background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.3)' }}>
              🔧
            </div>
            <div>
              <h3 className="text-base font-bold text-foreground">My Role</h3>
              <p className="text-xs text-muted-foreground">Retired Developer · 2022–Feb 2026</p>
            </div>
            <span className="ml-auto tag-pill">Retired</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {['Management', 'Developer', 'Server Developer', 'Server Configuring', 'Anti-Cheat Setup', 'Community Building', 'Performance Tuning', 'Event Management'].map((role) =>
            <span key={role} className="text-xs px-3 py-1.5 rounded-lg bg-secondary/50 text-secondary-foreground border border-border">
                {role}
              </span>
            )}
          </div>
        </div>
      </div>
    </section>);

}