import { useRef } from 'react';
import { useCursor } from '@application/hooks/use-cursor';

interface Props {
  big?: boolean;
  label?: string;
}

function Cursor({ big = false, label = 'POW!' }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  useCursor(ref);

  return (
    <div ref={ref} className={`cursor ${big ? 'lg' : ''}`}>
      <span className="label">{label}</span>
    </div>
  );
}

export { Cursor };
