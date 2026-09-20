import React from 'react';
import { 
  CreditCard, 
  Server, 
  RefreshCw, 
  Database, 
  Activity, 
  CheckCircle2, 
  ArrowUpRight,
  ShieldCheck
} from 'lucide-react';
import { servicesData } from '../data/services';

const iconMap: Record<string, React.ReactNode> = {
  CreditCard: <CreditCard className="w-6 h-6 text-emerald-400" />,
  Server: <Server className="w-6 h-6 text-cyan-400" />,
  RefreshCw: <RefreshCw className="w-6 h-6 text-amber-400" />,
  Database: <Database className="w-6 h-6 text-blue-400" />,
  Activity: <Activity className="w-6 h-6 text-purple-400" />,
  CheckCircle2: <ShieldCheck className="w-6 h-6 text-emerald-400" />
};

export const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs">
            <span>SOLUÇÕES & CONSULTORIA FREELANCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Como posso impulsionar seu <span className="text-gradient">produto ou empresa</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Da concepção de novas APIs à resolução de gargalos críticos de bancos e pagamentos,
            ofereço suporte técnico de nível sênior com foco em segurança, escalabilidade e continuidade de negócios.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#0c121e]/90 border border-slate-800/80 hover:border-emerald-500/40 hover:bg-[#0f1726] transition-all duration-300 shadow-lg hover:shadow-emerald-500/5"
            >
              <div>
                {/* Header Icon + Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/70 border border-slate-700/60 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {iconMap[service.icon] || <Server className="w-6 h-6 text-emerald-400" />}
                  </div>
                  {service.badge && (
                    <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-full bg-slate-800 text-emerald-400 border border-slate-700">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs font-mono text-emerald-400/90 mt-1 mb-3">
                  {service.tagline}
                </p>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Deliverables List */}
                <div className="space-y-2 mb-6 pt-2 border-t border-slate-800/60">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                    O que entrego:
                  </span>
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies & Action Footer */}
              <div className="pt-4 border-t border-slate-800/70 flex flex-col gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {service.techs.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/60 text-slate-300 border border-slate-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={`#estimar`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors mt-1"
                >
                  <span>Solicitar orçamento deste serviço</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner for Custom Consultation */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-slate-900 to-cyan-950/30 border border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-white">Precisa de uma consultoria ou projeto personalizado?</h4>
            <p className="text-slate-300 text-sm">
              Podemos analisar sua arquitetura atual, avaliar gargalos ou planejar sua próxima feature juntos.
            </p>
          </div>
          <a
            href="https://wa.me/5584999159061?text=Ol%C3%A1%20Rafael!%20Gostaria%20de%20conversar%20sobre%20uma%20consultoria%20t%C3%A9cnica."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm transition-all shadow-md shadow-emerald-500/20"
          >
            Falar Diretamente Comigo
          </a>
        </div>

      </div>
    </section>
  );
};
