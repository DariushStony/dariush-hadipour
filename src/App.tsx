import { useEffect, useState } from 'react';
import type { Work } from './types';
import { ThemeProvider } from './context/ThemeContext';
import { usePanelHover } from './hooks/usePanelHover';
import { Cursor } from './components/ui/Cursor';
import { TweaksPanel } from './components/ui/TweaksPanel';
import { Masthead } from './components/Masthead';
import { Cover } from './components/Cover';
import { Work as WorkSection } from './components/Work';
import { Origin } from './components/Origin';
import { Principles } from './components/Principles';
import { Contact } from './components/Contact';
import { ProjectModal } from './components/ProjectModal';

const PANEL_HOVER_SELECTOR = '.panel, .mail-bubble, .principle-card';

function AppShell() {
  const [openWork, setOpenWork] = useState<Work | null>(null);
  const hoverPanel = usePanelHover(PANEL_HOVER_SELECTOR);

  useEffect(() => {
    document.body.style.overflow = openWork ? 'hidden' : '';
  }, [openWork]);

  return (
    <>
      <div className="paper" />
      <Cursor big={hoverPanel} label="POW!" />

      <div className="shell">
        <Masthead />
        <Cover />
        <WorkSection onOpen={setOpenWork} />
        <Origin />
        <Principles />
        <Contact />
      </div>

      <ProjectModal work={openWork} onClose={() => setOpenWork(null)} />
      <TweaksPanel />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppShell />
    </ThemeProvider>
  );
}
