import { SkillCategory } from '../types';

export const skillsData: SkillCategory[] = [
  {
    category: "Linguagens & Runtime",
    items: [
      { name: "Node.js", level: "Especialista", experienceYears: "5+ anos" },
      { name: "TypeScript", level: "Especialista", experienceYears: "4+ anos" },
      { name: "PHP", level: "Avançado", experienceYears: "5+ anos" },
      { name: "JavaScript (ES6+)", level: "Especialista", experienceYears: "6+ anos" }
    ]
  },
  {
    category: "Frameworks & Bibliotecas",
    items: [
      { name: "NestJS", level: "Avançado", experienceYears: "3+ anos" },
      { name: "Express", level: "Especialista", experienceYears: "5+ anos" },
      { name: "Laravel", level: "Avançado", experienceYears: "3+ anos" },
      { name: "React", level: "Intermediário", experienceYears: "2+ anos" }
    ]
  },
  {
    category: "Bancos de Dados & BI",
    items: [
      { name: "PostgreSQL", level: "Especialista", experienceYears: "5+ anos" },
      { name: "MySQL", level: "Avançado", experienceYears: "5+ anos" },
      { name: "Elasticsearch", level: "Avançado", experienceYears: "3+ anos" },
      { name: "Kibana (Stack ELK)", level: "Avançado", experienceYears: "3+ anos" },
      { name: "Firebase", level: "Intermediário", experienceYears: "2+ anos" },
      { name: "Redis", level: "Avançado", experienceYears: "3+ anos" }
    ]
  },
  {
    category: "APIs & Arquitetura",
    items: [
      { name: "APIs RESTful", level: "Especialista", experienceYears: "5+ anos" },
      { name: "Webhooks Idempotentes", level: "Especialista", experienceYears: "4+ anos" },
      { name: "Microsserviços & Monólitos Modulares", level: "Avançado", experienceYears: "4+ anos" },
      { name: "Integrações Bancárias (PIX)", level: "Especialista", experienceYears: "4+ anos" },
      { name: "Emissão de NF-e", level: "Especialista", experienceYears: "3+ anos" },
      { name: "Conciliação Financeira", level: "Avançado", experienceYears: "3+ anos" }
    ]
  },
  {
    category: "Qualidade, DevOps & Ferramentas",
    items: [
      { name: "Docker & Containerização", level: "Avançado", experienceYears: "4+ anos" },
      { name: "Testes Automatizados (Jest / PHPUnit)", level: "Especialista", experienceYears: "4+ anos" },
      { name: "TDD (Test-Driven Development)", level: "Avançado", experienceYears: "3+ anos" },
      { name: "CI/CD & Git Workflows", level: "Avançado", experienceYears: "5+ anos" },
      { name: "SQL Profiling & Query Tuning", level: "Especialista", experienceYears: "4+ anos" }
    ]
  }
];
