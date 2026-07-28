import type { Project } from '../../types/project';
import type { Language } from '../../types/language';
import type { translations } from '../../i18n/translations';
import './ProjectCard.css';

interface ProjectCardProps {
  project: Project;
  language: Language;
  t: typeof translations.en;
}

export function ProjectCard({ project, language, t }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-card__header">
        <h3 className="project-card__title">{project.title[language]}</h3>
        <p className="project-card__tagline">{project.tagline[language]}</p>
      </div>

      <p className="project-card__problem">{project.problem[language]}</p>

      <ul className="project-card__decisions">
        {project.decisions.map((decision) => (
          <li key={decision[language]}>{decision[language]}</li>
        ))}
      </ul>

      <div className="project-card__stack">
        {project.stack.map((tech) => (
          <span key={tech} className="project-card__tech">
            {tech}
          </span>
        ))}
      </div>

      <div className="project-card__links">
        {project.demoUrl && (
          <a href={project.demoUrl} target="_blank" rel="noreferrer">
            {t.projects.viewDemo} →
          </a>
        )}
        {project.repoUrl && (
          <a href={project.repoUrl} target="_blank" rel="noreferrer">
            {t.projects.source} →
          </a>
        )}
      </div>
    </article>
  );
}