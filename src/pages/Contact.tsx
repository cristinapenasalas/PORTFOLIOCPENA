import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import PageMeta from '../components/PageMeta';
import { easeOut } from '../lib/motion';
import './Contact.css';

const CONTACT_EMAIL = 'cristina.pena3108@gmail.com';

export default function Contact() {
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio — ${name}`);
    const body = encodeURIComponent(`${message}\n\n—\n${name}\n${email}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <PageMeta title={t.seo.contact.title} description={t.seo.contact.description} />
      <section className="contact-hero container">
        <motion.p
          className="contact-hero__eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          {t.contact.eyebrow}
        </motion.p>

        <motion.h1
          className="contact-hero__heading"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.08, ease: easeOut }}
        >
          {t.contact.heading}
        </motion.h1>

        <motion.p
          className="contact-hero__support"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18, ease: easeOut }}
        >
          {t.contact.support}
        </motion.p>

        <div className="contact-grid">
          <motion.div
            className="contact-direct"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.65, ease: easeOut }}
          >
            <h2 className="contact-direct__heading">{t.contact.directHeading}</h2>

            <a href={`mailto:${CONTACT_EMAIL}`} className="contact-direct__row">
              <span className="contact-direct__label">{t.contact.labels.email}</span>
              <span className="contact-direct__value">{CONTACT_EMAIL}</span>
            </a>

            <a href="tel:+34675666728" className="contact-direct__row">
              <span className="contact-direct__label">{t.contact.labels.phone}</span>
              <span className="contact-direct__value">+34 675 666 728</span>
            </a>

            <a
              href="https://www.linkedin.com/in/cristinapenasalas"
              target="_blank"
              rel="noreferrer"
              className="contact-direct__row"
            >
              <span className="contact-direct__label">{t.contact.labels.linkedin}</span>
              <span className="contact-direct__value">linkedin.com/in/cristinapenasalas</span>
            </a>
          </motion.div>

          <motion.div
            className="contact-form-card"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, delay: 0.1, ease: easeOut }}
          >
            <h2 className="contact-form-card__heading">{t.contact.formHeading}</h2>

            <form className="contact-form" onSubmit={handleSubmit}>
              <label className="contact-form__field">
                <span>{t.contact.form.name}</span>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder={t.contact.form.namePlaceholder}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>

              <label className="contact-form__field">
                <span>{t.contact.form.email}</span>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder={t.contact.form.emailPlaceholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>

              <label className="contact-form__field">
                <span>{t.contact.form.message}</span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder={t.contact.form.messagePlaceholder}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </label>

              <button type="submit" className="contact-form__submit">
                {t.contact.form.submit}
              </button>

              <p className="contact-form__consent">
                {t.contact.form.consentBefore}
                <Link to="/privacidad">{t.contact.form.consentLinkLabel}</Link>
                {t.contact.form.consentAfter}
              </p>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}
