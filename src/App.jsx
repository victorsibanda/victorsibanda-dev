import { useState, useEffect } from 'react';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import { About, Interests } from './components/About.jsx';
import { Certs, Projects, Experience, Contact, Foot } from './components/Sections.jsx';

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('vs-theme') || 'dark');
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('vs-theme', theme);
  }, [theme]);

  // scroll spy
  useEffect(() => {
    const ids = ['home', 'about', 'certs', 'projects', 'experience', 'interests', 'contact'];
    const onScroll = () => {
      const y = window.scrollY + 160;
      let current = 'home';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      }
      setActiveSection(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // reveal on scroll
  useEffect(() => {
    const els = document.querySelectorAll('section, .tile, .cert, .proj, .exp, .contact-row');
    els.forEach((e) => e.classList.add('reveal'));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('in');
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Nav
        theme={theme}
        onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        activeSection={activeSection}
      />
      <main id="main-content">
        <Hero />
        <About />
        <Certs />
        <Projects />
        <Experience />
        <Interests />
        <Contact />
        <Foot />
      </main>
    </>
  );
}
