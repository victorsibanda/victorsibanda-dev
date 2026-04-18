import { render, screen, fireEvent } from '@testing-library/react';
import { Tweaks } from '../components/Tweaks.jsx';

describe('Tweaks component', () => {
  it('renders nothing when editMode is false', () => {
    const { container } = render(<Tweaks editMode={false} play={0.5} setPlay={() => {}} />);
    expect(container.firstChild).toBeNull();
  });

  it('renders the panel when editMode is true', () => {
    render(<Tweaks editMode={true} play={0.5} setPlay={() => {}} />);
    expect(screen.getByText('Tweaks')).toBeInTheDocument();
  });

  it('shows SUIT MODE when play < 0.15', () => {
    render(<Tweaks editMode={true} play={0.1} setPlay={() => {}} />);
    expect(screen.getByText('SUIT MODE')).toBeInTheDocument();
  });

  it('shows NORMAL when play is between 0.15 and 0.4', () => {
    render(<Tweaks editMode={true} play={0.3} setPlay={() => {}} />);
    expect(screen.getByText('NORMAL')).toBeInTheDocument();
  });

  it('shows SUPER SAIYAN when play is between 0.4 and 0.65', () => {
    render(<Tweaks editMode={true} play={0.5} setPlay={() => {}} />);
    expect(screen.getByText('SUPER SAIYAN')).toBeInTheDocument();
  });

  it('shows SSJ 2 when play is between 0.65 and 0.85', () => {
    render(<Tweaks editMode={true} play={0.75} setPlay={() => {}} />);
    expect(screen.getByText('SSJ 2')).toBeInTheDocument();
  });

  it('shows EVEN FURTHER BEYOND at max playfulness', () => {
    render(<Tweaks editMode={true} play={1.0} setPlay={() => {}} />);
    expect(screen.getByText('EVEN FURTHER BEYOND')).toBeInTheDocument();
  });

  it('calls setPlay with scaled value on slider change', () => {
    const setPlay = vi.fn();
    const { container } = render(<Tweaks editMode={true} play={0.5} setPlay={setPlay} />);
    fireEvent.change(container.querySelector('input[type="range"]'), {
      target: { value: '75' },
    });
    expect(setPlay).toHaveBeenCalledWith(0.75);
  });

  it('displays slider value as play * 100', () => {
    const { container } = render(<Tweaks editMode={true} play={0.42} setPlay={() => {}} />);
    expect(container.querySelector('input[type="range"]').value).toBe('42');
  });
});
