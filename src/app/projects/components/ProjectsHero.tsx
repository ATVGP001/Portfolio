'use client';

import React, { useEffect, useRef } from 'react';

export default function ProjectsHero() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contentRef?.current;
    if (!el) return;
    const t = setTimeout(() => el?.classList?.add('fade-in-up'), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative pt-32 pb-16 px-6 overflow-hidden hero-gradient" aria-label="Projects hero">
      <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] blob-violet opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div ref={contentRef} style={{ opacity: 0 }} className="text-center">
          <span className="tag-pill mb-6 inline-block">Portfolio</span>
          <h1 className="text-section-title font-display font-bold text-foreground mb-6">
            Things I&apos;ve{' '}
            <span className="shimmer-text">Built</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A retired developer&apos;s track record. Not many projects — but the ones that exist, they matter.
          </p>

          {/* Status badge */}
          <div className="inline-flex items-center gap-2 mt-8 glass-card px-5 py-3 rounded-full">
            <span className="w-2 h-2 rounded-full bg-muted-foreground" />
            <span className="text-sm text-muted-foreground">Status: Retired from active development</span>
          </div>
        </div>
      </div>
    </section>
  );
}