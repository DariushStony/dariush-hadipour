import { useEffect, useState } from 'react';

function usePanelHover(selector: string): boolean {
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const enter = (e: MouseEvent) => {
      if ((e.target as Element).closest(selector)) setHovering(true);
    };
    const leave = (e: MouseEvent) => {
      if ((e.target as Element).closest(selector)) setHovering(false);
    };
    document.addEventListener('mouseover', enter);
    document.addEventListener('mouseout', leave);
    return () => {
      document.removeEventListener('mouseover', enter);
      document.removeEventListener('mouseout', leave);
    };
  }, [selector]);

  return hovering;
}

export { usePanelHover };
