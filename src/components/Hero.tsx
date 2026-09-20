import React, { useState } from 'react';
import {
  ArrowRight,
  Terminal,
  CheckCircle2,
  Zap,
  Copy,
  Check
} from 'lucide-react';
import { profileData } from '../data/profile';

export const Hero: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const whatsappUrl = `https://wa.me/5584999159061?text=${encodeURIComponent(
    'Olá Rafael! Vi seu portfólio e gostaria de conversar sobre um projeto freelance / contratação.'
  )}`;

  return (
    <section id="sobre" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">

            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Disponível para Novos Projetos Freelance & Consultoria</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h2 className="text-sm uppercase tracking-widest text-slate-400 font-mono font-semibold">
                Olá, eu sou {profileData.name}
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                Arquiteto e Desenvolvedor{' '}
                <span className="text-gradient">Backend Escalável</span>
              </h1>
            </div>

            {/* Subtitle / Focus */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              Especialista em construir <strong className="text-white font-medium">APIs RESTful de alta criticidade</strong>,
              sistemas de pagamentos (<strong className="text-emerald-400 font-medium">PIX, Webhooks, NF-e</strong>),
              modernização de monólitos legados e otimização cirúrgica de bancos de dados.
            </p>

            {/* Academic & Experience Badges */}
            <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs text-slate-300">
              <span className="px-3 py-1 rounded-md bg-slate-800/80 border border-slate-700/80 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                5+ anos de experiência
              </span>
              <span className="px-3 py-1 rounded-md bg-slate-800/80 border border-slate-700/80 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                Mestre em Ciência da Computação
              </span>
              <span className="px-3 py-1 rounded-md bg-slate-800/80 border border-slate-700/80 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Node.js • TypeScript • PHP
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3 w-full sm:w-auto">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm transition-all transform hover:-translate-y-0.5 shadow-lg shadow-emerald-500/25"
              >
                <span>Solicitar Proposta / Freelance</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#playground"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/90 text-white font-medium text-sm border border-slate-700 transition-colors"
              >
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span>Testar API Interativa</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-white font-mono text-xs border border-slate-800 transition-colors"
                title="Clique para copiar e-mail"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-sans">E-mail copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>rafael.pomeu@gmail.com</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Code Terminal Card */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-2xl bg-[#0d131f] border border-slate-800/90 shadow-2xl overflow-hidden group hover:border-emerald-500/40 transition-colors">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0B0F17] border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  <span className="ml-2 text-xs font-mono text-slate-400">backend-architect.ts</span>
                </div>
                <span className="text-[11px] font-mono text-emerald-400/90 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Node 18+ • TS
                </span>
              </div>

              {/* Code Content */}
              <div className="p-5 font-mono text-xs leading-relaxed text-slate-300 overflow-x-auto">
                <div className="text-slate-500 mb-2">// Especificação de Arquitetura & Disponibilidade</div>
                <p>
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-cyan-300">architect</span>: <span className="text-emerald-300">SeniorBackendEngineer</span> = {'{'}
                </p>
                <div className="pl-4 space-y-1">
                  <p>
                    <span className="text-slate-400">name:</span>{' '}
                    <span className="text-amber-300">"{profileData.name}"</span>,
                  </p>
                  <p>
                    <span className="text-slate-400">education:</span>{' '}
                    <span className="text-amber-300">"M.Sc. Ciência da Computação"</span>,
                  </p>
                  <p>
                    <span className="text-slate-400">stack:</span>{' '}
                    <span className="text-slate-200">['Node.js', 'TypeScript', 'PHP', 'PostgreSQL']</span>,
                  </p>
                  <p>
                    <span className="text-slate-400">missionCritical:</span> {'{'}
                  </p>
                  <div className="pl-4">
                    <p><span className="text-slate-400">pixInstantPay:</span> <span className="text-emerald-400">true</span>,</p>
                    <p><span className="text-slate-400">webhookIdempotency:</span> <span className="text-emerald-400">true</span>,</p>
                    <p><span className="text-slate-400">automatedTests:</span> <span className="text-amber-300">'Jest + TDD'</span>,</p>
                    <p><span className="text-slate-400">observability:</span> <span className="text-cyan-300">'Elasticsearch + Kibana'</span></p>
                  </div>
                  <p>{'},'}</p>
                  <p>
                    <span className="text-slate-400">freelanceStatus:</span>{' '}
                    <span className="text-emerald-400 font-semibold">'ACCEPTING_PROJECTS'</span>
                  </p>
                </div>
                <p>{'};'}</p>

                <div className="mt-4 pt-3 border-t border-slate-800/80 text-slate-400">
                  <div className="flex items-center gap-2 text-emerald-400 text-[11px]">
                    <Zap className="w-3.5 h-3.5" />
                    <span>Benchmark: -74% MTTR em consultas de banco</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Quick Highlights Counter Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-10 border-t border-slate-800/80">
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-emerald-400">5+ Anos</div>
            <div className="text-xs text-slate-400 mt-1">Desenvolvimento de Sistemas & APIs</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-cyan-400">Mestrado</div>
            <div className="text-xs text-slate-400 mt-1">Ciência da Computação (PPgCC)</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-emerald-400">100%</div>
            <div className="text-xs text-slate-400 mt-1">Confiabilidade em Webhooks & PIX</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-purple-400">Stack ELK</div>
            <div className="text-xs text-slate-400 mt-1">Elasticsearch & Kibana em Produção</div>
          </div>
        </div>

      </div>
    </section>
  );
};
