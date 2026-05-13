import Starburst from './Starburst.jsx';

export default function Cover() {
  return (
    <section className="page cover" id="top">
      <div className="issue-tag">
        <div className="left">
          <span className="issue">Vol. 01 / No. 01</span>
          <span>Approved by the Comics Code · A Dariush Production</span>
        </div>
        <div className="price">$0.10</div>
      </div>

      <div className="cover-title">
        <span className="kicker">Featuring · Senior Front-End Engineer</span>
        <h1>
          <span style={{ whiteSpace: 'nowrap' }}>
            <span>Front</span>
            <span className="red">-end</span>
          </span>
          <br />
          <span className="blue">Engineer</span>
          <br />
          <span>at Large!</span>
        </h1>
        <p className="tagline">
          6+ years shipping scalable, high-performance apps with React, Next.js &amp; TypeScript.
          Design Systems. Monorepos. The kind of code that moves metrics.
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
          Don&apos;t miss this issue! Dariush ships high-performance production code at Digikala
          AND measures every pixel with Core Web Vitals. <em>+31% conversion. Panel three.</em>
          <div className="row">
            <b>STATUS</b>
            <span>6+ YRS · OPEN TO WORK</span>
          </div>
          <div className="row">
            <b>BASED</b>
            <span>TEHRAN · IRAN</span>
          </div>
          <div className="row">
            <b>TIMEZONE</b>
            <span>IRST +3:30</span>
          </div>
        </div>
        <div className="speech-cover">
          "I build interfaces that feel like they were <b>made on purpose</b> — at Digikala and
          beyond, every pixel, motion, and millisecond <em>means something.</em> Wanna see?"
        </div>
      </div>
    </section>
  );
}
