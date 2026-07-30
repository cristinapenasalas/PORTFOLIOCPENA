import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { projects, type ProjectType } from '../data/content';
import ProjectCard from '../components/ProjectCard';
import ContactCTA from '../components/ContactCTA';
import { easeOut } from '../lib/motion';
import './Work.css';

type FilterValue = ProjectType | 'all';

const projectTypes: ProjectType[] = ['social', 'web', 'email'];

function isProjectType(value: string | null): value is ProjectType {
  return projectTypes.includes(value as ProjectType);
}

export default function Work() {
  const { t, lang } = useLanguage();
  const [searchParams] = useSearchParams();
  const requestedType = searchParams.get('tipo');
  const [activeFilter, setActiveFilter] = useState<FilterValue>(
    isProjectType(requestedType) ? requestedType : 'all',
  );

  const filters = useMemo(() => {
    return [
      { value: 'all' as FilterValue, label: t.work.filterAll },
      ...projectTypes.map((type) => ({
        value: type as FilterValue,
        label: projects.find((p) => p.type === type)!.category[lang],
      })),
    ];
  }, [lang, t.work.filterAll]);

  const filteredProjects =
    activeFilter === 'all' ? projects : projects.filter((project) => project.type === activeFilter);

  return (
    <>
      <section className="work-hero container">
        <motion.p
          className="work-hero__eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          {t.work.eyebrow}
        </motion.p>

        <motion.h1
          className="work-hero__heading"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.08, ease: easeOut }}
        >
          {t.work.heading}
        </motion.h1>

        <motion.p
          className="work-hero__support"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18, ease: easeOut }}
        >
          {t.work.support}
        </motion.p>
      </section>

      <section className="work-list container">
        <div className="work-list__filters" role="group" aria-label={t.work.filterAll}>
          {filters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              className={
                activeFilter === filter.value ? 'work-list__filter is-active' : 'work-list__filter'
              }
              onClick={() => setActiveFilter(filter.value)}
              aria-pressed={activeFilter === filter.value}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="project-list">
          {filteredProjects.map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              lang={lang}
              index={i}
              viewCaseLabel={t.work.viewCase}
            />
          ))}
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
