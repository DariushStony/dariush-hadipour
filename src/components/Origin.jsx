import { SKILLS } from "../data.js";

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
          Tehran, 2017. A young engineer opens his first stylesheet. Six-plus
          years later, Dariush is a Senior Front-End Engineer at Digikala —
          one of the Middle East&apos;s biggest e-commerce platforms with 9.7M
          items and 100k daily orders. Previously at SnappKitchen and AlgoDaric.
        </div>

        <div className="character">
          <img
            src="/photo.png"
            alt="Dariush Hadipour"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "contain",
              objectPosition: "center top",
              display: "block",
            }}
          />
          <div className="name-plate">DARIUSH H. · ENGINEER</div>
        </div>

        <div className="bubble left">
          “I believe the best interfaces sit somewhere{" "}
          <em>between precision and emotion</em>. I care about the millisecond,
          the kerning, and the DM at 11pm asking <b>why something feels off</b>
          .”
        </div>

        <div className="bubble right">
          Outside the editor: strong tea, late-night reading, and a stubborn
          curiosity I&apos;ve kept since day one. Currently obsessed with{" "}
          <em>performance budgets</em> and the feel of{" "}
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
