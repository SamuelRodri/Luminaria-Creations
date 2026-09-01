import { useEffect, useState } from 'react'
import './Header.css'

const languageOptions = ['en', 'es']

function Header({ language, onLanguageChange, content, homeUrl, navigationItems, onNavigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  useEffect(() => {
    if (!isMenuOpen) return undefined

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') closeMenu()
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [isMenuOpen])

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="brand" href={homeUrl} aria-label={content.brandLabel} onClick={closeMenu}>
          <span className="brand__logo" aria-hidden="true">
            <span className="brand__logo-text">
              <span>Luminaria</span>
              <span>Creations</span>
            </span>
          </span>
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
                <a
                  href={item.href}
                  onClick={(event) => {
                    onNavigate(event, item)
                    closeMenu()
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="language-switcher" role="group" aria-label={content.languageLabel}>
          {languageOptions.map((option) => (
            <button
              key={option}
              type="button"
              className={language === option ? 'language-switcher__option language-switcher__option--active' : 'language-switcher__option'}
              aria-pressed={language === option}
              onClick={() => {
                onLanguageChange(option)
                closeMenu()
              }}
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
