import { PORTFOLIO } from '../data.js';
import Icon from './Icons.jsx';

export const About = () => {
  const d = PORTFOLIO;
  return (
    <section id="about">
      <div className="wrap">
        <h2 className="section-label">
          <span className="num">02 /</span>
          <span>About — who's behind the keyboard</span>
          <span className="bar"></span>
        </h2>
        <div className="about-grid">
          <div>
            <p className="about-lead">
              {d.about.lead}
              <em>{d.about.leadEm}</em>
            </p>
            <p>
              I care about the craft - clean abstractions, kind docs, dashboards that tell you what
              went wrong before you open Slack. I build platforms that make the next engineer's week
              easier, not shinier.
            </p>
            <p>
              Outside the terminal you'll find me at the squat rack, on the couch with my kid and a
              controller, or deep in a manga chapter trying to figure out what Luffy's cooking next.
            </p>
          </div>
          <div className="stat-grid">
            {d.about.stats.map((s) => (
              <div className="stat" key={s.k}>
                <div className="k">{s.k}</div>
                <div className="v">
                  {s.v}
                  <span className="u">{s.u}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Interests = () => {
  const d = PORTFOLIO;
  return (
    <section id="interests">
      <div className="wrap">
        <h2 className="section-label">
          <span className="num">07 /</span>
          <span>Interests — the stuff that keeps me sharp</span>
          <span className="bar"></span>
        </h2>
        <div className="tile-grid">
          {d.interests.map((i) => (
            <div className="tile" key={i.title}>
              <div className="tag">{i.tag}</div>
              <div className="icon">
                <Icon name={i.icon} size={16} />
              </div>
              <div>
                <h4>{i.title}</h4>
                <p>{i.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
