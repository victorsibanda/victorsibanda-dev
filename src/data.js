// Portfolio content — Victor Sibanda
// Last updated: April 2026
export const PORTFOLIO = {
  brand: 'V.S',
  name: 'Victor Sibanda',
  role: 'Cloud Architect & Platform Engineer',
  location: 'United Kingdom',
  tagline: 'When in doubt, just keep building.',
  status: 'Available for collaboration and consulting',

  about: {
    lead: "I'm Victor: a cloud platform engineer who designs the infrastructure other engineers build on. I've led production migrations to AWS, cut deployment cycles by 92%, established IaC standards adopted across multiple squads, and coached engineers to certifications. Building toward Solutions Architecture, one migration at a time. Off the clock I'm a husband, a new dad, a gym regular, and someone who still believes in going ",
    leadEm: 'even further beyond.',
    stats: [
      { k: 'Years in Tech', v: '6', u: '+' },
      { k: 'AWS Certifications', v: '4', u: '' },
      { k: 'Services Migrated', v: '10', u: '+' },
      { k: 'Cups of Coffee', v: '\u221e', u: '' },
    ],
  },

  interests: [
    {
      tag: '01',
      icon: 'code',
      title: 'Platform Craft',
      body: 'IaC with CDK, container orchestration, and pipelines that do not wake you up at 3am.',
    },
    {
      tag: '02',
      icon: 'game',
      title: 'Open Worlds',
      body: "Ghost of Yotei, Assassin's Creed, anything with a map worth losing hours in. Give me a world worth exploring.",
    },
    {
      tag: '03',
      icon: 'anime',
      title: 'Anime',
      body: 'Shounen runs deep: DBZ, Naruto, One Piece, Bleach. Tokyo Ghoul hits different.',
    },
    {
      tag: '04',
      icon: 'gym',
      title: 'Gym',
      body: 'The gym taught me that consistency beats intensity. Progress over perfection, rep by rep.',
    },
    {
      tag: '05',
      icon: 'family',
      title: 'Family',
      body: 'Husband and new dad. I love every minute of it.',
    },
    {
      tag: '06',
      icon: 'faith',
      title: 'Faith',
      body: 'Christian. Steadfastness through trials. Faith gives me strength to keep going.',
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
      body: 'Hip-hop, lo-fi, liquid DNB, and anime OSTs on loop while I ship.',
    },
  ],

  certs: [
    {
      name: 'AWS Solutions Architect -- Associate',
      issuer: 'Amazon Web Services',
      year: '2022',
      short: 'SAA-C03',
    },
    {
      name: 'AWS Developer -- Associate',
      issuer: 'Amazon Web Services',
      year: '2023',
      short: 'DVA-C02',
    },
    {
      name: 'AWS SysOps Administrator -- Associate',
      issuer: 'Amazon Web Services',
      year: '2023',
      short: 'SOA-C02',
    },
    {
      name: 'AWS DevOps Engineer -- Professional',
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
      desc: 'Containerised and migrated four on-prem legacy services to AWS using ECS, ECR, and CDK. First migration of its kind at the organisation -- now live in production.',
      stack: ['AWS CDK', 'ECS', 'ECR', 'Fargate', 'TypeScript'],
    },
    {
      idx: '02',
      name: 'DC Exit -- Shared Services Migration',
      desc: 'Designed and delivered the cloud infrastructure for a data centre exit. Architected networking to connect Dockerised services back to surviving on-prem systems with no significant support.',
      stack: ['AWS CDK', 'ECS', 'Direct Connect', 'VPC', 'TypeScript'],
    },
    {
      idx: '03',
      name: 'Pipeline Modernisation',
      desc: 'Migrated legacy CI/CD pipelines to a modern stack with integrated code quality gates and artifact management. Reduced Java pipeline execution time by 30-40%.',
      stack: ['Bitbucket Pipelines', 'SonarQube', 'JFrog', 'AWS'],
    },
    {
      idx: '04',
      name: 'Mobile DevOps Foundation',
      desc: 'Built the DevOps foundation from scratch for a React Native mobile application -- repositories, CI/CD pipelines, environments, and security scanning.',
      stack: ['Expo', 'AWS Amplify', 'MobSF', 'Bitbucket Pipelines'],
    },
    {
      idx: '05',
      name: 'Personal Portfolio Site',
      desc: 'Designed and shipped my own portfolio using React, Bun, and Cloudflare Pages with a Workers proxy for live Credly badge data. Deliberate aesthetic system built from scratch — colour tokens, typography, motion. Deployed with proper cache strategy, security headers, and IP controls. AI-assisted design and copy, human decisions throughout.',
      stack: ['React', 'Cloudflare Workers', 'Bun', 'Claude'],
      aiBuilt: true,
    },
  ],

  experience: [
    {
      title: 'Senior DevOps Engineer',
      company: 'UK Financial Services Group',
      date: '2022 -- Present',
      body: 'Technical lead for cloud migrations across multiple squads. Delivered four production services migrated to AWS ECS Fargate with zero customer downtime, extending CDK reference architecture now adopted organisation-wide. Cut Java pipeline execution time by 30-40% through pipeline modernisation and build image optimisation. Mentored 3 engineers toward career progression, including one AWS certification via 16 weeks of structured coaching.',
      tags: ['AWS CDK', 'ECS', 'Fargate', 'TypeScript', 'Bitbucket Pipelines'],
    },
    {
      title: 'DevOps Engineer',
      company: 'UK Financial Services Group',
      date: '2020 -- 2022',
      body: 'Pioneered CDK adoption as the first engineer to implement CDK Pipelines at the organisation. Built CI/CD from scratch, reducing deployment times from 80 minutes to 6 minutes (92% reduction). Promoted to Senior with three consecutive Extraordinary performance ratings.',
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
    '"Count it all joy, my brothers, when you meet trials of various kinds, for you know that the testing of your faith produces steadfastness." -- James 1:2-4',
};
