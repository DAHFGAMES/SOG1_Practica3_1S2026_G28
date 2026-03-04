import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Download, ArrowLeft } from 'lucide-react';
import NeuCard from '../atoms/NeuCard';
import NeuButton from '../atoms/NeuButton';
import './ReceiptPage.css';

interface ReceiptItem {
  name: string;
  price: number;
  quantity: number;
  subtotal: number;
}

interface ReceiptData {
  nombre: string;
  email: string;
  telefono: string;
  empresa: string;
  nit: string;
  direccion: string;
  metodoPago: string;
  items: ReceiptItem[];
  total: number;
  date: string;
  orderNumber: string;
}

const paymentLabels: Record<string, string> = {
  tarjeta: 'Tarjeta de crédito',
  transferencia: 'Transferencia bancaria',
  paypal: 'PayPal',
};

export default function ReceiptPage() {
  const [receipt, setReceipt] = useState<ReceiptData | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem('lastReceipt');
    if (data) {
      setReceipt(JSON.parse(data));
    }
  }, []);

  if (!receipt) {
    return (
      <div className="receipt-page">
        <div className="receipt-page__empty">
          <h2>No hay recibo disponible</h2>
          <p>Realiza una compra para generar un recibo.</p>
          <NeuButton variant="primary" onClick={() => navigate('/catalogo')}>
            Ir al catálogo
          </NeuButton>
        </div>
      </div>
    );
  }

  const date = new Date(receipt.date);

  return (
    <div className="receipt-page">
      <div className="receipt-page__success">
        <div className="receipt-page__check">
          <CheckCircle size={48} />
        </div>
        <h1>¡Compra exitosa!</h1>
        <p>Tu orden ha sido procesada correctamente</p>
      </div>

      <NeuCard className="receipt-page__card" padding="2rem">
        <div className="receipt__header">
          <div className="receipt__brand">
            <span className="receipt__logo">Q</span>
            <div>
              <h3>QuetzalDev</h3>
              <p>Recibo de compra</p>
            </div>
          </div>
          <div className="receipt__meta">
            <p><strong>Orden:</strong> {receipt.orderNumber}</p>
            <p>
              <strong>Fecha:</strong>{' '}
              {date.toLocaleDateString('es-GT', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>
        </div>

        <div className="receipt__divider" />

        <div className="receipt__billing">
          <h4>Datos de facturación</h4>
          <div className="receipt__billing-grid">
            <div>
              <span className="receipt__label">Nombre</span>
              <span>{receipt.nombre}</span>
            </div>
            <div>
              <span className="receipt__label">Email</span>
              <span>{receipt.email}</span>
            </div>
            <div>
              <span className="receipt__label">NIT</span>
              <span>{receipt.nit}</span>
            </div>
            <div>
              <span className="receipt__label">Método de pago</span>
              <span>{paymentLabels[receipt.metodoPago] || receipt.metodoPago}</span>
            </div>
            {receipt.empresa && (
              <div>
                <span className="receipt__label">Empresa</span>
                <span>{receipt.empresa}</span>
              </div>
            )}
            {receipt.direccion && (
              <div>
                <span className="receipt__label">Dirección</span>
                <span>{receipt.direccion}</span>
              </div>
            )}
          </div>
        </div>

        <div className="receipt__divider" />

        <div className="receipt__items">
          <h4>Productos</h4>
          <table className="receipt__table">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cant.</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {receipt.items.map((item, i) => (
                <tr key={i}>
                  <td>{item.name}</td>
                  <td>Q{item.price.toFixed(2)}</td>
                  <td>{item.quantity}</td>
                  <td>Q{item.subtotal.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="receipt__divider" />

        <div className="receipt__total">
          <span>TOTAL</span>
          <span>Q{receipt.total.toFixed(2)}</span>
        </div>

        <div className="receipt__footer-note">
          <p>Este es un recibo simulado con fines académicos.</p>
          <p>QuetzalDev — Servicios de software profesional</p>
        </div>
      </NeuCard>

      <div className="receipt-page__actions">
        <NeuButton variant="secondary" onClick={() => window.print()}>
          <Download size={16} /> Imprimir recibo
        </NeuButton>
        <NeuButton variant="primary" onClick={() => navigate('/')}>
          <ArrowLeft size={16} /> Volver al inicio
        </NeuButton>
      </div>
    </div>
  );
}
