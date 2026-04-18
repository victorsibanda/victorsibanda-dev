import { render, screen, fireEvent } from '@testing-library/react';
import '../components/Nav.jsx';
const Nav = global.Nav;

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
});
