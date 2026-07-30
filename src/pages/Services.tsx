import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { services, projects } from '../data/content';
import ContactCTA from '../components/ContactCTA';
import { easeOut } from '../lib/motion';
import './Services.css';

export default function Services() {
  const { t, lang } = useLanguage();

  return (
    <>
      <section className="services-hero container">
        <motion.p
          className="services-hero__eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          {t.services.eyebrow}
        </motion.p>

        <motion.h1
          className="services-hero__heading"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.08, ease: easeOut }}
        >
          {t.services.heading}
        </motion.h1>

        <motion.p
          className="services-hero__support"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18, ease: easeOut }}
        >
          {t.services.support}
        </motion.p>
      </section>

      <section className="services-list container">
        {services.map((service, i) => {
          const hasWork = service.type !== 'ai' && projects.some((p) => p.type === service.type);

          return (
            <motion.div
              key={service.type}
              className={`service-row service-row--${service.color}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, delay: i * 0.06, ease: easeOut }}
            >
              <span className="service-row__index">{String(i + 1).padStart(2, '0')}</span>

              <div className="service-row__body">
                <h2 className="service-row__title">{service.title[lang]}</h2>
                <p className="service-row__description">{service.description[lang]}</p>
                <p className="service-row__audience">{service.audience[lang]}</p>

                {hasWork && (
                  <Link to={`/proyectos?tipo=${service.type}`} className="service-row__link">
                    {t.services.viewWork}
                    <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                      <path
                        d="M4 14L14 4M14 4H6M14 4V12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                )}
              </div>
            </motion.div>
          );
        })}
      </section>

      <ContactCTA />
    </>
  );
}
