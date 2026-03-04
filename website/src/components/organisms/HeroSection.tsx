import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Package, Shield, Zap, ChevronDown, ShieldAlert, Scale, Home } from 'lucide-react';
import NeuButton from '../atoms/NeuButton';
import './HeroSection.css';

export default function HeroSection() {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToFeatures = () => {
    document.querySelector('.landing__features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="landing">
      {/* ── Section 1: Hero ── */}
      <section className="landing__hero" ref={heroRef}>
        <div className="landing__hero-orb landing__hero-orb--green" />
        <div className="landing__hero-orb landing__hero-orb--blue" />
        <div
          className="landing__hero-content"
          style={{ transform: `translateY(${scrollY * 0.25}px)`, opacity: Math.max(0, 1 - scrollY / 600) }}
        >
          <span className="landing__eyebrow">QuetzalDev — Software Empaquetado</span>
          <h1 className="landing__hero-title">
            Software listo para<br />
            <span className="landing__gradient-text">impulsar tu negocio</span>
          </h1>
          <p className="landing__hero-subtitle">
            Snippets, módulos y aplicaciones preconstruidas.<br />
            Descarga, integra y comienza a operar en minutos.
          </p>
          <div className="landing__hero-actions">
            <NeuButton variant="primary" size="lg" onClick={() => navigate('/catalogo')}>
              Ver catálogo <ArrowRight size={18} />
            </NeuButton>
            <button className="landing__hero-secondary" onClick={scrollToFeatures}>
              Conocer más <ChevronDown size={18} />
            </button>
          </div>
        </div>
        <button className="landing__scroll-hint" onClick={scrollToFeatures} aria-label="Scroll down">
          <ChevronDown size={22} />
        </button>
      </section>

      {/* ── Section 2: Features ── */}
      <section className="landing__features">
        <div className="landing__container">
          <div className="landing__section-header">
            <h2>¿Por qué QuetzalDev?</h2>
            <p>Soluciones profesionales para acelerar tu operación</p>
          </div>
          <div className="landing__features-grid">
            <div className="landing__feature-card">
              <div className="landing__feature-icon">
                <Package size={26} />
              </div>
              <h3>Listo para usar</h3>
              <p>Productos empaquetados para descarga inmediata, sin configuraciones complejas ni infraestructura propia.</p>
            </div>
            <div className="landing__feature-card">
              <div className="landing__feature-icon">
                <Shield size={26} />
              </div>
              <h3>Soporte incluido</h3>
              <p>Asistencia técnica profesional incluida en todos nuestros productos durante 6 meses.</p>
            </div>
            <div className="landing__feature-card">
              <div className="landing__feature-icon">
                <Zap size={26} />
              </div>
              <h3>Alto rendimiento</h3>
              <p>Código optimizado, completamente documentado y listo para entornos de producción.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Products Teaser (parallax bg) ── */}
      <section className="landing__teaser">
        <div className="landing__teaser-bg" />
        <div className="landing__container">
          <div className="landing__section-header landing__section-header--light">
            <h2>Nuestros Productos</h2>
            <p>Recursos Humanos · Gestión Legal · Smart Home</p>
          </div>
          <div className="landing__teaser-grid">
            <div className="landing__teaser-item">
              <div className="landing__teaser-icon"><ShieldAlert size={28} /></div>
              <div>
                <h3>SafeCase</h3>
                <p>Entornos laborales libres de acoso — desde Q249.99</p>
              </div>
            </div>
            <div className="landing__teaser-item">
              <div className="landing__teaser-icon"><Scale size={28} /></div>
              <div>
                <h3>LegalFlow</h3>
                <p>Administra tu bufete con precisión — desde Q179.99</p>
              </div>
            </div>
            <div className="landing__teaser-item">
              <div className="landing__teaser-icon"><Home size={28} /></div>
              <div>
                <h3>HomeHub</h3>
                <p>Tu hogar inteligente en una sola app — desde Q329.99</p>
              </div>
            </div>
          </div>
          <div className="landing__teaser-cta">
            <NeuButton variant="primary" size="lg" onClick={() => navigate('/catalogo')}>
              Ver catálogo completo <ArrowRight size={18} />
            </NeuButton>
          </div>
        </div>
      </section>

      {/* ── Section 4: Stats ── */}
      <section className="landing__stats">
        <div className="landing__container">
          <div className="landing__stats-grid">
            <div className="landing__stat">
              <span className="landing__stat-number">3</span>
              <span className="landing__stat-label">Productos premium</span>
            </div>
            <div className="landing__stat">
              <span className="landing__stat-number">24h</span>
              <span className="landing__stat-label">Tiempo de implementación</span>
            </div>
            <div className="landing__stat">
              <span className="landing__stat-number">100%</span>
              <span className="landing__stat-label">Código documentado</span>
            </div>
            <div className="landing__stat">
              <span className="landing__stat-number">6M</span>
              <span className="landing__stat-label">Soporte técnico</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 5: Final CTA ── */}
      <section className="landing__cta">
        <div className="landing__cta-bg" />
        <div className="landing__container landing__container--center">
          <h2 className="landing__cta-title">¿Listo para impulsar tu negocio?</h2>
          <p className="landing__cta-subtitle">
            Explora nuestro catálogo y encuentra el software que tu empresa necesita hoy.
          </p>
          <NeuButton variant="primary" size="lg" onClick={() => navigate('/catalogo')}>
            Explorar todos los productos <ArrowRight size={18} />
          </NeuButton>
        </div>
      </section>
    </div>
  );
}
