import { SolutionItem } from '../types';

export const solutionsData: SolutionItem[] = [
  {
    id: 'api-pix-microservice',
    slug: 'api-pix-microservice',
    title: 'API PIX & Webhook Engine (Microservice)',
    category: 'APIs & Backend',
    tagline: 'Gateway autônomo com QR Code dinâmico, confirmação instantânea e webhooks idempotentes',
    summary: 'Microserviço completo em Node.js/TypeScript e Docker para processar pagamentos PIX instantâneos sem depender de plataformas caras ou sofrer com instabilidade de webhooks.',
    status: 'Pré-venda PDI',
    pdiBadge: 'PDI 2026.1 • Backend Resiliente',
    priceFrom: 'R$ 197',
    problem: 'Intermediários tradicionais cobram mensalidades abusivas e taxas percentuais por transação que drenam o lucro da operação. Além disso, a maioria das implementações caseiras sofre com notificações bancárias perdidas, falta de idempotência e travamentos sob picos de pagamentos simultâneos.',
    solution: 'Um microserviço autônomo, desacoplado e containerizado em Docker. Ele lida com a geração do QR Code Copia e Cola, confirmação em tempo real, validação rigorosa de assinatura HMAC e despacho idempotente para suas aplicações via fila.',
    features: [
      'Geração de QR Code estático e dinâmico com payload Pix padrão BACEN',
      'Recepção de Webhooks com validação criptográfica (HMAC-SHA256)',
      'Idempotência comprovada (impede processamento duplicado do mesmo pagamento)',
      'Fila assíncrona para entrega de eventos ao seu sistema principal',
      'Painel de conciliação e logs de auditoria detalhados',
      'Configuração pronta para Docker Compose e variáveis de ambiente seguras'
    ],
    techStack: ['Node.js', 'TypeScript', 'PostgreSQL', 'Docker', 'Redis', 'Jest'],
    architectureNote: 'Arquitetura modular em camadas (Hexagonal/Ports & Adapters) garantindo troca fácil de provedor bancário sem reescrever a lógica de domínio.',
    plans: [
      {
        name: 'Licença Código-Fonte (Pré-venda PDI)',
        price: 'R$ 197',
        period: 'pagamento único',
        description: 'Acesso completo ao repositório Git com código-fonte em TypeScript, testes e documentação OpenAPI.',
        features: [
          'Código-fonte 100% aberto e sem ofuscação',
          'Documentação completa com OpenAPI / Swagger',
          'Suíte de testes automatizados com Jest',
          'Acesso a todas as atualizações durante o PDI 2026',
          'Uso em projetos próprios ou de clientes ilimitados'
        ],
        highlighted: true,
        ctaText: 'Garantir Licença na Pré-Venda'
      },
      {
        name: 'Instalação & Setup Assistido',
        price: 'R$ 590',
        period: 'serviço pontual',
        description: 'Implantação completa em seu servidor (VPS, Docker, Cloud) com configuração de banco e SSL.',
        features: [
          'Tudo incluído no plano Código-Fonte',
          'Setup completo na sua VPS (Hostinger, DigitalOcean, AWS)',
          'Configuração do Docker, Nginx Reverse Proxy e SSL',
          'Configuração dos Webhooks com seu banco/PSP',
          'Call de 1h para alinhamento técnico e validação'
        ],
        ctaText: 'Contratar Setup Assistido'
      },
      {
        name: 'Versão Personalizada',
        price: 'Sob Consulta',
        description: 'Adaptação específica da API para as regras de negócio e ERP da sua empresa.',
        features: [
          'Integração direta com seu sistema legado',
          'Módulos de conciliação financeira customizados',
          'Suporte prioritário e SLA dedicado'
        ],
        ctaText: 'Solicitar Versão Sob Medida'
      }
    ],
    faqs: [
      {
        question: 'O que significa o status "Pré-venda PDI"?',
        answer: 'Este produto faz parte do meu Plano de Desenvolvimento Individual (PDI 2026). Ao adquirir na pré-venda, você garante o código-fonte final por um valor promocional exclusivo antes do lançamento oficial e acompanha o progresso dos commits.'
      },
      {
        question: 'Posso usar em projetos de clientes da minha agência/freelance?',
        answer: 'Sim! A licença permite utilizar o código em múltiplos projetos próprios ou de clientes, sem cobrança de royalties ou mensalidades.'
      },
      {
        question: 'Qual o tempo de entrega do setup assistido?',
        answer: 'Normalmente concluído em até 48 horas úteis após o fornecimento dos acessos ao servidor e credenciais do banco.'
      }
    ]
  },
  {
    id: 'loja-virtual-hostinger-woocommerce',
    slug: 'loja-virtual-hostinger-woocommerce',
    title: 'Setup de Loja Virtual (WooCommerce / Hostinger)',
    category: 'E-commerce & WordPress',
    tagline: 'E-commerce próprio pronto para vender: alta velocidade, checkout transparente e PIX automático',
    summary: 'Construção ou migração de loja virtual completa em WordPress + WooCommerce na Hostinger. Sem pagar aluguel mensal de plataformas, com checkout transparente, cálculo de frete e alta taxa de conversão.',
    status: 'Disponível',
    pdiBadge: 'E-commerce Engineering',
    priceFrom: 'R$ 890',
    problem: 'Plataformas de e-commerce por assinatura (Shopify, Nuvemshop) cobram mensalidades crescentes e taxas sobre cada venda. Por outro lado, lojas WordPress feitas por amadores são lentas, quebram no checkout e não passam confiança ao comprador.',
    solution: 'Uma loja virtual própria, hospedada na Hostinger com arquitetura otimizada por um engenheiro: LiteSpeed Cache ativo, banco MySQL afinado, checkout transparente em 1 etapa e PIX com aprovação instantânea.',
    features: [
      'Loja 100% sua, sem comissões sobre as vendas nem mensalidade de plataforma',
      'Configuração profissional na Hostinger (SSL, LiteSpeed Cache, e-mail corporativo)',
      'Checkout Transparente com PIX dinâmico e Cartão de Crédito',
      'Integração automática de frete (Melhor Envio, Correios, Jadlog)',
      'Catálogo de produtos com variações (tamanho, cor, estoque automático)',
      'Design responsivo impecável para compras pelo smartphone',
      'Painel de controle intuitivo para você cadastrar produtos e gerenciar pedidos'
    ],
    techStack: ['WordPress', 'WooCommerce', 'PHP', 'MySQL', 'Hostinger', 'LiteSpeed'],
    architectureNote: 'Otimização server-side com Redis Object Cache e LiteSpeed para carregamento abaixo de 1.8 segundos, minimizando o abandono de carrinho.',
    plans: [
      {
        name: 'Loja Express',
        price: 'R$ 890',
        period: 'entrega em 5 a 7 dias',
        description: 'Ideal para quem já tem produtos e quer começar a vender online imediatamente com baixo investimento.',
        features: [
          'Instalação e configuração na Hostinger',
          'Checkout Transparente configurado (PIX + Cartão)',
          'Cálculo de frete automático integrado',
          'Cadastro de até 15 produtos iniciais',
          'Certificado de Segurança SSL e e-mail profissional'
        ],
        ctaText: 'Contratar Loja Express'
      },
      {
        name: 'Loja Completa + Treinamento',
        price: 'R$ 1.490',
        period: 'entrega em 10 a 14 dias',
        description: 'Solução completa para empresas que buscam alta performance, cupons, recuperação de carrinho e autonomia.',
        features: [
          'Tudo do plano Loja Express',
          'Cadastro de até 50 produtos com variações',
          'Otimização avançada de velocidade (nota 90+)',
          'Recuperação de carrinho abandonado via WhatsApp/E-mail',
          'Treinamento em vídeo de 1h ensinando a gerenciar a loja',
          '30 dias de suporte técnico pós-entrega'
        ],
        highlighted: true,
        ctaText: 'Escolher Loja Completa'
      },
      {
        name: 'Customização & Migração',
        price: 'Sob Consulta',
        description: 'Migração de outra plataforma ou desenvolvimento de regras de frete/atacado complexas.',
        features: [
          'Migração de catálogo e clientes antigos',
          'Integrações com ERPs e emissores de NF-e',
          'Regras de desconto por volume / B2B'
        ],
        ctaText: 'Falar sobre Loja Sob Medida'
      }
    ],
    faqs: [
      {
        question: 'Preciso pagar mensalidade para você manter a loja?',
        answer: 'Não! O desenvolvimento e setup são pagos uma única vez. Você paga apenas a sua própria hospedagem na Hostinger (que custa em média de R$ 15 a R$ 30 por mês).'
      },
      {
        question: 'Consigo cadastrar novos produtos sozinho depois?',
        answer: 'Com certeza! O painel do WooCommerce é super amigável e entrego tutoriais claros para você e sua equipe adicionarem produtos, alterarem preços e acompanharem pedidos.'
      },
      {
        question: 'Como funciona o recebimento das vendas?',
        answer: 'Configuramos seu gateway de preferência (Mercado Pago, PagSeguro, Asaas, etc.). O dinheiro cai direto na sua conta bancária sem intermediários.'
      }
    ]
  },
  {
    id: 'site-institucional-wordpress',
    slug: 'site-institucional-wordpress',
    title: 'Site Institucional de Alta Performance (WordPress / Laragon)',
    category: 'E-commerce & WordPress',
    tagline: 'Presença digital veloz, elegante e que posiciona sua marca como líder no mercado',
    summary: 'Desenvolvimento de sites institucionais construídos localmente no Laragon com PHP moderno e deploy profissional na Hostinger. Carregamento ultrarrápido (90+ no PageSpeed) e foco em gerar contatos no WhatsApp.',
    status: 'Disponível',
    pdiBadge: 'Web Performance',
    priceFrom: 'R$ 690',
    problem: 'Sites institucionais lentos e mal configurados afastam clientes antes mesmo da página carregar. A maioria das agências entrega templates pesados cheios de bugs e com dores de cabeça para atualizar um simples número de telefone.',
    solution: 'Desenvolvemos o site com ambiente local controlado (Laragon), arquitetura limpa de blocos e foco obsessivo em velocidade. Seus visitantes encontram sua proposta de valor em menos de 2 segundos com botão direto para WhatsApp.',
    features: [
      'Velocidade superior: nota 90+ garantida no Google PageSpeed',
      'Layout moderno, responsivo e adaptado para todas as telas',
      'Botões de ação rápida para chamada direta no WhatsApp e ligação',
      'Formulário de contato seguro com proteção anti-spam',
      'SEO técnico inicial para indexação rápida no Google',
      'Painel intuitivo para você mesmo editar textos, imagens e serviços'
    ],
    techStack: ['WordPress', 'PHP', 'Laragon', 'MySQL', 'Hostinger', 'Tailwind CSS'],
    architectureNote: 'Construído localmente no Laragon com deploy versionado, evitando edições perigosas direto no servidor de produção.',
    plans: [
      {
        name: 'Institucional Express',
        price: 'R$ 690',
        period: 'entrega em 3 a 5 dias',
        description: 'Landing Page institucional de página única (One Page) com todas as informações essenciais.',
        features: [
          'Design moderno de alta conversão (One Page)',
          'Seções: Sobre, Serviços, Depoimentos e Contato',
          'Integração direta com WhatsApp e Google Maps',
          'Configuração de hospedagem Hostinger e SSL'
        ],
        ctaText: 'Contratar Site Express'
      },
      {
        name: 'Institucional Pro + Blog',
        price: 'R$ 1.190',
        period: 'entrega em 7 a 10 dias',
        description: 'Site multipáginas completo com área de artigos/notícias para fortalecer a autoridade da empresa no Google.',
        features: [
          'Até 5 páginas exclusivas (Início, Sobre, Serviços, Portfólio, Contato)',
          'Área de Blog / Notícias para estratégias de SEO',
          'Otimização avançada de imagens e scripts (WebP + Cache)',
          'Criação de e-mails corporativos (contato@suaempresa.com.br)',
          'Treinamento prático de gerenciamento'
        ],
        highlighted: true,
        ctaText: 'Escolher Institucional Pro'
      }
    ],
    faqs: [
      {
        question: 'Eu mesmo consigo alterar os textos do site?',
        answer: 'Sim! Entregamos o site pronto com o editor nativo do WordPress para você alterar fotos, textos, contatos e serviços sem precisar de código.'
      },
      {
        question: 'Vocês configuram a hospedagem e o domínio?',
        answer: 'Sim, cuidamos de todo o apontamento do domínio, configuração na Hostinger e ativação do certificado de segurança SSL.'
      }
    ]
  },
  {
    id: 'nestjs-modular-starter',
    slug: 'nestjs-modular-starter',
    title: 'Clean NestJS Modular Monolith Starter',
    category: 'APIs & Backend',
    tagline: 'Boilerplate corporativo de produção com autenticação JWT/RBAC, Prisma e testes configurados',
    summary: 'Economize até 3 semanas de setup inicial em projetos backend. Arquitetura limpa, tipada e pronta para escalar com TypeScript, Docker e CI/CD.',
    status: 'Disponível',
    pdiBadge: 'PDI 2026 • Arquitetura Limpa',
    priceFrom: 'R$ 147',
    problem: 'Toda nova API exige refazer a mesma infraestrutura básica: configuração de autenticação, refresh tokens, controle de acessos (RBAC), Prisma migrations, validação com Zod/class-validator, Docker Compose e pipeline de CI.',
    solution: 'Um starter kit corporativo maduro, construído com as melhores práticas de Clean Architecture e NestJS, permitindo iniciar o desenvolvimento focado nas regras de negócio desde o primeiro minuto.',
    features: [
      'Autenticação completa (JWT, Refresh Token com rotação, RBAC por permissões)',
      'Prisma ORM configurado com PostgreSQL e scripts de seed',
      'Docker Compose com Postgres, Redis e Mailhog prontos',
      'Validação de DTOs e tratamento global de exceções padronizado',
      'Suíte de testes unitários e de integração com Jest e Supertest',
      'Pipeline de GitHub Actions pronto (lint, typecheck, tests)'
    ],
    techStack: ['NestJS', 'TypeScript', 'PostgreSQL', 'Prisma', 'Docker', 'Jest'],
    architectureNote: 'Módulos desacoplados seguindo Domain-Driven Design simplificado, facilitando posterior extração para microsserviços se necessário.',
    plans: [
      {
        name: 'Starter Boilerplate',
        price: 'R$ 147',
        period: 'pagamento único',
        description: 'Repositório completo com código limpo, README detalhado e licença comercial.',
        features: [
          'Código-fonte completo e comentado',
          'Documentação Swagger / OpenAPI gerada automaticamente',
          'Configurações de Docker e CI/CD inclusas',
          'Uso ilimitado em projetos comerciais'
        ],
        highlighted: true,
        ctaText: 'Comprar Starter Kit'
      },
      {
        name: 'Starter + Mentoria de Arquitetura (1h)',
        price: 'R$ 490',
        period: 'call individual',
        description: 'Além do código, receba 1 hora de mentoria individual para discutir a arquitetura da sua aplicação.',
        features: [
          'Tudo do plano Starter Boilerplate',
          '1 hora de call técnica individual com Rafael Rodrigues',
          'Revisão do modelo de dados e entidades do seu projeto',
          'Tira-dúvidas sobre escalabilidade e deploy'
        ],
        ctaText: 'Starter com Mentoria'
      }
    ],
    faqs: [
      {
        question: 'O código é atualizado?',
        answer: 'Sim! O repositório recebe atualizações contínuas para acompanhar as versões LTS do Node.js e releases estáveis do NestJS.'
      },
      {
        question: 'Funciona com PostgreSQL ou MySQL?',
        answer: 'O starter vem configurado por padrão com PostgreSQL, mas como utiliza Prisma ORM, alternar para MySQL é tão simples quanto mudar 1 linha no schema.prisma.'
      }
    ]
  },
  {
    id: 'fiscalfacil-nfe',
    slug: 'fiscalfacil-nfe',
    title: 'FiscalFácil - Microserviço de Emissão de NF-e',
    category: 'Sistemas & Módulos',
    tagline: 'Emissão, cancelamento e validação de Notas Fiscais Eletrônicas via API REST simplificada',
    summary: 'Abstraia toda a complexidade de comunicação com a SEFAZ. Envie um JSON simples e o microserviço cuida da assinatura do Certificado Digital A1, geração do XML e retorno do DANFE em PDF.',
    status: 'Pré-venda PDI',
    pdiBadge: 'PDI 2026.2 • Soluções Fiscais',
    priceFrom: 'R$ 297',
    problem: 'Integrar faturamento fiscal é um dos maiores pesadelos para desenvolvedores: schemas XML rígidos da SEFAZ, manipulação de certificados digitais e quedas frequentes dos servidores estaduais exigindo fila de contingência.',
    solution: 'Um microserviço especializado que traduz requisições REST simples em notas autorizadas pela SEFAZ, com fila de contingência e armazenamento de XMLs e PDFs gerados.',
    features: [
      'Geração e validação de XML de NF-e (modelo 55 e 65 / NFC-e)',
      'Assinatura digital automatizada com Certificado Digital A1 (.pfx)',
      'Geração instantânea de DANFE em formato PDF',
      'Eventos fiscais: Cancelamento e Carta de Correção Eletrônica (CC-e)',
      'Fila de contingência para reenvio caso a SEFAZ esteja instável'
    ],
    techStack: ['PHP 8.2', 'Node.js', 'PostgreSQL', 'Docker', 'SEFAZ API'],
    plans: [
      {
        name: 'Licença Código-Fonte (Pré-venda)',
        price: 'R$ 297',
        period: 'valor de pré-venda',
        description: 'Acesso antecipado ao microserviço com documentação de endpoints e exemplos em cURL/Node/PHP.',
        features: [
          'Código-fonte do microserviço completo',
          'Ambiente de testes configurado para homologação SEFAZ',
          'Acesso a todas as melhorias do PDI fiscal'
        ],
        highlighted: true,
        ctaText: 'Reservar na Pré-Venda'
      },
      {
        name: 'Implantação & Homologação',
        price: 'R$ 890',
        period: 'serviço assistido',
        description: 'Configuração do microserviço na sua infraestrutura e suporte para homologação do primeiro lote de notas.',
        features: [
          'Tudo do plano Código-Fonte',
          'Setup completo na VPS/Docker da sua empresa',
          'Configuração do certificado digital da empresa',
          'Emissão de notas em ambiente de testes/homologação'
        ],
        ctaText: 'Contratar Implantação Fiscal'
      }
    ],
    faqs: [
      {
        question: 'Precisa de certificado digital?',
        answer: 'Sim, é necessário um Certificado Digital padrão ICP-Brasil modelo A1 (arquivo digital .pfx ou .p12).'
      }
    ]
  },
  {
    id: 'postgres-query-profiler',
    slug: 'postgres-query-profiler',
    title: 'PostgreSQL & MySQL Query Profiler Toolkit',
    category: 'Ferramentas',
    tagline: 'Diagnóstico cirúrgico de lentidão, locks e geração de índices otimizados para bancos de dados',
    summary: 'Conjunto de scripts e rotinas de auditoria de performance para identificar queries lentas, gargalos de I/O e reduzir o MTTR em até 70%.',
    status: 'Disponível',
    pdiBadge: 'Database Engineering',
    priceFrom: 'R$ 97',
    problem: 'Sistemas corporativos começam a ficar lentos quando o volume de dados cresce. Desenvolvedores costumam culpar o hardware ou o ORM sem saber ler o EXPLAIN ANALYZE ou identificar queries sem índice.',
    solution: 'Toolkit prático com queries analíticas prontas, scripts de monitoramento de tabelas inchadas (bloat), detecção de consultas que causam lock e gerador de índices parciais.',
    features: [
      'Scripts SQL prontos para rodar no PostgreSQL 12+ e MySQL 8+',
      'Detecção das top 20 queries mais lentas e que mais consom I/O',
      'Identificação de índices não utilizados e tabelas com Sequential Scan crítico',
      'Guia prático em PDF: "Como Interpretar Planos de Execução EXPLAIN ANALYZE"',
      'Exemplos reais de como reduzir o MTTR e destravar aplicações'
    ],
    techStack: ['PostgreSQL', 'MySQL', 'SQL', 'Docker'],
    plans: [
      {
        name: 'Toolkit Completo + Guia',
        price: 'R$ 97',
        period: 'download imediato',
        description: 'Acesso instantâneo a todos os scripts SQL organizados por categoria e ao guia prático de tuning.',
        features: [
          'Conjunto completo de scripts SQL (.sql)',
          'Guia de Interpretação EXPLAIN ANALYZE',
          'Checklist de auditoria de performance',
          'Uso ilimitado em quantos bancos precisar'
        ],
        highlighted: true,
        ctaText: 'Adquirir Toolkit por R$ 97'
      }
    ],
    faqs: [
      {
        question: 'Os scripts causam impacto no banco em produção?',
        answer: 'Não. Todas as queries de diagnóstico são somente-leitura (SELECTs nas views estatísticas como pg_stat_statements e pg_stat_user_tables).'
      }
    ]
  }
];
