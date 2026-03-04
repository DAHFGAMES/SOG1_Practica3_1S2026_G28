import type { CSSProperties } from 'react';
import './NeuInput.css';

interface NeuInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  type?: string;
  required?: boolean;
  className?: string;
  style?: CSSProperties;
  maxLength?: number;
  inputMode?: React.InputHTMLAttributes<HTMLInputElement>['inputMode'];
  pattern?: string;
}

export default function NeuInput({
  value,
  onChange,
  placeholder = '',
  label,
  type = 'text',
  required = false,
  className = '',
  style,
  maxLength,
  inputMode,
  pattern,
}: NeuInputProps) {
  return (
    <div className={`neu-input-wrapper ${className}`} style={style}>
      {label && (
        <label className="neu-input-label">
          {label}
          {required && <span className="neu-input-required">*</span>}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="neu-input"
        maxLength={maxLength}
        inputMode={inputMode}
        pattern={pattern}
      />
    </div>
  );
}
