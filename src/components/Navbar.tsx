import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Terminal, Menu, X, MessageSquare, Sparkles } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Sobre', href: '/#sobre' },
    { label: 'Experiência', href: '/#experiencia' },
    { label: 'Projetos', href: '/#projetos' },
    { label: 'Soluções', href: '/solucoes', isHighlighted: true },
    { label: 'Contato', href: '/#contato' },
  ];

  const whatsappUrl = `https://wa.me/5584999159061?text=${encodeURIComponent(
    'Olá Rafael! Vi seu site e gostaria de conversar sobre uma solução / oportunidade de desenvolvimento.'
  )}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080C14]/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 text-slate-100 font-mono font-semibold text-lg hover:text-emerald-400 transition-colors group"
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 group-hover:scale-105 transition-transform">
              <Terminal className="w-4 h-4" />
            </span>
            <span className="tracking-tight">
              rafael<span className="text-emerald-400">.dev</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isExternalOrAnchor = item.href.startsWith('/#');
              const isCurrentPage = location.pathname === item.href;

              return item.isHighlighted ? (
                <Link
                  key={item.href}
                  to={item.href}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs xl:text-sm font-semibold text-cyan-300 hover:text-cyan-200 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 rounded-lg transition-colors ml-1"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{item.label}</span>
                </Link>
              ) : isExternalOrAnchor ? (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-3 py-1.5 text-xs xl:text-sm font-medium text-slate-300 hover:text-emerald-400 rounded-md hover:bg-slate-800/40 transition-colors"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`px-3 py-1.5 text-xs xl:text-sm font-medium rounded-md transition-colors ${
                    isCurrentPage
                      ? 'text-emerald-400 bg-slate-800/60'
                      : 'text-slate-300 hover:text-emerald-400 hover:bg-slate-800/40'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/solucoes"
              className="text-xs font-mono px-3 py-1.5 rounded-lg border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white transition-colors"
            >
              Vitrine PDI
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-all transform hover:-translate-y-0.5 shadow-lg shadow-emerald-500/20 font-mono"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Direto</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-xl bg-slate-900/95 border border-slate-800 shadow-2xl backdrop-blur-xl">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors flex items-center justify-between ${
                    item.isHighlighted
                      ? 'text-cyan-300 bg-cyan-500/10 border border-cyan-500/30'
                      : 'text-slate-200 hover:text-emerald-400 hover:bg-slate-800/60'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.isHighlighted && <Sparkles className="w-3.5 h-3.5" />}
                </a>
              ))}
              <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-colors font-mono"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Falar no WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
