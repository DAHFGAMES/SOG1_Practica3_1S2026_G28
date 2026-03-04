import type { ReactNode } from 'react';
import './NeuIconBox.css';

interface NeuIconBoxProps {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function NeuIconBox({
  children,
  size = 'md',
  className = '',
}: NeuIconBoxProps) {
  return (
    <div className={`neu-icon-box neu-icon-box--${size} ${className}`}>
      {children}
    </div>
  );
}
