import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ApiPlayground } from './components/ApiPlayground';
import { SkillsSection } from './components/SkillsSection';
import { ProjectEstimator } from './components/ProjectEstimator';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#080C14] text-slate-100 flex flex-col selection:bg-emerald-500 selection:text-slate-950 font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <ExperienceTimeline />
        <ApiPlayground />
        <SkillsSection />
        <ProjectEstimator />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
