# Yusuf K. — Portfolio (Comic-book direction)

A Vite + React build of the comic-book portfolio. Halftones, ink, starbursts, panel grids.

## Getting started

```bash
npm install
npm run dev
```

Then open <http://localhost:5173>.

## Build

```bash
npm run build
npm run preview
```

Output is written to `dist/`.

## Structure

```
src/
  main.jsx             # Vite entry, mounts <App />
  App.jsx              # Layout, state, tweaks
  styles.css           # Full design-system stylesheet
  data.js              # WORKS, SKILLS, PANEL_LAYOUT
  components/
    Cursor.jsx         # POW! cursor that follows the pointer
    Masthead.jsx       # Top issue bar
    Cover.jsx          # Hero / front cover (Page 01)
    Work.jsx           # Selected works panel grid (Page 02)
    Origin.jsx         # About / origin story (Page 03)
    Principles.jsx     # Speech-bubble manifesto (Page 04)
    Contact.jsx        # Final splash (Page 05)
    ProjectModal.jsx   # Case-study overlay (Esc to close)
    Starburst.jsx      # POW! / BAM! / ZAP! badge
    ArtSlot.jsx        # Dashed placeholder where art goes
    TweaksPanel.jsx    # Floating ⚙ tweaks panel (era / halftone / cursor)
```

## Making it yours

- Replace project data in `src/data.js` (the `WORKS` array).
- Drop your bio into `src/components/Origin.jsx`.
- Swap `<ArtSlot>` for real `<img>` tags inside `Work.jsx`, `Origin.jsx`,
  and `ProjectModal.jsx`. The placeholder slot is just a styled div.
- Tweak the palette in `src/styles.css` under the `[data-era="..."]`
  blocks at the top.

## Fonts

Loaded from Google Fonts via `index.html` — Bowlby One, Bangers,
Special Elite, Comic Neue, Space Grotesk.

## License

Your portfolio, your call.
