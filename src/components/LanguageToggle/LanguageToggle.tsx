import type { Language } from '../../types/language';
import './LanguageToggle.css';

interface LanguageToggleProps {
  language: Language;
  onToggle: () => void;
}

export function LanguageToggle({ language, onToggle }: LanguageToggleProps) {
  return (
    <button
      className="language-toggle"
      onClick={onToggle}
      aria-label={`Switch to ${language === 'en' ? 'Spanish' : 'English'}`}
    >
      {language === 'en' ? 'ES' : 'EN'}
    </button>
  );
}