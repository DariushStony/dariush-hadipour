import { CONTACT, ELSEWHERE_CARDS, SITE_META } from '@data/site';

function Contact() {
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
      <a className="mail-bubble" href={`mailto:${CONTACT.email}`}>
        {CONTACT.email}
      </a>

      <div className="elsewhere">
        {ELSEWHERE_CARDS.map((card) => (
          <div key={card.heading} className="els-card">
            <b>{card.heading}</b>
            {card.links.map((link) =>
              link.href ? (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ) : (
                <a key={link.label}>{link.label}</a>
              ),
            )}
          </div>
        ))}
      </div>

      <div className="colophon">
        <span>Issue #01 · Printed in {SITE_META.originCity}</span>
        <span>For mature audiences only</span>
        <span>Continued next issue &rarr;</span>
      </div>
    </section>
  );
}

export { Contact };
