import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { easeOut } from '../lib/motion';
import './ContactCTA.css';

export default function ContactCTA() {
  const { t } = useLanguage();

  return (
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
  );
}
