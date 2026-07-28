import { useRef, useState } from 'react';
import type { translations } from '../../i18n/translations';
import './SortVisualizer.css';

interface SortVisualizerProps {
  t: typeof translations.en;
}

const BAR_COUNT = 12;

function randomBars(): number[] {
  return Array.from({ length: BAR_COUNT }, () => Math.floor(Math.random() * 90) + 10);
}

export function SortVisualizer({ t }: SortVisualizerProps) {
  const [bars, setBars] = useState<number[]>(randomBars);
  const [activeIndices, setActiveIndices] = useState<[number, number] | null>(null);
  const [isSorting, setIsSorting] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const cancelRef = useRef(false);

  const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  const shuffle = () => {
    cancelRef.current = true;
    setBars(randomBars());
    setActiveIndices(null);
    setIsSorting(false);
    setIsDone(false);
  };

  const runBubbleSort = async () => {
    cancelRef.current = false;
    setIsSorting(true);
    setIsDone(false);

    const arr = [...bars];

    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
        if (cancelRef.current) return;

        setActiveIndices([j, j + 1]);
        await sleep(120);

        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          setBars([...arr]);
        }
      }
    }

    setActiveIndices(null);
    setIsSorting(false);
    setIsDone(true);
  };

  return (
    <div className="sort-visualizer">
      <h3 className="sort-visualizer__title">{t.lab.sortTitle}</h3>
      <p className="sort-visualizer__hint">{t.lab.sortHint}</p>

      <div className="sort-visualizer__bars">
        {bars.map((height, index) => (
          <div
            key={index}
            className={
              'sort-visualizer__bar' +
              (activeIndices?.includes(index) ? ' sort-visualizer__bar--active' : '')
            }
            style={{ height: `${height}%` }}
          />
        ))}
      </div>

      <div className="sort-visualizer__controls">
        <button className="sort-visualizer__button" onClick={shuffle} disabled={isSorting}>
          {t.lab.sortShuffle}
        </button>
        <button className="sort-visualizer__button" onClick={runBubbleSort} disabled={isSorting}>
          {t.lab.sortStep}
        </button>
        {isSorting && <span className="sort-visualizer__status">{t.lab.sortRunning}</span>}
        {isDone && <span className="sort-visualizer__status">{t.lab.sortDone}</span>}
      </div>
    </div>
  );
}