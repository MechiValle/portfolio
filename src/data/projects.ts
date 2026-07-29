import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 'dat-pokemon',
    title: {
      en: "Who's That Pokémon?",
      es: '¿Quién es ese Pokémon?',
    },
    tagline: {
      en: 'Guess the Pokémon from its silhouette, race the clock, learn the ones you miss.',
      es: 'Adiviná el Pokémon por su silueta, corré contra el reloj, aprendé los que no sabías.',
    },
    problem: {
      en: 'Wanted a project that would push me to learn tools I hadn\u2019t used before (Next.js, Tailwind, react-i18next), while still shipping something small, fast, and genuinely fun to play.',
      es: 'Quería un proyecto que me obligara a aprender herramientas nuevas para mí (Next.js, Tailwind, react-i18next), sin dejar de ser algo chico, rápido y realmente divertido de jugar.',
    },
    decisions: [
      {
        en: 'Generation-based pools (1\u20139, or all combined) fetched from PokeAPI and cached client-side, trading a slightly slower first load for far fewer repeat API calls during play.',
        es: 'Pools por generación (1 a 9, o todas combinadas) traídos de PokeAPI y cacheados del lado del cliente, aceptando una primera carga un poco más lenta a cambio de muchas menos llamadas repetidas a la API durante el juego.',
      },
      {
        en: 'Debounced autocomplete (up to 5 matches) instead of a dropdown of hundreds of names, reusing the same debounce pattern from the portfolio\u2019s own widget.',
        es: 'Autocomplete con debounce (hasta 5 coincidencias) en vez de un desplegable con cientos de nombres, reutilizando el mismo patrón de debounce que uso en el widget del portfolio.',
      },
      {
        en: 'Silhouette-to-sprite reveal on answer (correct, wrong, or skipped) always shows the real sprite and name, so a miss still teaches the answer instead of just penalizing it.',
        es: 'Al responder (bien, mal o pasando) siempre se revela el sprite real y el nombre, así un error también enseña la respuesta en vez de solo penalizar.',
      },
      {
        en: 'First real project in Next.js, Tailwind, and react-i18next \u2014 deliberately chosen over the tools I already knew, to force learning them properly.',
        es: 'Primer proyecto real con Next.js, Tailwind y react-i18next, elegidos a propósito por sobre las herramientas que ya conocía, para aprenderlas en serio.',
      },
    ],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'react-i18next', 'PokeAPI'],
    demoUrl: 'https://mechivalle.github.io/dat-pokemon',
    repoUrl: 'https://github.com/MechiValle/dat-pokemon',
  },


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
        en: 'The exported image is rendered from a separate, purpose-built component at a fixed 1080×1350 size, kept off-screen and converted with html-to-image, so the shareable output isn\u2019t constrained by the interactive layout\u2019s responsive breakpoints.',
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