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
      <a className="mail-bubble" href="mailto:dariushhadi87@gmail.com">
        dariushhadi87@gmail.com
      </a>

      <div className="elsewhere">
        <div className="els-card">
          <b>Elsewhere</b>
          <a href="https://www.linkedin.com/in/dariush-hadipour/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="https://github.com/DariushStony" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="mailto:dariushhadi87@gmail.com">Email ↗</a>
        </div>
        <div className="els-card">
          <b>Company</b>
          <a href="https://www.digikala.com" target="_blank" rel="noreferrer">Digikala</a>
          <a>Front-End Engineer</a>
          <a>Tehran, Iran</a>
        </div>
        <div className="els-card">
          <b>Location</b>
          <a>Tehran</a>
          <a>Iran</a>
          <a>IRST +3:30</a>
        </div>
        <div className="els-card">
          <b>Colophon</b>
          <a>Set in Bowlby One</a>
          <a>&amp; Special Elite</a>
          <a>© 2026 — KAPOW!</a>
        </div>
      </div>

      <div className="colophon">
        <span>Issue #01 · Printed in Tehran</span>
        <span>For mature audiences only</span>
        <span>Continued next issue →</span>
      </div>
    </section>
  );
}
