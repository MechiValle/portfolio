import type { translations } from '../../i18n/translations';
import './About.css';

interface AboutProps {
  t: typeof translations.en;
}

export function About({ t }: AboutProps) {
  return (
    <section id="about" className="about">
      <h2 className="about__heading">{t.about.heading}</h2>

      <p className="about__bio">{t.about.bio}</p>

      <h3 className="about__skills-heading">{t.about.skillsHeading}</h3>
      <ul className="about__skills">
        {t.about.skills.map((skill) => (
          <li key={skill.name} className="about__skill">
            <span className="about__skill-name">{skill.name}</span>
            <span className="about__skill-detail">{skill.detail}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}