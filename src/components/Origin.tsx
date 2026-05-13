import { SKILLS } from '../data/works';
import { SITE_META } from '../config/site';

export function Origin() {
  return (
    <section className="page" id="origin">
      <span className="page-number">
        Page <b>03</b> · Origin Story
      </span>
      <div className="page-title">
        <h2>
          The <span className="red">Origin</span> Story.
        </h2>
        <span className="sub">A short note · Confidential</span>
      </div>

      <div className="origin">
        <div className="caption-strip">
          <span className="lbl">Meanwhile&hellip;</span>
          {SITE_META.originCity}, {SITE_META.originYear}. A young engineer opens his first
          stylesheet. Six-plus years later, {SITE_META.name} is a {SITE_META.title} at{' '}
          {SITE_META.currentCompany} &mdash; one of the Middle East&apos;s biggest e-commerce
          platforms with 9.7M items and 100k daily orders. Previously at SnappKitchen and
          AlgoDaric.
        </div>

        <div className="character">
          <img
            src={SITE_META.photoSrc}
            alt={SITE_META.name}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              objectPosition: 'center top',
              display: 'block',
            }}
          />
          <div className="name-plate">
            {SITE_META.shortName.toUpperCase()} &middot; ENGINEER
          </div>
        </div>

        <div className="bubble left">
          &quot;I believe the best interfaces sit somewhere{' '}
          <em>between precision and emotion</em>. I care about the millisecond, the kerning, and
          the DM at 11pm asking <b>why something feels off</b>.&quot;
        </div>

        <div className="bubble right">
          Outside the editor: strong tea, late-night reading, and a stubborn curiosity I&apos;ve
          kept since day one. Currently obsessed with <em>performance budgets</em> and the feel of{' '}
          <b>interfaces that move right</b>.
        </div>

        <div className="skills-banner">
          <span className="lbl">SUPERPOWERS</span>
          {SKILLS.map((s, i) => (
            <span key={i} className="skill-chip">
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
