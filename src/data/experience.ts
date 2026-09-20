import { ExperienceItem, EducationItem } from '../types';

export const experienceData: ExperienceItem[] = [
  {
    company: "Linkdesign",
    role: "Desenvolvedor Full Stack / Analista de Sistemas",
    period: "Fevereiro 2025 — Atual",
    location: "Mossoró/RN (Híbrido)",
    highlights: [
      "Sustentação e evolução contínua de sistemas corporativos de gestão e controle de acesso, assegurando alta disponibilidade e continuidade operacional ininterrupta.",
      "Desenvolvimento e integração de novos módulos backend e frontend com foco direto em APIs bancárias e serviços de terceiros.",
      "Profiling e otimização cirúrgica de consultas SQL complexas, reduzindo gargalos críticos de banco e diminuindo consideravelmente o tempo de resolução de incidentes (MTTR)."
    ],
    technologies: ["Node.js", "TypeScript", "React", "PostgreSQL", "APIs Bancárias", "SQL Profiling"]
  },
  {
    company: "NovaCode",
    role: "Desenvolvedor Backend Pleno",
    period: "2021 — 2025 (4 anos)",
    location: "Remoto / Mossoró/RN",
    highlights: [
      "Liderança técnica na modernização e migração de monólito legado para arquitetura modular de APIs RESTful escaláveis em Node.js e TypeScript.",
      "Implementação de integrações de missão crítica com Webhooks e APIs externas (soluções financeiras, faturamento, emissão de notas fiscais NF-e e gateways bancários).",
      "Implantação de rotinas sistemáticas de testes automatizados (unitários e de integração com Jest/PHPUnit), elevando significativamente a confiabilidade das entregas em produção.",
      "Mentoria técnica de desenvolvedores júnior, realização diária de code reviews rigorosos e participação ativa nas tomadas de decisão de arquitetura e infraestrutura."
    ],
    technologies: ["Node.js", "TypeScript", "PHP", "PostgreSQL", "MySQL", "Webhooks", "PIX / NF-e", "Jest", "Docker", "CI/CD"]
  },
  {
    company: "RCosta",
    role: "Analista de Dados & Stack ELK",
    period: "2019 — 2021 (2 anos)",
    location: "Mossoró/RN",
    highlights: [
      "Criação e manutenção de dashboards estratégicos em Kibana para apoio direto à tomada de decisão da diretoria e gestão financeira.",
      "Modelagem de dados, mapeamento de índices e desenvolvimento de queries analíticas em clusters Elasticsearch de alto volume de dados.",
      "Construção de indicadores consolidados de Business Intelligence (BI) financeiro, auditoria e faturamento operacional utilizando a Stack ELK."
    ],
    technologies: ["Elasticsearch", "Kibana", "Logstash", "Modelagem de Índices", "BI Financeiro", "Análise de Dados"]
  }
];

export const educationData: EducationItem[] = [
  {
    degree: "Mestrado em Ciência da Computação (PPgCC)",
    institution: "UFERSA / UERN",
    period: "2017 — 2019",
    details: "Pesquisa aplicada em tecnologias voltadas à saúde mental e desenvolvimento de jogos digitais educacionais. Bolsista de Pesquisa CNPq.",
    badge: "Mestre (Stricto Sensu)"
  },
  {
    degree: "Bacharelado em Ciência da Computação",
    institution: "Universidade Federal Rural do Semi-Árido (UFERSA)",
    period: "2008 — 2016",
    details: "Integrante do Núcleo Tecnológico de Engenharia de Software (NTES) com ênfase em engenharia de software, arquitetura de sistemas e jogos digitais.",
    badge: "Graduação"
  }
];
