import { useEffect, useState } from 'react'
import ContactSection from './components/ContactSection/ContactSection.jsx'
import DevelopmentNotice from './components/DevelopmentNotice/DevelopmentNotice.jsx'
import Header from './components/Header/Header.jsx'
import NotFound from './components/NotFound/NotFound.jsx'
import ProjectsSection from './components/ProjectsSection/ProjectsSection.jsx'
import TeamSection from './components/TeamSection/TeamSection.jsx'
import { translations } from './content/translations.js'
import './App.css'

const sectionRoutes = {
  en: { projects: 'projects', about: 'about-us', contact: 'contact' },
  es: { projects: 'proyectos', about: 'nosotros', contact: 'contacto' },
}

const getLanguageFromPath = (path) => {
  const normalizedPath = path.replace(/^\//, '')
  return Object.entries(sectionRoutes).find(([, routes]) =>
    Object.values(routes).includes(normalizedPath))?.[0]
}

function App() {
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, '')
  const getCurrentPath = () => basePath && window.location.pathname.startsWith(basePath)
    ? window.location.pathname.slice(basePath.length) || '/'
    : window.location.pathname
  const [currentPath, setCurrentPath] = useState(getCurrentPath)
  const [language, setLanguage] = useState(() => {
    const pathLanguage = getLanguageFromPath(getCurrentPath())
    const savedLanguage = localStorage.getItem('luminaria-language')
    if (pathLanguage) return pathLanguage
    if (savedLanguage === 'en' || savedLanguage === 'es') return savedLanguage
    return navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en'
  })
  const [showDevelopmentNotice, setShowDevelopmentNotice] = useState(
    () => sessionStorage.getItem('luminaria-development-notice-dismissed') !== 'true',
  )
  const content = translations[language]
  const normalizedPath = currentPath.replace(/^\//, '')
  const activeSection = Object.entries(sectionRoutes[language]).find(
    ([, route]) => route === normalizedPath,
  )?.[0]
  const isHomePage = currentPath === '/' || currentPath === '/index.html' || Boolean(activeSection)
  const homeUrl = `${basePath || ''}/`
  const navigationItems = Object.entries(sectionRoutes[language]).map(([section, route]) => ({
    section,
    href: `${basePath}/${route}`,
    label: content.navigation[section],
  }))

  const closeDevelopmentNotice = () => {
    sessionStorage.setItem('luminaria-development-notice-dismissed', 'true')
    setShowDevelopmentNotice(false)
  }

  const changeLanguage = (nextLanguage) => {
    if (nextLanguage === language) return

    const currentSection = Object.entries(sectionRoutes[language]).find(
      ([, route]) => route === normalizedPath,
    )?.[0]

    localStorage.setItem('luminaria-language', nextLanguage)

    if (currentSection) {
      const nextPath = `${basePath}/${sectionRoutes[nextLanguage][currentSection]}`
      window.location.assign(nextPath)
      return
    }

    window.location.reload()
  }

  const navigateToSection = (event, item) => {
    event.preventDefault()
    window.history.pushState({}, '', item.href)
    setCurrentPath(item.href.slice(basePath.length) || '/')
  }

  useEffect(() => {
    document.documentElement.lang = language
    document.title = isHomePage
      ? 'Luminaria Creations'
      : content.notFound.documentTitle
  }, [content.notFound.documentTitle, isHomePage, language])

  useEffect(() => {
    const handlePopState = () => {
      const nextPath = getCurrentPath()
      const pathLanguage = getLanguageFromPath(nextPath)
      setCurrentPath(nextPath)

      if (pathLanguage) {
        localStorage.setItem('luminaria-language', pathLanguage)
        setLanguage(pathLanguage)
      }
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  })

  useEffect(() => {
    if (activeSection) {
      document.getElementById(activeSection)?.scrollIntoView()
    }
  }, [activeSection])

  if (!isHomePage) {
    return (
      <NotFound
        content={content.notFound}
        homeUrl={homeUrl}
        language={language}
        onLanguageChange={changeLanguage}
      />
    )
  }

  return (
    <div className="site-shell">
      {showDevelopmentNotice && (
        <DevelopmentNotice
          content={content.developmentNotice}
          onClose={closeDevelopmentNotice}
        />
      )}

      <Header
        language={language}
        onLanguageChange={changeLanguage}
        content={content.navigation}
        homeUrl={homeUrl}
        navigationItems={navigationItems}
        onNavigate={navigateToSection}
      />

      <main id="contenido" className="page-content">
        <section className="prototype-section prototype-section--intro" aria-labelledby="intro-title">
          <p className="prototype-section__eyebrow">{content.intro.eyebrow}</p>
          <h1 id="intro-title">
            {content.intro.title.map((line) => (
              <span className="prototype-section__title-line" key={line}>{line}</span>
            ))}
          </h1>
          <p>{content.intro.description}</p>
        </section>

        <ProjectsSection content={content.projects} />

        <section id="about" className="prototype-section prototype-section--secondary about-section" aria-labelledby="about-title">
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
