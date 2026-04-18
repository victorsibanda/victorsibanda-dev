// Hero section
const Hero = () => {
  const d = window.PORTFOLIO;
  return (
    <section id="home" className="hero">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <div className="hero-status">
              <span className="pulse"></span>
              <span>{d.status}</span>
            </div>
            <h1>
              Cloud <span className="accent">architect</span>
              <br />+ platform <span className="accent-2">engineer</span>
              <span className="power-badge play-text">LVL ∞ · going beyond</span>
            </h1>
            <p className="tagline">{d.tagline}</p>
            <div className="hero-cta">
              <a
                className="btn primary"
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('projects');
                  window.scrollTo({
                    top: el.getBoundingClientRect().top + window.scrollY - 80,
                    behavior: 'smooth',
                  });
                }}
              >
                See the work
                <span className="arr">
                  <Icon name="arrow" size={14} />
                </span>
              </a>
              <a
                className="btn"
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('contact');
                  window.scrollTo({
                    top: el.getBoundingClientRect().top + window.scrollY - 80,
                    behavior: 'smooth',
                  });
                }}
              >
                Get in touch
              </a>
            </div>
          </div>
          <div>
            <div className="shot-wrap">
              <div className="shot">
                <img
                  src={(window.__resources && window.__resources.headshot) || 'assets/headshot.jpg'}
                  alt="Victor Sibanda"
                />
              </div>
              <span className="shot-corner tl"></span>
              <span className="shot-corner tr"></span>
              <span className="shot-corner bl"></span>
              <span className="shot-corner br"></span>
            </div>
          </div>
        </div>
      </div>

      <div className="ticker">
        <div className="ticker-track">
          <span>
            AZURE <span className="sep">+</span> AWS <span className="sep">+</span> KUBERNETES{' '}
            <span className="sep">+</span> TERRAFORM <span className="sep">+</span> PLATFORM
            ENGINEERING <span className="sep">+</span> FINOPS <span className="sep">+</span>{' '}
            OBSERVABILITY <span className="sep">+</span> ZERO-TRUST <span className="sep">+</span>{' '}
            DEVELOPER EXPERIENCE <span className="sep">◆</span>
          </span>
          <span aria-hidden="true">
            AZURE <span className="sep">+</span> AWS <span className="sep">+</span> KUBERNETES{' '}
            <span className="sep">+</span> TERRAFORM <span className="sep">+</span> PLATFORM
            ENGINEERING <span className="sep">+</span> FINOPS <span className="sep">+</span>{' '}
            OBSERVABILITY <span className="sep">+</span> ZERO-TRUST <span className="sep">+</span>{' '}
            DEVELOPER EXPERIENCE <span className="sep">◆</span>
          </span>
        </div>
      </div>
    </section>
  );
};

window.Hero = Hero;
export { Hero };
