import React, { useState } from 'react';
import { 
  Calculator, 
  Clock, 
  Check, 
  MessageSquare, 
  Sparkles
} from 'lucide-react';
import { ProjectEstimateOption } from '../types';

const projectTypes: ProjectEstimateOption[] = [
  {
    id: 'pix-payments',
    title: 'Integração de PIX & Gateways de Pagamento',
    description: 'Webhooks de conciliação, QR Code dinâmico, confirmação instantânea e emissão de comprovantes.',
    typicalDuration: '1 a 3 semanas',
    complexity: 'Alto',
    tags: ['PIX', 'Webhooks', 'Idempotência']
  },
  {
    id: 'new-api',
    title: 'Desenvolvimento de Nova API REST / Microsserviço',
    description: 'Backend escalável em Node.js/NestJS ou PHP/Laravel com modelagem de dados e autenticação segura.',
    typicalDuration: '2 a 6 semanas',
    complexity: 'Médio',
    tags: ['Node.js', 'PostgreSQL', 'Docker']
  },
  {
    id: 'db-optimization',
    title: 'Diagnóstico & Otimização de Banco de Dados',
    description: 'Auditoria de queries lentas (PostgreSQL/MySQL), criação de índices e redução drástica de MTTR.',
    typicalDuration: '1 a 2 semanas',
    complexity: 'Estratégico',
    tags: ['Profiling SQL', 'EXPLAIN ANALYZE', 'Índices']
  },
  {
    id: 'legacy-migration',
    title: 'Migração de Monólito para TypeScript Modular',
    description: 'Refatoração segura de código legado sem paralisar a operação, incluindo suites de testes.',
    typicalDuration: '4 a 12 semanas',
    complexity: 'Estratégico',
    tags: ['Refactoring', 'Jest/TDD', 'TypeScript']
  },
  {
    id: 'elk-analytics',
    title: 'Observabilidade & BI com Stack ELK',
    description: 'Centralização de logs, mapeamento de índices Elasticsearch e dashboards operacionais em Kibana.',
    typicalDuration: '2 a 4 semanas',
    complexity: 'Médio',
    tags: ['Elasticsearch', 'Kibana', 'BI']
  },
  {
    id: 'custom',
    title: 'Consultoria Técnica ou Projeto Sob Medida',
    description: 'Análise arquitetural, code review, mentoria de equipe ou demanda específica de engenharia.',
    typicalDuration: 'Flexível',
    complexity: 'Médio',
    tags: ['Consultoria', 'Architecture Review']
  }
];

const timelineOptions = [
  { id: 'urgent', label: 'Urgente (Início Imediato)' },
  { id: 'month', label: 'Médio Prazo (Próximos 30 dias)' },
  { id: 'planning', label: 'Em Planejamento / Prospecção' }
];

export const ProjectEstimator: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>(projectTypes[0].id);
  const [selectedTimeline, setSelectedTimeline] = useState<string>('urgent');
  const [details, setDetails] = useState<string>('');
  const [clientName, setClientName] = useState<string>('');

  const currentOption = projectTypes.find((p) => p.id === selectedType) || projectTypes[0];
  const currentTimelineObj = timelineOptions.find((t) => t.id === selectedTimeline);

  const generateMessage = () => {
    return `Olá Rafael! Meu nome é ${clientName.trim() || 'um cliente'}.\n\nEstou com uma demanda para:\n📌 *${currentOption.title}*\n⏱️ *Prazo:* ${currentTimelineObj?.label}\n${
      details.trim() ? `📝 *Contexto:* ${details.trim()}\n` : ''
    }\nGostaria de entender sua disponibilidade para conversarmos a respeito.`;
  };

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = generateMessage();
    const url = `https://wa.me/5584999159061?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="estimar" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs">
            <Calculator className="w-3.5 h-3.5" />
            <span>ESTIMATIVA & BRIEFING DE PROJETO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Planeje Seu Projeto com <span className="text-gradient">Um Desenvolvedor Sênior</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Selecione o tipo de projeto que você precisa. O assistente monta o briefing estruturado 
            para conversarmos diretamente pelo WhatsApp sem burocracia.
          </p>
        </div>

        <form onSubmit={handleWhatsAppSend} className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Step 1 & 2: Selection Controls (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Step 1: Select Type */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-3">
                  1. Qual é a sua principal necessidade técnica?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {projectTypes.map((opt) => {
                    const isSelected = selectedType === opt.id;
                    return (
                      <button
                        type="button"
                        key={opt.id}
                        onClick={() => setSelectedType(opt.id)}
                        className={`text-left p-3.5 rounded-xl border transition-all flex flex-col justify-between ${
                          isSelected
                            ? 'bg-slate-800/90 border-emerald-500 text-white shadow-lg shadow-emerald-500/10'
                            : 'bg-[#0B0F19] border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between gap-1 mb-1">
                            <span className="text-xs font-bold leading-tight line-clamp-1">
                              {opt.title}
                            </span>
                            {isSelected && <Check className="w-4 h-4 text-emerald-400 shrink-0" />}
                          </div>
                          <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed mb-2">
                            {opt.description}
                          </p>
                        </div>
                        <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 pt-1 border-t border-slate-800/60">
                          <Clock className="w-3 h-3" />
                          <span>Média: {opt.typicalDuration}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Timeline */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-3">
                  2. Em que prazo você deseja iniciar?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {timelineOptions.map((t) => (
                    <button
                      type="button"
                      key={t.id}
                      onClick={() => setSelectedTimeline(t.id)}
                      className={`p-3 rounded-xl border text-xs font-mono text-center transition-all ${
                        selectedTimeline === t.id
                          ? 'bg-emerald-500/15 border-emerald-500 text-emerald-300 font-semibold'
                          : 'bg-[#0B0F19] border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Client Info & Extra Details */}
              <div className="space-y-3">
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                  3. Detalhes adicionais (opcional)
                </label>
                <input
                  type="text"
                  placeholder="Seu nome ou empresa (ex: Carlos / Fintech X)"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0B0F19] border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                />
                <textarea
                  rows={3}
                  placeholder="Descreva brevemente o contexto (ex: precisamos integrar webhooks do banco com retentativas automáticas no Node.js)..."
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0B0F19] border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                />
              </div>

            </div>

            {/* Briefing Preview Card (5 cols) */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 p-6 rounded-2xl bg-[#0C121E] border border-slate-800/90 shadow-2xl flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
                    <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Resumo da Solicitação</span>
                    </span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                      Complexidade: {currentOption.complexity}
                    </span>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <div className="text-[11px] font-mono text-slate-500">Serviço Selecionado:</div>
                      <div className="text-base font-bold text-white mt-0.5">
                        {currentOption.title}
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] font-mono text-slate-500">Estimativa Típica de Execução:</div>
                      <div className="text-sm font-semibold text-emerald-400 mt-0.5 flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        <span>{currentOption.typicalDuration}</span>
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] font-mono text-slate-500">Prazo Desejado:</div>
                      <div className="text-sm text-slate-200 mt-0.5">
                        {currentTimelineObj?.label}
                      </div>
                    </div>

                    {details && (
                      <div>
                        <div className="text-[11px] font-mono text-slate-500">Contexto Adicionado:</div>
                        <div className="text-xs text-slate-300 mt-0.5 italic bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                          "{details}"
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-emerald-500/25 transform hover:-translate-y-0.5"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Enviar Briefing no WhatsApp</span>
                  </button>
                  <p className="text-center text-[11px] text-slate-500 font-mono mt-2.5">
                    Conversa direta com o desenvolvedor • Sem intermediários
                  </p>
                </div>
              </div>
            </div>

          </div>
        </form>

      </div>
    </section>
  );
};
