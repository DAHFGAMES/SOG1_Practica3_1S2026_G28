import CartItemCard from '../molecules/CartItemCard';
import type { CartItem } from '../../context/CartContext';
import './CartList.css';

interface CartListProps {
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemove: (productId: string) => void;
}

export default function CartList({ items, onUpdateQuantity, onRemove }: CartListProps) {
  if (items.length === 0) {
    return (
      <div className="cart-list__empty">
        <p>Tu carrito está vacío</p>
      </div>
    );
  }

  return (
    <div className="cart-list">
      {items.map((item) => (
        <CartItemCard
          key={item.product.id}
          item={item}
          onUpdateQuantity={onUpdateQuantity}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}
