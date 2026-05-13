import { useEffect, useRef } from 'react';

export default function Cursor({ big, label = 'POW!' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;
    let raf;

    const onMove = (e) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    const tick = () => {
      x += (tx - x) * 0.26;
      y += (ty - y) * 0.26;
      el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className={`cursor ${big ? 'lg' : ''}`}>
      <span className="label">{label}</span>
    </div>
  );
}
