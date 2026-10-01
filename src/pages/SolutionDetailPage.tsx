import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  MessageSquare, 
  Sparkles, 
  HelpCircle,
  Package,
  ArrowRight
} from 'lucide-react';
import { solutionsData } from '../data/solutions';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const SolutionDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const solution = solutionsData.find((item) => item.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!solution) {
    return (
      <div className="min-h-screen bg-[#080C14] text-slate-100 flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow pt-40 pb-20 text-center max-w-xl mx-auto px-4">
          <Package className="w-16 h-16 text-slate-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-white mb-2">Solução não encontrada</h1>
          <p className="text-slate-400 text-sm mb-6">
            O produto ou módulo que você está procurando não existe ou teve o link alterado.
          </p>
          <Link
            to="/solucoes"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Ver Todas as Soluções</span>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const getWhatsAppLinkForPlan = (planName: string) => {
    const text = `Olá Rafael! Gostaria de contratar / tirar dúvidas sobre o plano *${planName}* da solução *${solution.title}* que vi no seu site.`;
    return `https://wa.me/5584999159061?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="min-h-screen bg-[#080C14] text-slate-100 flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-8 overflow-x-auto">
            <Link to="/" className="hover:text-emerald-400 transition-colors">Início</Link>
            <span>/</span>
            <Link to="/solucoes" className="hover:text-emerald-400 transition-colors">Soluções</Link>
            <span>/</span>
            <span className="text-slate-200 truncate">{solution.title}</span>
          </div>

          {/* Product Header / Hero */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#0B0F19] border border-slate-800 shadow-2xl relative overflow-hidden mb-14">
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none -z-0" />

            <div className="relative z-10 max-w-4xl">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2.5 mb-5">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                  {solution.category}
                </span>
                {solution.pdiBadge && (
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-medium">
                    {solution.pdiBadge}
                  </span>
                )}
                <span
                  className={`text-xs font-mono font-semibold px-3 py-1 rounded-full ${
                    solution.status === 'Pré-venda PDI'
                      ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
                      : 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                  }`}
                >
                  {solution.status}
                </span>
              </div>

              {/* Title & Tagline */}
              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-3 leading-tight">
                {solution.title}
              </h1>
              <p className="text-emerald-400 font-mono text-sm sm:text-base mb-6">
                {solution.tagline}
              </p>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
                {solution.summary}
              </p>

              {/* Tech Stack Bar */}
              <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-slate-400 mr-2">Stack Utilizada:</span>
                {solution.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-900 text-slate-200 border border-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 2-Column: Problem & Engineering Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* The Problem */}
            <div className="p-7 sm:p-8 rounded-2xl bg-[#0C121E] border border-rose-500/20 shadow-xl">
              <div className="flex items-center gap-2.5 text-rose-400 font-mono text-xs uppercase tracking-wider font-semibold mb-3">
                <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                <span>O Problema do Mercado</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                O que as abordagens comuns costumam errar
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {solution.problem}
              </p>
            </div>

            {/* The Solution */}
            <div className="p-7 sm:p-8 rounded-2xl bg-[#0C121E] border border-emerald-500/20 shadow-xl">
              <div className="flex items-center gap-2.5 text-emerald-400 font-mono text-xs uppercase tracking-wider font-semibold mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>A Solução de Engenharia</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Como este produto resolve definitivamente
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                {solution.solution}
              </p>
              {solution.architectureNote && (
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-400">
                  💡 <strong>Nota Arquitetural:</strong> {solution.architectureNote}
                </div>
              )}
            </div>
          </div>

          {/* Features Checklist */}
          <div className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                O que está incluso e homologado
              </h2>
              <p className="text-slate-400 text-sm">
                Recursos desenvolvidos e testados para garantir segurança, estabilidade e facilidade de manutenção.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {solution.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#0B0F19] border border-slate-800/80 flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-200 leading-snug">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Plans & Licensing */}
          <div id="planos" className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>PLANOS DE LICENCIAMENTO & IMPLANTAÇÃO</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                Escolha o formato ideal para seu negócio
              </h2>
              <p className="text-slate-400 text-sm">
                Valores transparentes e diretos, sem surpresas ou comissões ocultas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
              {solution.plans.map((plan, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col justify-between p-7 rounded-2xl border transition-all duration-300 relative ${
                    plan.highlighted
                      ? 'bg-[#0E1524] border-emerald-500/60 shadow-2xl shadow-emerald-500/10 transform md:-translate-y-2'
                      : 'bg-[#0B0F19] border-slate-800'
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-emerald-500 text-slate-950 font-mono text-[10px] font-bold uppercase tracking-wider shadow-md">
                      Mais Recomendado
                    </div>
                  )}

                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-slate-400 mb-6 min-h-[36px]">
                      {plan.description}
                    </p>

                    <div className="mb-6 pb-6 border-b border-slate-800">
                      <div className="text-3xl font-extrabold font-mono text-white text-gradient">
                        {plan.price}
                      </div>
                      {plan.period && (
                        <div className="text-[11px] font-mono text-slate-500 mt-0.5">
                          {plan.period}
                        </div>
                      )}
                    </div>

                    <div className="space-y-3 mb-8">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                        O que você recebe:
                      </span>
                      {plan.features.map((f, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href={getWhatsAppLinkForPlan(plan.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs font-mono transition-all ${
                      plan.highlighted
                        ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/25'
                        : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                    }`}
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>{plan.ctaText || 'Contratar via WhatsApp'}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Technical FAQ Accordion */}
          {solution.faqs && solution.faqs.length > 0 && (
            <div className="max-w-3xl mx-auto mb-16">
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-white mb-1 flex items-center justify-center gap-2">
                  <HelpCircle className="w-5 h-5 text-cyan-400" />
                  <span>Dúvidas Frequentes sobre esta Solução</span>
                </h3>
              </div>

              <div className="space-y-3">
                {solution.faqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="rounded-xl bg-[#0B0F19] border border-slate-800 overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        className="w-full p-4 text-left flex items-center justify-between gap-4 font-semibold text-sm text-slate-200 hover:text-white"
                      >
                        <span>{faq.question}</span>
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-emerald-400 shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Bottom Back & Consult Footer */}
          <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
            <Link
              to="/solucoes"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Explorar outras soluções do PDI</span>
            </Link>

            <a
              href={`https://wa.me/5584999159061?text=${encodeURIComponent(
                `Olá Rafael! Gostaria de uma demonstração ou versão personalizada da solução: ${solution.title}.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1.5"
            >
              <span>Precisa de uma versão customizada? Fale comigo no WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};
