import { useRef } from 'react';
import { useCursor } from '../../hooks/useCursor';

interface Props {
  big?: boolean;
  label?: string;
}

export function Cursor({ big = false, label = 'POW!' }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  useCursor(ref);

  return (
    <div ref={ref} className={`cursor ${big ? 'lg' : ''}`}>
      <span className="label">{label}</span>
    </div>
  );
}
