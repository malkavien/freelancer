import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { ExperienceTimeline } from '../components/ExperienceTimeline';
import { ProjectsSection } from '../components/ProjectsSection';
import { SolutionsSection } from '../components/SolutionsSection';
import { Services } from '../components/Services';
import { SkillsSection } from '../components/SkillsSection';
import { ApiPlayground } from '../components/ApiPlayground';
import { ProjectEstimator } from '../components/ProjectEstimator';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#080C14] text-slate-100 flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ExperienceTimeline />
        <ProjectsSection />
        <SolutionsSection />
        <Services />
        <SkillsSection />
        <ApiPlayground />
        <ProjectEstimator />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};
