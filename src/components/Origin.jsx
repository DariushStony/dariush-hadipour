import { SKILLS } from '../data.js';
import ArtSlot from './ArtSlot.jsx';

export default function Origin() {
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
          <span className="lbl">Meanwhile…</span>
          Istanbul, 2017. A young engineer opens his first stylesheet. Two years of design school
          and one move to Berlin later, our hero builds the parts of products people touch a
          hundred times a day.
        </div>

        <div className="character">
          <ArtSlot label="Self portrait · drop a photo here" />
          <div className="name-plate">YUSUF K. · OUR HERO</div>
        </div>

        <div className="bubble left">
          “I believe the best interfaces sit somewhere{' '}
          <em>between precision and emotion</em>. I care about the millisecond, the kerning, and
          the email at 11pm asking <b>why something feels off</b>.”
        </div>

        <div className="bubble right">
          Outside the editor: 35mm film, slow coffee, and a stubborn sketchbook I&apos;ve kept
          since 2019. Currently obsessed with <em>WebGPU shaders</em> and the colour of{' '}
          <b>good morning light</b>.
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
