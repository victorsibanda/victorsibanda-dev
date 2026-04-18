import { useState } from 'react';
import Icon from './Icons.jsx';

const Nav = ({ theme, onToggleTheme, activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const items = [
    { id: 'home', label: 'Home', num: '01' },
    { id: 'about', label: 'About', num: '02' },
    { id: 'certs', label: 'Certs', num: '03' },
    { id: 'projects', label: 'Projects', num: '04' },
    { id: 'experience', label: 'Experience', num: '05' },
    { id: 'interests', label: 'Interests', num: '06' },
    { id: 'contact', label: 'Contact', num: '07' },
  ];

  const jump = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="nav-container">
      <nav className="nav" aria-label="Main navigation">
        <a href="#home" className="brand" onClick={(e) => jump(e, 'home')}>
          <span className="dot"></span>
          <span className="name">V.Sibanda</span>
        </a>
        <div className="nav-links">
          {items.slice(1).map((it) => (
            <a
              key={it.id}
              href={`#${it.id}`}
              className={`link ${activeSection === it.id ? 'active' : ''}`}
              aria-current={activeSection === it.id ? 'page' : undefined}
              onClick={(e) => jump(e, it.id)}
            >
              <span className="num">{it.num}</span>
              <span>{it.label}</span>
            </a>
          ))}
        </div>
        <button className="theme-btn" onClick={onToggleTheme} aria-label="Toggle theme">
          <Icon name={theme === 'dark' ? 'sun' : 'moon'} />
        </button>
        <button
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="3" x2="15" y2="15" />
              <line x1="15" y1="3" x2="3" y2="15" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="2" y1="5" x2="16" y2="5" />
              <line x1="2" y1="9" x2="16" y2="9" />
              <line x1="2" y1="13" x2="16" y2="13" />
            </svg>
          )}
        </button>
      </nav>
      {isOpen && (
        <div className="nav-mobile-menu">
          {items.map((it) => (
            <a
              key={it.id}
              href={`#${it.id}`}
              className={`link ${activeSection === it.id ? 'active' : ''}`}
              aria-current={activeSection === it.id ? 'page' : undefined}
              onClick={(e) => jump(e, it.id)}
            >
              <span className="num">{it.num}</span>
              <span>{it.label}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Nav;
