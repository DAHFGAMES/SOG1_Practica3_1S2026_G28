import { useState } from 'react';
import { CreditCard, Landmark, Wallet } from 'lucide-react';
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
  cardNumber: string;
  cardExpiry: string;
  cardCvv: string;
  bankName: string;
  bankAccount: string;
  paypalEmail: string;
}

interface CheckoutFormProps {
  onSubmit: (data: CheckoutData) => void;
  disabled?: boolean;
}

const paymentMethods = [
  { value: 'tarjeta',       label: 'Tarjeta',      Icon: CreditCard },
  { value: 'transferencia', label: 'Transferencia', Icon: Landmark   },
  { value: 'paypal',        label: 'PayPal',        Icon: Wallet     },
];

export default function CheckoutForm({ onSubmit, disabled = false }: CheckoutFormProps) {
  const [form, setForm] = useState<CheckoutData>({
    nombre: '', email: '', telefono: '', empresa: '',
    nit: '', direccion: '', metodoPago: 'tarjeta',
    cardNumber: '', cardExpiry: '', cardCvv: '',
    bankName: '', bankAccount: '', paypalEmail: '',
  });

  const set = (field: keyof CheckoutData) => (value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handlePhoneChange = (raw: string) => {
    const digits = raw.replace(/\D/g, '').slice(0, 8);
    const formatted = digits.length > 4 ? `${digits.slice(0, 4)}-${digits.slice(4)}` : digits;
    setForm((prev) => ({ ...prev, telefono: formatted }));
  };

  const handleNitChange = (raw: string) => {
    const clean = raw.replace(/[^0-9kK]/g, '').toUpperCase().slice(0, 9);
    const formatted = clean.length >= 2
      ? `${clean.slice(0, -1)}-${clean.slice(-1)}`
      : clean;
    setForm((prev) => ({ ...prev, nit: formatted }));
  };

  const handleCardNumberChange = (raw: string) => {
    const digits = raw.replace(/\D/g, '').slice(0, 16);
    const formatted = digits.match(/.{1,4}/g)?.join('-') ?? digits;
    setForm((prev) => ({ ...prev, cardNumber: formatted }));
  };

  const handleExpiryChange = (raw: string) => {
    const digits = raw.replace(/\D/g, '').slice(0, 4);
    const formatted = digits.length > 2 ? `${digits.slice(0, 2)}/${digits.slice(2)}` : digits;
    setForm((prev) => ({ ...prev, cardExpiry: formatted }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
  };

  const isPaymentDetailsFilled = () => {
    if (form.metodoPago === 'tarjeta')
      return form.cardNumber.length === 19 && form.cardExpiry.length === 5 && form.cardCvv.length >= 3;
    if (form.metodoPago === 'transferencia')
      return !!form.bankName && !!form.bankAccount;
    if (form.metodoPago === 'paypal')
      return !!form.paypalEmail;
    return true;
  };

  return (
    <NeuCard padding="2rem">
      <form className="checkout-form" onSubmit={handleSubmit}>
        <h3 className="checkout-form__title">Datos de facturación</h3>

        <div className="checkout-form__row">
          <NeuInput
            label="Nombre completo"
            value={form.nombre}
            onChange={set('nombre')}
            placeholder="Juan Pérez"
            required
          />
          <NeuInput
            label="Correo electrónico"
            value={form.email}
            onChange={set('email')}
            placeholder="juan@empresa.com"
            type="email"
            required
          />
        </div>

        <div className="checkout-form__row">
          <NeuInput
            label="Teléfono"
            value={form.telefono}
            onChange={handlePhoneChange}
            placeholder="1234-5678"
            inputMode="numeric"
            maxLength={9}
          />
          <NeuInput
            label="Empresa"
            value={form.empresa}
            onChange={set('empresa')}
            placeholder="Mi Empresa S.A."
          />
        </div>

        <div className="checkout-form__row">
          <NeuInput
            label="NIT"
            value={form.nit}
            onChange={handleNitChange}
            placeholder="1234567-8"
            inputMode="numeric"
            maxLength={11}
            required
          />
          <NeuInput
            label="Dirección"
            value={form.direccion}
            onChange={set('direccion')}
            placeholder="Ciudad de Guatemala"
          />
        </div>

        {/* ── Payment method selector ── */}
        <div className="checkout-form__payment">
          <label className="neu-input-label">Método de pago</label>
          <div className="checkout-form__payment-options">
            {paymentMethods.map(({ value, label, Icon }) => (
              <label
                key={value}
                className={`checkout-form__payment-option ${
                  form.metodoPago === value ? 'checkout-form__payment-option--active' : ''
                }`}
              >
                <input
                  type="radio"
                  name="metodoPago"
                  value={value}
                  checked={form.metodoPago === value}
                  onChange={(e) => set('metodoPago')(e.target.value)}
                />
                <Icon size={18} />
                {label}
              </label>
            ))}
          </div>
        </div>

        {/* ── Conditional payment detail fields ── */}
        {form.metodoPago === 'tarjeta' && (
          <div className="checkout-form__payment-details">
            <NeuInput
              label="Número de tarjeta"
              value={form.cardNumber}
              onChange={handleCardNumberChange}
              placeholder="1234-5678-9012-3456"
              inputMode="numeric"
              maxLength={19}
            />
            <div className="checkout-form__row">
              <NeuInput
                label="Vencimiento"
                value={form.cardExpiry}
                onChange={handleExpiryChange}
                placeholder="MM/AA"
                inputMode="numeric"
                maxLength={5}
              />
              <NeuInput
                label="CVV"
                value={form.cardCvv}
                onChange={(v) => setForm((p) => ({ ...p, cardCvv: v.replace(/\D/g, '').slice(0, 4) }))}
                placeholder="123"
                inputMode="numeric"
                maxLength={4}
              />
            </div>
          </div>
        )}

        {form.metodoPago === 'transferencia' && (
          <div className="checkout-form__payment-details">
            <div className="checkout-form__transfer-info">
              <p>Realiza la transferencia a la siguiente cuenta y adjunta el comprobante.</p>
              <div className="checkout-form__bank-info">
                <span>Banco Industrial</span>
                <span>Cuenta: <strong>123-456789-0</strong></span>
                <span>A nombre de: <strong>QuetzalDev S.A.</strong></span>
              </div>
            </div>
            <div className="checkout-form__row">
              <NeuInput
                label="Banco emisor"
                value={form.bankName}
                onChange={set('bankName')}
                placeholder="Banco Industrial"
                required
              />
              <NeuInput
                label="No. de referencia"
                value={form.bankAccount}
                onChange={set('bankAccount')}
                placeholder="REF-0001234"
                required
              />
            </div>
          </div>
        )}

        {form.metodoPago === 'paypal' && (
          <div className="checkout-form__payment-details">
            <NeuInput
              label="Correo PayPal"
              value={form.paypalEmail}
              onChange={set('paypalEmail')}
              placeholder="tu@paypal.com"
              type="email"
              required
            />
            <p className="checkout-form__paypal-hint">
              Recibirás una solicitud de pago al correo indicado.
            </p>
          </div>
        )}

        <NeuButton
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          disabled={disabled || !form.nombre || !form.email || !form.nit || !isPaymentDetailsFilled()}
        >
          Confirmar compra
        </NeuButton>
      </form>
    </NeuCard>
  );
}
