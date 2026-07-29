import { useState } from 'react';
import type { Theme } from '../../types/theme';
import type { Language } from '../../types/language';
import type { translations } from '../../i18n/translations';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import { LanguageToggle } from '../LanguageToggle/LanguageToggle';
import './Nav.css';

interface NavProps {
  theme: Theme;
  onToggleTheme: () => void;
  language: Language;
  onToggleLanguage: () => void;
  t: typeof translations.en;
}

export function Nav({ theme, onToggleTheme, language, onToggleLanguage, t }: NavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="nav">
      <div className="nav__bar">
        <span className="nav__brand">Mercedes Valle</span>

        <div className="nav__links nav__links--desktop">
          <a href="#projects">{t.nav.projects}</a>
          <a href="#lab">{t.nav.lab}</a>
          <a href="#about">{t.nav.about}</a>
          <a href="#contact" className="nav__links--accent">{t.nav.contact}</a>
          <LanguageToggle language={language} onToggle={onToggleLanguage} />
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>

        <button
          className="nav__burger"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          <span className={`nav__burger-line ${isOpen ? 'nav__burger-line--open-1' : ''}`} />
          <span className={`nav__burger-line ${isOpen ? 'nav__burger-line--open-2' : ''}`} />
          <span className={`nav__burger-line ${isOpen ? 'nav__burger-line--open-3' : ''}`} />
        </button>
      </div>

      {isOpen && (
        <div className="nav__mobile-panel">
          <a href="#projects" onClick={closeMenu}>{t.nav.projects}</a>
          <a href="#lab" onClick={closeMenu}>{t.nav.lab}</a>
          <a href="#about" onClick={closeMenu}>{t.nav.about}</a>
          <a href="#contact" className="nav__links--accent" onClick={closeMenu}>{t.nav.contact}</a>

          <div className="nav__mobile-toggles">
            <LanguageToggle language={language} onToggle={onToggleLanguage} />
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          </div>
        </div>
      )}
    </nav>
  );
}