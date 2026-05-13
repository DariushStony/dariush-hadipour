export type Tone = 'blue' | 'red' | 'green' | 'yellow' | 'ink';
export type PanelSize = 'p1' | 'p2' | 'p3' | 'p4' | 'p5' | 'p6';
export type Era = 'classic' | 'modern' | 'manga' | 'pulp';
export type HalftoneMode = 'on' | 'off' | 'heavy';
export type CursorMode = 'comic' | 'off';

export interface TweakSettings {
  era: Era;
  halftone: HalftoneMode;
  cursor: CursorMode;
}

export interface Work {
  id: string;
  title: string;
  role: string;
  year: string;
  tag: string;
  word: string;
  tone: Tone;
  stat: string;
  statLabel: string;
  stack: string;
  blurb: string;
  win: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface Principle {
  n: string;
  cls: string;
  title: React.ReactNode;
  body: string;
}
