import { PORTFOLIO } from '../data.js';

describe('PORTFOLIO data shape', () => {
  it('has required top-level string fields', () => {
    expect(typeof PORTFOLIO.name).toBe('string');
    expect(typeof PORTFOLIO.role).toBe('string');
    expect(typeof PORTFOLIO.tagline).toBe('string');
    expect(typeof PORTFOLIO.status).toBe('string');
    expect(typeof PORTFOLIO.verse).toBe('string');
  });

  it('about.stats is a non-empty array with k/v/u shape', () => {
    expect(Array.isArray(PORTFOLIO.about.stats)).toBe(true);
    expect(PORTFOLIO.about.stats.length).toBeGreaterThan(0);
    PORTFOLIO.about.stats.forEach((s) => {
      expect(s).toHaveProperty('k');
      expect(s).toHaveProperty('v');
      expect(s).toHaveProperty('u');
    });
  });

  it('interests have required tag/icon/title/body fields', () => {
    expect(PORTFOLIO.interests.length).toBeGreaterThan(0);
    PORTFOLIO.interests.forEach((i) => {
      expect(i).toHaveProperty('tag');
      expect(i).toHaveProperty('icon');
      expect(i).toHaveProperty('title');
      expect(i).toHaveProperty('body');
    });
  });

  it('certs have name/issuer/year/short fields', () => {
    expect(PORTFOLIO.certs.length).toBeGreaterThan(0);
    PORTFOLIO.certs.forEach((c) => {
      expect(c).toHaveProperty('name');
      expect(c).toHaveProperty('issuer');
      expect(c).toHaveProperty('year');
      expect(c).toHaveProperty('short');
    });
  });

  it('projects have idx/name/desc/stack fields', () => {
    PORTFOLIO.projects.forEach((p) => {
      expect(p).toHaveProperty('idx');
      expect(p).toHaveProperty('name');
      expect(p).toHaveProperty('desc');
      expect(Array.isArray(p.stack)).toBe(true);
      expect(p.stack.length).toBeGreaterThan(0);
    });
  });

  it('experience entries have title/company/date/body/tags', () => {
    PORTFOLIO.experience.forEach((e) => {
      expect(e).toHaveProperty('title');
      expect(e).toHaveProperty('company');
      expect(e).toHaveProperty('date');
      expect(e).toHaveProperty('body');
      expect(Array.isArray(e.tags)).toBe(true);
    });
  });

  it('contact entries have lbl/val/href/icon', () => {
    PORTFOLIO.contact.forEach((c) => {
      expect(c).toHaveProperty('lbl');
      expect(c).toHaveProperty('val');
      expect(c).toHaveProperty('href');
      expect(c).toHaveProperty('icon');
    });
  });
});
