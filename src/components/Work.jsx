import { WORKS, PANEL_LAYOUT } from '../data.js';
import Starburst from './Starburst.jsx';

export default function Work({ onOpen }) {
  return (
    <section className="page work-section" id="work">
      <span className="page-number">
        Page <b>02</b> · Selected Works
      </span>
      <div className="page-title">
        <h2>
          Meanwhile, <span className="red">Six</span> Projects…
        </h2>
        <span className="sub">Chapter 1 / Click any panel</span>
      </div>

      <div className="panel-grid">
        {WORKS.map((w, i) => (
          <article
            key={w.id}
            className={`panel ${PANEL_LAYOUT[i] || ''}`}
            onClick={() => onOpen(w)}
          >
            <div className="panel-num">{w.id}</div>
            <div className={`panel-art tone-${w.tone}`}>
              <div className="panel-stat-box">
                <span className="panel-stat-num">{w.stat}</span>
                <span className="panel-stat-lbl">{w.statLabel}</span>
              </div>
              <div className="panel-burst">
                <Starburst color={i % 2 ? 'red' : 'yellow'}>{w.word}</Starburst>
              </div>
            </div>
            <div className="panel-tag">
              {w.tag} · {w.year}
            </div>
            <div className="panel-caption">
              <div className="title">{w.title}</div>
              <div className="meta">{w.role}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
