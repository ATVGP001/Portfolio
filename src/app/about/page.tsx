import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutHero from '@/app/about/components/AboutHero';
import SkillsGrid from '@/app/about/components/SkillsGrid';
import PersonalStory from '@/app/about/components/PersonalStory';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <AboutHero />
      <SkillsGrid />
      <PersonalStory />
      <Footer />
    </main>
  );
}