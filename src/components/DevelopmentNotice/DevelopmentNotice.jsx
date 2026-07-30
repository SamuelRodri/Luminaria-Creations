import { useEffect } from 'react'
import './DevelopmentNotice.css'

function DevelopmentNotice({ content, onClose }) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  return (
    <div className="development-notice" role="presentation">
      <section
        className="development-notice__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="development-notice-title"
        aria-describedby="development-notice-description"
      >
        <div className="development-notice__stripe" aria-hidden="true" />
        <div className="development-notice__content">
          <p className="development-notice__eyebrow">Luminaria Creations</p>
          <h2 id="development-notice-title">{content.title}</h2>
          <p id="development-notice-description">{content.description}</p>
          <button type="button" onClick={onClose} autoFocus>
            {content.action}
          </button>
        </div>
      </section>
    </div>
  )
}

export default DevelopmentNotice
