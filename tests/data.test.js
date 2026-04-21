import { PORTFOLIO } from '../src/data.js';

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

  describe('credentials', () => {
    it('exposes education, awards, and leadership sub-arrays', () => {
      expect(PORTFOLIO.credentials).toBeDefined();
      expect(Array.isArray(PORTFOLIO.credentials.education)).toBe(true);
      expect(Array.isArray(PORTFOLIO.credentials.awards)).toBe(true);
      expect(Array.isArray(PORTFOLIO.credentials.leadership)).toBe(true);
      expect(PORTFOLIO.credentials.education.length).toBeGreaterThan(0);
      expect(PORTFOLIO.credentials.awards.length).toBeGreaterThan(0);
      expect(PORTFOLIO.credentials.leadership.length).toBeGreaterThan(0);
    });

    it('education entries have degree/classification/institution/date', () => {
      PORTFOLIO.credentials.education.forEach((e) => {
        expect(typeof e.degree).toBe('string');
        expect(typeof e.classification).toBe('string');
        expect(typeof e.institution).toBe('string');
        expect(typeof e.date).toBe('string');
        if ('note' in e && e.note !== null) {
          expect(typeof e.note).toBe('string');
        }
      });
    });

    it('award entries have title/year with optional note', () => {
      PORTFOLIO.credentials.awards.forEach((a) => {
        expect(typeof a.title).toBe('string');
        expect(typeof a.year).toBe('string');
        expect('note' in a).toBe(true);
        if (a.note !== null) {
          expect(typeof a.note).toBe('string');
        }
      });
    });

    it('leadership entries have title/issuer/year', () => {
      PORTFOLIO.credentials.leadership.forEach((l) => {
        expect(typeof l.title).toBe('string');
        expect(typeof l.issuer).toBe('string');
        expect(typeof l.year).toBe('string');
      });
    });
  });
});
