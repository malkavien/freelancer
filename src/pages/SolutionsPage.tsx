import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Package, 
  ArrowRight, 
  Check, 
  MessageSquare,
  Server,
  ShoppingCart,
  Globe,
  Database,
  Search,
  Layers,
  ArrowLeft
} from 'lucide-react';
import { solutionsData } from '../data/solutions';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const iconByCategory: Record<string, React.ReactNode> = {
  'APIs & Backend': <Server className="w-5 h-5 text-emerald-400" />,
  'E-commerce & WordPress': <ShoppingCart className="w-5 h-5 text-cyan-400" />,
  'Sistemas & Módulos': <Globe className="w-5 h-5 text-purple-400" />,
  'Ferramentas': <Database className="w-5 h-5 text-amber-400" />
};

export const SolutionsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categories = [
    'Todos',
    'APIs & Backend',
    'E-commerce & WordPress',
    'Sistemas & Módulos',
    'Ferramentas'
  ];

  const filteredSolutions = solutionsData.filter((item) => {
    const matchesCategory = selectedCategory === 'Todos' || item.category === selectedCategory;
    const matchesSearch = 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.techStack.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#080C14] text-slate-100 flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb & Navigation */}
          <div className="mb-6">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-emerald-400 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Voltar para a Página Inicial</span>
            </Link>
          </div>

          {/* Hero Section of Storefront */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs">
              <Package className="w-3.5 h-3.5" />
              <span>VITRINE TÉCNICA & PRODUTOS DO PDI</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
              Soluções de Software <span className="text-gradient">Prontas e Customizáveis</span>
            </h1>
            <p className="text-slate-400 text-base sm:text-lg">
              APIs autônomas, microserviços, lojas virtuais em WordPress/WooCommerce e ferramentas 
              desenvolvidas sob os mais altos padrões de arquitetura de software para acelerar sua empresa.
            </p>
          </div>

          {/* PDI Philosophy Highlight Box */}
          <div className="mb-14 p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-emerald-950/30 via-slate-900 to-cyan-950/20 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-1">
                  O que é o PDI e a Pré-venda de Produtos?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                  Cada produto nasce do meu <strong>Plano de Desenvolvimento Individual (PDI 2026–2027)</strong>. 
                  Isso une estudo aprofundado, testes de carga, containerização com Docker e código limpo. 
                  Ao adquirir na pré-venda ou contratar a implantação, você recebe uma solução corporativa sem mensalidades de plataforma.
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/5584999159061?text=Ol%C3%A1%20Rafael!%20Gostaria%20de%20conversar%20sobre%20as%20solu%C3%A7%C3%B5es%20de%20software."
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs font-mono transition-all"
            >
              Falar com o Arquiteto
            </a>
          </div>

          {/* Filters & Search Toolbar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-800">
            {/* Category tabs */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
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

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar solução ou stack..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:border-emerald-500 transition-colors font-mono"
              />
            </div>
          </div>

          {/* Solutions Grid */}
          {filteredSolutions.length === 0 ? (
            <div className="text-center py-16 p-8 rounded-2xl bg-[#0B0F19] border border-slate-800">
              <Package className="w-12 h-12 text-slate-600 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white mb-1">Nenhuma solução encontrada</h3>
              <p className="text-sm text-slate-400 mb-4">
                Tente ajustar os termos de busca ou mudar a categoria selecionada.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('Todos');
                  setSearchTerm('');
                }}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-mono"
              >
                Limpar filtros
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSolutions.map((item) => (
                <div
                  key={item.id}
                  className="group relative flex flex-col justify-between p-7 rounded-2xl bg-[#0B0F19] border border-slate-800/90 hover:border-cyan-500/40 hover:bg-[#0d1322] transition-all duration-300 shadow-xl"
                >
                  <div>
                    {/* Header: Icon + Category + Status */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-300">
                        {iconByCategory[item.category] || <Package className="w-4 h-4 text-emerald-400" />}
                        <span>{item.category}</span>
                      </span>

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

                    {/* Title & Tagline */}
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-1.5">
                      <Link to={`/solucoes/${item.slug}`} className="hover:underline">
                        {item.title}
                      </Link>
                    </h3>
                    <p className="text-xs font-mono text-emerald-400 mb-3">
                      {item.tagline}
                    </p>

                    {/* Summary */}
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">
                      {item.summary}
                    </p>

                    {/* Feature bullet previews */}
                    <div className="space-y-1.5 mb-6 pt-3 border-t border-slate-800/80">
                      {item.features.slice(0, 3).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {item.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price & CTA Footer */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 block">A partir de</span>
                      <span className="text-lg font-bold font-mono text-white text-gradient">
                        {item.priceFrom}
                      </span>
                    </div>

                    <Link
                      to={`/solucoes/${item.slug}`}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold font-mono border border-slate-700 transition-colors"
                    >
                      <span>Ver Planos</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Need a Custom System Banner */}
          <div className="mt-16 p-8 rounded-2xl bg-[#0C121E] border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">
                Precisa de um sistema ou API sob medida?
              </h3>
              <p className="text-slate-400 text-sm max-w-xl">
                Além das soluções prontas, desenvolvo arquiteturas personalizadas integradas a ERPs, 
                sistemas legados e provedores de pagamento.
              </p>
            </div>
            <a
              href="https://wa.me/5584999159061?text=Ol%C3%A1%20Rafael!%20Tenho%20uma%20demanda%20espec%C3%ADfica%20para%20um%20projeto%20personalizado."
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Solicitar Orçamento Personalizado</span>
            </a>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};
