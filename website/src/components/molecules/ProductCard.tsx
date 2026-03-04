import { Database, Code, Smartphone } from 'lucide-react';
import NeuCard from '../atoms/NeuCard';
import NeuButton from '../atoms/NeuButton';
import NeuBadge from '../atoms/NeuBadge';
import NeuIconBox from '../atoms/NeuIconBox';
import type { Product } from '../../data/products';
import './ProductCard.css';

const iconMap: Record<string, React.ReactNode> = {
  database: <Database size={28} />,
  code: <Code size={28} />,
  smartphone: <Smartphone size={28} />,
};

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <NeuCard className="product-card" padding="0">
      <div className="product-card__header">
        <NeuIconBox size="lg">{iconMap[product.icon]}</NeuIconBox>
        <NeuBadge variant="accent">{product.category}</NeuBadge>
      </div>

      <div className="product-card__body">
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__tagline">{product.tagline}</p>
        <p className="product-card__description">{product.description}</p>

        <div className="product-card__features">
          <h4>Funciones</h4>
          <ul>
            {product.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>

        <div className="product-card__benefits">
          <h4>Beneficios</h4>
          <ul>
            {product.benefits.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="product-card__footer">
        <span className="product-card__price">
          Q{product.price.toFixed(2)}
        </span>
        <NeuButton variant="primary" onClick={() => onAddToCart(product)}>
          Agregar al carrito
        </NeuButton>
      </div>
    </NeuCard>
  );
}
