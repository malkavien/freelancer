import { ProjectCaseItem } from '../types';

export const projectsData: ProjectCaseItem[] = [
  {
    id: 'linkdesign-access-bank',
    title: 'Sustentação de Alta Disponibilidade & Integração com APIs Bancárias',
    context: 'Linkdesign • Sistemas Corporativos & Controle de Acesso',
    role: 'Desenvolvedor Full Stack / Analista de Sistemas',
    period: '2025 — Atual',
    summary: 'Sustentação e evolução de sistemas de missão crítica, com integração direta a APIs bancárias para conciliação financeira e redução substancial de incidentes de banco de dados.',
    results: [
      'Profiling e tuning cirúrgico de queries SQL complexas, reduzindo gargalos críticos de I/O',
      'Diminuição considerável do tempo de resolução de incidentes (MTTR)',
      'Garantia de alta disponibilidade e continuidade operacional para clientes corporativos'
    ],
    techs: ['Node.js', 'TypeScript', 'PostgreSQL', 'APIs Bancárias', 'SQL Profiling', 'React'],
    metricsBadge: '-74% MTTR em Banco'
  },
  {
    id: 'novacode-monolith-migration',
    title: 'Modernização de Monólito Legado para APIs Modulares Escaláveis',
    context: 'NovaCode • Ecossistema Financeiro, Faturamento & NF-e',
    role: 'Desenvolvedor Backend Pleno / Liderança Técnica',
    period: '2021 — 2025',
    summary: 'Liderança técnica na migração de uma arquitetura legada em PHP para microsserviços e APIs modulares em Node.js e TypeScript, garantindo tolerância a falhas em faturamento e emissão de notas fiscais.',
    results: [
      'Migração progressiva sem interrupção de operações (Zero Downtime)',
      'Implantação de rotinas com Webhooks idempotentes e tolerância a falhas na emissão de NF-e e PIX',
      'Criação de cultura de testes automatizados com Jest/PHPUnit, elevando a confiabilidade das entregas',
      'Mentoria técnica de desenvolvedores juniores e code reviews rigorosos'
    ],
    techs: ['Node.js', 'TypeScript', 'PHP', 'PostgreSQL', 'Webhooks', 'PIX', 'NF-e', 'Jest', 'Docker'],
    metricsBadge: '100% Zero Downtime'
  },
  {
    id: 'rcosta-elk-observability',
    title: 'Cluster de Telemetria, Observabilidade & BI com Stack ELK',
    context: 'RCosta • Business Intelligence & Faturamento Operacional',
    role: 'Analista de Dados & Especialista em Elasticsearch',
    period: '2019 — 2021',
    summary: 'Construção de infraestrutura de dados analíticos para apoio à tomada de decisão de diretoria e auditoria financeira, utilizando Elasticsearch e dashboards estratégicos em Kibana.',
    results: [
      'Modelagem e mapeamento de índices otimizados para alto volume de dados transacionais',
      'Criação de dashboards em tempo real em Kibana para acompanhamento de faturamento e auditoria',
      'Busca analítica de alta performance para detecção imediata de anomalias'
    ],
    techs: ['Elasticsearch', 'Kibana', 'Logstash', 'Modelagem de Dados', 'BI Financeiro'],
    metricsBadge: 'Milhões de Logs/Dia'
  }
];
