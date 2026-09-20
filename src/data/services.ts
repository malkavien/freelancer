import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'financial-integrations',
    title: 'Integrações Financeiras & Fiscais',
    tagline: 'Sistemas de pagamento e faturamento à prova de falhas',
    description: 'Implementação de integrações de missão crítica com gateways bancários, fluxos de conciliação automática, processamento de pagamentos instantâneos via PIX e emissão automatizada de NF-e com Webhooks idempotentes.',
    icon: 'CreditCard',
    badge: 'Alta Demanda',
    deliverables: [
      'Integração de pagamentos PIX com confirmação em tempo real',
      'Webhooks seguros com assinatura criptográfica e retentativas exponenciais',
      'Emissão e validação de Notas Fiscais Eletrônicas (NF-e)',
      'Rotinas de conciliação financeira automatizada'
    ],
    techs: ['Node.js', 'TypeScript', 'PHP', 'Webhooks', 'REST APIs', 'PostgreSQL']
  },
  {
    id: 'api-architecture',
    title: 'APIs RESTful & Microsserviços',
    tagline: 'Arquiteturas modulares, rápidas e fáceis de manter',
    description: 'Desenvolvimento do zero ou evolução de backends robustos, com documentação interativa (OpenAPI/Swagger), autenticação segura (JWT, OAuth2), controle de taxa (rate limiting) e alta capacidade de throughput.',
    icon: 'Server',
    badge: 'Core Backend',
    deliverables: [
      'Arquitetura de microsserviços e APIs modulares desacopladas',
      'Contratos de API rigorosos com validação de dados em tempo de execução',
      'Autenticação corporativa, RBAC e segurança contra invasões',
      'Documentação técnica completa e padronizada'
    ],
    techs: ['NestJS', 'Express', 'Node.js', 'TypeScript', 'Docker', 'Redis']
  },
  {
    id: 'legacy-migration',
    title: 'Migração de Monólitos Legados',
    tagline: 'Modernização sem interrupção de operação',
    description: 'Estratégia e execução técnica para modernizar códigos legados em PHP/Node para arquiteturas modernas e modulares em TypeScript, garantindo zero perda de dados e continuidade operacional.',
    icon: 'RefreshCw',
    badge: 'Especialidade',
    deliverables: [
      'Diagnóstico de arquitetura e mapeamento de dependências',
      'Estratégia de migração incremental (Strangler Fig Pattern)',
      'Criação de baterias de testes para garantir paridade comportamental',
      'Redução drástica da dívida técnica e custos de manutenção'
    ],
    techs: ['TypeScript', 'Node.js', 'PHP', 'Docker', 'Jest', 'CI/CD']
  },
  {
    id: 'database-optimization',
    title: 'Otimização de Bancos & Profiling SQL',
    tagline: 'Elimine lentidões e reduza o tempo de resposta',
    description: 'Auditoria e profiling aprofundado em consultas SQL complexas, reestruturação de modelagem de dados relacionais, criação de índices otimizados e redução significativa de MTTR e gargalos de I/O.',
    icon: 'Database',
    deliverables: [
      'Análise de planos de execução (EXPLAIN ANALYZE) e lentidões',
      'Otimização de índices e modelagem para alta concorrência',
      'Prevenção de N+1 queries e tuning de pooling de conexões',
      'Minimização do tempo de resolução de incidentes (MTTR)'
    ],
    techs: ['PostgreSQL', 'MySQL', 'Prisma / TypeORM', 'Redis Cache']
  },
  {
    id: 'observability-elk',
    title: 'Observabilidade & Busca com Stack ELK',
    tagline: 'Inteligência de dados e visibilidade total do sistema',
    description: 'Implantação e sustentação da Stack ELK (Elasticsearch & Kibana) para centralização de logs corporativos, queries analíticas em alto volume e dashboards executivos de faturamento e auditoria.',
    icon: 'Activity',
    deliverables: [
      'Mapeamento de índices e pipeline de ingestão de logs em tempo real',
      'Criação de dashboards estratégicos em Kibana para tomada de decisão',
      'Busca textual ultrarrápida (full-text search) para catálogos e produtos',
      'Alertas automatizados para anomalias e erros em produção'
    ],
    techs: ['Elasticsearch', 'Kibana', 'Logstash / Beats', 'Docker']
  },
  {
    id: 'automated-testing',
    title: 'Testes Automatizados & Qualidade de Código',
    tagline: 'Confiança para deploys frequentes sem sustos',
    description: 'Implementação de cultura e suites de testes unitários e de integração (TDD), elevando a confiabilidade das entregas em produção e integrando pipelines automáticos de CI/CD.',
    icon: 'CheckCircle2',
    deliverables: [
      'Suites completas de testes unitários e de integração',
      'Mocks e fixtures para serviços de terceiros e bancos',
      'Pipelines automatizados de CI/CD para validação a cada commit',
      'Aumento da cobertura de código e eliminação de bugs recorrentes'
    ],
    techs: ['Jest', 'PHPUnit', 'Supertest', 'TDD', 'GitHub Actions']
  }
];
