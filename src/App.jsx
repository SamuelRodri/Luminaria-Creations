import Header from './components/Header/Header.jsx'
import './App.css'

function App() {
  return (
    <div className="site-shell">
      <Header />

      <main id="contenido" className="page-content">
        <section className="prototype-section prototype-section--intro" aria-labelledby="intro-title">
          <p className="prototype-section__eyebrow">Luminaria Creations</p>
          <h1 id="intro-title">Una página para iluminar nuevas ideas.</h1>
          <p>
            Este espacio queda preparado para el mensaje principal de
            presentación.
          </p>
        </section>

        <section id="proyectos" className="prototype-section prototype-section--secondary" aria-labelledby="projects-title">
          <p className="prototype-section__eyebrow">Proyectos</p>
          <h2 id="projects-title">Nuestro trabajo.</h2>
        </section>

        <section id="about-us" className="prototype-section prototype-section--secondary" aria-labelledby="about-title">
          <p className="prototype-section__eyebrow">About us</p>
          <h2 id="about-title">Quiénes somos.</h2>
        </section>

        <section id="contacto" className="prototype-section prototype-section--secondary" aria-labelledby="contact-title">
          <p className="prototype-section__eyebrow">Contacto</p>
          <h2 id="contact-title">Hablemos.</h2>
        </section>
      </main>
    </div>
  )
}

export default App
