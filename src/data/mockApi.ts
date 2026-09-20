import { ApiEndpoint } from '../types';

export const mockEndpoints: ApiEndpoint[] = [
  {
    id: 'get-profile',
    method: 'GET',
    path: '/api/v1/profile',
    summary: 'Retorna a ficha técnica, contatos e disponibilidade do desenvolvedor.',
    tags: ['Core', 'Profile'],
    latencyMs: 14,
    statusCode: 200,
    curlCommand: 'curl -X GET "https://rafael-rodrigues.dev/api/v1/profile" \\\n  -H "Accept: application/json"',
    sampleResponse: {
      status: 'success',
      data: {
        name: 'Rafael de Almeida Rodrigues',
        headline: 'Desenvolvedor Backend | Node.js • TypeScript • PHP',
        degree: 'Mestre em Ciência da Computação (UFERSA/UERN)',
        yearsOfExperience: '5+',
        availability: 'Disponível para Projetos Freelancer e Consultorias',
        location: 'Mossoró/RN, Brasil (Remoto)',
        contacts: {
          email: 'rafael.oomeu@gmail.com',
          phone: '(84) 99915-9061',
          github: 'https://github.com/malkavien',
          linkedin: 'https://linkedin.com/in/rafael-almeida-rodrigues-tech'
        },
        primarySpecialties: [
          'APIs RESTful de Alto Throughput',
          'Sistemas de Pagamento (PIX, Webhooks, NF-e)',
          'Otimização de Bancos Relacionais (PostgreSQL)',
          'Observabilidade com Stack ELK'
        ]
      }
    }
  },
  {
    id: 'post-pix-webhook',
    method: 'POST',
    path: '/api/v1/payments/pix/webhook',
    summary: 'Simula recebimento de Webhook bancário com validação de assinatura e idempotência.',
    tags: ['Fintech', 'Webhooks'],
    latencyMs: 28,
    statusCode: 200,
    sampleRequest: {
      event: 'pix.payment.received',
      endToEndId: 'E00000000202509201200abc12345678',
      txid: 'f9b3a17e8c2d4e5f',
      valor: '3500.00',
      horario: '2025-09-20T12:00:00Z',
      chave: 'rafael.oomeu@gmail.com',
      signature: 'sha256=d7a8fbb307d7809469ca933b02d82941...'
    },
    curlCommand: 'curl -X POST "https://rafael-rodrigues.dev/api/v1/payments/pix/webhook" \\\n  -H "Content-Type: application/json" \\\n  -H "X-Signature-SHA256: d7a8fbb307d78..." \\\n  -d \'{"event":"pix.payment.received","txid":"f9b3a17e8c2d4e5f","valor":"3500.00"}\'',
    sampleResponse: {
      status: 'acknowledged',
      code: 200,
      timestamp: new Date().toISOString(),
      validation: {
        hmacSignature: 'VALID',
        idempotencyKey: 'IDEMP_TX_F9B3A17E',
        duplicateDetected: false
      },
      action: {
        invoiceStatus: 'PAID',
        reconciliationStatus: 'RECONCILED',
        queueDispatched: 'sqs://fiscal-events-nfe'
      },
      message: 'Notificação bancária processada com sucesso em 28ms sem bloqueios de I/O.'
    }
  },
  {
    id: 'get-db-benchmarks',
    method: 'GET',
    path: '/api/v1/benchmarks/sql-optimizer',
    summary: 'Auditoria e comparativo de profiling SQL em consultas corporativas críticas.',
    tags: ['Database', 'Performance'],
    latencyMs: 19,
    statusCode: 200,
    curlCommand: 'curl -X GET "https://rafael-rodrigues.dev/api/v1/benchmarks/sql-optimizer" \\\n  -H "Accept: application/json"',
    sampleResponse: {
      database: 'PostgreSQL 16 Enterprise',
      optimizationCase: 'Consulta de Extrato com Múltiplos Joins e Filtros Temporais',
      results: {
        unoptimized: {
          executionTimeMs: 1480.5,
          plan: 'Seq Scan on access_logs (cost=0.00..42580.00)',
          bufferReads: 48920,
          mttrIncidents: 'Frequente gargalo sob picos de acesso'
        },
        optimized: {
          executionTimeMs: 16.2,
          plan: 'Index Scan using idx_access_logs_company_date_status (cost=0.42..8.45)',
          bufferReads: 14,
          improvementFactor: '91.3x mais rápido',
          mttrReductionPercent: '74%'
        }
      },
      architectNote: 'Criação de índices compostos parciais e reestruturação da query eliminando produto cartesiano.'
    }
  },
  {
    id: 'get-elk-metrics',
    method: 'GET',
    path: '/api/v1/observability/elk-status',
    summary: 'Métricas de ingestão e queries analíticas no cluster Elasticsearch/Kibana.',
    tags: ['DevOps', 'Observability'],
    latencyMs: 22,
    statusCode: 200,
    curlCommand: 'curl -X GET "https://rafael-rodrigues.dev/api/v1/observability/elk-status" \\\n  -H "Accept: application/json"',
    sampleResponse: {
      clusterName: 'production-elk-telemetry',
      status: 'green',
      metrics: {
        ingestionRate: '14,200 events/sec',
        averageSearchLatencyMs: 4.8,
        activeIndices: ['logs-payments-2025.*', 'audit-access-2025.*', 'billing-nfe-2025.*'],
        kibanaDashboardsLive: 12
      },
      businessImpact: 'Visibilidade em tempo real para diretoria e faturamento operacional.'
    }
  }
];
