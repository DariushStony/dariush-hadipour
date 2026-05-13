import type { CSSProperties } from 'react';

interface Props {
  stat: string;
  label: string;
  statStyle?: CSSProperties;
}

export function PanelStatDisplay({ stat, label, statStyle }: Props) {
  return (
    <div className="panel-stat-box">
      <span className="panel-stat-num" style={statStyle}>
        {stat}
      </span>
      <span className="panel-stat-lbl">{label}</span>
    </div>
  );
}
