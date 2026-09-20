import React, { useState } from 'react';
import { 
  Terminal, 
  Play, 
  Check, 
  Copy, 
  Clock, 
  Layers
} from 'lucide-react';
import { mockEndpoints } from '../data/mockApi';
import { ApiEndpoint } from '../types';

export const ApiPlayground: React.FC = () => {
  const [selectedEndpoint, setSelectedEndpoint] = useState<ApiEndpoint>(mockEndpoints[0]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'response' | 'curl' | 'headers'>('response');
  const [copied, setCopied] = useState<boolean>(false);
  const [executionStats, setExecutionStats] = useState<{
    latency: number;
    timestamp: string;
    statusCode: number;
  }>({
    latency: mockEndpoints[0].latencyMs,
    timestamp: new Date().toLocaleTimeString(),
    statusCode: 200
  });

  const handleExecute = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setExecutionStats({
        latency: Math.floor(selectedEndpoint.latencyMs * (0.8 + Math.random() * 0.4)),
        timestamp: new Date().toLocaleTimeString(),
        statusCode: selectedEndpoint.statusCode
      });
    }, 350);
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="playground" className="py-20 lg:py-28 relative bg-[#070A11]/60 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs">
            <Terminal className="w-3.5 h-3.5" />
            <span>INTERACTIVE BACKEND PLAYGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Explore Minha Arquitetura em <span className="text-gradient">Tempo Real</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Backend de verdade se demonstra com contratos claros, resiliência e performance. 
            Selecione um endpoint abaixo e teste a execução simulada das soluções corporativas.
          </p>
        </div>

        {/* Console Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#0B0F19] rounded-2xl border border-slate-800 shadow-2xl overflow-hidden">
          
          {/* Left Column: Endpoints Menu (4 cols) */}
          <div className="lg:col-span-4 p-4 sm:p-5 border-b lg:border-b-0 lg:border-r border-slate-800/80 bg-[#090D15]">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4 flex items-center justify-between">
              <span>Endpoints Disponíveis</span>
              <span className="text-[11px] text-emerald-400">REST v1</span>
            </div>

            <div className="space-y-2">
              {mockEndpoints.map((ep) => {
                const isSelected = ep.id === selectedEndpoint.id;
                return (
                  <button
                    key={ep.id}
                    onClick={() => {
                      setSelectedEndpoint(ep);
                      setExecutionStats({
                        latency: ep.latencyMs,
                        timestamp: new Date().toLocaleTimeString(),
                        statusCode: ep.statusCode
                      });
                    }}
                    className={`w-full text-left p-3 rounded-xl border transition-all ${
                      isSelected
                        ? 'bg-slate-800/90 border-emerald-500/50 shadow-md shadow-emerald-500/10'
                        : 'bg-slate-900/50 border-slate-800 hover:border-slate-700 hover:bg-slate-800/40'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <span
                        className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                          ep.method === 'GET'
                            ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                            : 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                        }`}
                      >
                        {ep.method}
                      </span>
                      <span className="font-mono text-xs text-slate-200 truncate font-medium">
                        {ep.path}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                      {ep.summary}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Quick Tech Note */}
            <div className="mt-6 p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-[11px] text-slate-400 font-mono">
              <div className="flex items-center gap-1.5 text-slate-300 font-semibold mb-1">
                <Layers className="w-3.5 h-3.5 text-emerald-400" />
                <span>Padrões de Produção:</span>
              </div>
              <ul className="space-y-1 list-disc list-inside text-slate-400">
                <li>Validação estrita de contratos</li>
                <li>Idempotência garantida</li>
                <li>Otimização de I/O em banco</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Interactive Terminal & Output (8 cols) */}
          <div className="lg:col-span-8 p-4 sm:p-6 flex flex-col justify-between">
            <div>
              {/* Request Address Bar */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 p-2 rounded-xl bg-[#070A11] border border-slate-800 mb-4">
                <span
                  className={`text-xs font-mono font-bold px-3 py-1.5 rounded-lg text-center ${
                    selectedEndpoint.method === 'GET'
                      ? 'bg-emerald-500/20 text-emerald-400'
                      : 'bg-amber-500/20 text-amber-400'
                  }`}
                >
                  {selectedEndpoint.method}
                </span>

                <div className="flex-1 font-mono text-xs sm:text-sm text-slate-200 px-2 py-1 truncate flex items-center">
                  <span className="text-slate-500">https://rafael-rodrigues.dev</span>
                  <span className="text-emerald-300">{selectedEndpoint.path}</span>
                </div>

                <button
                  onClick={handleExecute}
                  disabled={isLoading}
                  className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs transition-all disabled:opacity-50"
                >
                  {isLoading ? (
                    <>
                      <div className="w-3.5 h-3.5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></div>
                      <span>Executando...</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 fill-slate-950" />
                      <span>Send Request</span>
                    </>
                  )}
                </button>
              </div>

              {/* Execution Status Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 px-3 py-2 rounded-lg bg-slate-900/60 border border-slate-800 text-xs font-mono text-slate-400 mb-4">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <strong className="text-emerald-400">{executionStats.statusCode} OK</strong>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <span>{executionStats.latency} ms</span>
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="text-slate-500">Timestamp:</span>
                  <span>{executionStats.timestamp}</span>
                </div>
              </div>

              {/* Viewer Tabs (Response JSON / cURL / Headers) */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveTab('response')}
                    className={`px-3 py-1 rounded-md text-xs font-mono transition-colors ${
                      activeTab === 'response'
                        ? 'bg-slate-800 text-emerald-400 font-semibold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    JSON Response
                  </button>
                  <button
                    onClick={() => setActiveTab('curl')}
                    className={`px-3 py-1 rounded-md text-xs font-mono transition-colors ${
                      activeTab === 'curl'
                        ? 'bg-slate-800 text-cyan-400 font-semibold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    cURL Command
                  </button>
                  <button
                    onClick={() => setActiveTab('headers')}
                    className={`px-3 py-1 rounded-md text-xs font-mono transition-colors ${
                      activeTab === 'headers'
                        ? 'bg-slate-800 text-purple-400 font-semibold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    HTTP Headers
                  </button>
                </div>

                <button
                  onClick={() => {
                    const textToCopy =
                      activeTab === 'response'
                        ? JSON.stringify(selectedEndpoint.sampleResponse, null, 2)
                        : activeTab === 'curl'
                        ? selectedEndpoint.curlCommand
                        : 'Content-Type: application/json\nX-Response-Time: ' + executionStats.latency + 'ms';
                    handleCopy(textToCopy);
                  }}
                  className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white font-mono px-2 py-1 rounded hover:bg-slate-800 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>

              {/* Code Box */}
              <div className="relative rounded-xl bg-[#06080F] border border-slate-800/90 p-4 font-mono text-xs text-slate-300 max-h-[360px] overflow-y-auto">
                {activeTab === 'response' && (
                  <pre className="text-emerald-400/95 leading-relaxed">
                    {JSON.stringify(selectedEndpoint.sampleResponse, null, 2)}
                  </pre>
                )}

                {activeTab === 'curl' && (
                  <pre className="text-cyan-300 leading-relaxed whitespace-pre-wrap">
                    {selectedEndpoint.curlCommand}
                  </pre>
                )}

                {activeTab === 'headers' && (
                  <div className="space-y-1 text-slate-300">
                    <p><span className="text-slate-500">Status:</span> HTTP/1.1 {executionStats.statusCode} OK</p>
                    <p><span className="text-slate-500">Content-Type:</span> application/json; charset=utf-8</p>
                    <p><span className="text-slate-500">X-Response-Time:</span> {executionStats.latency}ms</p>
                    <p><span className="text-slate-500">X-RateLimit-Limit:</span> 1000</p>
                    <p><span className="text-slate-500">X-RateLimit-Remaining:</span> 999</p>
                    <p><span className="text-slate-500">X-Powered-By:</span> Node.js / TypeScript (Clean Architecture)</p>
                  </div>
                )}
              </div>
            </div>

            {/* Micro Documentation footer */}
            <div className="mt-4 pt-3 border-t border-slate-800/70 flex items-center justify-between text-[11px] text-slate-400">
              <span className="truncate">
                📌 <strong>Caso de uso:</strong> {selectedEndpoint.summary}
              </span>
              <span className="hidden sm:inline font-mono text-slate-500">
                Swagger / OpenAPI 3.0 Ready
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
