import React from 'react';
import { FolderGit2, CheckCircle2, TrendingUp, ShieldCheck, ArrowRight } from 'lucide-react';
import { projectsData } from '../data/projects';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projetos" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PROJETOS & CASES EM PRODUÇÃO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Resultados Comprovados em <span className="text-gradient">Sistemas Críticos</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Casos reais onde apliquei arquitetura de software, otimização de bancos relacionais 
            e microsserviços para sustentar operações de alto impacto.
          </p>
        </div>

        {/* Projects Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col justify-between p-7 rounded-2xl bg-[#0C111C] border border-slate-800/90 hover:border-emerald-500/40 transition-all duration-300 shadow-xl flex-1"
            >
              <div>
                {/* Header: Context + Metrics Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono text-emerald-400 font-semibold tracking-wide">
                    {project.context}
                  </span>
                  {project.metricsBadge && (
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 flex items-center gap-1 font-semibold">
                      <TrendingUp className="w-3 h-3" />
                      {project.metricsBadge}
                    </span>
                  )}
                </div>

                {/* Title & Role */}
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors leading-snug mb-2">
                  {project.title}
                </h3>
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-3 mb-4 border-b border-slate-800/80">
                  <span>{project.role}</span>
                  <span>{project.period}</span>
                </div>

                {/* Summary */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {project.summary}
                </p>

                {/* Key Results */}
                <div className="space-y-2.5 mb-6">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                    Entregas e Impacto:
                  </span>
                  {project.results.map((res, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies footer */}
              <div className="pt-4 border-t border-slate-800/80">
                <div className="flex flex-wrap gap-1.5">
                  {project.techs.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Transition callout to Solutions */}
        <div className="mt-14 p-6 rounded-2xl bg-[#090E17] border border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Quer aplicar esse padrão no seu negócio?</h4>
              <p className="text-xs text-slate-400">
                Conheça as soluções de software, APIs e lojas virtuais desenvolvidas por mim prontas para implantação.
              </p>
            </div>
          </div>

          <a
            href="#solucoes"
            className="shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-semibold font-mono transition-colors"
          >
            <span>Ver Soluções Disponíveis</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
