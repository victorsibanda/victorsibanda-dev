import { render, screen, fireEvent } from '@testing-library/react';
import Nav from '../src/components/Nav.jsx';

beforeEach(() => {
  document.getElementById = vi.fn().mockReturnValue({
    getBoundingClientRect: () => ({ top: 0 }),
  });
  window.scrollTo = vi.fn();
  window.scrollY = 0;
});

describe('Nav component', () => {
  it('renders the brand name', () => {
    render(<Nav theme="dark" onToggleTheme={() => {}} activeSection="home" />);
    expect(screen.getByText('V.Sibanda')).toBeInTheDocument();
  });

  it('renders all 6 navigation links', () => {
    render(<Nav theme="dark" onToggleTheme={() => {}} activeSection="home" />);
    ['About', 'Certs', 'Projects', 'Experience', 'Interests', 'Contact'].forEach((label) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });

  it('applies active class to the currently active section link', () => {
    render(<Nav theme="dark" onToggleTheme={() => {}} activeSection="projects" />);
    expect(screen.getByText('Projects').closest('a')).toHaveClass('active');
  });

  it('does not apply active class to inactive links', () => {
    render(<Nav theme="dark" onToggleTheme={() => {}} activeSection="projects" />);
    expect(screen.getByText('About').closest('a')).not.toHaveClass('active');
  });

  it('renders the theme toggle button', () => {
    const { container } = render(
      <Nav theme="dark" onToggleTheme={() => {}} activeSection="home" />
    );
    expect(container.querySelector('.theme-btn')).toBeInTheDocument();
  });

  it('calls onToggleTheme when theme button is clicked', () => {
    const toggle = vi.fn();
    const { container } = render(<Nav theme="dark" onToggleTheme={toggle} activeSection="home" />);
    fireEvent.click(container.querySelector('.theme-btn'));
    expect(toggle).toHaveBeenCalledTimes(1);
  });

  describe('hamburger menu', () => {
    it('renders the hamburger button', () => {
      const { container } = render(
        <Nav theme="dark" onToggleTheme={() => {}} activeSection="home" />
      );
      expect(container.querySelector('.hamburger')).toBeInTheDocument();
    });

    it('does not show mobile menu by default', () => {
      const { container } = render(
        <Nav theme="dark" onToggleTheme={() => {}} activeSection="home" />
      );
      expect(container.querySelector('.nav-mobile-menu')).not.toBeInTheDocument();
    });

    it('opens mobile menu when hamburger is clicked', () => {
      const { container } = render(
        <Nav theme="dark" onToggleTheme={() => {}} activeSection="home" />
      );
      fireEvent.click(container.querySelector('.hamburger'));
      expect(container.querySelector('.nav-mobile-menu')).toBeInTheDocument();
    });

    it('closes mobile menu when hamburger is clicked again', () => {
      const { container } = render(
        <Nav theme="dark" onToggleTheme={() => {}} activeSection="home" />
      );
      fireEvent.click(container.querySelector('.hamburger'));
      fireEvent.click(container.querySelector('.hamburger'));
      expect(container.querySelector('.nav-mobile-menu')).not.toBeInTheDocument();
    });

    it('mobile menu includes all 7 links including Home', () => {
      const { container } = render(
        <Nav theme="dark" onToggleTheme={() => {}} activeSection="home" />
      );
      fireEvent.click(container.querySelector('.hamburger'));
      const menu = container.querySelector('.nav-mobile-menu');
      ['Home', 'About', 'Certs', 'Projects', 'Experience', 'Interests', 'Contact'].forEach(
        (label) => {
          expect(menu).toHaveTextContent(label);
        }
      );
    });

    it('closes mobile menu when a link is clicked', () => {
      const { container } = render(
        <Nav theme="dark" onToggleTheme={() => {}} activeSection="home" />
      );
      fireEvent.click(container.querySelector('.hamburger'));
      const menu = container.querySelector('.nav-mobile-menu');
      fireEvent.click(menu.querySelector('a'));
      expect(container.querySelector('.nav-mobile-menu')).not.toBeInTheDocument();
    });

    it('hamburger has aria-expanded reflecting open state', () => {
      const { container } = render(
        <Nav theme="dark" onToggleTheme={() => {}} activeSection="home" />
      );
      const btn = container.querySelector('.hamburger');
      expect(btn).toHaveAttribute('aria-expanded', 'false');
      fireEvent.click(btn);
      expect(btn).toHaveAttribute('aria-expanded', 'true');
    });
  });
});
