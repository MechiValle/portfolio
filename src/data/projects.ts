import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 'cronime',
    title: {
      en: 'Cronime',
      es: 'Cronime',
    },
    tagline: {
      en: 'A streak-based trivia game: guess which anime came first.',
      es: 'Un juego de trivia: adiviná qué anime salió primero.',
    },
    problem: {
      en: 'Wanted a quick, replayable browser game with no backend, backed by real anime data instead of a hardcoded list.',
      es: 'Quería un juego de navegador rápido y rejugable, sin backend, con datos reales de anime en vez de una lista fija.',
    },
    decisions: [
      {
        en: 'Used the Jikan API with a cached local pool (~1000 titles) refreshed weekly, so the game works offline-ish and doesn\u2019t hammer the API on every load.',
        es: 'Usé la API de Jikan con un pool local cacheado (~1000 títulos) que se refresca semanalmente, así el juego funciona casi offline y no satura la API en cada carga.',
      },
      {
        en: 'TanStack Query for fetching/caching, React hooks + Context for game state, Local Storage for best streak/time persistence.',
        es: 'TanStack Query para fetching/caching, React hooks + Context para el estado del juego, Local Storage para persistir la mejor racha y tiempo.',
      },
      {
        en: 'Pair-generation rules (no duplicates, no tied years, minimum 3-year gap) to keep every round fair and unambiguous.',
        es: 'Reglas de generación de pares (sin duplicados, sin empates de año, diferencia mínima de 3 años) para que cada ronda sea justa y sin ambigüedad.',
      },
    ],
    stack: ['React', 'TypeScript', 'Vite', 'Material UI', 'TanStack Query'],
    demoUrl: 'https://mechivalle.github.io/cronime',
    repoUrl: 'https://github.com/MechiValle/cronime',
  },
  {
    id: 'cinco-juegos',
    title: {
      en: 'Cinco Juegos',
      es: 'Cinco Juegos',
    },
    tagline: {
      en: 'Pick your top 5 games, write a title, generate a shareable image.',
      es: 'Elegí tu top 5 de juegos, escribí un título y generá una imagen para compartir.',
    },
    problem: {
      en: 'Wanted an easy way to turn a personal top-5 list into something visual enough to actually share, instead of just a text post.',
      es: 'Quería una forma fácil de convertir una lista de top 5 personal en algo visual para compartir, en vez de un simple posteo de texto.',
    },
    decisions: [
      {
        en: 'Search hits the RAWG API through a debounced hook (useDebounce + TanStack Query), so a request only fires once the user stops typing instead of on every keystroke.',
        es: 'La búsqueda usa la API de RAWG a través de un hook debounced (useDebounce + TanStack Query), así que la petición se dispara recién cuando el usuario deja de tipear.',
      },
      {
        en: 'The exported image is rendered from a separate, purpose-built component at a fixed 1080×1350 size, kept off-screen and converted with html-to-image — so the shareable output isn\u2019t constrained by the interactive layout\u2019s responsive breakpoints.',
        es: 'La imagen exportada se renderiza desde un componente separado, armado a medida a 1080×1350 px, mantenido fuera de pantalla y convertido con html-to-image, así el resultado no depende del layout responsive de la interfaz interactiva.',
      },
      {
        en: 'Drag-and-drop slot reordering plus confirmation modals for adding/removing a game, to avoid accidental changes to the list.',
        es: 'Reordenamiento de slots por drag-and-drop, con modales de confirmación para agregar o quitar un juego y evitar cambios accidentales en la lista.',
      },
    ],
    stack: ['React', 'TypeScript', 'Vite', 'Material UI', 'TanStack Query', 'html-to-image'],
    demoUrl: 'https://mechivalle.github.io/cinco-juegos/',
    repoUrl: 'https://github.com/MechiValle/cinco-juegos',
  },
  
];