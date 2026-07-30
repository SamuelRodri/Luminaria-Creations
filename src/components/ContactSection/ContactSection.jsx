import './ContactSection.css'
import SocialIcon from '../SocialIcon/SocialIcon'

function ContactSection({ content }) {
  return (
    <section
      id="contact"
      className="prototype-section prototype-section--secondary contact-section"
      aria-labelledby="contact-title"
    >
      <div className="contact-section__heading">
        <p className="prototype-section__eyebrow">{content.eyebrow}</p>
        <h2 id="contact-title">{content.title}</h2>
        <p>{content.description}</p>
      </div>
      <div className="contact-section__details">
        <div>
          <p className="contact-section__label">{content.emailLabel}</p>
          <a className="contact-section__email" href={`mailto:${content.email}`}>
            {content.email}
          </a>
        </div>
        <div>
          <p className="contact-section__label">{content.socialLabel}</p>
          <ul className="contact-section__socials">
            {content.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                >
                  <SocialIcon name={social.label} />
                  <span>{social.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
