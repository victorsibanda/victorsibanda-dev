// Portfolio content — Victor Sibanda
// Last updated: April 2026
export const PORTFOLIO = {
  brand: 'V.S',
  name: 'Victor Sibanda',
  role: 'Cloud Solutions Architect · Platform Engineer',
  location: 'United Kingdom',
  tagline: 'When in doubt, just keep building.',
  status: 'Available for collaboration and consulting',

  about: {
    lead: "I'm Victor: a senior cloud engineer who designs the infrastructure other engineers build on. I've led zero-downtime AWS migrations, own the enterprise hybrid cloud networking pattern at my current organisation, and am engaged by the Solutions Architecture team as AWS SME on complex networking and security design. I cut a deployment cycle by 92%, established IaC standards adopted across multiple squads, and authored the AI engineering safeguards framework shared with leadership. Building toward Solutions Architecture, one migration at a time. Off the clock I'm a husband, a new dad, a gym regular, and someone who still believes in going ",
    leadEm: 'even further beyond.',
    stats: [
      { k: 'Years in Tech', v: '6', u: '+' },
      { k: 'AWS Certifications', v: '4', u: '' },
      { k: 'Services Migrated', v: '5', u: '+' },
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
      name: 'AWS Solutions Architect: Associate',
      issuer: 'Amazon Web Services',
      year: '2022',
      short: 'SAA-C03',
    },
    {
      name: 'AWS Developer: Associate',
      issuer: 'Amazon Web Services',
      year: '2023',
      short: 'DVA-C02',
    },
    {
      name: 'AWS SysOps Administrator: Associate',
      issuer: 'Amazon Web Services',
      year: '2023',
      short: 'SOA-C02',
    },
    {
      name: 'AWS DevOps Engineer: Professional',
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
      desc: 'Containerised and migrated four on-prem legacy services to AWS using ECS Fargate, ECR, and CDK with zero customer downtime. Independently owned design, build, and technical decisions. Extended the CDK reference architecture now adopted as the standard pattern for future on-prem to AWS migrations.',
      stack: ['AWS CDK', 'ECS Fargate', 'ECR', 'TypeScript'],
    },
    {
      idx: '02',
      name: 'DC Exit: Shared Services Migration',
      desc: 'Designed and delivered the cloud infrastructure for a data centre exit. Architected networking to connect containerised services back to surviving on-prem systems, first application of the CDK reference architecture later reused across the programme.',
      stack: ['AWS CDK', 'ECS Fargate', 'Direct Connect', 'VPC', 'TypeScript'],
    },
    {
      idx: '03',
      name: 'Enterprise Hybrid Cloud Connectivity',
      desc: 'Designed AWS to Azure hybrid networking using Direct Connect, Transit Gateway, Route 53 Resolver, and private DNS patterns. Now the enterprise standard for cross-cloud communication, adopted beyond the original project scope.',
      stack: ['AWS', 'Azure', 'Direct Connect', 'Transit Gateway', 'Route 53'],
    },
    {
      idx: '04',
      name: 'Pipeline Modernisation',
      desc: 'Migrated legacy CI/CD pipelines to a modern stack with integrated code quality gates and artifact management. Reduced Java pipeline execution time by 30 to 40 per cent by moving key dependencies into shared build images, a reusable pattern made available to all squads.',
      stack: ['Bitbucket Pipelines', 'SonarQube Cloud', 'JFrog', 'AWS'],
    },
    {
      idx: '05',
      name: 'AI Engineering Safeguards Framework',
      desc: 'Authored the first AI engineering safeguards framework at my current organisation, governing GitHub Copilot and LLM code assistant adoption across engineering teams. Defines conventions, infrastructure patterns, and responsible use guardrails. Shared with engineering leadership to inform organisation-wide LLM governance.',
      stack: ['GitHub Copilot', 'LLM Governance', 'SKILL.md', 'Agentic Patterns'],
    },
    {
      idx: '06',
      name: 'Mobile DevOps Foundation',
      desc: 'Built the DevOps foundation from scratch for a React Native mobile application: repositories, CI/CD pipelines, environments, and security scanning.',
      stack: ['Expo', 'AWS Amplify', 'MobSF', 'Bitbucket Pipelines'],
    },
    {
      idx: '07',
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
      date: 'Sep 2023 – Present',
      body: 'Technical lead on the Risk Enhancement product squad, driving architecture decisions and cross-squad standards. Engaged by the Solutions Architecture function as AWS SME on Lambda, VPC, and mTLS design. Designed the enterprise hybrid cloud connectivity pattern adopted organisation-wide. Led the Decision Service cloud migration of four legacy on-prem services to ECS Fargate with zero customer downtime. Authored the AI engineering safeguards framework shared with engineering leadership. Mentored three engineers toward career progression, including one through 16 weeks of structured coaching to AWS Solutions Architect Associate.',
      tags: ['AWS CDK', 'ECS Fargate', 'Direct Connect', 'Transit Gateway', 'TypeScript', 'mTLS'],
    },
    {
      title: 'Senior Platform Engineer',
      company: 'Kainos Software (UK Home Office)',
      date: 'Feb 2023 – Aug 2023',
      body: 'Embedded within the UK Home Office as platform engineer on GDS-compliant digital services. Redesigned CI/CD architecture using AWS CodePipeline with automated security scanning and compliance gates, reducing build and deployment times by 50 per cent. Designed AWS infrastructure (API Gateway, Lambda, ECS, RDS) for public sector digital services, with security controls appropriate to highly regulated government environments. Set containerisation patterns and AWS standards adopted by distributed teams across the programme.',
      tags: ['AWS CodePipeline', 'API Gateway', 'Lambda', 'ECS', 'RDS', 'GDS'],
    },
    {
      title: 'DevOps Engineer → Senior DevOps Engineer',
      company: 'UK Financial Services Group',
      date: 'Sep 2020 – Feb 2023',
      body: "Pioneered CDK adoption as the first engineer to implement CDK Pipelines at the organisation, creating reusable IaC patterns that accelerated infrastructure provisioning by 70 per cent. Reduced a flagship platform's deployment times from 80 minutes to 6 minutes, a 92 per cent reduction, by redesigning CI/CD from Bamboo to AWS CodeBuild with ES-Build optimisation. Delivered zero-downtime go-live for a multi-million-pound business finance portfolio. Built a greenfield serverless platform using Lambda, API Gateway, and EventBridge that set event-driven patterns for subsequent teams. Promoted to Senior on the strength of sustained platform delivery.",
      tags: ['AWS CDK', 'CodeBuild', 'Lambda', 'API Gateway', 'EventBridge', 'Serverless'],
    },
  ],

  credentials: {
    education: [
      {
        degree: 'BEng Electrical & Electronics Engineering',
        classification: 'First Class Honours',
        institution: 'University of Lincoln',
        date: '2017 – 2019',
        note: 'School Prize for Most Outstanding Overall Achievement',
      },
    ],
    awards: [
      {
        title: 'Innovation Award Winner',
        year: '2021',
        note: 'Recognised for pioneering CDK Pipelines adoption at the organisation',
      },
      {
        title: 'Innovation Award Nominee',
        year: '2024',
        note: null,
      },
    ],
    leadership: [
      {
        title: 'ILM Aspire Recognised Leadership Programme',
        issuer: 'Institute of Leadership & Management',
        year: '2026',
      },
    ],
  },

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
    '"Count it all joy, my brothers, when you meet trials of various kinds, for you know that the testing of your faith produces steadfastness." - James 1:2-4',
};
