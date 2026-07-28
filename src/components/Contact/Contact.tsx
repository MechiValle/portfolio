import type { translations } from '../../i18n/translations';
import { contactLinks } from '../../data/contactLinks';
import './Contact.css';

interface ContactProps {
  t: typeof translations.en;
}

export function Contact({ t }: ContactProps) {
  return (
    <section id="contact" className="contact">
      <h2 className="contact__heading">{t.contact.heading}</h2>
      <p className="contact__subheading">{t.contact.subheading}</p>

<div className="contact__links">
        {contactLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            target={link.id === 'email' ? undefined : '_blank'}
            rel={link.id === 'email' ? undefined : 'noreferrer'}
            className="contact__link"
          >
            {t.contact[link.id]}
          </a>
        ))}
      </div>
    </section>
  )
}