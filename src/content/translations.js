const socialProfiles = {
  instagram: {
    label: 'Instagram',
    shortLabel: 'ig',
    url: 'https://www.instagram.com/',
  },
  linkedIn: {
    label: 'LinkedIn',
    shortLabel: 'in',
    url: 'https://www.linkedin.com/',
  },
  behance: {
    label: 'Behance',
    shortLabel: 'be',
    url: 'https://www.behance.net/',
  },
  itchIo: {
    label: 'itch.io',
    shortLabel: 'io',
    url: 'https://luminariacreations.itch.io/',
  },
}

const contactSocials = [
  socialProfiles.instagram,
  socialProfiles.linkedIn,
  socialProfiles.behance,
  socialProfiles.itchIo,
]

const createTeamMembers = (roles) => [
  {
    name: 'Lourdes Pardo Santana',
    role: roles.artDirectorProducer,
    socials: [
      {
        label: 'LinkedIn',
        shortLabel: 'in',
        url: 'https://www.linkedin.com/in/lourdes-pardo-santana-84a45624b/',
      },
      {
        label: 'Instagram',
        shortLabel: 'ig',
        url: 'https://www.instagram.com/louxpardo/',
      },
    ],
  },
  {
    name: 'Javier Santana Rodríguez',
    role: roles.leadLevelDesigner,
    socials: [
      {
        label: 'LinkedIn',
        shortLabel: 'in',
        url: 'https://www.linkedin.com/in/javier-santana-rodr%C3%ADguez-200a74396',
      },
    ],
  },
  {
    name: 'Samuel Rodríguez Hernández',
    role: roles.leadProgrammer,
    socials: [
      {
        label: 'LinkedIn',
        shortLabel: 'in',
        url: 'https://www.linkedin.com/in/samuelrodri/',
      },
    ],
  },
]

export const translations = {
  en: {
    navigation: {
      label: 'Main navigation',
      projects: 'Projects',
      about: 'About us',
      contact: 'Contact',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      brandLabel: 'Reload Luminaria Creations home page',
      languageLabel: 'Language',
    },
    intro: {
      eyebrow: 'Luminaria Creations',
      title: 'A place to illuminate new ideas.',
      description: 'This space is ready for the main introductory message.',
    },
    projects: {
      eyebrow: 'Projects',
      title: 'We’re building something bright.',
      description: 'Our projects are currently taking shape. We’re working on them with care and will be ready to share more soon.',
      imageAlt: 'A construction crane assembling an illuminated geometric structure',
    },
    about: {
      eyebrow: 'About us',
      title: 'Who we are.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      teamTitle: 'Meet the studio',
      socialLabel: 'Social profiles for',
      members: createTeamMembers({
        artDirectorProducer: 'Art Director • Producer',
        leadLevelDesigner: 'Lead Level Designer • Legal Assistant',
        leadProgrammer: 'Lead Programmer • Designer',
      }),
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Let’s talk.',
      description: 'Have a project in mind or simply want to say hello? We would love to hear from you.',
      emailLabel: 'Email',
      email: 'hello@luminariacreations.com',
      socialLabel: 'Follow us',
      socials: contactSocials,
    },
    notFound: {
      documentTitle: 'Page not found — Luminaria Creations',
      title: 'This page is out of sight.',
      description: 'The page you are looking for does not exist or may have moved. Let’s get you back into the light.',
      action: 'Back to home',
      homeLabel: 'Go to the Luminaria Creations home page',
      languageLabel: 'Language',
    },
  },
  es: {
    navigation: {
      label: 'Navegación principal',
      projects: 'Proyectos',
      about: 'Nosotros',
      contact: 'Contacto',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
      brandLabel: 'Recargar la página de inicio de Luminaria Creations',
      languageLabel: 'Idioma',
    },
    intro: {
      eyebrow: 'Luminaria Creations',
      title: 'Un lugar para iluminar nuevas ideas.',
      description: 'Este espacio queda preparado para el mensaje principal de presentación.',
    },
    projects: {
      eyebrow: 'Proyectos',
      title: 'Estamos construyendo algo brillante.',
      description: 'Nuestros proyectos están tomando forma. Trabajamos en ellos con cuidado y muy pronto podremos compartir más.',
      imageAlt: 'Una grúa construyendo una estructura geométrica iluminada',
    },
    about: {
      eyebrow: 'Nosotros',
      title: 'Quiénes somos.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      teamTitle: 'El equipo del estudio',
      socialLabel: 'Redes sociales de',
      members: createTeamMembers({
        artDirectorProducer: 'Directora de arte • Productora',
        leadLevelDesigner: 'Diseñador principal de niveles • Asistente legal',
        leadProgrammer: 'Programador principal • Diseñador',
      }),
    },
    contact: {
      eyebrow: 'Contacto',
      title: 'Hablemos.',
      description: '¿Tienes un proyecto en mente o simplemente quieres saludarnos? Nos encantará saber de ti.',
      emailLabel: 'Email',
      email: 'hello@luminariacreations.com',
      socialLabel: 'Síguenos',
      socials: contactSocials,
    },
    notFound: {
      documentTitle: 'Página no encontrada — Luminaria Creations',
      title: 'Esta página no está a la vista.',
      description: 'La página que buscas no existe o puede que se haya movido. Volvamos a la luz.',
      action: 'Volver al inicio',
      homeLabel: 'Ir a la página de inicio de Luminaria Creations',
      languageLabel: 'Idioma',
    },
  },
}
