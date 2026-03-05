import { useParams, useNavigate } from 'react-router-dom';
import { CheckCircle2, ArrowLeft, ShoppingBag } from 'lucide-react';
import { products } from '../../data/products';
import NeuButton from '../atoms/NeuButton';
import './ProductWelcomePage.css';

export default function ProductWelcomePage() {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="welcome-page welcome-page--not-found">
        <h2>Producto no encontrado</h2>
        <NeuButton variant="primary" onClick={() => navigate('/catalogo')}>
          Ver catálogo
        </NeuButton>
      </div>
    );
  }

  return (
    <div className="welcome-page">
      {/* ── Hero ── */}
      <div className="welcome-page__hero">
        <div className="welcome-page__hero-content">
          <p className="welcome-page__label">Bienvenido a</p>
          <h1 className="welcome-page__title">{product.name}</h1>
          <p className="welcome-page__tagline">{product.tagline}</p>
        </div>
        <div className="welcome-page__hero-image">
          <img src={product.image} alt={product.name} />
        </div>
      </div>

      <div className="welcome-page__container">
        {/* ── Intro ── */}
        <section className="welcome-page__intro">
          <div className="welcome-page__intro-badge">Simulación de acceso</div>
          <p className="welcome-page__description">{product.description}</p>
        </section>

        {/* ── Features ── */}
        <section className="welcome-page__section">
          <h2 className="welcome-page__section-title">Lo que puedes hacer</h2>
          <div className="welcome-page__features">
            {product.features.map((feature, i) => (
              <div key={i} className="welcome-page__feature-item">
                <span className="welcome-page__feature-number">{i + 1}</span>
                <p>{feature}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Benefits ── */}
        <section className="welcome-page__section">
          <h2 className="welcome-page__section-title">Por qué vale la pena</h2>
          <div className="welcome-page__benefits">
            {product.benefits.map((benefit, i) => (
              <div key={i} className="welcome-page__benefit-item">
                <CheckCircle2 className="welcome-page__benefit-icon" size={20} />
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Simulation notice ── */}
        <div className="welcome-page__notice">
          <p>
            Esta es una demostración académica. En un entorno real, aquí iniciarías sesión
            y accederías al panel de <strong>{product.name}</strong>.
          </p>
        </div>

        {/* ── Actions ── */}
        <div className="welcome-page__actions">
          <NeuButton variant="ghost" onClick={() => navigate('/')}>
            <ArrowLeft size={16} /> Volver al inicio
          </NeuButton>
          <NeuButton variant="primary" onClick={() => navigate('/catalogo')}>
            <ShoppingBag size={16} /> Ver más productos
          </NeuButton>
        </div>
      </div>
    </div>
  );
}
