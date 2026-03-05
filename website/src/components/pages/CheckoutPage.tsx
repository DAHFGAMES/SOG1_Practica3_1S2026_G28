import { useNavigate } from 'react-router-dom';
import { CreditCard } from 'lucide-react';
import CheckoutForm from '../organisms/CheckoutForm';
import type { CheckoutData } from '../organisms/CheckoutForm';
import NeuCard from '../atoms/NeuCard';
import { useCart } from '../../context/CartContext';
import './CheckoutPage.css';

export default function CheckoutPage() {
  const { items, getTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const total = getTotal();

  const handleSubmit = (data: CheckoutData) => {
    const receiptData = {
      ...data,
      items: items.map((i) => ({
        productId: i.product.id,
        name: i.product.name,
        price: i.product.price,
        quantity: i.quantity,
        subtotal: i.product.price * i.quantity,
      })),
      total,
      date: new Date().toISOString(),
      orderNumber: `QD-${Date.now().toString(36).toUpperCase()}`,
    };

    localStorage.setItem('lastReceipt', JSON.stringify(receiptData));
    clearCart();
    navigate('/recibo');
  };

  if (items.length === 0) {
    return (
      <div className="checkout-page">
        <div className="checkout-page__empty">
          <h2>No hay productos en tu carrito</h2>
          <p>Agrega productos antes de proceder al checkout.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="checkout-page__header">
        <h1>
          <CreditCard size={28} style={{ verticalAlign: 'middle', marginRight: '0.5rem' }} />
          Checkout
        </h1>
      </div>

      <div className="checkout-page__layout">
        <div className="checkout-page__form">
          <CheckoutForm onSubmit={handleSubmit} />
        </div>

        <div className="checkout-page__order">
          <NeuCard padding="1.5rem">
            <h3 className="checkout-page__order-title">Tu orden</h3>
            <div className="checkout-page__order-items">
              {items.map((item) => (
                <div key={item.product.id} className="checkout-page__order-item">
                  <div>
                    <strong>{item.product.name}</strong>
                    <span className="checkout-page__order-qty"> x{item.quantity}</span>
                  </div>
                  <span>Q{(item.product.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="checkout-page__order-divider" />
            <div className="checkout-page__order-total">
              <span>Total a pagar</span>
              <span>Q{total.toFixed(2)}</span>
            </div>
          </NeuCard>
        </div>
      </div>
    </div>
  );
}
