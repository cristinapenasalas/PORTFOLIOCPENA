import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { featuredProjects } from '../data/content';
import ProjectCard from '../components/ProjectCard';
import './Home.css';

const easeOut = [0.16, 1, 0.3, 1] as const;

export default function Home() {
  const { t, lang } = useLanguage();

  return (
    <>
      <section className="hero container">
        <motion.p
          className="hero__eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          {t.hero.eyebrow}
        </motion.p>

        <motion.h1
          className="hero__headline"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.08, ease: easeOut }}
        >
          {t.hero.headline}
        </motion.h1>

        <motion.p
          className="hero__support"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22, ease: easeOut }}
        >
          {t.hero.support}
        </motion.p>

        <motion.a
          href="#featured-work"
          className="hero__scroll-cue"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span className="hero__scroll-line" />
          {t.hero.scrollCue}
        </motion.a>
      </section>

      <section id="featured-work" className="featured container">
        <motion.h2
          className="featured__heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          {t.featured.heading}
        </motion.h2>

        <div className="featured__list">
          {featuredProjects.map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              lang={lang}
              index={i}
              viewCaseLabel={t.featured.viewCase}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="featured__all"
        >
          <Link to="/proyectos" className="text-link">
            {t.featured.viewAll} →
          </Link>
        </motion.div>
      </section>

      <section className="cta container">
        <motion.h2
          className="cta__heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.65, ease: easeOut }}
        >
          {t.cta.heading}
        </motion.h2>

        <motion.p
          className="cta__support"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.1, ease: easeOut }}
        >
          {t.cta.support}
        </motion.p>

        <motion.a
          href="mailto:cristina.pena3108@gmail.com"
          className="cta__button"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.2, ease: easeOut }}
        >
          {t.cta.button}
        </motion.a>
      </section>
    </>
  );
}
