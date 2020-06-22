const general = {
  github: 'https://github.com/haosx86',
  vk: 'https://vk.com/xtxtv',
  email: 'haosx86+dev@gmail.com',
  skills: {
    frontend: [
      {
        technology: 'Vue/Nuxt',
        level: 80
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
        level: 80
      },
      {
        technology: 'Angular',
        level: 55
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
        technology: 'Nginx',
        level: 51
      }
    ],
    other: [
      'Git',
      'Code review',
      'PHP',
      'Linux',
      'CI/CD',
      'SSR',
      'Unit Testing',
      'Svelte'
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
      'Nginx',
      'Wordpress'
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
    switchLanguageLabel: 'Switch to RU',
    switchLanguageURL: '/ru/',
    switchLanguageCode: 'ru',
    headerNavLabel: 'External links',
    name: 'Vladimir Terekhov',
    emailLabel: 'Email me',
    specialization: 'Fullstack Web developer',
    skillsLabel: 'Skills',
    keyResponsobilitiesLabel: 'Key Responsobilities',
    experienceLabel: 'Work Experience',
    experience: [
      {
        ...companyGeneralInfo[0],
        position: 'Fullstack Web Developer',
        startDate: 'April 2016',
        tillDate: 'Present',
        keyResponsobilities: [
          'Analyze client requirements and convert requirements to design documents',
          'Performing Code review',
          'Setting up frontend and backend environments for new projects',
          'Develop, test and support web applications'
        ]
      },
      {
        ...companyGeneralInfo[1],
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
    technologiesLabel: 'Technologies used',
    otherSkillsLabel: 'Other skills',
    interestsLabel: 'Interests',
    interests: ['PC modding', 'Embedded electronics']
  },
  ru: {
    ...general,
    switchLanguageLabel: 'Перейти к английской версии',
    switchLanguageURL: '/',
    switchLanguageCode: 'en',
    headerNavLabel: 'Внешние ссылки',
    name: 'Владимир Терехов',
    emailLabel: 'Написать мне на почту',
    specialization: 'Fullstack разработчик',
    skillsLabel: 'Навыки',
    keyResponsobilitiesLabel: 'Основные обязанности',
    experienceLabel: 'Опыт работы',
    experience: [
      {
        ...companyGeneralInfo[0],
        position: 'Fullstack Web разработчик',
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
        position: 'Junior Frontend Разработчик',
        startDate: 'Июль 2013',
        tillDate: 'Декабрь 2013',
        keyResponsobilities: ['Разработка тем для CMS', 'Рефакторинг кода']
      }
    ],
    educationLabel: 'Образование',
    education: [
      {
        place: 'Южный Федеральный Университет',
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
    technologiesLabel: 'Основные технологии',
    otherSkillsLabel: 'Допольнительные навыки',
    interestsLabel: 'Интересы',
    interests: ['Эксперименты с ПК железом', 'Электроника']
  }
}
