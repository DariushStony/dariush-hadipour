import { useState } from 'react';

/**
 * Lightweight in-app tweaks panel for the standalone React build.
 * Toggle with the floating button. State is local React state.
 */
export default function TweaksPanel({ tweaks, setTweak }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="tweaks-fab"
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle tweaks"
      >
        {open ? '✕' : '⚙'}
      </button>

      {open && (
        <aside className="tweaks-panel" role="dialog" aria-label="Tweaks">
          <div className="tw-head">
            <b>Tweaks</b>
            <button className="tw-x" onClick={() => setOpen(false)} aria-label="Close">
              ✕
            </button>
          </div>

          <div className="tw-section">
            <span className="tw-label">Era</span>
            <select
              value={tweaks.era}
              onChange={(e) => setTweak('era', e.target.value)}
            >
              <option value="classic">Classic — golden age</option>
              <option value="modern">Modern — bright pop</option>
              <option value="manga">Manga — ink + paper</option>
              <option value="pulp">Pulp — vintage paperback</option>
            </select>
          </div>

          <div className="tw-section">
            <span className="tw-label">Halftone</span>
            <div className="tw-radio">
              {['on', 'heavy', 'off'].map((v) => (
                <button
                  key={v}
                  type="button"
                  data-on={tweaks.halftone === v ? '1' : '0'}
                  onClick={() => setTweak('halftone', v)}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          <div className="tw-section">
            <span className="tw-label">Cursor</span>
            <div className="tw-radio">
              {[
                { v: 'comic', l: 'POW!' },
                { v: 'off', l: 'Off' },
              ].map((o) => (
                <button
                  key={o.v}
                  type="button"
                  data-on={tweaks.cursor === o.v ? '1' : '0'}
                  onClick={() => setTweak('cursor', o.v)}
                >
                  {o.l}
                </button>
              ))}
            </div>
          </div>
        </aside>
      )}
    </>
  );
}
