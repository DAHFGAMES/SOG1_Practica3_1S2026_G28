import ProductGrid from '../organisms/ProductGrid';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';
import './CatalogPage.css';

export default function CatalogPage() {
  const { addToCart } = useCart();

  return (
    <div className="catalog-page">
      <div className="catalog-page__header">
        <h1>Catálogo de Productos</h1>
        <p>
          Explora nuestra línea de software preconstruido basado en nuestros
          servicios de ERP, Desarrollo Web y Apps Móviles.
        </p>
      </div>
      <ProductGrid products={products} onAddToCart={addToCart} />
    </div>
  );
}
