// Top floating nav
const Nav = ({ theme, onToggleTheme, activeSection }) => {
  const items = [
    { id: 'home', label: 'Home', num: '01' },
    { id: 'about', label: 'About', num: '02' },
    { id: 'certs', label: 'Certs', num: '03' },
    { id: 'projects', label: 'Projects', num: '04' },
    { id: 'experience', label: 'Experience', num: '05' },
    { id: 'interests', label: 'Interests', num: '06' },
    { id: 'contact', label: 'Contact', num: '07' }
  ];

  const jump = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav className="nav">
      <a href="#home" className="brand" onClick={(e) => jump(e, 'home')}>
        <span className="dot"></span>
        <span className="name">V.Sibanda</span>
      </a>
      {items.slice(1).map(it => (
        <a key={it.id} href={`#${it.id}`}
           className={`link ${activeSection === it.id ? 'active' : ''}`}
           onClick={(e) => jump(e, it.id)}>
          <span className="num">{it.num}</span>
          <span>{it.label}</span>
        </a>
      ))}
      <button className="theme-btn" onClick={onToggleTheme} aria-label="Toggle theme">
        <Icon name={theme === 'dark' ? 'sun' : 'moon'} />
      </button>
    </nav>
  );
};

window.Nav = Nav;
