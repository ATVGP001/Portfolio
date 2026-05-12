import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectsHero from '@/app/projects/components/ProjectsHero';
import PrimeXShowcase from '@/app/projects/components/PrimeXShowcase';
import ProjectsBento from '@/app/projects/components/ProjectsBento';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <ProjectsHero />
      <PrimeXShowcase />
      <ProjectsBento />
      <Footer />
    </main>
  );
}