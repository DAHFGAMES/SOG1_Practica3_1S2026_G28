import type { CSSProperties, ReactNode } from 'react';
import './NeuCard.css';

interface NeuCardProps {
  children: ReactNode;
  variant?: 'raised' | 'pressed' | 'flat';
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
  padding?: string;
}

export default function NeuCard({
  children,
  variant = 'raised',
  className = '',
  style,
  onClick,
  padding = '1.5rem',
}: NeuCardProps) {
  return (
    <div
      className={`neu-card neu-card--${variant} ${onClick ? 'neu-card--clickable' : ''} ${className}`}
      style={{ padding, ...style }}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
