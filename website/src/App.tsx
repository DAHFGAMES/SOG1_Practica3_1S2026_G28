import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import MainLayout from './components/templates/MainLayout';
import HomePage from './components/pages/HomePage';
import CatalogPage from './components/pages/CatalogPage';
import CartPage from './components/pages/CartPage';
import CheckoutPage from './components/pages/CheckoutPage';
import ReceiptPage from './components/pages/ReceiptPage';
import ProductWelcomePage from './components/pages/ProductWelcomePage';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalogo" element={<CatalogPage />} />
            <Route path="/carrito" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/recibo" element={<ReceiptPage />} />
            <Route path="/bienvenida/:productId" element={<ProductWelcomePage />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
