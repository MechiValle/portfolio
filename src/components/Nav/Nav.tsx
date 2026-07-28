import type { Theme } from '../../types/theme';
import type { Language } from '../../types/language';
import type { translations } from '../../i18n/translations';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import './Nav.css';
import { LanguageToggle } from '../LanguageToggle/LanguageToggle';

interface NavProps {
  theme: Theme;
  onToggleTheme: () => void;
  language: Language;
  onToggleLanguage: () => void;
  t: typeof translations.en;
}

export function Nav({ theme, onToggleTheme, language, onToggleLanguage, t }: NavProps) {
  return (
    <nav className="nav">
      <span className="nav__brand">Mercedes Valle</span>
      <div className="nav__links">
        <a href="#projects">{t.nav.projects}</a>
        <a href="#lab">{t.nav.lab}</a>
        <a href="#about">{t.nav.about}</a>
        <a href="#contact" className="nav__links--accent">{t.nav.contact}</a>
        <LanguageToggle language={language} onToggle={onToggleLanguage} />
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      </div>
    </nav>
  );
}