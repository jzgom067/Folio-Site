import supergolf from '../img/golf/supergolf.png';
import golf1 from '../img/golf/main menu.png';
import golf2 from '../img/golf/aiming.png';
import golf3 from '../img/golf/multiplayer map.png';
import golf4 from '../img/golf/redirection.mp4';
import golf5 from '../img/golf/precision.mp4';
import golf6 from '../img/golf/desperation.mp4';
import golf7 from '../img/golf/scoreboard.png';

import carpi from '../img/carpi/carpi.png';
import carpi1 from '../img/carpi/summary.png';
import carpi2 from '../img/carpi/commands.png';
import carpi3 from '../img/carpi/course search.mp4';
import carpi4 from '../img/carpi/course terms.png';
import carpi5 from '../img/carpi/calendar.mp4';
import carpi6 from '../img/carpi/compile.png';

import logo from '../img/logo.png';

import chatkeypt from '../img/keypt/chatkeypt.png';
import keypt1 from '../img/keypt/mitochondria.png';
import keypt2 from '../img/keypt/python.png';
import keypt3 from '../img/keypt/stocks.png';
import keypt4 from '../img/keypt/duck.png';

import plancake from '../img/plancake/plancake.png';
import plancake1 from '../img/plancake/availability.png';
import plancake2 from '../img/plancake/create event.png';
import plancake3 from '../img/plancake/event demo.mp4';

const projects = [
  {
    name: 'Plancake',
    slug: 'plancake',
    subtitle: "A platform for event planning",
    logo: plancake,
    logo_alt: 'plancake',
    tags: ['Website'],
    github: {
      type: 'org',
      owner: 'plan-cake'
    },
    links: [
      {
        name: 'GitHub',
        link: 'https://github.com/plan-cake'
      },
      {
        name: 'Website',
        link: 'https://plancake.org/'
      }
    ],
    date_start: 'September 2024',
    date_end: 'Present',
    tech_stack: [
      'Next.js',
      'Tailwind CSS',
      'Python',
      'Django',
      'Supabase',
      'PostgreSQL'
    ],
    description: "Plancake is a scheduling platform that simplifies the logistics of finding a time where everyone is available. The intuitive interface allows users to quickly create and share events, then simply \"paint\" their availability. The platform then compiles the results and highlights the best times for an event. This project started as part of the Software Design and Documentation course at RPI. This is still a work-in-progress, so the images shown are from our original prototype that was named \"tomeeto\".",
    images: [
      {
        title: "Availability Page",
        img: plancake1
      },
      {
        title: "Event Creation",
        img: plancake2
      },
      {
        title: "Event Demo",
        img: plancake3
      }
    ],
  },
  {
    name: 'ChatKeyPT',
    slug: 'keypt',
    subtitle: "An alternative ChatGPT interface",
    logo: chatkeypt,
    logo_alt: 'chatkeypt',
    tags: ['Website', 'Mobile App'],
    github: {
      type: 'repo',
      owner: 'coleritchiee',
      repo: 'gpt_thing'
    },
    links: [
      {
        name: 'GitHub',
        link: 'https://github.com/coleritchiee/gpt_thing'
      },
      {
        name: 'Website',
        link: 'https://www.chatkeypt.com/'
      },
      {
        name: 'App Store',
        link: 'https://apps.apple.com/us/app/chatkeypt/id6608961477'
      },
    ],
    date_start: 'May 2024',
    date_end: 'August 2024',
    tech_stack: [
      'Dart',
      'Flutter',
      'Firebase',
      "Vercel"
    ],
    description: "ChatKeyPT is a platform that takes a user-supplied OpenAI API key and provides a familiar interface to take advantage of it. The idea behind this project is to make the API's pay-as-you-go model available to a wider audience, giving access to features and models gated behind ChatGPT Plus's hefty monthly fee.",
    images: [
      {
        title: "Basic Prompt",
        img: keypt1
      },
      {
        title: "Code Generation",
        img: keypt2
      },
      {
        title: "System Prompt Usage",
        img: keypt3
      },
      {
        title: "Image Generation",
        img: keypt4
      }
    ],
  },
  {
    name: 'This Website',
    slug: 'site',
    subtitle: "My portfolio website",
    logo: logo,
    logo_alt: 'logo',
    tags: ['Website'],
    github: {
      type: 'repo',
      owner: 'jzgom067',
      repo: 'Folio-Site'
    },
    links: [
      {
        name: 'GitHub',
        link: 'https://github.com/jzgom067/Folio-Site'
      }
    ],
    date_start: 'May 2024',
    date_end: 'October 2024',
    tech_stack: [
      'React',
      'Vercel'
    ],
    description: "This website is just my personal portfolio, meant to show off my projects and expertise. It was my first foray into frontend development, and I learned a lot about accessibility and reactive interface design through hands-on experience.",
    images: [],
    iframe_link: 'https://jackzgom.com',
  },
  {
    name: 'Project CARPI',
    slug: 'carpi',
    subtitle: "A central resource for RPI students",
    logo: carpi,
    logo_alt: 'carpi',
    tags: ['Website', 'Discord App'],
    github: {
      type: 'org',
      owner: 'Project-CARPI'
    },
    links: [
      {
        name: 'GitHub',
        link: 'https://github.com/Project-CARPI'
      }
    ],
    date_start: 'December 2023',
    date_end: 'Present',
    tech_stack: [
      'React',
      'Tailwind CSS',
      'Python',
      'FastAPI',
      'MySQL'
    ],
    description: "Project CARPI (Cool Academic RPI) is designed to be a central resource for students at Rensselaer Polytechnic Institute. The project is currently going through a large shift onto a web platform, with the main feature being a 4-year course planner. However, the images show the Discord bot that the project originally formed around. This project is part of the Rensselaer Center for Open Source (RCOS) program, which focuses on the development of open source solutions for real world problems.",
    images: [
      {
        title: "Discord App Summary",
        img: carpi1
      },
      {
        title: "Command List",
        img: carpi2
      },
      {
        title: "Course Search Command",
        img: carpi3
      },
      {
        title: "Course Terms Command",
        img: carpi4
      },
      {
        title: "Academic Calendar Command",
        img: carpi5
      },
      {
        title: "Compiler Command",
        img: carpi6
      }
    ],
  },
  {
    name: 'Super Golf',
    slug: 'golf',
    subtitle: "A 3D golf game made in Unity",
    logo: supergolf,
    logo_alt: 'golf',
    tags: ['Game'],
    github: {
      type: 'repo',
      owner: 'jzgom067',
      repo: 'Super-Golf'
    },
    links: [
      {
        name: 'GitHub',
        link: 'https://github.com/jzgom067/Super-Golf'
      },
      {
        name: 'itch.io',
        link: 'https://honketh.itch.io/golf'
      }
    ],
    date_start: 'January 2022',
    date_end: 'February 2022',
    tech_stack: [
      'C#',
      'Unity',
      'Blender'
    ],
    description: "Super Golf is a 3D golf game made in Unity, played with up to 4 players locally. The main feature is a set of 3 abilities that manipulate the trajectory of the ball, encouraging creativity and strategic planning before each shot. The first release was developed over 2 months, and the game was updated about a year later to fix bugs and add minor features.",
    images: [
      {
        title: "Main Menu",
        img: golf1
      },
      {
        title: "Aiming Shot",
        img: golf2
      },
      {
        title: "Course Overview",
        img: golf3
      },
      {
        title: '"Redirection" Ability',
        img: golf4
      },
      {
        title: '"Precision" Ability',
        img: golf5
      },
      {
        title: '"Desperation" Ability',
        img: golf6
      },
      {
        title: "Final Scoreboard",
        img: golf7
      }
    ],
  },
]

export default projects;
