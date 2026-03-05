import { ShoppingCart } from 'lucide-react';
import NeuCard from '../atoms/NeuCard';
import NeuButton from '../atoms/NeuButton';
import type { Product } from '../../data/products';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <NeuCard className="product-card" padding="0">
      <div className="product-card__illustration">
        <img
          src={product.image}
          alt={`Ilustración de ${product.name}`}
          className="product-card__image"
        />
        <div className="product-card__image-overlay" />
      </div>

      <div className="product-card__body">
        <div className="product-card__meta">
          <h3 className="product-card__name">{product.name}</h3>
          <span className="product-card__price">Q{product.price.toFixed(2)}</span>
        </div>
        <p className="product-card__tagline">{product.tagline}</p>
        <p className="product-card__description">{product.description}</p>

        <div className="product-card__details">
          <div className="product-card__section">
            <h4 className="product-card__section-title">
              <span className="product-card__section-dot product-card__section-dot--features" />
              Funciones
            </h4>
            <ul className="product-card__list">
              {product.features.map((f, i) => (
                <li key={i} className="product-card__list-item product-card__list-item--feature">
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="product-card__section">
            <h4 className="product-card__section-title">
              <span className="product-card__section-dot product-card__section-dot--benefits" />
              Beneficios
            </h4>
            <ul className="product-card__list">
              {product.benefits.map((b, i) => (
                <li key={i} className="product-card__list-item product-card__list-item--benefit">
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="product-card__footer">
        <NeuButton variant="primary" fullWidth onClick={() => onAddToCart(product)}>
          <ShoppingCart size={16} /> Agregar al carrito
        </NeuButton>
      </div>
    </NeuCard>
  );
}
