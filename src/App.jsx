import { useEffect, useState } from 'react';
import Cursor from './components/Cursor.jsx';
import Masthead from './components/Masthead.jsx';
import Cover from './components/Cover.jsx';
import Work from './components/Work.jsx';
import Origin from './components/Origin.jsx';
import Principles from './components/Principles.jsx';
import Contact from './components/Contact.jsx';
import ProjectModal from './components/ProjectModal.jsx';
import TweaksPanel from './components/TweaksPanel.jsx';

const DEFAULTS = {
  era: 'classic',
  halftone: 'on',
  cursor: 'comic',
};

export default function App() {
  const [tweaks, setTweaks] = useState(DEFAULTS);
  const [openWork, setOpenWork] = useState(null);
  const [hoverPanel, setHoverPanel] = useState(false);

  const setTweak = (key, value) => setTweaks((prev) => ({ ...prev, [key]: value }));

  useEffect(() => {
    document.body.dataset.era = tweaks.era;
    document.body.dataset.halftone = tweaks.halftone;
    document.body.dataset.cursor = tweaks.cursor;
  }, [tweaks]);

  useEffect(() => {
    document.body.style.overflow = openWork ? 'hidden' : '';
  }, [openWork]);

  useEffect(() => {
    const enter = (e) => {
      if (e.target.closest('.panel, .mail-bubble, .principle-card')) setHoverPanel(true);
    };
    const leave = (e) => {
      if (e.target.closest('.panel, .mail-bubble, .principle-card')) setHoverPanel(false);
    };
    document.addEventListener('mouseover', enter);
    document.addEventListener('mouseout', leave);
    return () => {
      document.removeEventListener('mouseover', enter);
      document.removeEventListener('mouseout', leave);
    };
  }, []);

  return (
    <>
      <div className="paper" />
      <Cursor big={hoverPanel} label="POW!" />

      <div className="shell">
        <Masthead />
        <Cover />
        <Work onOpen={setOpenWork} />
        <Origin />
        <Principles />
        <Contact />
      </div>

      <ProjectModal work={openWork} onClose={() => setOpenWork(null)} />
      <TweaksPanel tweaks={tweaks} setTweak={setTweak} />
    </>
  );
}
