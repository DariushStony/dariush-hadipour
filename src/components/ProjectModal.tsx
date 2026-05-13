import { useCallback } from 'react';
import type { Work } from '../types';
import { useKeyDown } from '../hooks/useKeyDown';
import { Starburst } from './ui/Starburst';
import { PanelStatDisplay } from './ui/PanelStatDisplay';

interface Props {
  work: Work | null;
  onClose: () => void;
}

export function ProjectModal({ work, onClose }: Props) {
  const handleClose = useCallback(() => onClose(), [onClose]);
  useKeyDown('Escape', handleClose);

  return (
    <>
      <div className={`modal-mask ${work ? 'open' : ''}`} onClick={onClose} />
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
                  <span>{work.stack}</span>
                </div>
                <div>
                  <b>Status</b>
                  <span>Shipped</span>
                </div>
              </div>
              <div className={`modal-hero panel-art tone-${work.tone}`}>
                <PanelStatDisplay
                  stat={work.stat}
                  label={work.statLabel}
                  statStyle={{ fontSize: 'clamp(48px, 8vw, 96px)' }}
                />
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
                    motion? We chose typography and air over chrome &mdash; and a sprinkle of{' '}
                    <b>KAPOW</b>.
                  </p>
                </div>
              </div>
              <div className="modal-grid">
                <div className="panel-art tone-yellow">
                  <PanelStatDisplay stat={work.year} label="Year Shipped" />
                </div>
                <div className="panel-art tone-blue">
                  <div className="modal-stack-box">
                    {work.stack.split(' · ').map((t) => (
                      <span key={t} className="modal-stack-chip">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="panel-art wide tone-ink">
                  <PanelStatDisplay
                    stat={work.win}
                    label=""
                    statStyle={{ fontSize: 'clamp(20px, 3vw, 36px)', lineHeight: '1.1' }}
                  />
                </div>
              </div>
              <div className="modal-prose" style={{ marginTop: 50 }}>
                <h4>The Win</h4>
                <div className="body">
                  <p>{work.win}</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
