import { useState } from 'react';
import { useTheme } from '@application/context/theme-context';
import type { Era, HalftoneMode, CursorMode } from '@domain/types';

const ERA_OPTIONS: { value: Era; label: string }[] = [
  { value: 'classic', label: 'Classic — golden age' },
  { value: 'modern', label: 'Modern — bright pop' },
  { value: 'manga', label: 'Manga — ink + paper' },
  { value: 'pulp', label: 'Pulp — vintage paperback' },
];

const HALFTONE_OPTIONS: HalftoneMode[] = ['on', 'heavy', 'off'];
const CURSOR_OPTIONS: { value: CursorMode; label: string }[] = [
  { value: 'comic', label: 'POW!' },
  { value: 'off', label: 'Off' },
];

function TweaksPanel() {
  const { tweaks, setTweak } = useTheme();
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
            <select value={tweaks.era} onChange={(e) => setTweak('era', e.target.value as Era)}>
              {ERA_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>

          <div className="tw-section">
            <span className="tw-label">Halftone</span>
            <div className="tw-radio">
              {HALFTONE_OPTIONS.map((v) => (
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
              {CURSOR_OPTIONS.map((o) => (
                <button
                  key={o.value}
                  type="button"
                  data-on={tweaks.cursor === o.value ? '1' : '0'}
                  onClick={() => setTweak('cursor', o.value)}
                >
                  {o.label}
                </button>
              ))}
            </div>
          </div>
        </aside>
      )}
    </>
  );
}

export { TweaksPanel };
