import React, { useState } from 'react';
import { Cpu, Languages, CheckCircle2 } from 'lucide-react';
import { skillsData } from '../data/skills';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');

  const categories = ['Todas', ...skillsData.map((c) => c.category)];

  const filteredCategories =
    selectedCategory === 'Todas'
      ? skillsData
      : skillsData.filter((c) => c.category === selectedCategory);

  return (
    <section id="skills" className="py-20 lg:py-28 relative bg-[#070A11]/70 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs">
            <Cpu className="w-3.5 h-3.5" />
            <span>ARSENAL TÉCNICO & STACK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Tecnologias, Ferramentas e <span className="text-gradient">Domínio Prático</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Mais de meia década construindo arquiteturas corporativas e garantindo estabilidade em produção.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  selectedCategory === cat
                    ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                    : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid by Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((group, gIdx) => (
            <div
              key={gIdx}
              className="p-6 rounded-2xl bg-[#0B0F19] border border-slate-800/90 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-bold text-white mb-4 pb-2 border-b border-slate-800/80 font-mono flex items-center justify-between">
                  <span>{group.category}</span>
                  <span className="text-xs text-emerald-400 font-normal">
                    {group.items.length} itens
                  </span>
                </h3>

                <div className="space-y-3">
                  {group.items.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/60 hover:border-emerald-500/30 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="text-xs sm:text-sm font-medium text-slate-200">
                          {skill.name}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                            skill.level === 'Especialista'
                              ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                              : skill.level === 'Avançado'
                              ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                              : 'bg-slate-800 text-slate-300'
                          }`}
                        >
                          {skill.level}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400">
                          {skill.experienceYears}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Languages Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0C111C] border border-slate-800/90 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
              <Languages className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Idiomas de Trabalho</h4>
              <p className="text-xs text-slate-400">Capacidade de atuar em times globais e documentação técnica internacional</p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <div className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
              <span className="text-slate-400">Português:</span> <strong className="text-emerald-400">Nativo</strong>
            </div>
            <div className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
              <span className="text-slate-400">Inglês:</span> <strong className="text-cyan-400">Intermediário (Leitura Técnica e Escrita)</strong>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
