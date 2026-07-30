import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { easeOut } from '../lib/motion';
import './NotFound.css';

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <section className="not-found container">
      <motion.p
        className="not-found__eyebrow"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        {t.notFound.eyebrow}
      </motion.p>

      <motion.h1
        className="not-found__heading"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.08, ease: easeOut }}
      >
        {t.notFound.heading}
      </motion.h1>

      <motion.p
        className="not-found__support"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.18, ease: easeOut }}
      >
        {t.notFound.support}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.26, ease: easeOut }}
      >
        <Link to="/" className="text-link">
          {t.notFound.cta} →
        </Link>
      </motion.div>
    </section>
  );
}
