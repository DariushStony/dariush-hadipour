import type { NavLink, SocialLink } from '@domain/types';

const SITE_META = {
  name: 'Dariush Hadipour',
  shortName: 'Dariush H.',
  badge: 'D!',
  title: 'Senior Front-End Engineer',
  issueLabel: 'Issue #01 · May 2026 · Tehran Bureau',
  issueVolume: 'Vol. 01 / No. 01',
  issueSubtitle: 'Approved by the Comics Code · A Dariush Production',
  issuePrice: '$0.10',
  based: 'Tehran · Iran',
  timezone: 'IRST +3:30',
  yearsExp: '6+',
  currentCompany: 'Digikala',
  currentCompanyUrl: 'https://www.digikala.com',
  photoSrc: `${import.meta.env.BASE_URL}photo.png`,
  originYear: '2017',
  originCity: 'Tehran',
  copyright: '© 2026 — KAPOW!',
} as const;

const CONTACT = {
  email: 'dariushhadi87@gmail.com',
} as const;

const NAV_LINKS: NavLink[] = [
  { label: 'Work', href: '#work' },
  { label: 'Origin', href: '#origin' },
  { label: 'Code', href: '#principles' },
  { label: 'Holler', href: '#contact' },
];

const SOCIAL_LINKS: SocialLink[] = [
  { label: 'LinkedIn ↗', href: 'https://www.linkedin.com/in/dariush-hadipour/' },
  { label: 'GitHub ↗', href: 'https://github.com/DariushStony' },
  { label: 'Digikala ↗', href: 'https://www.digikala.com' },
];

const ELSEWHERE_CARDS = [
  {
    heading: 'Elsewhere',
    links: SOCIAL_LINKS,
  },
  {
    heading: 'Company',
    links: [
      { label: 'Digikala', href: SITE_META.currentCompanyUrl },
      { label: 'Front-End Engineer', href: null },
      { label: SITE_META.originCity + ', Iran', href: null },
    ],
  },
  {
    heading: 'Location',
    links: [
      { label: 'Tehran', href: null },
      { label: 'Iran', href: null },
      { label: SITE_META.timezone, href: null },
    ],
  },
  {
    heading: 'Colophon',
    links: [
      { label: 'Set in Bowlby One', href: null },
      { label: '& Special Elite', href: null },
      { label: SITE_META.copyright, href: null },
    ],
  },
] as const;

export { SITE_META, CONTACT, NAV_LINKS, SOCIAL_LINKS, ELSEWHERE_CARDS };
