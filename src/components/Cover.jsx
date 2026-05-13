import Starburst from './Starburst.jsx';

export default function Cover() {
  return (
    <section className="page cover" id="top">
      <div className="issue-tag">
        <div className="left">
          <span className="issue">Vol. 08 / No. 26</span>
          <span>Approved by the Comics Code · A Yusuf Production</span>
        </div>
        <div className="price">$0.10</div>
      </div>

      <div className="cover-title">
        <span className="kicker">Featuring · Front-end engineer</span>
        <h1>
          <span>Front</span>
          <span className="red">-end</span>
          <br />
          <span className="blue">Hero</span>
          <br />
          <span>at Large!</span>
        </h1>
        <p className="tagline">
          Eight years of shipping interfaces that punch above their weight. Big motion. Quiet
          defaults. The kind of details villains never notice.
        </p>
      </div>

      <div className="cover-art">
        <div className="hero-burst">
          <Starburst
            size="xl"
            color="red"
            style={{ position: 'absolute', top: 0, left: 0 }}
          >
            POW!
          </Starburst>
          <Starburst
            color="yellow"
            size="lg"
            style={{ position: 'absolute', bottom: 8, right: 8 }}
          >
            BAM!
          </Starburst>
          <Starburst
            color="white"
            size="md"
            style={{ position: 'absolute', top: '44%', left: '62%' }}
          >
            ZAP!
          </Starburst>
        </div>
      </div>

      <div className="cover-bottom">
        <div className="caption-box">
          <b>— Continued from page one</b>
          Don&apos;t miss this issue! Our hero ships pixel-perfect production code, AND finds time
          to obsess over kerning. <em>You won&apos;t believe panel three.</em>
          <div className="row">
            <b>STATUS</b>
            <span>AVAILABLE · AUG 2026</span>
          </div>
          <div className="row">
            <b>BASED</b>
            <span>BERLIN · 52.5°N</span>
          </div>
          <div className="row">
            <b>TIMEZONE</b>
            <span>CET ±3</span>
          </div>
        </div>
        <div className="speech-cover">
          “I build interfaces that feel like they were <b>made on purpose</b> — where every motion,
          color, and millisecond <em>means something.</em> Wanna see?”
        </div>
      </div>
    </section>
  );
}
