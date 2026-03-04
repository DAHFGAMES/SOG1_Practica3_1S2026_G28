import { Link, useLocation } from 'react-router-dom';
import type { ReactNode } from 'react';
import './NavLink.css';

interface NavLinkProps {
  to: string;
  children: ReactNode;
}

export default function NavLink({ to, children }: NavLinkProps) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`nav-link ${isActive ? 'nav-link--active' : ''}`}
    >
      {children}
    </Link>
  );
}
