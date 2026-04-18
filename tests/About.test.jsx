import { render, screen } from '@testing-library/react';
import { About, Interests } from '../src/components/About.jsx';
import { PORTFOLIO } from '../src/data.js';

describe('About component', () => {
  it('renders the em text from PORTFOLIO', () => {
    render(<About />);
    expect(screen.getByText(PORTFOLIO.about.leadEm)).toBeInTheDocument();
  });

  it('renders all stat card keys', () => {
    render(<About />);
    PORTFOLIO.about.stats.forEach((s) => {
      expect(screen.getByText(s.k)).toBeInTheDocument();
    });
  });

  it('renders the section label number 02', () => {
    const { container } = render(<About />);
    expect(container.querySelector('.num').textContent).toBe('02 /');
  });
});

describe('Interests component', () => {
  it('renders a tile for each interest', () => {
    const { container } = render(<Interests />);
    expect(container.querySelectorAll('.tile').length).toBe(PORTFOLIO.interests.length);
  });

  it('renders each interest title', () => {
    render(<Interests />);
    PORTFOLIO.interests.forEach((i) => {
      expect(screen.getByText(i.title)).toBeInTheDocument();
    });
  });

  it('renders each interest tag number', () => {
    render(<Interests />);
    PORTFOLIO.interests.forEach((i) => {
      expect(screen.getByText(i.tag)).toBeInTheDocument();
    });
  });
});
