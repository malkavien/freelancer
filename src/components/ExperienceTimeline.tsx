import React, { useState } from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle, Award } from 'lucide-react';
import { experienceData, educationData } from '../data/experience';

export const ExperienceTimeline: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');

  return (
    <section id="experiencia" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs">
            <Briefcase className="w-3.5 h-3.5" />
            <span>TRAJETÓRIA & FORMAÇÃO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Experiência Sólida e <span className="text-gradient">Rigor Acadêmico</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Combinando pesquisa científica em Ciência da Computação com anos de desenvolvimento 
            de sistemas de missão crítica em ambiente corporativo.
          </p>

          {/* Tab Switcher */}
          <div className="inline-flex p-1 rounded-xl bg-slate-900 border border-slate-800 mt-4">
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-2 px-5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'experience'
                  ? 'bg-emerald-500 text-slate-950 font-semibold shadow-md shadow-emerald-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Experiência Profissional</span>
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'education'
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Formação Acadêmica</span>
            </button>
          </div>
        </div>

        {/* Content Container */}
        {activeTab === 'experience' && (
          <div className="relative border-l-2 border-slate-800 ml-4 md:ml-32 pl-6 md:pl-10 space-y-12">
            {experienceData.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-emerald-400 group-hover:bg-emerald-400 transition-colors shadow-sm shadow-emerald-400/50" />

                {/* Company & Role Card */}
                <div className="p-6 sm:p-8 rounded-2xl bg-[#0C111C] border border-slate-800/90 group-hover:border-emerald-500/30 transition-all shadow-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                        {item.company}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                        {item.role}
                      </h3>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                      <span className="flex items-center gap-1 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">
                        <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                        {item.period}
                      </span>
                      <span className="flex items-center gap-1 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">
                        <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Highlights Bullet points */}
                  <div className="space-y-3 mb-6">
                    {item.highlights.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
                    {item.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-900/90 text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'education' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {educationData.map((edu, idx) => (
              <div
                key={idx}
                className="p-7 sm:p-8 rounded-2xl bg-[#0C111C] border border-slate-800/90 hover:border-cyan-500/40 transition-all shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    {edu.badge && (
                      <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                        {edu.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">
                    {edu.degree}
                  </h3>
                  <div className="text-sm font-semibold text-cyan-300 mb-2">
                    {edu.institution}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 mb-4">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{edu.period}</span>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {edu.details}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-mono text-slate-400">
                  <Award className="w-4 h-4 text-cyan-400" />
                  <span>Título Reconhecido pelo MEC / CAPES</span>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
