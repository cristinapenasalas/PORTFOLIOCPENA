import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { projects } from '../data/content';
import ContactCTA from '../components/ContactCTA';
import PageMeta from '../components/PageMeta';
import GrowthChart from '../components/GrowthChart';
import { easeOut } from '../lib/motion';
import { withBase } from '../lib/assetPath';
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
      <PageMeta title={`${project.title[lang]} — Cristina Peña`} description={project.tagline[lang]} />
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

          {project.links && project.links.length > 0 && (
            <motion.div
              className="case-study__links"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24, ease: easeOut }}
            >
              {project.links.map((link) => (
                <a key={link.url} href={link.url} target="_blank" rel="noreferrer" className="case-study__visit">
                  {link.label[lang]}
                  <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <path
                      d="M4 14L14 4M14 4H6M14 4V12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              ))}
            </motion.div>
          )}
        </section>

        {project.screenshots && project.screenshots.length > 0 ? (
          <section className="case-study__gallery container">
            <h2 className="visually-hidden">{t.caseStudy.gallery}</h2>
            {project.compactGallery ? (
              <div className="case-study__gallery-grid case-study__gallery-grid--compact">
                {project.screenshots.map((shot, i) => (
                  <motion.img
                    key={shot.src}
                    src={withBase(shot.src)}
                    alt={shot.alt[lang]}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: i * 0.08, ease: easeOut }}
                  />
                ))}
              </div>
            ) : (
              <>
                <motion.img
                  src={withBase(project.screenshots[0].src)}
                  alt={project.screenshots[0].alt[lang]}
                  className="case-study__gallery-hero"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, ease: easeOut }}
                />
                {project.screenshots.length > 1 && (
                  <div className="case-study__gallery-grid">
                    {project.screenshots.slice(1).map((shot, i) => (
                      <motion.img
                        key={shot.src}
                        src={withBase(shot.src)}
                        alt={shot.alt[lang]}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: i * 0.08, ease: easeOut }}
                      />
                    ))}
                  </div>
                )}
              </>
            )}
          </section>
        ) : (
          <div className="case-study__glyph" aria-hidden="true" />
        )}

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

          {project.growth && (
            <motion.div
              className="case-study__growth"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.15, ease: easeOut }}
            >
              <h3 className="case-study__growth-heading">{project.growth.heading[lang]}</h3>
              <p className="case-study__growth-caption">{project.growth.caption[lang]}</p>
              <GrowthChart points={project.growth.points} lang={lang} />
            </motion.div>
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
