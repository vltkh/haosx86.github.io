const general = {
  github: 'https://github.com/vltkh',
  linkedin: 'https://www.linkedin.com/in/vladimir-terekhov-80301349/',
  email: 'vladimir.terekhov.128@gmail.com',
  skills: {
    frontend: [
      {
        technology: 'Vue/Quasar',
        level: 85
      },
      {
        technology: 'Vue/Nuxt',
        level: 78
      },
      {
        technology: 'Javascript/Typescript',
        level: 90
      },
      {
        technology: 'HTML/CSS/LESS/SCSS',
        level: 95
      },
      {
        technology: 'Gulp/Webpack/ESBuild',
        level: 80
      },
      {
        technology: 'Angular',
        level: 45
      }
    ],
    backend: [
      {
        technology: 'Serverless',
        level: 85
      },
      {
        technology: 'Node.js',
        level: 85
      },
      {
        technology: 'MongoDB',
        level: 65
      },
      {
        technology: 'MySQL,PostgeSQL',
        level: 70
      },
      {
        technology: 'Nginx',
        level: 60
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
      'E2E Testing',
      'Svelte/SvelteKit',
      'Terraform',
      'Azure',
      'Docker',
      'WebAssembly/C/C++',
      'Redis',
      'NoSQL',
      'NestJS'
    ]
  }
}

const companyGeneralInfo = [
  {
    company: 'Wisebits Group',
    technologies: ['Svelte/SvelteKit', 'NestJS', 'JS/TS', 'Docker', 'MongoDB']
  },
  {
    company: 'Tenging verslunarlausnir ehf',
    technologies: [
      'VueJS',
      'Quasar',
      'JS/TS',
      'Webpack/ESBuild',
      'Serverless',
      'ExpressJS',
      'NestJS',
      'AWS/Azure Services',
      'PostgeSQL',
      'Terraform',
      'Various CI/CD',
      'Cypress'
    ]
  },
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
      'Wordpress',
      'ExpressJS'
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
    specialization: 'Fullstack developer',
    skillsLabel: 'Skills',
    keyResponsobilitiesLabel: 'Key Responsobilities',
    experienceLabel: 'Work Experience',
    experience: [
      {
        ...companyGeneralInfo[1],
        position: 'Web Team Lead',
        startDate: 'February 2024',
        tillDate: 'Present',
        keyResponsobilities: [
          'Mentoring new team members; Managing Web Team',
          'Implementation of CI/CD and "Infrastructure as Code" principles',
          'Performing Code Reviews and making architecture decisions',
          'Making maintainable and reusable code'
        ]
      },
      {
        ...companyGeneralInfo[0],
        position: 'Fullstack Developer',
        startDate: 'August 2023',
        tillDate: 'January 2024',
        keyResponsobilities: [
          'Developing high-load web solutions',
          'Perform Code Reviews'
        ]
      },
      {
        ...companyGeneralInfo[1],
        position: 'Web Team Lead',
        startDate: 'August 2021',
        tillDate: 'August 2023',
        keyResponsobilities: [
          'Mentoring new team members; Managing Web Team',
          'Implementation of CI/CD and "Infrastructure as Code" principles',
          'Performing Code Reviews and making architecture decisions',
          'Making maintainable and reusable code'
        ]
      },
      {
        ...companyGeneralInfo[2],
        position: 'Fullstack Web Developer',
        startDate: 'April 2016',
        tillDate: 'July 2021',
        keyResponsobilities: [
          'Analyze client requirements and convert requirements to design documents',
          'Performing Code review',
          'Setting up frontend and backend environments for new projects',
          'Develop, test and support web applications'
        ]
      },
      {
        ...companyGeneralInfo[3],
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
        level: 'B2'
      },
      {
        language: 'Russian',
        level: 'Native'
      }
    ],
    technologiesLabel: 'Technologies used',
    otherSkillsLabel: 'Other skills',
    interestsLabel: 'Interests',
    interests: ['Embedded electronics', 'FPV Drones'],
    petProjectsTitle: 'Pet projects',
    petProjects: [
      {
        name: 'Chess notation visualisation tool',
        description: [
          'This is a simple visualisation tool for chess Algebraic Notation',
          'Vue3, TypeScript, GitHub CI and GitHub Pages were used.'
        ],
        links: [
          {
            text: 'Visualisation tool',
            url: 'https://vltkh.github.io/chess-viewer/'
          },
          {
            text: 'GitHub Repo',
            url: 'https://github.com/vltkh/chess-viewer'
          },
          {
            text: 'Algebraic notation Wiki page',
            url: 'https://en.wikipedia.org/wiki/Algebraic_notation_(chess)'
          }
        ]
      },
      {
        name: 'This Resume page',
        description: [
          'Nuxt.js (as static page generator), TypeScript, GitHub CI and GitHub Pages were used.',
          '100% static bundle without JS. Total page size -  9kb Gzipped. 100/100 Google PageSpeed Insights score. Responsive design.'
        ],
        links: [
          {
            text: 'GitHub Repo',
            url: 'https://github.com/vltkh/vltkh.github.io'
          }
        ]
      }
    ]
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
        ...companyGeneralInfo[1],
        position: 'Web Team Lead',
        startDate: 'Февраль 2024',
        tillDate: 'Настоящее время',
        keyResponsobilities: [
          'Помощь новым членам команды; Управление веб-командой',
          'Внедрение принципов CI/CD и "Infrastructure as Code"',
          'Ревью кода и принятие архитектурных решений',
          'Написание поддерживаемого и переиспользуемого кода'
        ]
      },
      {
        ...companyGeneralInfo[0],
        position: 'Fullstack разработчик',
        startDate: 'Август 2023',
        tillDate: 'Январь 2024',
        keyResponsobilities: [
          'Разработка высоконагруженных web приложений',
          'Ревью кода'
        ]
      },
      {
        ...companyGeneralInfo[1],
        position: 'Web Team Lead',
        startDate: 'Август 2021',
        tillDate: 'Август 2023',
        keyResponsobilities: [
          'Помощь новым членам команды; Управление веб-командой',
          'Внедрение принципов CI/CD и "Infrastructure as Code"',
          'Ревью кода и принятие архитектурных решений',
          'Написание поддерживаемого и переиспользуемого кода'
        ]
      },
      {
        ...companyGeneralInfo[2],
        position: 'Fullstack разработчик',
        startDate: 'Апрель 2016',
        tillDate: 'Июль 2021',
        keyResponsobilities: [
          'Анализ требований и составление проектной документации',
          'Проведение Code Review',
          'Настройка окружений для новых проектов',
          'Разработка, тестирование и интеграция веб-приложений'
        ]
      },
      {
        ...companyGeneralInfo[3],
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
        level: 'B2'
      },
      {
        language: 'Русский',
        level: 'Родной'
      }
    ],
    technologiesLabel: 'Основные технологии',
    otherSkillsLabel: 'Допольнительные навыки',
    interestsLabel: 'Интересы',
    interests: ['Электроника', 'FPV Дроны'],
    petProjectsTitle: 'Pet проекты',
    petProjects: [
      {
        name: 'Визуализатор Алгебраической нотации шахматных партий',
        description: [
          'Были использованы Vue3, TypeScript, GitHub CI и GitHub Pages.'
        ],
        links: [
          {
            text: 'Визуализатор',
            url: 'https://vltkh.github.io/chess-viewer/'
          },
          {
            text: 'GitHub репозиторий',
            url: 'https://github.com/vltkh/chess-viewer'
          },
          {
            text: 'Вики страница об Алгебраической нотации',
            url:
              'https://ru.wikipedia.org/wiki/%D0%90%D0%BB%D0%B3%D0%B5%D0%B1%D1%80%D0%B0%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F_%D0%BD%D0%BE%D1%82%D0%B0%D1%86%D0%B8%D1%8F'
          }
        ]
      },
      {
        name: 'Данное резюме',
        description: [
          'Были использованы Nuxt.js (для генерации статических страниц), TypeScript, GitHub CI и GitHub Pages.',
          '100% статичная сборка без JS. Общий размер -  9kb Gzipped. 100/100 очков в тесте Google PageSpeed Insights. Адаптивная верстка.'
        ],
        links: [
          {
            text: 'GitHub Репозиторий',
            url: 'https://github.com/vltkh/vltkh.github.io'
          }
        ]
      }
    ]
  }
}
