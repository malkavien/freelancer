import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Package, 
  ArrowRight, 
  Sparkles, 
  Check, 
  MessageSquare,
  Server,
  ShoppingCart,
  Globe,
  Database
} from 'lucide-react';
import { solutionsData } from '../data/solutions';

const iconByCategory: Record<string, React.ReactNode> = {
  'APIs & Backend': <Server className="w-5 h-5 text-emerald-400" />,
  'E-commerce & WordPress': <ShoppingCart className="w-5 h-5 text-cyan-400" />,
  'Sistemas & Módulos': <Globe className="w-5 h-5 text-purple-400" />,
  'Ferramentas': <Database className="w-5 h-5 text-amber-400" />
};

export const SolutionsSection: React.FC = () => {
  // Display top 4 featured solutions on the home page
  const featuredSolutions = solutionsData.slice(0, 4);

  return (
    <section id="solucoes" className="py-20 lg:py-28 relative bg-[#070A12]/80 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs">
            <Package className="w-3.5 h-3.5" />
            <span>SOLUÇÕES & PRODUTOS DE SOFTWARE (PDI)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Soluções Prontas para <span className="text-gradient">Aquisição e Implantação</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Produtos, APIs e sistemas desenvolvidos com rigor de engenharia de software para resolver dores reais de empresas. 
            Adquira o código-fonte, contrate o setup assistido ou solicite customizações.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {featuredSolutions.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col justify-between p-7 rounded-2xl bg-[#0B0F19] border border-slate-800/90 hover:border-cyan-500/40 hover:bg-[#0d1322] transition-all duration-300 shadow-xl"
            >
              <div>
                {/* Top Badges */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-300">
                    {iconByCategory[item.category] || <Package className="w-4 h-4 text-emerald-400" />}
                    <span>{item.category}</span>
                  </span>

                  <div className="flex items-center gap-2">
                    {item.pdiBadge && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-cyan-300 border border-slate-700">
                        {item.pdiBadge}
                      </span>
                    )}
                    <span
                      className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded ${
                        item.status === 'Pré-venda PDI'
                          ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
                          : 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                  <Link to={`/solucoes/${item.slug}`} className="hover:underline">
                    {item.title}
                  </Link>
                </h3>
                <p className="text-xs font-mono text-emerald-400 mb-3">
                  {item.tagline}
                </p>

                {/* Summary */}
                <p className="text-slate-300 text-sm leading-relaxed mb-5">
                  {item.summary}
                </p>

                {/* Checklist Preview */}
                <div className="space-y-1.5 mb-6">
                  {item.features.slice(0, 3).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom: Price & Actions */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block">Investimento a partir de:</span>
                  <span className="text-xl font-bold font-mono text-white text-gradient">
                    {item.priceFrom}
                  </span>
                </div>

                <div className="flex items-center gap-2.5 w-full sm:w-auto">
                  <Link
                    to={`/solucoes/${item.slug}`}
                    className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold font-mono border border-slate-700 transition-colors"
                  >
                    <span>Ver Detalhes</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={`https://wa.me/5584999159061?text=${encodeURIComponent(
                      `Olá Rafael! Gostaria de saber mais sobre a solução: ${item.title}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-colors"
                    title="Conversar sobre este produto no WhatsApp"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Solutions Link Button */}
        <div className="text-center pt-4">
          <Link
            to="/solucoes"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-emerald-500/20 transform hover:-translate-y-0.5"
          >
            <Sparkles className="w-4 h-4" />
            <span>Ver Todas as Soluções & Produtos ({solutionsData.length})</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
