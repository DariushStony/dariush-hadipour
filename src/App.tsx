import { useEffect, useState } from 'react';
import type { Work } from '@domain/types';
import { ThemeProvider } from '@application/context/theme-context';
import { usePanelHover } from '@application/hooks/use-panel-hover';
import { Cursor } from '@presentation/components/ui/cursor';
import { TweaksPanel } from '@presentation/components/ui/tweaks-panel';
import { Masthead } from '@presentation/components/masthead';
import { Cover } from '@presentation/components/cover';
import { WorkSection } from '@presentation/components/work';
import { Origin } from '@presentation/components/origin';
import { Principles } from '@presentation/components/principles';
import { Contact } from '@presentation/components/contact';
import { ProjectModal } from '@presentation/components/project-modal';

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

function App() {
  return (
    <ThemeProvider>
      <AppShell />
    </ThemeProvider>
  );
}

export default App;
