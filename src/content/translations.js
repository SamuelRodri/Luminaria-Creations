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
      title: 'Games that illuminate new ways to play.',
      description: 'We are an independent game studio from Gran Canaria. We create experiences with an identity of their own, where mechanics, art and narrative share a common purpose.',
    },
    projects: {
      eyebrow: 'Projects',
      title: 'Ideas shaped into experiences.',
      description: 'We explore, prototype and learn with every project, bringing the spirit of game jams into games designed with creativity, intention and care.',
      imageAlt: 'A construction crane assembling an illuminated geometric structure',
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
      title: 'Videojuegos que iluminan nuevas formas de jugar.',
      description: 'Somos un estudio independiente de Gran Canaria. Creamos experiencias con identidad propia, donde las mecánicas, el arte y la narrativa responden a una intención común.',
    },
    projects: {
      eyebrow: 'Proyectos',
      title: 'Ideas que se convierten en experiencias.',
      description: 'Exploramos, prototipamos y aprendemos con cada proyecto, llevando el espíritu de las game jams a juegos creados con creatividad, intención y cuidado.',
      imageAlt: 'Una grúa construyendo una estructura geométrica iluminada',
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
