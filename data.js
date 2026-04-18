// Portfolio content — Victor Sibanda
// Last updated: April 2026
window.PORTFOLIO = {
  brand: 'V.S',
  name: 'Victor Sibanda',
  role: 'Cloud Architect & Platform Engineer',
  location: 'United Kingdom',
  tagline: 'Always learning, never quitting. Welcome to my crazy world of tech.',
  status: 'Open to architecture & platform engineering opportunities',

  about: {
    lead: "I'm Victor — a Senior DevOps Engineer building toward Solutions Architecture. I design resilient cloud platforms, lead migrations from legacy on-prem to AWS, and coach engineers to grow. Off the clock I'm a husband, a new dad, a gym regular, and a lifelong anime and gaming nerd who still believes in going ",
    leadEm: 'even further beyond.',
    stats: [
      { k: 'Years in Tech', v: '6', u: '+' },
      { k: 'AWS Certifications', v: '3', u: '' },
      { k: 'Services Migrated', v: '10', u: '+' },
      { k: 'Cups of Coffee', v: '∞', u: '' },
    ],
  },

  interests: [
    {
      tag: '01',
      icon: 'code',
      title: 'Platform Craft',
      body: "IaC with CDK and Terraform, container orchestration, pipelines that don't wake you up at 3am.",
    },
    {
      tag: '02',
      icon: 'game',
      title: 'Gamer',
      body: "Assassin's Creed, GTA, anything with a map worth losing hours in.",
    },
    {
      tag: '03',
      icon: 'anime',
      title: 'Anime',
      body: 'DBZ, Naruto, Bleach, One Piece — and Death Note when I want it darker.',
    },
    {
      tag: '04',
      icon: 'gym',
      title: 'Gym',
      body: 'Training like a Saiyan most mornings. Progress over perfection.',
    },
    {
      tag: '05',
      icon: 'family',
      title: 'Family',
      body: 'Husband and new dad. The real end-boss fight — and I love every minute.',
    },
    {
      tag: '06',
      icon: 'faith',
      title: 'Faith',
      body: 'Christian. Steadfastness through trials — keeps the north star clear.',
    },
    {
      tag: '07',
      icon: 'learn',
      title: 'Learning',
      body: 'Always a new cert, service, or rabbit-hole. Curiosity is the engine.',
    },
    {
      tag: '08',
      icon: 'music',
      title: 'Build Mode',
      body: 'Hip-hop, lo-fi, and anime OSTs on loop while I ship.',
    },
  ],

  certs: [
    {
      name: 'AWS Solutions Architect — Associate',
      issuer: 'Amazon Web Services',
      year: '2022',
      short: 'SAA-C03',
    },
    {
      name: 'AWS Developer — Associate',
      issuer: 'Amazon Web Services',
      year: '2023',
      short: 'DVA-C02',
    },
    {
      name: 'AWS SysOps Administrator — Associate',
      issuer: 'Amazon Web Services',
      year: '2023',
      short: 'SOA-C02',
    },
    {
      name: 'AWS DevOps Engineer — Professional',
      issuer: 'Amazon Web Services',
      year: '2026',
      short: 'DOP-C02',
    },
    {
      name: 'Aspire ILM Recognised Leadership Programme',
      issuer: 'Institute of Leadership & Management',
      year: '2026',
      short: 'ILM',
    },
  ],

  projects: [
    {
      idx: '01',
      name: 'Legacy Services Cloud Migration',
      desc: 'Containerised and migrated four on-prem legacy services to AWS using ECS, ECR, and CDK. First migration of its kind at the organisation — now live in production.',
      stack: ['AWS CDK', 'ECS', 'ECR', 'Fargate', 'TypeScript'],
    },
    {
      idx: '02',
      name: 'DC Exit — Shared Services Migration',
      desc: 'Designed and delivered the cloud infrastructure for a data centre exit. Architected networking to connect Dockerised services back to surviving on-prem systems with no significant support.',
      stack: ['AWS CDK', 'ECS', 'Direct Connect', 'VPC', 'TypeScript'],
    },
    {
      idx: '03',
      name: 'Pipeline Modernisation',
      desc: 'Migrated legacy Bamboo pipelines to Bitbucket Pipelines with SonarQube Cloud and JFrog artifact management. Reduced Java pipeline execution time by 30–40%.',
      stack: ['Bitbucket Pipelines', 'SonarQube', 'JFrog', 'AWS'],
    },
    {
      idx: '04',
      name: 'Mobile DevOps Foundation',
      desc: 'Built the DevOps foundation from scratch for a React Native mobile application — repositories, CI/CD pipelines, environments, security scanning with Expo and MobSF.',
      stack: ['Expo', 'AWS Amplify', 'MobSF', 'Bitbucket Pipelines'],
    },
  ],

  experience: [
    {
      title: 'Senior DevOps Engineer',
      company: 'UK Financial Services Group',
      date: '2022 — Present',
      body: "Technical lead for cloud migrations across multiple squads. Architected and delivered ECS/CDK-based infrastructure patterns now used as the organisation's reference architecture. Mentored junior engineers — one achieving AWS certification under structured coaching programme.",
      tags: ['AWS CDK', 'ECS', 'Fargate', 'TypeScript', 'Bitbucket Pipelines'],
    },
    {
      title: 'DevOps Engineer',
      company: 'UK Financial Services Group',
      date: '2020 — 2022',
      body: 'Pioneered CDK Pipelines adoption — first use at the organisation. Built Mercury Platform CI/CD from scratch, reducing deployment times from 80 minutes to 6 minutes. Promoted to Senior at end of cycle with Extraordinary rating.',
      tags: ['AWS CDK', 'CodeBuild', 'Serverless', 'TypeScript', 'IaC'],
    },
  ],

  contact: [
    {
      lbl: 'Email',
      val: 'hello@victorsibanda.dev',
      href: 'mailto:hello@victorsibanda.dev',
      icon: 'mail',
    },
    {
      lbl: 'LinkedIn',
      val: 'linkedin.com/in/victor-s-1389a5121',
      href: 'https://www.linkedin.com/in/victor-s-1389a5121',
      icon: 'linkedin',
    },
    {
      lbl: 'GitHub',
      val: 'github.com/victorsibanda',
      href: 'https://github.com/victorsibanda',
      icon: 'github',
    },
  ],

  verse:
    '"Count it all joy, my brothers, when you meet trials of various kinds, for you know that the testing of your faith produces steadfastness." — James 1:2–4',
};

export const PORTFOLIO = window.PORTFOLIO;
