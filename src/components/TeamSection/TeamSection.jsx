import './TeamSection.css'

function ProfilePlaceholder() {
  return (
    <svg viewBox="0 0 160 160" aria-hidden="true">
      <circle cx="80" cy="59" r="27" />
      <path d="M31 137c4-30 23-47 49-47s45 17 49 47" />
    </svg>
  )
}

function TeamMember({ member, socialLabel }) {
  function SocialIcon({ name }) {
    const key = (name || '').toLowerCase()
    if (key.includes('linkedin')) {
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <rect x="0.5" y="0.5" width="23" height="23" rx="4" fill="none" stroke="currentColor" />
          <path d="M6 9h3v9H6zM7.5 5.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM11 9h3v1.3c.4-.7 1.4-1.3 2.6-1.3 2.8 0 3.4 1.8 3.4 4.1V18h-3v-3.8c0-1-.02-2.3-1.4-2.3-1.4 0-1.6 1.1-1.6 2.2V18h-3z" />
        </svg>
      )
    }
    if (key.includes('instagram')) {
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <rect x="2" y="2" width="20" height="20" rx="5" fill="none" stroke="currentColor" />
          <circle cx="12" cy="12" r="3" />
          <circle cx="17.5" cy="6.5" r="0.8" />
        </svg>
      )
    }
    return <span>{name}</span>
  }

  return (
    <article className="team-member">
      <div className="team-member__avatar">
        <ProfilePlaceholder />
      </div>
      <h4>{member.name}</h4>
      <p>{member.role}</p>
      <ul
        className="team-member__socials"
        aria-label={`${socialLabel} ${member.name}`}
      >
        {member.socials.map((social) => (
          <li key={social.label}>
            <a
              href={social.url}
              aria-label={`${social.label} — ${member.name}`}
              target="_blank"
              rel="noreferrer"
            >
              <SocialIcon name={social.label} />
            </a>
          </li>
        ))}
      </ul>
    </article>
  )
}

function TeamSection({ content }) {
  return (
    <section className="team-section" aria-labelledby="team-title">
      <h3 id="team-title">{content.teamTitle}</h3>
      <div className="team-grid">
        {content.members.map((member) => (
          <TeamMember
            key={member.name}
            member={member}
            socialLabel={content.socialLabel}
          />
        ))}
      </div>
    </section>
  )
}

export default TeamSection
