import { useEffect, useState } from 'react'
import Header from './components/Header/Header.jsx'
import { translations } from './content/translations.js'
import './App.css'

function App() {
  const [language, setLanguage] = useState('en')
  const content = translations[language]

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

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

        <section id="proyectos" className="prototype-section prototype-section--secondary" aria-labelledby="projects-title">
          <p className="prototype-section__eyebrow">{content.projects.eyebrow}</p>
          <h2 id="projects-title">{content.projects.title}</h2>
        </section>

        <section id="about-us" className="prototype-section prototype-section--secondary" aria-labelledby="about-title">
          <p className="prototype-section__eyebrow">{content.about.eyebrow}</p>
          <h2 id="about-title">{content.about.title}</h2>
        </section>

        <section id="contacto" className="prototype-section prototype-section--secondary" aria-labelledby="contact-title">
          <p className="prototype-section__eyebrow">{content.contact.eyebrow}</p>
          <h2 id="contact-title">{content.contact.title}</h2>
        </section>
      </main>
    </div>
  )
}

export default App
