import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { projects } from '../data/content';
import ContactCTA from '../components/ContactCTA';
import { easeOut } from '../lib/motion';
import './CaseStudy.css';

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const { t, lang } = useLanguage();

  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) {
    return <Navigate to="/proyectos" replace />;
  }

  const project = projects[index];
  const next = projects[(index + 1) % projects.length];
  const result = project.results[lang];

  return (
    <>
      <article className={`case-study case-study--${project.color}`}>
        <section className="case-study__hero container">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeOut }}
          >
            <Link to="/proyectos" className="case-study__back">
              ← {t.caseStudy.back}
            </Link>
          </motion.div>

          <motion.p
            className="case-study__category"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.06, ease: easeOut }}
          >
            {project.category[lang]}
          </motion.p>

          <motion.h1
            className="case-study__title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: easeOut }}
          >
            {project.title[lang]}
          </motion.h1>

          <motion.p
            className="case-study__tagline"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.18, ease: easeOut }}
          >
            {project.tagline[lang]}
          </motion.p>
        </section>

        <div className="case-study__glyph" aria-hidden="true" />

        <section className="case-study__block container">
          <motion.h2
            className="case-study__block-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: easeOut }}
          >
            {t.caseStudy.problem}
          </motion.h2>
          <motion.p
            className="case-study__paragraph"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: 0.08, ease: easeOut }}
          >
            {project.problem[lang]}
          </motion.p>
        </section>

        <section className="case-study__block container">
          <motion.h2
            className="case-study__block-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: easeOut }}
          >
            {t.caseStudy.actions}
          </motion.h2>
          <ul className="case-study__actions">
            {project.actions[lang].map((action, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: easeOut }}
              >
                <span className="case-study__actions-index">{String(i + 1).padStart(2, '0')}</span>
                <span>{action}</span>
              </motion.li>
            ))}
          </ul>
        </section>

        <section className="case-study__block case-study__block--result container">
          <motion.h2
            className="case-study__block-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: easeOut }}
          >
            {t.caseStudy.result}
          </motion.h2>

          {result.metrics && (
            <div className="case-study__metrics">
              {result.metrics.map((metric, i) => (
                <motion.div
                  key={metric.value}
                  className="case-study__metric"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: easeOut }}
                >
                  <span className="case-study__metric-value">{metric.value}</span>
                  <span className="case-study__metric-label">{metric.label}</span>
                </motion.div>
              ))}
            </div>
          )}

          {result.paragraph && (
            <motion.p
              className="case-study__paragraph"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, delay: 0.08, ease: easeOut }}
            >
              {result.paragraph}
            </motion.p>
          )}
        </section>

        <Link to={`/proyectos/${next.slug}`} className="case-study__next container">
          <span className="case-study__next-label">{t.caseStudy.next}</span>
          <span className="case-study__next-title">
            {next.title[lang]} →
          </span>
        </Link>
      </article>

      <ContactCTA />
    </>
  );
}
