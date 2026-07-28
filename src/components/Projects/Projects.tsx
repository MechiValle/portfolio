import { projects } from '../../data/projects';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import type { Language } from '../../types/language';
import type { translations } from '../../i18n/translations';
import './Projects.css';

interface ProjectsProps {
  language: Language;
  t: typeof translations.en;
}

export function Projects({ language, t }: ProjectsProps) {
  return (
    <section id="projects" className="projects">
      <h2 className="projects__heading">{t.projects.heading}</h2>
      <div className="projects__grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} language={language} t={t} />
        ))}
      </div>
    </section>
  );
}