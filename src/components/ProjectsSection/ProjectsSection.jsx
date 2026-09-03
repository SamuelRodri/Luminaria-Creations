import { useEffect, useState } from 'react'

function ProjectsSection({ content }) {
  const [catalog, setCatalog] = useState(null)
  const [failed, setFailed] = useState(false)
  useEffect(() => {
    const controller = new AbortController()
    fetch(`${import.meta.env.BASE_URL}data/itch-projects.json`, { signal: controller.signal })
      .then((response) => { if (!response.ok) throw new Error(`HTTP ${response.status}`); return response.json() })
      .then(setCatalog)
      .catch((error) => { if (error.name !== 'AbortError') setFailed(true) })
    return () => controller.abort()
  }, [])
  return (
    <section id="projects" className="prototype-section prototype-section--secondary projects-section" aria-labelledby="projects-title">
      <div className="projects-section__copy"><p className="prototype-section__eyebrow">{content.eyebrow}</p><h2 id="projects-title">{content.title}</h2><p>{content.description}</p></div>
      {!catalog && !failed && <p className="projects-section__status" role="status">{content.loading}</p>}
      {catalog?.projects?.length > 0 && <div className="projects-grid">{catalog.projects.map((project) => (
        <a className="project-card" href={project.url} key={project.id} target="_blank" rel="noreferrer">
          <img className="project-card__image" src={project.coverUrl} alt="" width="315" height="250" loading="lazy" decoding="async" />
          <span className="project-card__body"><strong className="project-card__title">{project.title}</strong>{project.description && <span className="project-card__description">{content.projectDescriptions?.[project.id] ?? project.description}</span>}<span className="project-card__action">{content.viewProject}<span aria-hidden="true"> ↗</span></span></span>
        </a>
      ))}</div>}
      {catalog?.projects?.length === 0 && <p className="projects-section__status">{content.empty}</p>}
      {failed && <p className="projects-section__status">{content.error} <a href="https://luminariacreations.itch.io/" target="_blank" rel="noreferrer">{content.visitProfile}</a></p>}
    </section>
  )
}
export default ProjectsSection
