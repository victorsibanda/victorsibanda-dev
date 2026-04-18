import { render } from '@testing-library/react';
import { Icon } from '../components/Icons.jsx';

describe('Icon component', () => {
  it('renders a span wrapper with correct dimensions', () => {
    const { container } = render(<Icon name="sun" size={24} />);
    const span = container.querySelector('span');
    expect(span).toBeInTheDocument();
    expect(span.style.width).toBe('24px');
    expect(span.style.height).toBe('24px');
  });

  it('renders an SVG for every named icon', () => {
    const names = [
      'sun',
      'moon',
      'sliders',
      'arrow',
      'arrowUp',
      'pin',
      'mail',
      'linkedin',
      'github',
      'code',
      'game',
      'anime',
      'gym',
      'family',
      'faith',
      'learn',
      'music',
      'badge',
    ];
    names.forEach((name) => {
      const { container } = render(<Icon name={name} />);
      expect(container.querySelector('svg')).toBeInTheDocument();
    });
  });

  it('falls back to the code icon for an unknown name', () => {
    const { container } = render(<Icon name="nonexistent" />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('defaults size to 16 when no size prop is given', () => {
    const { container } = render(<Icon name="mail" />);
    const span = container.querySelector('span');
    expect(span.style.width).toBe('16px');
    expect(span.style.height).toBe('16px');
  });
});
