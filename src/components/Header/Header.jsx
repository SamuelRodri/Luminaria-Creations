import { useState } from 'react'
import './Header.css'

function Header({ language, onLanguageChange, content }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigationItems = [
    { label: content.projects, href: '#proyectos' },
    { label: content.about, href: '#about-us' },
    { label: content.contact, href: '#contacto' },
  ]

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="brand" href="#contenido" aria-label={content.brandLabel} onClick={closeMenu}>
          <span className="brand__mark" aria-hidden="true">L</span>
          <span className="brand__name">Luminaria Creations</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          aria-label={isMenuOpen ? content.closeMenu : content.openMenu}
          onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
        >
          <span />
          <span />
        </button>

        <nav
          id="main-navigation"
          className={`main-navigation${isMenuOpen ? ' main-navigation--open' : ''}`}
          aria-label={content.label}
        >
          <ul>
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={closeMenu}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="language-switcher" role="group" aria-label={content.languageLabel}>
          {['en', 'es'].map((option) => (
            <button
              key={option}
              type="button"
              className={language === option ? 'language-switcher__option language-switcher__option--active' : 'language-switcher__option'}
              aria-pressed={language === option}
              onClick={() => onLanguageChange(option)}
            >
              {option.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header
