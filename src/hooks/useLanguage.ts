import { useEffect, useState } from 'react';
import type { Language } from '../types/language';
import { translations } from '../i18n/translations';

const STORAGE_KEY = 'portfolio-language';

function getInitialLanguage(): Language {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'en' || stored === 'es') return stored;

  const browserLang = navigator.language.toLowerCase();
  return browserLang.startsWith('es') ? 'es' : 'en';
}

export function useLanguage() {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'es' : 'en'));
  };

  const t = translations[language];

  return { language, toggleLanguage, t };
}