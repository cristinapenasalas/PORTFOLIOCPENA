import { useLanguage } from '../context/LanguageContext';
import './Footer.css';

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <a className="site-footer__mark" href="/">
          Cristina Peña
        </a>

        <div className="site-footer__links">
          <a href="mailto:cristina.pena3108@gmail.com">{t.footer.email}</a>
          <a href="https://www.linkedin.com/in/cristinapenasalas" target="_blank" rel="noreferrer">
            {t.footer.linkedin}
          </a>
          <a href="tel:+34675666728">+34 675 666 728</a>
        </div>

        <p className="site-footer__legal">
          © {year} Cristina Peña. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
