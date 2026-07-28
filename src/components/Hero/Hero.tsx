import type { translations } from '../../i18n/translations';
import './Hero.css';

interface HeroProps {
  t: typeof translations.en;
}

export function Hero({ t }: HeroProps) {
  return (
    <section className="hero">
      <div className="hero__rule" aria-hidden="true" />
      <div className="hero__content">
        <h1 className="hero__title">{t.hero.title}</h1>
        <p className="hero__subtitle">{t.hero.subtitle}</p>
      </div>
    </section>
  );
}