import HeroSection from '../organisms/HeroSection';
import ProductGrid from '../organisms/ProductGrid';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';
import './HomePage.css';

export default function HomePage() {
  const { addToCart } = useCart();

  return (
    <div className="home-page">
      <HeroSection />

      <section className="home-page__products">
        <div className="home-page__section-header">
          <h2>Nuestros Productos</h2>
          <p>Software empaquetado listo para impulsar tu negocio</p>
        </div>
        <ProductGrid products={products} onAddToCart={addToCart} />
      </section>
    </div>
  );
}
