import { useNavigate } from 'react-router-dom';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import CartList from '../organisms/CartList';
import NeuCard from '../atoms/NeuCard';
import NeuButton from '../atoms/NeuButton';
import { useCart } from '../../context/CartContext';
import './CartPage.css';

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, getTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const total = getTotal();

  return (
    <div className="cart-page">
      <div className="cart-page__header">
        <h1>
          <ShoppingBag size={28} style={{ verticalAlign: 'middle', marginRight: '0.5rem' }} />
          Carrito de Compras
        </h1>
      </div>

      <div className="cart-page__layout">
        <div className="cart-page__items">
          <CartList
            items={items}
            onUpdateQuantity={updateQuantity}
            onRemove={removeFromCart}
          />
        </div>

        {items.length > 0 && (
          <div className="cart-page__summary">
            <NeuCard padding="1.5rem">
              <h3 className="cart-page__summary-title">Resumen</h3>
              <div className="cart-page__summary-rows">
                {items.map((item) => (
                  <div key={item.product.id} className="cart-page__summary-row">
                    <span>
                      {item.product.name} x{item.quantity}
                    </span>
                    <span>Q{(item.product.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className="cart-page__summary-divider" />
              <div className="cart-page__summary-total">
                <span>Total</span>
                <span>Q{total.toFixed(2)}</span>
              </div>
              <div className="cart-page__summary-actions">
                <NeuButton
                  variant="primary"
                  size="lg"
                  fullWidth
                  onClick={() => navigate('/checkout')}
                >
                  Proceder al checkout <ArrowRight size={16} />
                </NeuButton>
                <NeuButton
                  variant="ghost"
                  size="sm"
                  fullWidth
                  onClick={clearCart}
                >
                  Vaciar carrito
                </NeuButton>
              </div>
            </NeuCard>
          </div>
        )}
      </div>
    </div>
  );
}
