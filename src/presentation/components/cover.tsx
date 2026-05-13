import { SITE_META } from '@data/site';
import { Starburst } from './ui/starburst';

function Cover() {
  return (
    <section className="page cover" id="top">
      <div className="issue-tag">
        <div className="left">
          <span className="issue">{SITE_META.issueVolume}</span>
          <span>{SITE_META.issueSubtitle}</span>
        </div>
        <div className="price">{SITE_META.issuePrice}</div>
      </div>

      <div className="cover-title">
        <span className="kicker">Featuring · {SITE_META.title}</span>
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
          {SITE_META.yearsExp} years shipping scalable, high-performance apps with React, Next.js
          &amp; TypeScript. Design Systems. Monorepos. The kind of code that moves metrics.
        </p>
      </div>

      <div className="cover-art">
        <div className="hero-burst">
          <Starburst size="xl" color="red" style={{ position: 'absolute', top: 0, left: 0 }}>
            POW!
          </Starburst>
          <Starburst color="yellow" size="lg" style={{ position: 'absolute', bottom: 8, right: 8 }}>
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
          Don&apos;t miss this issue! {SITE_META.name} ships high-performance production code at{' '}
          {SITE_META.currentCompany} AND measures every pixel with Core Web Vitals.{' '}
          <em>+31% conversion. Panel three.</em>
          <div className="row">
            <b>STATUS</b>
            <span>{SITE_META.yearsExp} YRS · OPEN TO WORK</span>
          </div>
          <div className="row">
            <b>BASED</b>
            <span>{SITE_META.based.toUpperCase()}</span>
          </div>
          <div className="row">
            <b>TIMEZONE</b>
            <span>{SITE_META.timezone}</span>
          </div>
        </div>
        <div className="speech-cover">
          &quot;I build interfaces that feel like they were <b>made on purpose</b> &mdash; at{' '}
          {SITE_META.currentCompany} and beyond, every pixel, motion, and millisecond{' '}
          <em>means something.</em> Wanna see?&quot;
        </div>
      </div>
    </section>
  );
}

export { Cover };
