const general = {
  github: 'https://github.com/haosx86',
  vk: 'https://vk.com/xtxtv',
  email: 'haosx86+cv@gmail.com',
  skills: {
    frontend: [
      {
        technology: 'Vue/Nuxt',
        level: 85
      },
      {
        technology: 'Javascript',
        level: 80
      },
      {
        technology: 'HTML/CSS/LESS/Stylus/etc',
        level: 95
      },
      {
        technology: 'Gulp/Webpack/rollup',
        level: 78
      },
      {
        technology: 'Angular',
        level: 50
      }
    ],
    backend: [
      {
        technology: 'Node.js',
        level: 75
      },
      {
        technology: 'MongoDB',
        level: 55
      },
      {
        technology: 'MySQL,PostgeSQL',
        level: 66
      },
      {
        technology: 'PHP',
        level: 68
      },
      {
        technology: 'Nginx',
        level: 51
      }
    ]
  }
}

const companyGeneralInfo = [
  {
    company: 'Distillery',
    technologies: [
      'VueJS',
      'NuxtJS',
      'JS/TS',
      'Webpack',
      'Gulp',
      'NodeJS',
      'PostgeSQL',
      'MySQL',
      'HTML/CSS/LESS/Stylus',
      'Nginx'
    ]
  },
  {
    company: 'Hadrout',
    technologies: ['HTML/CSS', 'PHP', 'Javascript']
  }
]

export default {
  en: {
    ...general,
    name: 'Vladimir Terekhov',
    emailLabel: 'Email me',
    specialization: 'Full Stack Web developer',
    skillsLabel: 'Skills',
    experience: [
      {
        company: 'Distillery',
        position: 'Full-stack Web Developer',
        startDate: 'April 2016',
        tillDate: 'Present',
        keyResponsobilities: [
          'Analyze client requirements and convert requirements to design documents',
          'Performing Code review',
          'Setting up frontend and backend environments for new projects',
          'Develop, test and support web applications'
        ],
        technologies: [
          'VueJS',
          'NuxtJS',
          'JS/TS',
          'Webpack',
          'Gulp',
          'NodeJS',
          'PostgeSQL',
          'MySQL',
          'HTML/CSS/LESS/Stylus',
          'Nginx'
        ]
      },
      {
        company: 'Hadrout',
        position: 'Junior Frontend Developer',
        startDate: 'July 2013',
        tillDate: 'December 2013',
        keyResponsobilities: ['Develop CMS themes', 'Code refactoring']
      }
    ],
    educationLabel: 'Education',
    education: [
      {
        place: 'Southern Federal University',
        specialization: 'Software Engineering',
        years: '2011-2015'
      }
    ],
    languageLabel: 'Language',
    language: [
      {
        language: 'English',
        level: 'Intermediate'
      },
      {
        language: 'Russian',
        level: 'Native'
      }
    ],
    interests: ['PC modding', 'Embedded electronics']
  },
  ru: {
    ...general,
    ru: 'Владимир Терехов',
    emailLabel: 'Написать мне на почту',
    specialization: 'Full stack разработчик',
    skillsLabel: 'Навыки',
    experience: [
      {
        ...companyGeneralInfo[0],
        position: 'Full-stack Web разработчик',
        startDate: 'Апрель 2016',
        tillDate: 'Настоящее время',
        keyResponsobilities: [
          'Анализ требований и составление проектной документации',
          'Проведение Code Review',
          'Настройка окружений для новых проектов',
          'Разработка, тестирование и интеграция веб-приложений'
        ]
      },
      {
        ...companyGeneralInfo[1],
        position: 'Junior Frontend Developer',
        startDate: 'July 2013',
        tillDate: 'December 2013',
        keyResponsobilities: ['Разработка тем для CMS', 'Рефакторинг кода']
      }
    ],
    educationLabel: 'Образование',
    education: [
      {
        place: 'ЮФУ',
        specialization: 'Программная Инженерия',
        years: '2011-2015'
      }
    ],
    languageLabel: 'Языки',
    language: [
      {
        language: 'English',
        level: 'Intermediate'
      },
      {
        language: 'Русский',
        level: 'Носитель'
      }
    ],
    interests: ['Эксперименты с ПК железом', 'Электроника']
  }
}
