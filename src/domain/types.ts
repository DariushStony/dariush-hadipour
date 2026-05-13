import type { ReactNode } from 'react';

type Tone = 'blue' | 'red' | 'green' | 'yellow' | 'ink';
type PanelSize = 'p1' | 'p2' | 'p3' | 'p4' | 'p5' | 'p6';
type Era = 'classic' | 'modern' | 'manga' | 'pulp';
type HalftoneMode = 'on' | 'off' | 'heavy';
type CursorMode = 'comic' | 'off';

interface TweakSettings {
  era: Era;
  halftone: HalftoneMode;
  cursor: CursorMode;
}

interface Work {
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

interface NavLink {
  label: string;
  href: string;
}

interface SocialLink {
  label: string;
  href: string;
}

interface Principle {
  n: string;
  cls: string;
  title: ReactNode;
  body: string;
}

export type {
  Tone,
  PanelSize,
  Era,
  HalftoneMode,
  CursorMode,
  TweakSettings,
  Work,
  NavLink,
  SocialLink,
  Principle,
};
