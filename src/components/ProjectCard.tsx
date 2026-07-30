import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Project, Lang } from '../data/content';
import { easeOut } from '../lib/motion';
import './ProjectCard.css';

interface ProjectCardProps {
  project: Project;
  lang: Lang;
  index: number;
  viewCaseLabel: string;
}

export default function ProjectCard({ project, lang, index, viewCaseLabel }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: easeOut }}
    >
      <Link to={`/proyectos/${project.slug}`} className={`project-card project-card--${project.color}`}>
        <div className="project-card__visual" aria-hidden="true">
          <span className="project-card__index">{String(index + 1).padStart(2, '0')}</span>
          <span className="project-card__glyph" />
        </div>

        <div className="project-card__meta">
          <div className="project-card__text">
            <p className="project-card__category">{project.category[lang]}</p>
            <h3 className="project-card__title">{project.title[lang]}</h3>
            <p className="project-card__tagline">{project.tagline[lang]}</p>
          </div>

          <span className="project-card__cta">
            {viewCaseLabel}
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path
                d="M4 14L14 4M14 4H6M14 4V12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
