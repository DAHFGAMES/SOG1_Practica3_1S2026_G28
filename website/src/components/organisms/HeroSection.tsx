import { useNavigate } from 'react-router-dom';
import { ArrowRight, Package, Shield, Zap } from 'lucide-react';
import NeuButton from '../atoms/NeuButton';
import NeuCard from '../atoms/NeuCard';
import NeuIconBox from '../atoms/NeuIconBox';
import './HeroSection.css';

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">
          Software listo para
          <span className="hero__highlight"> impulsar tu negocio</span>
        </h1>
        <p className="hero__subtitle">
          Snippets, módulos y aplicaciones preconstruidas por QuetzalDev.
          Descarga, integra y comienza a operar en minutos.
        </p>
        <div className="hero__actions">
          <NeuButton
            variant="primary"
            size="lg"
            onClick={() => navigate('/catalogo')}
          >
            Ver catálogo <ArrowRight size={18} />
          </NeuButton>
          <NeuButton
            variant="secondary"
            size="lg"
            onClick={() => navigate('/catalogo')}
          >
            Explorar productos
          </NeuButton>
        </div>
      </div>

      <div className="hero__features">
        <NeuCard className="hero__feature" padding="1.25rem">
          <NeuIconBox size="md">
            <Package size={24} />
          </NeuIconBox>
          <div>
            <h4>Listo para usar</h4>
            <p>Productos empaquetados para descarga inmediata</p>
          </div>
        </NeuCard>

        <NeuCard className="hero__feature" padding="1.25rem">
          <NeuIconBox size="md">
            <Shield size={24} />
          </NeuIconBox>
          <div>
            <h4>Soporte incluido</h4>
            <p>Asistencia técnica en todos nuestros productos</p>
          </div>
        </NeuCard>

        <NeuCard className="hero__feature" padding="1.25rem">
          <NeuIconBox size="md">
            <Zap size={24} />
          </NeuIconBox>
          <div>
            <h4>Alto rendimiento</h4>
            <p>Código optimizado y documentado profesionalmente</p>
          </div>
        </NeuCard>
      </div>
    </section>
  );
}
