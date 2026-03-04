import { useState } from 'react';
import NeuInput from '../atoms/NeuInput';
import NeuButton from '../atoms/NeuButton';
import NeuCard from '../atoms/NeuCard';
import './CheckoutForm.css';

export interface CheckoutData {
  nombre: string;
  email: string;
  telefono: string;
  empresa: string;
  nit: string;
  direccion: string;
  metodoPago: string;
}

interface CheckoutFormProps {
  onSubmit: (data: CheckoutData) => void;
  disabled?: boolean;
}

export default function CheckoutForm({ onSubmit, disabled = false }: CheckoutFormProps) {
  const [form, setForm] = useState<CheckoutData>({
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    nit: '',
    direccion: '',
    metodoPago: 'tarjeta',
  });

  const handleChange = (field: keyof CheckoutData) => (value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <NeuCard padding="2rem">
      <form className="checkout-form" onSubmit={handleSubmit}>
        <h3 className="checkout-form__title">Datos de facturación</h3>

        <div className="checkout-form__row">
          <NeuInput
            label="Nombre completo"
            value={form.nombre}
            onChange={handleChange('nombre')}
            placeholder="Juan Pérez"
            required
          />
          <NeuInput
            label="Correo electrónico"
            value={form.email}
            onChange={handleChange('email')}
            placeholder="juan@empresa.com"
            type="email"
            required
          />
        </div>

        <div className="checkout-form__row">
          <NeuInput
            label="Teléfono"
            value={form.telefono}
            onChange={handleChange('telefono')}
            placeholder="+502 1234 5678"
          />
          <NeuInput
            label="Empresa"
            value={form.empresa}
            onChange={handleChange('empresa')}
            placeholder="Mi Empresa S.A."
          />
        </div>

        <div className="checkout-form__row">
          <NeuInput
            label="NIT"
            value={form.nit}
            onChange={handleChange('nit')}
            placeholder="1234567-8"
            required
          />
          <NeuInput
            label="Dirección"
            value={form.direccion}
            onChange={handleChange('direccion')}
            placeholder="Ciudad de Guatemala"
          />
        </div>

        <div className="checkout-form__payment">
          <label className="neu-input-label">Método de pago</label>
          <div className="checkout-form__payment-options">
            {[
              { value: 'tarjeta', label: 'Tarjeta de crédito' },
              { value: 'transferencia', label: 'Transferencia bancaria' },
              { value: 'paypal', label: 'PayPal' },
            ].map((option) => (
              <label
                key={option.value}
                className={`checkout-form__payment-option ${
                  form.metodoPago === option.value
                    ? 'checkout-form__payment-option--active'
                    : ''
                }`}
              >
                <input
                  type="radio"
                  name="metodoPago"
                  value={option.value}
                  checked={form.metodoPago === option.value}
                  onChange={(e) => handleChange('metodoPago')(e.target.value)}
                />
                {option.label}
              </label>
            ))}
          </div>
        </div>

        <NeuButton
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          disabled={disabled || !form.nombre || !form.email || !form.nit}
        >
          Confirmar compra
        </NeuButton>
      </form>
    </NeuCard>
  );
}
