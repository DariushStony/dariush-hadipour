import type { CSSProperties } from 'react';

type StarburstColor = 'yellow' | 'red' | 'blue' | 'green' | 'white';
type StarburstSize = 'md' | 'lg' | 'xl';

interface Props {
  children: React.ReactNode;
  color?: StarburstColor;
  size?: StarburstSize;
  style?: CSSProperties;
  className?: string;
}

export function Starburst({ children, color = 'yellow', size = 'md', style, className = '' }: Props) {
  const cls = ['starburst'];
  if (color !== 'yellow') cls.push(color);
  if (size !== 'md') cls.push(size);
  if (className) cls.push(className);
  return (
    <span className={cls.join(' ')} style={style}>
      {children}
    </span>
  );
}
