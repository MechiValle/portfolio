export interface LocalizedText {
  en: string;
  es: string;
}

export interface Project {
  id: string;
  title: LocalizedText;
  tagline: LocalizedText;
  problem: LocalizedText;
  decisions: LocalizedText[];
  stack: string[];
  demoUrl?: string;
  repoUrl?: string;
}