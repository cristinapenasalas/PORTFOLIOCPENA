import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import './Header.css';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems: { to: string; label: string }[] = [
    { to: '/sobre-mi', label: t.nav.about },
    { to: '/proyectos', label: t.nav.work },
    { to: '/servicios', label: t.nav.services },
    { to: '/contacto', label: t.nav.contact },
  ];

  const controls = (
    <div className="site-header__controls">
      <button
        type="button"
        className="site-header__lang"
        onClick={toggleLang}
        aria-label={lang === 'es' ? 'Switch to English' : 'Cambiar a español'}
      >
        {t.langToggle}
      </button>

      <button
        type="button"
        className="site-header__theme"
        onClick={toggleTheme}
        aria-label={theme === 'light' ? t.themeToggle.toDark : t.themeToggle.toLight}
        aria-pressed={theme === 'dark'}
      >
        <span className="site-header__theme-track">
          <span className="site-header__theme-thumb" />
        </span>
      </button>
    </div>
  );

  return (
    <header className="site-header">
      <div className="site-header__inner container">
        <NavLink to="/" className="site-header__mark" aria-label="Cristina Peña — inicio">
          Cristina Peña
        </NavLink>

        <nav className="site-header__nav" aria-label="Principal">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive ? 'site-header__link is-active' : 'site-header__link'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="site-header__right">
          {controls}
          <button
            type="button"
            className={menuOpen ? 'site-header__burger is-open' : 'site-header__burger'}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={menuOpen ? 'site-header__mobile is-open' : 'site-header__mobile'}>
        <nav className="site-header__mobile-nav" aria-label="Móvil">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? 'site-header__mobile-link is-active' : 'site-header__mobile-link'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
