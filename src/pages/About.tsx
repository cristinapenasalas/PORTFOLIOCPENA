import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import ContactCTA from '../components/ContactCTA';
import { easeOut } from '../lib/motion';
import './About.css';

export default function About() {
  const { t } = useLanguage();

  return (
    <>
      <section className="about-hero container">
        <motion.p
          className="about-hero__eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          {t.about.eyebrow}
        </motion.p>

        <motion.h1
          className="about-hero__heading"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.08, ease: easeOut }}
        >
          {t.about.heading}
        </motion.h1>
      </section>

      <section className="about-bio container">
        <motion.div
          className="about-bio__mark"
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: easeOut }}
        >
          <span className="about-bio__mark-glyph about-bio__mark-glyph--pink" />
          <span className="about-bio__mark-glyph about-bio__mark-glyph--blue" />
          <span className="about-bio__mark-glyph about-bio__mark-glyph--amber" />
          <span className="about-bio__mark-initials">CP</span>
        </motion.div>

        <div className="about-bio__text">
          {t.about.paragraphs.map((paragraph, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.65, delay: i * 0.1, ease: easeOut }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </section>

      <section className="about-highlights container">
        {t.about.highlights.map((highlight, i) => (
          <motion.div
            key={highlight.label}
            className="about-highlights__item"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: easeOut }}
          >
            <span className="about-highlights__value">{highlight.value}</span>
            <span className="about-highlights__label">{highlight.label}</span>
          </motion.div>
        ))}
      </section>

      <section className="about-skills container">
        <motion.h2
          className="about-skills__heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          {t.about.skillsHeading}
        </motion.h2>

        <div className="about-skills__grid">
          {t.about.skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              className="about-skills__group"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: easeOut }}
            >
              <h3 className="about-skills__group-title">{group.title}</h3>
              <ul className="about-skills__tags">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
