import { Minus, Plus } from 'lucide-react';
import './QuantitySelector.css';

interface QuantitySelectorProps {
  quantity: number;
  onChange: (quantity: number) => void;
  min?: number;
  max?: number;
}

export default function QuantitySelector({
  quantity,
  onChange,
  min = 1,
  max = 99,
}: QuantitySelectorProps) {
  return (
    <div className="qty-selector">
      <button
        className="qty-selector__btn"
        onClick={() => onChange(Math.max(min, quantity - 1))}
        disabled={quantity <= min}
      >
        <Minus size={14} />
      </button>
      <span className="qty-selector__value">{quantity}</span>
      <button
        className="qty-selector__btn"
        onClick={() => onChange(Math.min(max, quantity + 1))}
        disabled={quantity >= max}
      >
        <Plus size={14} />
      </button>
    </div>
  );
}
