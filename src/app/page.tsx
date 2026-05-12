import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import GamingSection from '@/app/components/GamingSection';
import InterestsSection from '@/app/components/InterestsSection';
import ContactSection from '@/app/components/ContactSection';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <HeroSection />
      <GamingSection />
      <InterestsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}