import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 'wyldling',
    title: {
      en: 'Wyldling',
      es: 'Wyldling',
    },
    tagline: {
      en: 'An interactive companion guide for Wylde Flowers, the info the game doesn\u2019t hand you.',
      es: 'Una guía interactiva para Wylde Flowers, la información que el juego no te da directamente.',
    },
    problem: {
      en: 'The game\u2019s official wiki is outdated and inaccurate, so I designed and built a full relational database, a REST API, and a front end from scratch to track things like fishing conditions, gift-giving, and relationship events, my first real backend/database project.',
      es: 'La wiki oficial del juego está desactualizada e imprecisa, así que diseñé y construí desde cero una base de datos relacional completa, una API REST y un front end, mi primer proyecto real de backend/base de datos.',
    },
    decisions: [
      {
        en: 'Designed the entire relational schema by hand before writing any front-end code, first real experience modeling many-to-many relationships (fish-to-bait-to-weather-to-location, item-to-recipe) instead of just consuming an existing API.',
        es: 'Diseñé todo el esquema relacional a mano antes de escribir código de front end, primera experiencia real modelando relaciones muchos-a-muchos (pez-carnada-clima-ubicación, ítem-receta) en vez de solo consumir una API ya existente.',
      },
      {
        en: 'Built on Supabase (Postgres + auto-generated REST API) with row-level security policies scoped to public read-only access, rather than standing up a custom backend server.',
        es: 'Construido sobre Supabase (Postgres + API REST autogenerada) con políticas de row-level security limitadas a acceso público de solo lectura, en vez de levantar un servidor backend propio.',
      },
      {
        en: 'Deliberately avoided duplicating info the game already shows on-screen (prices, ingredients), the guide only covers what\u2019s genuinely hard to find in-game, keeping the scope honest instead of trying to be an exhaustive wiki.',
        es: 'Evité a propósito duplicar información que el juego ya muestra en pantalla (precios, ingredientes), la guía solo cubre lo que es genuinamente difícil de encontrar en el juego, manteniendo un alcance honesto en vez de intentar ser una wiki exhaustiva.',
      },
      {
        en: 'No accounts or login, all progress tracking (fish caught, recipes unlocked, gifts given) lives in the browser\u2019s local storage, keeping the tool free and frictionless to use.',
        es: 'Sin cuentas ni login, todo el seguimiento de progreso (peces atrapados, recetas desbloqueadas, regalos entregados) vive en el almacenamiento local del navegador, manteniendo la herramienta gratuita y sin fricción.',
      },
    ],
    stack: ['React', 'TypeScript', 'Vite', 'Supabase', 'PostgreSQL'],
    demoUrl: 'https://wyldling.vercel.app/',
    repoUrl: 'https://github.com/MechiValle/wyldling'
  },
  {
    id: 'ost-showcase',
    title: {
      en: 'OST Showcase',
      es: 'Biblioteca Musical',
    },
    tagline: {
      en: 'A Spotify-style player for original music composed for video games.',
      es: 'Un reproductor estilo Spotify para música original compuesta para videojuegos.',
    },
    problem: {
      en: 'Wanted a proper showcase for game music, something that felt like an actual streaming app and could keep growing as more tracks get added.',
      es: 'Quería una vidriera real para música de videojuegos, algo que se sintiera como una app de streaming real y que pudiera seguir creciendo con más canciones.',
    },
    decisions: [
      {
        en: 'A sticky, Spotify-style player bar that persists across navigation, playback keeps going while browsing between project pages instead of resetting.',
        es: 'Una barra de reproducción fija estilo Spotify que persiste al navegar, la reproducción sigue mientras se recorren las páginas de proyectos en vez de reiniciarse.',
      },
      {
        en: 'A flat progress bar instead of a waveform, skipping the extra step of generating audio peaks per track while still feeling alive through motion.',
        es: 'Una barra de progreso plana en vez de un waveform, evitando el paso extra de generar picos de audio por canción, sin perder sensación de vida gracias al movimiento.',
      },
      {
        en: 'Previous button never disables: one click (or tap if mobile) restarts the current song, a second click (within a generous window) jumps to the actual previous track, so there\u2019s always a sensible action instead of a dead button.',
        es: 'El botón Anterior nunca se deshabilita: un click (o tap en mobile) reinicia la canción actual, un segundo click (con una ventana de tiempo generosa) pasa a la canción anterior real, siempre hay una acción sensata en vez de un botón muerto.',
      },
      {
        en: 'Data model built around projects/albums rather than a flat song list, so the catalog can keep scaling as more tracks get added over time.',
        es: 'Modelo de datos organizado por proyectos/álbumes en vez de una lista plana de canciones, para que el catálogo pueda seguir creciendo con el tiempo.',
      },
    ],
    stack: ['React', 'TypeScript', 'Vite'],
    demoUrl: 'https://mechivalle.github.io/ost-showcase/',
    repoUrl: 'https://github.com/MechiValle/ost-showcase/',
  },

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
        en: 'First real project in Next.js, Tailwind, and react-i18next, deliberately chosen over the tools I already knew, to force learning them properly.',
        es: 'Primer proyecto real con Next.js, Tailwind y react-i18next, elegidos a propósito por sobre las herramientas que ya conocía para aprenderlas en serio.',
      },
    ],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'react-i18next', 'PokeAPI'],
    demoUrl: 'https://mechivalle.github.io/dat-pokemon',
    repoUrl: 'https://github.com/MechiValle/dat-pokemon',
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