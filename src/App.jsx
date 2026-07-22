import Header from './components/Header/Header.jsx'
import './App.css'

function App() {
  return (
    <div className="site-shell">
      <Header />

      <main id="contenido" className="page-content">
        <section id="inicio" className="prototype-section" aria-labelledby="page-title">
          <p className="prototype-section__eyebrow">Web Luminaria</p>
          <h1 id="page-title">Una página para iluminar nuevas ideas.</h1>
          <p>
            Este espacio queda preparado para incorporar las próximas secciones
            del sitio.
          </p>
        </section>

        <section id="proyecto" className="prototype-anchor" aria-label="Proyecto" />
        <section id="servicios" className="prototype-anchor" aria-label="Servicios" />
        <section id="contacto" className="prototype-anchor" aria-label="Contacto" />
      </main>
    </div>
  )
}

export default App
