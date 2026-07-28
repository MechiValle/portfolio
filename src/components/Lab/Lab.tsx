import type { translations } from '../../i18n/translations';
import { DebounceDemo } from './DebounceDemo';
import { SortVisualizer } from './SortVisualizer';
import './Lab.css';

interface LabProps {
  t: typeof translations.en;
}

export function Lab({ t }: LabProps) {
  return (
    <section id="lab" className="lab">
      <h2 className="lab__heading">{t.lab.heading}</h2>
      <p className="lab__subheading">{t.lab.subheading}</p>

      <div className="lab__grid">
        <DebounceDemo t={t} />
        <SortVisualizer t={t} />
      </div>
    </section>
  );
}