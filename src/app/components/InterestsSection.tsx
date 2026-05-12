'use client';

import React, { useRef, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';

const INTERESTS = [
{
  category: 'K-Drama',
  title: 'Bloodhounds',
  description: 'Two young men from different backgrounds find themselves entangled in a dangerous loan shark operation. Intense action, brutal fights, and a gripping story.',
  tag: '★ Favorite K-Drama',
  year: '2023',
  platform: 'Netflix',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b045e1f5-1768555824728.png",
  imageAlt: 'Bloodhounds K-drama cinematic poster with dark atmospheric lighting and intense action',
  accent: '#E879F9',
  colSpan: 'md:col-span-2'
},
{
  category: 'Movie',
  title: 'The Roundup',
  description: 'Don Lee (Ma Dong-seok) returns as Detective Ma Seok-do in this brutal action crime thriller. Unstoppable fists, relentless pursuit, and pure raw power.',
  tag: '🔥 Must Watch',
  year: '2022',
  platform: 'Cinema',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_17a01699b-1778563170395.png",
  imageAlt: 'The Roundup movie — Don Lee action crime thriller cinematic dark poster',
  accent: '#7C3AED',
  colSpan: 'md:col-span-1'
},
{
  category: 'Anime',
  title: 'Naruto',
  description: 'My all-time favorite anime. The journey of Naruto Uzumaki from an outcast to a legend. The bonds, the battles, and the philosophy — it hits different every rewatch.',
  tag: '⭐ All-Time Fav',
  year: 'Classic',
  platform: 'Crunchyroll',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d7a8ae50-1772988145736.png",
  imageAlt: 'Naruto anime — iconic ninja world with dramatic atmospheric lighting and orange-themed visuals',
  accent: '#E879F9',
  colSpan: 'md:col-span-3'
}];


const ANIME_WATCHLIST = [
{ title: 'Naruto', emoji: '🍥', status: 'All-Time Fav' },
{ title: 'Solo Leveling', emoji: '⚡', status: 'Watching' },
{ title: 'Demon Slayer', emoji: '🗡️', status: 'Watched' },
{ title: 'Jujutsu Kaisen', emoji: '🔮', status: 'Watching' }];


export default function InterestsSection() {
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
    <section className="relative py-20 px-6 overflow-hidden" id="interests" aria-labelledby="interests-title">
      {/* Blob */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] blob-magenta opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div
          ref={(el) => {cardRefs.current[0] = el;}}
          className="reveal-hidden text-center mb-16">
          <span className="tag-pill mb-4 inline-block">Off The Server</span>
          <h2
            id="interests-title"
            className="text-section-title font-display font-bold text-foreground mt-4">
            What I&apos;m{' '}
            <span className="shimmer-text">Into</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            When I&apos;m not grinding PvP, I&apos;m deep in K-dramas, anime, and films.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {INTERESTS.map((item, i) =>
          <div
            key={item.title}
            ref={(el) => {cardRefs.current[i + 1] = el;}}
            className={`reveal-hidden group relative overflow-hidden rounded-3xl cursor-pointer ${item.colSpan}`}
            style={{
              height: i === 2 ? '340px' : i === 0 ? '420px' : '320px',
              transitionDelay: `${i * 120}ms`
            }}>
              {/* Image */}
              <AppImage
              src={item.image}
              alt={item.imageAlt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw" />

              {/* Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

              {/* Top badge */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span
                className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                style={{ background: `${item.accent}25`, border: `1px solid ${item.accent}50`, color: item.accent }}>
                  {item.category}
                </span>
                {item.tag &&
              <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/10 text-white border border-white/20">
                    {item.tag}
                  </span>
              }
              </div>

              {/* Content — bottom anchored */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-2">{item.title}</h3>
                <p className="text-stone-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-lg">
                  {item.description}
                </p>
                <div className="flex items-center gap-3 mt-3">
                  <span className="text-xs text-stone-400">{item.platform}</span>
                  <span className="text-stone-600">·</span>
                  <span className="text-xs text-stone-400">{item.year}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Anime Watchlist */}
        <div
          ref={(el) => {cardRefs.current[INTERESTS.length + 1] = el;}}
          className="reveal-hidden glass-card rounded-2xl p-8"
          style={{ transitionDelay: `${INTERESTS.length * 120}ms` }}>
          <h3 className="text-xl font-display font-bold text-foreground mb-2">Anime Watchlist</h3>
          <p className="text-muted-foreground text-sm mb-6">Currently watching and all-time favorites.</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {ANIME_WATCHLIST.map((anime) =>
            <div
              key={anime.title}
              className="p-4 rounded-xl text-center"
              style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.2)' }}>
                <div className="text-3xl mb-2">{anime.emoji}</div>
                <p className="text-sm font-bold text-foreground mb-1">{anime.title}</p>
                <span
                className="text-xs px-2 py-0.5 rounded-full"
                style={{ background: 'rgba(232,121,249,0.15)', color: '#E879F9', border: '1px solid rgba(232,121,249,0.3)' }}>
                  {anime.status}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}