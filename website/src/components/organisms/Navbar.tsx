import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';
import NavLink from '../molecules/NavLink';
import { useCart } from '../../context/CartContext';
import './Navbar.css';

export default function Navbar() {
  const { getItemCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const count = getItemCount();

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__logo">
          <span className="navbar__logo-icon">Q</span>
          <span className="navbar__logo-text">QuetzalDev</span>
        </Link>

        <button
          className="navbar__toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <div className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/catalogo">Catálogo</NavLink>
          <NavLink to="/carrito">Carrito</NavLink>
        </div>

        <Link to="/carrito" className="navbar__cart">
          <div className="navbar__cart-icon">
            <ShoppingCart size={20} />
            {count > 0 && <span className="navbar__cart-badge">{count}</span>}
          </div>
        </Link>
      </div>
    </nav>
  );
}
