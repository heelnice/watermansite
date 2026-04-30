import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className="site-root">
      <header className="site-header">
        <div className="logo">
          <span>De Waterman</span>
        </div>
        <nav className="main-nav">
          <NavLink to="/het-boek" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Het Boek
          </NavLink>
          <NavLink to="/inkijken" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Inkijken
          </NavLink>
          <NavLink to="/koop" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Koop
          </NavLink>
          <NavLink to="/persfotos" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Persfoto&apos;s
          </NavLink>
        </nav>
      </header>

      <main className="site-main">
        {children}
      </main>

      <footer className="site-footer">
        <small>© {new Date().getFullYear()} Stan Plandsoen – De Waterman</small>
      </footer>
    </div>
  );
}
