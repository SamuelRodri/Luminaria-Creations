import './TeamSection.css'
import SocialIcon from '../SocialIcon/SocialIcon'
import javierAvatar from '../../assets/team/javier.png'
import lourdesAvatar from '../../assets/team/lourdes.png'
import samuelAvatar from '../../assets/team/samuel.png'

const avatars = {
  javier: javierAvatar,
  lourdes: lourdesAvatar,
  samuel: samuelAvatar,
}

function ProfilePlaceholder() {
  return (
    <svg viewBox="0 0 160 160" aria-hidden="true">
      <circle cx="80" cy="59" r="27" />
      <path d="M31 137c4-30 23-47 49-47s45 17 49 47" />
    </svg>
  )
}

function TeamMember({ member, socialLabel }) {
  return (
    <article className="team-member">
      <div className={`team-member__avatar${member.avatar ? ' team-member__avatar--image' : ''}`}>
        {member.avatar ? (
          <img src={avatars[member.avatar]} alt="" width="55" height="55" loading="lazy" decoding="async" />
        ) : (
          <ProfilePlaceholder />
        )}
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
