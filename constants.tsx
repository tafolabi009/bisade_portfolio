import { Github, Linkedin, Mail, Terminal, Cpu, Share2, Database, Workflow } from 'lucide-react';
import { ExperienceItem, ProjectItem, SkillItem, SocialLink } from './types';

export const SOCIALS: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/samuel-phillips',
    icon: Github
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/samuel-phillips',
    icon: Linkedin
  },
  {
    platform: 'Email',
    url: 'mailto:phillipshubdigital@gmail.com',
    icon: Mail
  }
];

export const SKILLS: SkillItem[] = [
  { name: 'RAG Systems', category: 'AI' },
  { name: 'OpenAI Assistants API', category: 'AI' },
  { name: 'LangChain', category: 'AI' },
  { name: 'Vector DBs (Pinecone)', category: 'AI' },
  { name: 'n8n', category: 'Workflow' },
  { name: 'Make.com', category: 'Workflow' },
  { name: 'Zapier', category: 'Workflow' },
  { name: 'Python (Pandas)', category: 'Dev' },
  { name: 'TypeScript', category: 'Dev' },
  { name: 'SQL', category: 'Dev' },
  { name: 'Docker', category: 'Backend' },
  { name: 'AWS Lambda', category: 'Backend' },
  { name: 'HubSpot API', category: 'CRM' },
  { name: 'Salesforce', category: 'CRM' },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'AI Automation Engineer',
    company: 'Freelance / Enterprise Clients',
    period: 'Jan 2023 – Present',
    description: [
      'Designed a Real Estate Lead Scoring Agent reducing qualification time by 50%.',
      'Engineered a Telegram Support AI Agent handling FAQs and payments 24/7.',
      'Built an end-to-end AI Email & CRM Agent for zero missed leads.',
      'Developed "OutSend" cold email bot increasing response rates.',
      'Implemented Voice AI Agents using VAPI.ai and Twilio.'
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    title: 'Real Estate Lead Scoring Agent',
    description: 'Autonomous agent that analyzes inbound inquiries, prioritizing high-value prospects based on budget and fit.',
    tags: ['Python', 'OpenAI', 'CRM Integration'],
    metric: '50% Time Reduction',
    featured: true
  },
  {
    title: 'Nerge Store Support Bot',
    description: 'Telegram AI agent handling FAQs, stock verification, and payment processing for an e-commerce client.',
    tags: ['n8n', 'Telegram API', 'PostgreSQL'],
    metric: '24/7 Availability',
    featured: true
  },
  {
    title: 'Unified FAQ Automation',
    description: 'Centralized FAQ agent integrated across client websites and WhatsApp providing instant responses.',
    tags: ['Webflow', 'WhatsApp API', 'RAG'],
    metric: 'Improved Conversion',
    featured: false
  },
  {
    title: 'Social Media Content Agent',
    description: 'System to autonomously create and publish content based on industry trends from ideation to scheduling.',
    tags: ['Make.com', 'Instagram API', 'GPT-4'],
    featured: false
  },
  {
    title: 'OutSend Outreach Bot',
    description: 'AI-driven cold email outreach bot that personalizes messaging and tracks engagement metrics.',
    tags: ['Python', 'HubSpot', 'Salesforce'],
    metric: 'Increased Response',
    featured: false
  }
];