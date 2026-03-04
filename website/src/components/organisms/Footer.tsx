import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <span className="footer__logo">Q</span>
          <span className="footer__name">QuetzalDev</span>
        </div>
        <div className="footer__services">
          <span>ERP</span>
          <span className="footer__dot">·</span>
          <span>Desarrollo Web</span>
          <span className="footer__dot">·</span>
          <span>Apps Móviles</span>
        </div>
        <p className="footer__copy">
          © {new Date().getFullYear()} QuetzalDev — Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
}
