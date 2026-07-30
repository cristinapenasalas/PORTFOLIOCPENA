import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import PageMeta from '../components/PageMeta';
import { easeOut } from '../lib/motion';
import './Privacy.css';

export default function Privacy() {
  const { t } = useLanguage();

  return (
    <>
      <PageMeta title={t.seo.privacy.title} description={t.seo.privacy.description} />
      <section className="privacy-hero container">
        <motion.p
          className="privacy-hero__eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          {t.privacy.eyebrow}
        </motion.p>

        <motion.h1
          className="privacy-hero__heading"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.08, ease: easeOut }}
        >
          {t.privacy.heading}
        </motion.h1>

        <motion.p
          className="privacy-hero__updated"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.14, ease: easeOut }}
        >
          {t.privacy.updated}
        </motion.p>

        <motion.p
          className="privacy-hero__intro"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: easeOut }}
        >
          {t.privacy.intro}
        </motion.p>
      </section>

      <section className="privacy-sections container">
        {t.privacy.sections.map((section, i) => (
          <motion.div
            key={section.heading}
            className="privacy-section"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: (i % 4) * 0.06, ease: easeOut }}
          >
            <h2 className="privacy-section__heading">{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="privacy-section__paragraph">
                {paragraph}
              </p>
            ))}
          </motion.div>
        ))}
      </section>
    </>
  );
}
