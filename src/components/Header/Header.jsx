import { useState } from 'react'
import './Header.css'

const navigationItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Proyecto', href: '#proyecto' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Contacto', href: '#contacto' },
]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="brand" href="#inicio" aria-label="Web Luminaria, inicio" onClick={closeMenu}>
          <span className="brand__mark" aria-hidden="true">L</span>
          <span className="brand__name">Luminaria</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
        >
          <span />
          <span />
        </button>

        <nav
          id="main-navigation"
          className={`main-navigation${isMenuOpen ? ' main-navigation--open' : ''}`}
          aria-label="Navegación principal"
        >
          <ul>
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={closeMenu}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
