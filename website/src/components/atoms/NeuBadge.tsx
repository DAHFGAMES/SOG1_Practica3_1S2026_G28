import type { ReactNode } from 'react';
import './NeuBadge.css';

interface NeuBadgeProps {
  children: ReactNode;
  variant?: 'default' | 'accent' | 'success' | 'warning';
  className?: string;
}

export default function NeuBadge({
  children,
  variant = 'default',
  className = '',
}: NeuBadgeProps) {
  return (
    <span className={`neu-badge neu-badge--${variant} ${className}`}>
      {children}
    </span>
  );
}
