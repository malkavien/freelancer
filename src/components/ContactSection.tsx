import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Linkedin, 
  Github, 
  Copy, 
  Check, 
  MessageSquare, 
  ExternalLink,
  Send
} from 'lucide-react';
import { profileData } from '../data/profile';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(`Contato de Projeto - ${formName || 'Portfólio'}`);
    const mailtoBody = encodeURIComponent(
      `Olá Rafael,\n\nNome: ${formName}\nEmail: ${formEmail}\n\nMensagem:\n${formMessage}`
    );
    window.location.href = `mailto:${profileData.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  const whatsappUrl = `https://wa.me/5584999159061?text=${encodeURIComponent(
    'Olá Rafael! Gostaria de conversar sobre um projeto ou oportunidade profissional.'
  )}`;

  return (
    <section id="contato" className="py-20 lg:py-28 relative bg-[#070A11]/80 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs">
            <Mail className="w-3.5 h-3.5" />
            <span>VAMOS CONVERSAR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Pronto para transformar sua <span className="text-gradient">arquitetura backend?</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Seja para um novo produto, consultoria pontual em pagamentos/banco de dados ou 
            uma oportunidade fixa, fique à vontade para entrar em contato.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto">
          
          {/* Left Column: Direct Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Direct Card */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 hover:border-emerald-500 transition-all shadow-lg shadow-emerald-500/10"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2.5 text-emerald-400 font-bold text-base">
                  <MessageSquare className="w-5 h-5" />
                  <span>WhatsApp Direto</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                  Resposta Rápida
                </span>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed mb-3">
                Converse comigo no WhatsApp para alinhamentos ágeis de escopo e disponibilidade.
              </p>
              <div className="text-sm font-mono font-semibold text-emerald-400 flex items-center gap-2">
                <span>{profileData.phone}</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-[#0B0F19] border border-slate-800/90 hover:border-slate-700 transition-all">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2.5 text-slate-200 font-semibold text-sm">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>E-mail Profissional</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>
              <p className="text-slate-400 text-xs mb-3">Para envio de propostas detalhadas ou convites para entrevistas:</p>
              <a
                href={`mailto:${profileData.email}`}
                className="text-sm font-mono text-cyan-300 hover:underline block truncate"
              >
                {profileData.email}
              </a>
            </div>

            {/* Social & Location Links */}
            <div className="p-6 rounded-2xl bg-[#0B0F19] border border-slate-800/90 space-y-4">
              <div className="flex items-center gap-3 text-xs text-slate-300">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
                <span>{profileData.location}</span>
              </div>

              <div className="flex items-center gap-3 pt-2 border-t border-slate-800">
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                >
                  <Github className="w-4 h-4 text-slate-200" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-8 rounded-2xl bg-[#0C121E] border border-slate-800/90 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-2">Envie uma mensagem direta</h3>
              <p className="text-slate-400 text-xs sm:text-sm mb-6">
                Preencha os campos abaixo para abrir uma mensagem formatada diretamente em seu cliente de e-mail padrão.
              </p>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5 font-medium">
                    Seu Nome ou Empresa
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: João da Silva / StartUp Brasil"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#080C14] border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5 font-medium">
                    Seu E-mail de Contato
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="joao@empresa.com.br"
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#080C14] border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5 font-medium">
                    Mensagem / Demanda
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Conte sobre o projeto, requisitos técnicos, stack pretendida e estimativa de início..."
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#080C14] border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-colors"
                >
                  <Send className="w-4 h-4 text-emerald-400" />
                  <span>Enviar por E-mail</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
