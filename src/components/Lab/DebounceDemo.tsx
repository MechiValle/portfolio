import { useState } from 'react';
import type { translations } from '../../i18n/translations';
import './DebounceDemo.css';
import { useDebounce } from '../../hooks/useDebounce';

interface DebounceDemoProps {
  t: typeof translations.en;
}

export function DebounceDemo({ t }: DebounceDemoProps) {
  const [value, setValue] = useState('');
  const debounced = useDebounce(value, 500);

  return (
    <div className="debounce-demo">
      <h3 className="debounce-demo__title">{t.lab.debounceTitle}</h3>
      <p className="debounce-demo__hint">{t.lab.debounceHint}</p>

      <input
        className="debounce-demo__input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="..."
      />

      <div className="debounce-demo__row">
        <span className="debounce-demo__label">{t.lab.debounceRaw}</span>
        <span className="debounce-demo__value">{value || '\u00A0'}</span>
      </div>
      <div className="debounce-demo__row">
        <span className="debounce-demo__label">{t.lab.debounceDebounced}</span>
        <span className="debounce-demo__value debounce-demo__value--accent">
          {debounced || '\u00A0'}
        </span>
      </div>
    </div>
  );
}