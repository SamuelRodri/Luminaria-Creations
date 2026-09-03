const socialProfiles = {
  instagram: {
    label: 'Instagram',
    shortLabel: 'ig',
    url: 'https://www.instagram.com/creationsluminaria/',
  },
  itchIo: {
    label: 'itch.io',
    shortLabel: 'io',
    url: 'https://luminariacreations.itch.io/',
  },
}

const contactSocials = [
  socialProfiles.instagram,
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
    developmentNotice: {
      title: 'Website under construction.',
      description: 'We are still shaping this space. Some details may change while we continue building, but you are welcome to look around.',
      action: 'Continue to the website',
    },
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
      title: ['Creativity', 'lights our way.'],
      description: 'We are an independent game studio from Gran Canaria. We create experiences with an identity of their own, where mechanics, art and narrative share a common purpose.',
    },
    projects: {
      eyebrow: 'Projects',
      title: 'Ideas shaped into experiences.',
      description: 'We explore, prototype and learn with every project, bringing the spirit of game jams into games designed with creativity, intention and care.',
      loading: 'Loading projects…',
      empty: 'There are no published projects right now.',
      error: 'We could not load the projects.',
      visitProfile: 'Visit our itch.io profile',
      viewProject: 'View on itch.io',
      projectDescriptions: {
        4963539: 'A memory-matching roguelike where memory, luck and strategy come together to create impossible combos.',
      },
    },
    about: {
      eyebrow: 'About us',
      title: 'Who we are.',
      description: 'We are a multidisciplinary team born from Gran Canaria’s game jam community. We believe in games as spaces to experiment, express ideas and connect with others—and we want to keep growing alongside the community that brought us together.',
      teamTitle: 'Meet the studio',
      socialLabel: 'Social profiles for',
      members: createTeamMembers({
        artDirectorProducer: 'Art Director & Producer',
        leadLevelDesigner: 'Lead Level Designer & Legal Assistant',
        leadProgrammer: 'Lead Programmer & Designer',
      }),
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Let’s talk.',
      description: 'Have a project in mind, want to collaborate or simply say hello? We would love to hear from you.',
      emailLabel: 'Email',
      email: 'creationsluminaria@gmail.com',
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
    developmentNotice: {
      title: 'Web en construcción.',
      description: 'Seguimos dando forma a este espacio. Algunos detalles pueden cambiar mientras continuamos construyendo, pero puedes visitarlo con normalidad.',
      action: 'Continuar a la web',
    },
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
      title: ['Creatividad,', 'luz que guía.'],
      description: 'Somos un estudio independiente de Gran Canaria. Creamos experiencias con identidad propia, donde las mecánicas, el arte y la narrativa responden a una intención común.',
    },
    projects: {
      eyebrow: 'Proyectos',
      title: 'Ideas que se convierten en experiencias.',
      description: 'Exploramos, prototipamos y aprendemos con cada proyecto, llevando el espíritu de las game jams a juegos creados con creatividad, intención y cuidado.',
      loading: 'Cargando proyectos…',
      empty: 'Ahora mismo no hay proyectos publicados.',
      error: 'No hemos podido cargar los proyectos.',
      visitProfile: 'Visita nuestro perfil de itch.io',
      viewProject: 'Ver en itch.io',
      projectDescriptions: {
        4963539: 'Un roguelike de parejas donde memoria, suerte y estrategia se unen para crear combos imposibles.',
      },
    },
    about: {
      eyebrow: 'Nosotros',
      title: 'Quiénes somos.',
      description: 'Somos un equipo multidisciplinar nacido de la comunidad de game jams de Gran Canaria. Entendemos los videojuegos como espacios para experimentar, expresar ideas y conectar con otras personas, y queremos seguir creciendo junto a la comunidad que nos unió.',
      teamTitle: 'El equipo del estudio',
      socialLabel: 'Redes sociales de',
      members: createTeamMembers({
        artDirectorProducer: 'Directora de arte y productora',
        leadLevelDesigner: 'Diseñador principal de niveles y asistente legal',
        leadProgrammer: 'Programador principal y diseñador',
      }),
    },
    contact: {
      eyebrow: 'Contacto',
      title: 'Hablemos.',
      description: '¿Tienes un proyecto en mente, quieres colaborar o simplemente saludarnos? Nos encantará saber de ti.',
      emailLabel: 'Email',
      email: 'creationsluminaria@gmail.com',
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
