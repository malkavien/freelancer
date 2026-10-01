export interface ProfileData {
  name: string;
  title: string;
  subtitle: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  portfolio: string;
  yearsOfExperience: number;
  summary: string;
  availability: 'immediate' | 'part-time' | 'consulting';
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  deliverables: string[];
  techs: string[];
  badge?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  details: string;
  badge?: string;
}

export interface SkillCategory {
  category: string;
  items: {
    name: string;
    level: 'Avançado' | 'Especialista' | 'Intermediário';
    experienceYears: string;
    icon?: string;
  }[];
}

export interface ApiEndpoint {
  id: string;
  method: 'GET' | 'POST' | 'PUT';
  path: string;
  summary: string;
  tags: string[];
  latencyMs: number;
  statusCode: number;
  sampleRequest?: Record<string, unknown>;
  sampleResponse: Record<string, unknown>;
  curlCommand: string;
}

export interface ProjectEstimateOption {
  id: string;
  title: string;
  description: string;
  typicalDuration: string;
  complexity: 'Médio' | 'Alto' | 'Estratégico';
  tags: string[];
}

export interface SolutionPlan {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  ctaText?: string;
}

export interface SolutionItem {
  id: string;
  slug: string;
  title: string;
  category: 'APIs & Backend' | 'E-commerce & WordPress' | 'Ferramentas' | 'Sistemas & Módulos';
  tagline: string;
  summary: string;
  status: 'Disponível' | 'Pré-venda PDI' | 'Em Desenvolvimento';
  pdiBadge?: string;
  priceFrom: string;
  problem: string;
  solution: string;
  features: string[];
  techStack: string[];
  architectureNote?: string;
  plans: SolutionPlan[];
  faqs: { question: string; answer: string }[];
  demoUrl?: string;
}

export interface ProjectCaseItem {
  id: string;
  title: string;
  context: string;
  role: string;
  period: string;
  summary: string;
  results: string[];
  techs: string[];
  metricsBadge?: string;
}
