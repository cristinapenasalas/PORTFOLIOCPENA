import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { testimonials } from '../data/content';
import { easeOut } from '../lib/motion';
import './Testimonials.css';

const COLORS = ['pink', 'blue', 'amber'] as const;

export default function Testimonials() {
  const { t, lang } = useLanguage();

  return (
    <section className="testimonials container">
      <motion.p
        className="testimonials__eyebrow"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        {t.testimonials.eyebrow}
      </motion.p>

      <motion.h2
        className="testimonials__heading"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.65, delay: 0.06, ease: easeOut }}
      >
        {t.testimonials.heading}
      </motion.h2>

      <div className="testimonials__grid">
        {testimonials.map((testimonial, i) => (
          <motion.figure
            key={testimonial.name}
            className={`testimonial-card testimonial-card--${COLORS[i % COLORS.length]}`}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: easeOut }}
          >
            <span className="testimonial-card__mark" aria-hidden="true">
              “
            </span>
            <blockquote className="testimonial-card__quote">{testimonial.quote[lang]}</blockquote>
            <figcaption className="testimonial-card__attribution">
              <span className="testimonial-card__name">{testimonial.name}</span>
              <span className="testimonial-card__role">{testimonial.role[lang]}</span>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
