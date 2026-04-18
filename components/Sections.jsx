// Certs section — fetches live badge data from Credly; falls back to data.js
const Certs = () => {
  const d = window.PORTFOLIO;
  const { useState, useEffect } = React;
  const [badges, setBadges] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/badges')
      .then((r) => {
        if (!r.ok) throw new Error(r.status);
        return r.json();
      })
      .then((json) => {
        const data = json && json.data;
        if (Array.isArray(data) && data.length > 0) {
          setBadges(data);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  // Build display list: Credly data when available, else data.js fallback
  const items =
    !loading && badges
      ? badges.map((b, i) => ({
          key: b.id || i,
          name: b.badge_template?.name || b.name || '',
          issuer: b.badge_template?.issuer?.name || '',
          year: b.issued_at_date
            ? b.issued_at_date.slice(0, 4)
            : b.issued_at
              ? b.issued_at.slice(0, 4)
              : '',
          image: b.badge_template?.image_url || b.image?.url || null,
          short: null,
        }))
      : null;

  return (
    <section id="certs">
      <div className="wrap">
        <div className="section-label">
          <span className="num">03 /</span>
          <span>Certifications — stamps on the journey</span>
          <span className="bar"></span>
        </div>
        <div className="cert-grid">
          {loading
            ? // Loading skeleton
              [0, 1, 2].map((i) => (
                <div className="cert" key={i} style={{ opacity: 0.4 }}>
                  <div className="badge-ring" style={{ background: 'var(--border)' }}>
                    <div></div>
                  </div>
                  <div>
                    <div
                      className="issuer"
                      style={{
                        background: 'var(--border)',
                        width: '60%',
                        height: 10,
                        borderRadius: 4,
                      }}
                    ></div>
                    <div
                      className="name"
                      style={{
                        background: 'var(--border)',
                        width: '80%',
                        height: 14,
                        borderRadius: 4,
                        marginTop: 6,
                      }}
                    ></div>
                  </div>
                </div>
              ))
            : items
              ? items.map((c) => (
                  <div className="cert" key={c.key}>
                    <div className="year">{c.year}</div>
                    <img
                      src={c.image}
                      alt={c.name}
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: '50%',
                        objectFit: 'contain',
                        background: 'var(--card-2)',
                      }}
                    />
                    <div>
                      <div className="issuer">{c.issuer}</div>
                      <div className="name">{c.name}</div>
                    </div>
                  </div>
                ))
              : // Fallback: static data.js entries
                d.certs.map((c) => (
                  <div className="cert" key={c.name}>
                    <div className="year">{c.year}</div>
                    <div className="badge-ring">
                      <div>{c.short}</div>
                    </div>
                    <div>
                      <div className="issuer">{c.issuer}</div>
                      <div className="name">{c.name}</div>
                    </div>
                  </div>
                ))}
        </div>
      </div>
    </section>
  );
};

window.Certs = Certs;

// Projects section
const Projects = () => {
  const d = window.PORTFOLIO;
  return (
    <section id="projects">
      <div className="wrap">
        <div className="section-label">
          <span className="num">04 /</span>
          <span>Selected projects</span>
          <span className="bar"></span>
        </div>
        <div className="proj-list">
          {d.projects.map((p) => (
            <div className="proj" key={p.idx}>
              <div className="idx">{p.idx}</div>
              <div>
                <h3>{p.name}</h3>
              </div>
              <div>
                <div className="desc">{p.desc}</div>
                <div className="stack" style={{ marginTop: 10, justifyContent: 'flex-start' }}>
                  {p.stack.map((s) => (
                    <span className="chip" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="arrow">
                <Icon name="arrowUp" size={14} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

window.Projects = Projects;

// Experience timeline
const Experience = () => {
  const d = window.PORTFOLIO;
  return (
    <section id="experience">
      <div className="wrap">
        <div className="section-label">
          <span className="num">05 /</span>
          <span>Experience — the path so far</span>
          <span className="bar"></span>
        </div>
        <div className="timeline">
          {d.experience.map((e) => (
            <div className="exp" key={e.title + e.date}>
              <div className="exp-head">
                <div className="exp-title">
                  {e.title} · <span className="co">{e.company}</span>
                </div>
                <div className="exp-date">{e.date}</div>
              </div>
              <p>{e.body}</p>
              <div className="tags">
                {e.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

window.Experience = Experience;

// Contact
const Contact = () => {
  const d = window.PORTFOLIO;
  return (
    <section id="contact">
      <div className="wrap">
        <div className="section-label">
          <span className="num">07 /</span>
          <span>Contact — let's build something</span>
          <span className="bar"></span>
        </div>
        <div className="contact-card">
          <div>
            <h2>
              Got a platform puzzle
              <br />
              or just wanna <em>talk anime?</em>
            </h2>
            <p className="sub">
              I'm always up for a chat — whether it's a consulting conversation, a collab, or
              deciding once and for all whether Gear 5 beats Ultra Instinct.
            </p>
            <div style={{ position: 'relative' }}>
              <span
                className="mono"
                style={{
                  fontSize: 11,
                  color: 'var(--text-mute)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                RESPONSE TIME · &lt; 24H
              </span>
            </div>
          </div>
          <div className="contact-list">
            {d.contact.map((c) => (
              <a
                className="contact-row"
                key={c.lbl}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
              >
                <div className="left">
                  <div className="icon">
                    <Icon name={c.icon} size={16} />
                  </div>
                  <div>
                    <div className="lbl">{c.lbl}</div>
                    <div className="val">{c.val}</div>
                  </div>
                </div>
                <Icon name="arrowUp" size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

window.Contact = Contact;

// Footer
const Foot = () => {
  const d = window.PORTFOLIO;
  return (
    <footer>
      <div className="wrap foot-grid">
        <div>© 2026 VICTOR SIBANDA · BUILT WITH ∞ COFFEE</div>
        <div className="foot-verse">{d.verse}</div>
      </div>
    </footer>
  );
};

window.Foot = Foot;
export { Certs, Projects, Experience, Contact, Foot };
