import type { ReactNode, CSSProperties } from 'react';
import './NeuButton.css';

interface NeuButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
  style?: CSSProperties;
  type?: 'button' | 'submit' | 'reset';
}

export default function NeuButton({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  className = '',
  style,
  type = 'button',
}: NeuButtonProps) {
  return (
    <button
      type={type}
      className={`neu-btn neu-btn--${variant} neu-btn--${size} ${fullWidth ? 'neu-btn--full' : ''} ${className}`}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {children}
    </button>
  );
}
