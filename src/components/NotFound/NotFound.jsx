import './NotFound.css'

function NotFound({ content, homeUrl, language, onLanguageChange }) {
  return (
    <main className="not-found">
      <div className="not-found__toolbar">
        <a className="not-found__brand" href={homeUrl} aria-label={content.homeLabel}>
          <span className="not-found__logo" aria-hidden="true">
            <span className="not-found__logo-text">
              <span>Luminaria</span>
              <span>Creations</span>
            </span>
          </span>
        </a>
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

      <div className="not-found__content">
        <p className="not-found__code">404</p>
        <h1>{content.title}</h1>
        <p>{content.description}</p>
        <a className="not-found__action" href={homeUrl}>{content.action}</a>
      </div>
    </main>
  )
}

export default NotFound
