import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Icon from '../src/components/Icons.jsx';

global.React = React;
global.ReactDOM = ReactDOM;
global.Icon = Icon;

global.window.PORTFOLIO = {
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
    { tag: '01', icon: 'code', title: 'Platform Craft', body: 'IaC with CDK and Terraform.' },
    { tag: '02', icon: 'game', title: 'Gamer', body: "Assassin's Creed, GTA." },
    { tag: '03', icon: 'anime', title: 'Anime', body: 'DBZ, Naruto, Bleach, One Piece.' },
    { tag: '04', icon: 'gym', title: 'Gym', body: 'Training like a Saiyan most mornings.' },
    { tag: '05', icon: 'family', title: 'Family', body: 'Husband and new dad.' },
    { tag: '06', icon: 'faith', title: 'Faith', body: 'Christian. Steadfastness through trials.' },
    { tag: '07', icon: 'learn', title: 'Learning', body: 'Always a new cert or rabbit-hole.' },
    { tag: '08', icon: 'music', title: 'Build Mode', body: 'Hip-hop, lo-fi, and anime OSTs.' },
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
  ],
  projects: [
    {
      idx: '01',
      name: 'Legacy Services Cloud Migration',
      desc: 'Containerised and migrated four on-prem legacy services to AWS.',
      stack: ['AWS CDK', 'ECS', 'ECR', 'Fargate', 'TypeScript'],
    },
    {
      idx: '02',
      name: 'DC Exit — Shared Services Migration',
      desc: 'Designed and delivered infrastructure for a data centre exit.',
      stack: ['AWS CDK', 'ECS', 'Direct Connect', 'VPC', 'TypeScript'],
    },
    {
      idx: '03',
      name: 'Pipeline Modernisation',
      desc: 'Migrated legacy Bamboo pipelines to Bitbucket Pipelines.',
      stack: ['Bitbucket Pipelines', 'SonarQube', 'JFrog', 'AWS'],
    },
    {
      idx: '04',
      name: 'Mobile DevOps Foundation',
      desc: 'Built the DevOps foundation for a React Native mobile application.',
      stack: ['Expo', 'AWS Amplify', 'MobSF', 'Bitbucket Pipelines'],
    },
  ],
  experience: [
    {
      title: 'Senior DevOps Engineer',
      company: 'UK Financial Services Group',
      date: '2022 — Present',
      body: 'Technical lead for cloud migrations across multiple squads.',
      tags: ['AWS CDK', 'ECS', 'Fargate', 'TypeScript', 'Bitbucket Pipelines'],
    },
    {
      title: 'DevOps Engineer',
      company: 'UK Financial Services Group',
      date: '2020 — 2022',
      body: 'Pioneered CDK Pipelines adoption — first use at the organisation.',
      tags: ['AWS CDK', 'CodeBuild', 'Serverless', 'TypeScript', 'IaC'],
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
      { title: 'Innovation Award Winner', year: '2021', note: 'Recognised for CDK Pipelines.' },
      { title: 'Innovation Award Nominee', year: '2024', note: null },
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
    '"Count it all joy, my brothers, when you meet trials of various kinds, for you know that the testing of your faith produces steadfastness." — James 1:2–4',
};

global.IS_REACT_ACT_ENVIRONMENT = true;

afterEach(() => {
  cleanup();
});
