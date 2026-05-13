import { useEffect, useRef } from 'react';
import type { RefObject } from 'react';

function useCursor(elRef: RefObject<HTMLElement | null>): void {
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    const tick = () => {
      x += (tx - x) * 0.26;
      y += (ty - y) * 0.26;
      el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove);
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [elRef]);
}

export { useCursor };
