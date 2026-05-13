export default function Starburst({ children, color = 'yellow', size = 'md', style, className = '' }) {
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
