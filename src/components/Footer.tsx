import React from 'react';
import { Terminal, ArrowUp, Github, Linkedin, MessageSquare } from 'lucide-react';
import { profileData } from '../data/profile';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070D] border-t border-slate-900 py-12 text-slate-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          
          {/* Logo & Headline */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2 text-white font-bold text-base">
              <span className="flex items-center justify-center w-7 h-7 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                <Terminal className="w-4 h-4" />
              </span>
              <span>rafael<span className="text-emerald-400">.dev</span></span>
            </div>
            <p className="text-slate-500 text-xs font-sans text-center md:text-left">
              Construindo arquiteturas resilientes, APIs escaláveis e soluções financeiras.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors border border-slate-800"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors border border-slate-800"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`https://wa.me/5584999159061`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 transition-colors border border-emerald-500/30"
              title="WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors border border-slate-800 ml-2"
              title="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Copyright & Meta */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-slate-500">
          <div>
            © {new Date().getFullYear()} {profileData.name}. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-2 text-[11px]">
            <span>Hospedagem & CI/CD otimizada para</span>
            <span className="text-white font-semibold px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
              ▲ Vercel
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
