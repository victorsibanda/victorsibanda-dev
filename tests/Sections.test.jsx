import { render, screen, waitFor } from '@testing-library/react';
import {
  Certs,
  Projects,
  Experience,
  Credentials,
  Contact,
  Foot,
} from '../src/components/Sections.jsx';
import { PORTFOLIO } from '../src/data.js';

describe('Certs component', () => {
  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn());
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('shows 3 loading skeletons initially', () => {
    fetch.mockReturnValue(new Promise(() => {}));
    const { container } = render(<Certs />);
    expect(container.querySelectorAll('.cert').length).toBe(3);
  });

  it('falls back to data.js certs when fetch fails', async () => {
    fetch.mockRejectedValue(new Error('Network error'));
    render(<Certs />);
    await waitFor(() => {
      expect(screen.getByText(PORTFOLIO.certs[0].name)).toBeInTheDocument();
    });
  });

  it('falls back to data.js certs when API returns empty data', async () => {
    fetch.mockResolvedValue({ ok: true, json: async () => ({ data: [] }) });
    render(<Certs />);
    await waitFor(() => {
      expect(screen.getByText(PORTFOLIO.certs[0].name)).toBeInTheDocument();
    });
  });

  it('shows live badge names when API returns populated data', async () => {
    fetch.mockResolvedValue({
      ok: true,
      json: async () => ({
        data: [
          {
            id: 'badge-1',
            badge_template: {
              name: 'AWS Solutions Architect',
              issuer: { name: 'Amazon Web Services' },
              image_url: 'https://example.com/badge.png',
            },
            issued_at_date: '2022-06-01',
          },
        ],
      }),
    });
    render(<Certs />);
    await waitFor(() => {
      expect(screen.getByText('AWS Solutions Architect')).toBeInTheDocument();
    });
  });

  it('falls back to data.js when API response is not ok', async () => {
    fetch.mockResolvedValue({ ok: false, status: 502 });
    render(<Certs />);
    await waitFor(() => {
      expect(screen.getByText(PORTFOLIO.certs[0].name)).toBeInTheDocument();
    });
  });
});

describe('Projects component', () => {
  it('renders all projects from PORTFOLIO', () => {
    render(<Projects />);
    PORTFOLIO.projects.forEach((p) => {
      expect(screen.getByText(p.name)).toBeInTheDocument();
    });
  });

  it('renders project index numbers', () => {
    render(<Projects />);
    PORTFOLIO.projects.forEach((p) => {
      expect(screen.getByText(p.idx)).toBeInTheDocument();
    });
  });

  it('renders tech stack chips for each project', () => {
    render(<Projects />);
    PORTFOLIO.projects.forEach((p) => {
      p.stack.forEach((s) => {
        expect(screen.getAllByText(s).length).toBeGreaterThan(0);
      });
    });
  });
});

describe('Experience component', () => {
  it('renders all experience titles', () => {
    render(<Experience />);
    PORTFOLIO.experience.forEach((e) => {
      expect(screen.getAllByText(e.title, { exact: false }).length).toBeGreaterThan(0);
    });
  });

  it('renders company names', () => {
    render(<Experience />);
    PORTFOLIO.experience.forEach((e) => {
      expect(screen.getAllByText(e.company).length).toBeGreaterThan(0);
    });
  });

  it('renders date ranges', () => {
    render(<Experience />);
    PORTFOLIO.experience.forEach((e) => {
      expect(screen.getByText(e.date)).toBeInTheDocument();
    });
  });

  it('renders tag chips', () => {
    render(<Experience />);
    PORTFOLIO.experience[0].tags.forEach((t) => {
      expect(screen.getAllByText(t).length).toBeGreaterThan(0);
    });
  });
});

describe('Credentials component', () => {
  it('renders all education degrees', () => {
    render(<Credentials />);
    PORTFOLIO.credentials.education.forEach((e) => {
      expect(screen.getByText(e.degree)).toBeInTheDocument();
    });
  });

  it('renders all award titles', () => {
    render(<Credentials />);
    PORTFOLIO.credentials.awards.forEach((a) => {
      expect(screen.getAllByText(a.title, { exact: false }).length).toBeGreaterThan(0);
    });
  });

  it('renders all leadership titles', () => {
    render(<Credentials />);
    PORTFOLIO.credentials.leadership.forEach((l) => {
      expect(screen.getByText(l.title)).toBeInTheDocument();
    });
  });
});

describe('Contact component', () => {
  it('renders all contact entry labels and values', () => {
    render(<Contact />);
    PORTFOLIO.contact.forEach((c) => {
      expect(screen.getByText(c.lbl)).toBeInTheDocument();
      expect(screen.getByText(c.val)).toBeInTheDocument();
    });
  });

  it('renders email link with correct href', () => {
    render(<Contact />);
    const entry = PORTFOLIO.contact.find((c) => c.lbl === 'Email');
    expect(screen.getByText(entry.val).closest('a')).toHaveAttribute('href', entry.href);
  });

  it('renders external links with target=_blank and rel=noreferrer', () => {
    render(<Contact />);
    const entry = PORTFOLIO.contact.find((c) => c.lbl === 'GitHub');
    const link = screen.getByText(entry.val).closest('a');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noreferrer');
  });
});

describe('Foot component', () => {
  it('renders the verse from PORTFOLIO', () => {
    render(<Foot />);
    expect(screen.getByText(PORTFOLIO.verse)).toBeInTheDocument();
  });

  it('renders the footer element', () => {
    const { container } = render(<Foot />);
    expect(container.querySelector('footer')).toBeInTheDocument();
  });

  it('renders VICTOR SIBANDA in the copyright line', () => {
    const { container } = render(<Foot />);
    expect(container.textContent).toContain('VICTOR SIBANDA');
  });
});
