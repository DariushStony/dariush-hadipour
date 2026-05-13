import { useEffect } from 'react';
import Starburst from './Starburst.jsx';
import ArtSlot from './ArtSlot.jsx';

export default function ProjectModal({ work, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <>
      <div
        className={`modal-mask ${work ? 'open' : ''}`}
        onClick={onClose}
      />
      <div className={`modal ${work ? 'open' : ''}`}>
        {work && (
          <>
            <button className="modal-close" onClick={onClose}>
              <span>Close</span>
              <span>✕</span>
            </button>
            <div className="modal-inner">
              <span className="kicker">— Case File / {work.id}</span>
              <h2>
                {work.title} — <em>{work.tag.toLowerCase()}</em>
              </h2>
              <div className="modal-meta">
                <div>
                  <b>Role</b>
                  <span>{work.role}</span>
                </div>
                <div>
                  <b>Year</b>
                  <span>{work.year}</span>
                </div>
                <div>
                  <b>Stack</b>
                  <span>React · TS · GSAP</span>
                </div>
                <div>
                  <b>Status</b>
                  <span>Shipped</span>
                </div>
              </div>
              <div className={`modal-hero panel-art tone-${work.tone}`}>
                <ArtSlot label={`Hero · ${work.title}`} />
                <div style={{ position: 'absolute', top: 24, right: 24 }}>
                  <Starburst color="red" size="lg">
                    {work.word}
                  </Starburst>
                </div>
              </div>
              <div className="modal-prose">
                <h4>The Brief</h4>
                <div className="body">
                  <p>{work.blurb}</p>
                  <p>
                    The piece sits inside a larger system, but on its own it answers a single
                    question: how does an interface stay composed when the data underneath is in
                    motion? We chose typography and air over chrome — and a sprinkle of{' '}
                    <b>KAPOW</b>.
                  </p>
                </div>
              </div>
              <div className="modal-grid">
                <div className="panel-art tone-yellow">
                  <ArtSlot label="Detail · 4:3" />
                </div>
                <div className="panel-art tone-blue">
                  <ArtSlot label="Detail · 4:3" />
                </div>
                <div className="panel-art wide tone-ink">
                  <ArtSlot label="Wide shot · 16:7" />
                </div>
              </div>
              <div className="modal-prose" style={{ marginTop: 50 }}>
                <h4>The Win</h4>
                <div className="body">
                  <p>+38% engagement on first session. Lighthouse 99/100.</p>
                  <p>Shortlisted at Awwwards &amp; Site Inspire. Continued next issue →</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
