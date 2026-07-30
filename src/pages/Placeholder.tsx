import './Placeholder.css';

interface PlaceholderProps {
  title: { es: string; en: string };
  lang: 'es' | 'en';
}

export default function Placeholder({ title, lang }: PlaceholderProps) {
  return (
    <section className="placeholder container">
      <p className="placeholder__eyebrow">{lang === 'es' ? 'Próximamente' : 'Coming soon'}</p>
      <h1 className="placeholder__title">{title[lang]}</h1>
      <p className="placeholder__note">
        {lang === 'es'
          ? 'Esta sección está en construcción.'
          : 'This section is under construction.'}
      </p>
    </section>
  );
}
