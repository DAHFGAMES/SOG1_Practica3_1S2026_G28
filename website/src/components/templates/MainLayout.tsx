import { Outlet } from 'react-router-dom';
import Navbar from '../organisms/Navbar';
import Footer from '../organisms/Footer';
import './MainLayout.css';

export default function MainLayout() {
  return (
    <div className="main-layout">
      <Navbar />
      <main className="main-layout__content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
