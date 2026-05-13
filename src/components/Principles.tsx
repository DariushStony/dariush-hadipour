const PRINCIPLES = [
  {
    n: 'RULE 01',
    cls: 's1 bang',
    title: (
      <>
        CALM by <em>default.</em>
      </>
    ),
    body: 'Information density is earned, not assumed. The interface starts quiet and reveals itself with use.',
  },
  {
    n: 'RULE 02',
    cls: 's2 cool',
    title: (
      <>
        MOTION is <em>meaning.</em>
      </>
    ),
    body: 'Every transition is a sentence. Easing curves carry tone the way a voice carries intent.',
  },
  {
    n: 'RULE 03',
    cls: 's3 thought',
    title: (
      <>
        TYPE does <em>the lifting.</em>
      </>
    ),
    body: 'Before color, before illustration — set the type. A good hierarchy makes most decoration unnecessary.',
  },
  {
    n: 'RULE 04',
    cls: 's4 hot',
    title: (
      <>
        ENGINEER the <em>poetry.</em>
      </>
    ),
    body: 'Performance, accessibility, and resilience are not the opposite of craft. They are the substrate that lets craft exist.',
  },
];

export function Principles() {
  return (
    <section className="page" id="principles">
      <span className="page-number">
        Page <b>04</b> · Code of Conduct
      </span>
      <div className="page-title">
        <h2>
          How I <span className="red">Work.</span>
        </h2>
        <span className="sub">Four rules / no exceptions</span>
      </div>
      <div className="principle-grid">
        {PRINCIPLES.map((p) => (
          <div key={p.n} className={`principle-card ${p.cls}`}>
            <span className="pn">{p.n}</span>
            <h3>{p.title}</h3>
            <p>{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
