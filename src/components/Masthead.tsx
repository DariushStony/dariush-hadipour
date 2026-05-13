import { NAV_LINKS, SITE_META } from '../config/site';

export function Masthead() {
  return (
    <header className="masthead">
      <div className="logo">
        <b>{SITE_META.badge}</b>
        <span>{SITE_META.shortName}</span>
      </div>
      <div className="meta">{SITE_META.issueLabel}</div>
      <nav>
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
