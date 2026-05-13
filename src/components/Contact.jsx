export default function Contact() {
  return (
    <section className="page contact-page" id="contact">
      <span className="page-number">
        Page <b>05</b> · Holler
      </span>
      <div className="talk">
        Talk <em>To</em>
        <br />
        <span className="blue">Me!</span>
      </div>
      <br />
      <a className="mail-bubble" href="mailto:hello@yusuf.studio">
        hello@yusuf.studio
      </a>

      <div className="elsewhere">
        <div className="els-card">
          <b>Elsewhere</b>
          <a href="#">Read.cv ↗</a>
          <a href="#">GitHub ↗</a>
          <a href="#">LinkedIn ↗</a>
        </div>
        <div className="els-card">
          <b>Writing</b>
          <a href="#">Notes</a>
          <a href="#">RSS</a>
          <a href="#">Newsletter</a>
        </div>
        <div className="els-card">
          <b>Office</b>
          <a>Reichenberger Str.</a>
          <a>10999 Berlin</a>
          <a>CET ±3</a>
        </div>
        <div className="els-card">
          <b>Colophon</b>
          <a>Set in Bowlby One</a>
          <a>& Special Elite</a>
          <a>© 2026 — KAPOW!</a>
        </div>
      </div>

      <div className="colophon">
        <span>Issue #08 · Printed in Berlin</span>
        <span>For mature audiences only</span>
        <span>Continued next issue →</span>
      </div>
    </section>
  );
}
