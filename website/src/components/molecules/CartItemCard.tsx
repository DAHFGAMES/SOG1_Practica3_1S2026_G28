import { Trash2, Database, Code, Smartphone } from 'lucide-react';
import NeuCard from '../atoms/NeuCard';
import NeuButton from '../atoms/NeuButton';
import NeuIconBox from '../atoms/NeuIconBox';
import QuantitySelector from './QuantitySelector';
import type { CartItem } from '../../context/CartContext';
import './CartItemCard.css';

const iconMap: Record<string, React.ReactNode> = {
  database: <Database size={22} />,
  code: <Code size={22} />,
  smartphone: <Smartphone size={22} />,
};

interface CartItemCardProps {
  item: CartItem;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemove: (productId: string) => void;
}

export default function CartItemCard({
  item,
  onUpdateQuantity,
  onRemove,
}: CartItemCardProps) {
  const { product, quantity } = item;
  const subtotal = product.price * quantity;

  return (
    <NeuCard className="cart-item-card" padding="1.25rem">
      <div className="cart-item-card__icon">
        <NeuIconBox size="md">{iconMap[product.icon]}</NeuIconBox>
      </div>
      <div className="cart-item-card__info">
        <h4 className="cart-item-card__name">{product.name}</h4>
        <p className="cart-item-card__price">Q{product.price.toFixed(2)} c/u</p>
      </div>
      <div className="cart-item-card__actions">
        <QuantitySelector
          quantity={quantity}
          onChange={(q: number) => onUpdateQuantity(product.id, q)}
        />
      </div>
      <div className="cart-item-card__subtotal">
        <span>Q{subtotal.toFixed(2)}</span>
      </div>
      <NeuButton
        variant="ghost"
        size="sm"
        onClick={() => onRemove(product.id)}
        className="cart-item-card__remove"
      >
        <Trash2 size={16} />
      </NeuButton>
    </NeuCard>
  );
}
