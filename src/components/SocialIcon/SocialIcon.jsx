const iconPaths = {
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.25" />
      <circle className="social-icon__dot" cx="17.4" cy="6.7" r="1.1" />
    </>
  ),
  linkedin: (
    <>
      <path d="M6.5 9.5v8" />
      <path d="M10.5 17.5v-8m0 3.5c0-2 1.45-3.5 3.55-3.5 2.25 0 3.45 1.45 3.45 4v4" />
      <circle className="social-icon__dot" cx="6.5" cy="6.4" r="1.15" />
    </>
  ),
  behance: (
    <>
      <path d="M4 7h5.2c2 0 3.3 1.05 3.3 2.65 0 1.1-.55 1.9-1.45 2.3 1.2.35 1.95 1.3 1.95 2.65C13 16.7 11.45 18 9.1 18H4V7Z" />
      <path d="M4 12h5.05M15 8h5" />
      <path d="M20.5 15.7a4 4 0 1 1 .05-2.7H15" />
    </>
  ),
  itch: (
    <>
      <path d="M5.5 5.5h13l1.5 3v2a2 2 0 0 1-3.5 1.35A2 2 0 0 1 13 11.8a2 2 0 0 1-3.5.05A2 2 0 0 1 6 10.5v-2l-.5-3Z" />
      <path d="M7 12v6.5h10V12M9.5 15h5" />
    </>
  ),
}

function getIconKey(name = '') {
  const key = name.toLowerCase()

  if (key.includes('instagram')) return 'instagram'
  if (key.includes('linkedin')) return 'linkedin'
  if (key.includes('behance')) return 'behance'
  if (key.includes('itch')) return 'itch'
  return null
}

function SocialIcon({ name }) {
  const icon = iconPaths[getIconKey(name)]

  if (!icon) return null

  return (
    <svg
      className="social-icon"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      {icon}
    </svg>
  )
}

export default SocialIcon
