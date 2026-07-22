import { useEffect, useState } from 'react'
import ContactSection from './components/ContactSection/ContactSection.jsx'
import Header from './components/Header/Header.jsx'
import NotFound from './components/NotFound/NotFound.jsx'
import TeamSection from './components/TeamSection/TeamSection.jsx'
import { translations } from './content/translations.js'
import projectsInProgress from './assets/projects/projects-in-progress.png'
import './App.css'

function App() {
  const [language, setLanguage] = useState('en')
  const content = translations[language]
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, '')
  const currentPath = basePath && window.location.pathname.startsWith(basePath)
    ? window.location.pathname.slice(basePath.length) || '/'
    : window.location.pathname
  const isHomePage = currentPath === '/' || currentPath === '/index.html'

  useEffect(() => {
    document.documentElement.lang = language
    document.title = isHomePage
      ? 'Luminaria Creations'
      : content.notFound.documentTitle
  }, [content.notFound.documentTitle, isHomePage, language])

  if (!isHomePage) {
    return (
      <NotFound
        content={content.notFound}
        homeUrl={import.meta.env.BASE_URL}
        language={language}
        onLanguageChange={setLanguage}
      />
    )
  }

  return (
    <div className="site-shell">
      <Header
        language={language}
        onLanguageChange={setLanguage}
        content={content.navigation}
      />

      <main id="contenido" className="page-content">
        <section className="prototype-section prototype-section--intro" aria-labelledby="intro-title">
          <p className="prototype-section__eyebrow">{content.intro.eyebrow}</p>
          <h1 id="intro-title">{content.intro.title}</h1>
          <p>{content.intro.description}</p>
        </section>

        <section id="proyectos" className="prototype-section prototype-section--secondary projects-section" aria-labelledby="projects-title">
          <div className="projects-section__copy">
            <p className="prototype-section__eyebrow">{content.projects.eyebrow}</p>
            <h2 id="projects-title">{content.projects.title}</h2>
            <p>{content.projects.description}</p>
          </div>
          <img
            className="projects-section__image"
            src={projectsInProgress}
            alt={content.projects.imageAlt}
            width="1672"
            height="941"
            loading="lazy"
            decoding="async"
          />
        </section>

        <section id="about-us" className="prototype-section prototype-section--secondary about-section" aria-labelledby="about-title">
          <div className="about-section__intro">
            <p className="prototype-section__eyebrow">{content.about.eyebrow}</p>
            <h2 id="about-title">{content.about.title}</h2>
            <p>{content.about.description}</p>
          </div>
          <TeamSection content={content.about} />
        </section>

        <ContactSection content={content.contact} />
      </main>
    </div>
  )
}

export default App
