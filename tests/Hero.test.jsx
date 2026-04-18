import { render, screen } from '@testing-library/react';
import { Hero } from '../components/Hero.jsx';

beforeEach(() => {
  window.scrollTo = vi.fn();
  window.scrollY = 0;
  window.__resources = undefined;
  document.getElementById = vi.fn().mockReturnValue({
    getBoundingClientRect: () => ({ top: 200 }),
  });
});

describe('Hero component', () => {
  it('renders the status badge from PORTFOLIO', () => {
    render(<Hero />);
    expect(screen.getByText(window.PORTFOLIO.status)).toBeInTheDocument();
  });

  it('renders the tagline from PORTFOLIO', () => {
    render(<Hero />);
    expect(screen.getByText(window.PORTFOLIO.tagline)).toBeInTheDocument();
  });

  it('renders the "See the work" CTA', () => {
    render(<Hero />);
    expect(screen.getByText('See the work')).toBeInTheDocument();
  });

  it('renders the "Get in touch" CTA', () => {
    render(<Hero />);
    expect(screen.getByText('Get in touch')).toBeInTheDocument();
  });

  it('renders the headshot image with correct alt text', () => {
    render(<Hero />);
    const img = screen.getByAltText('Victor Sibanda');
    expect(img).toBeInTheDocument();
    expect(img.getAttribute('src')).toContain('headshot');
  });

  it('uses window.__resources.headshot when available', () => {
    window.__resources = { headshot: 'assets/custom.jpg' };
    render(<Hero />);
    expect(screen.getByAltText('Victor Sibanda').getAttribute('src')).toBe('assets/custom.jpg');
  });

  it('renders the ticker track with tech terms', () => {
    const { container } = render(<Hero />);
    const ticker = container.querySelector('.ticker-track');
    expect(ticker).toBeInTheDocument();
    expect(ticker.textContent).toContain('AWS');
    expect(ticker.textContent).toContain('AWS CDK');
    expect(ticker.textContent).toContain('PLATFORM ENGINEERING');
  });


});
