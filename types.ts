import { LucideIcon } from 'lucide-react';

export interface SkillItem {
  name: string;
  category: 'AI' | 'Workflow' | 'Dev' | 'Backend' | 'CRM';
}

export interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  metric?: string;
  link?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
}