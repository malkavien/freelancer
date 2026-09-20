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
