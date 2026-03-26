import supergolf from '../img/golf/supergolf.png';
import golf1 from '../img/golf/main menu.png';
import golf2 from '../img/golf/aiming.png';
import golf3 from '../img/golf/multiplayer map.png';
import golf4 from '../img/golf/redirection.mp4';
import golf5 from '../img/golf/precision.mp4';
import golf6 from '../img/golf/desperation.mp4';
import golf7 from '../img/golf/scoreboard.png';

import carpi from '../img/carpi/carpi.png';
import carpi1 from '../img/carpi/example schedule.png';
import carpi2 from '../img/carpi/drag and drop.mp4';
import carpi3 from '../img/carpi/search filters.mp4';
import carpi4 from '../img/carpi/course search.mp4';
import carpi5 from '../img/carpi/bot summary.png';
import carpi6 from '../img/carpi/bot course search.mp4';

import logo from '../img/logo.png';

import chatkeypt from '../img/keypt/chatkeypt.png';
import keypt1 from '../img/keypt/mitochondria.png';
import keypt2 from '../img/keypt/python.png';
import keypt3 from '../img/keypt/stocks.png';
import keypt4 from '../img/keypt/duck.png';

import alien from '../img/grappler/alien.jpeg';
import grappler1 from '../img/grappler/action shot.png';
import grappler2 from '../img/grappler/grapple point.png';
import grappler3 from '../img/grappler/grapple pull points.mp4';
import grappler4 from '../img/grappler/grapple swing points.mp4';

import camera from '../img/camera/camera.jpeg';
import camera1 from '../img/camera/iso.png';
import camera2 from '../img/camera/shutter speed.png';
import camera3 from '../img/camera/aperture.png';
import camera4 from '../img/camera/results 1.png';
import camera5 from '../img/camera/results 2.png';
import camera6 from '../img/camera/results 3.png';

import plancake from '../img/plancake/plancake.png';
import plancake1 from '../img/plancake/results.png';
import plancake2 from '../img/plancake/dashboard.png';
import plancake3 from '../img/plancake/demo.mp4';

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
    description: "Plancake is a scheduling platform that simplifies the logistics of finding a time where everyone is available. The intuitive interface allows users to quickly create and share events, then simply \"paint\" their availability. The platform then compiles the results and highlights the best times for an event. This project started as part of the Software Design and Documentation course at RPI.",
    images: [
      {
        title: "Event Results",
        img: plancake1
      },
      {
        title: "Dashboard",
        img: plancake2
      },
      {
        title: "Demo",
        img: plancake3
      }
    ],
  },
  {
    name: 'Camera Simulator',
    slug: 'camera',
    subtitle: "A ray-traced camera lens simulator",
    logo: camera,
    logo_alt: 'camera',
    tags: ['Class Project'],
    github: {
      type: 'repo',
      owner: 'jzgom067',
      repo: 'Camera-Simulator'
    },
    links: [
      {
        name: 'GitHub',
        link: 'https://github.com/jzgom067/Camera-Simulator'
      },
      {
        name: 'Paper',
        link: '/Camera Simulator Paper.pdf'
      },
      {
        name: 'Presentation',
        link: '/Camera Simulator Presentation.pdf'
      }
    ],
    date_start: 'March 2025',
    date_end: 'April 2025',
    tech_stack: [
      'C++',
    ],
    description: "This project is an interactive program that simulates the effects of ISO, shutter speed, and aperture on a camera's resulting image. Using ray tracing, it approximates how a lens physically interacts with light under the specified conditions. Built on top of a homework assignment, this is my final project for the Advanced Computer Graphics course at RPI.",
    images: [
      {
        title: "ISO Setting",
        img: camera1
      },
      {
        title: "Shutter Speed Setting",
        img: camera2
      },
      {
        title: "Aperture Setting",
        img: camera3
      },
      {
        title: "Results",
        img: camera4
      },
      {
        title: "More Results",
        img: camera5
      },
      {
        title: "Even More Results",
        img: camera6
      }
    ],
  },
  {
    name: 'Space Grappler',
    slug: 'grappler',
    subtitle: "A 2D platformer made in Unity",
    logo: alien,
    logo_alt: 'alien',
    tags: ['Game', 'Class Project'],
    github: {
      type: 'repo',
      owner: 'jzgom067',
      repo: 'Space-Grappler'
    },
    links: [
      {
        name: 'GitHub',
        link: 'https://github.com/jzgom067/Space-Grappler'
      },
      {
        name: 'itch.io',
        link: 'https://honketh.itch.io/space-grappler'
      },
    ],
    date_start: 'February 2025',
    date_end: 'March 2025',
    tech_stack: [
      'C#',
      'Unity'
    ],
    description: "Space Grappler is a short 2D platformer made in Unity. Players can take advantage of grapple points to build momentum and cross large gaps. The levels focus on creative uses of this mechanic over precise movement, creating a more engaging experience for players with different skill levels. This project was created as a final project for the Intro to Game Programming course at RPI.",
    images: [
      {
        title: "Action Shot",
        img: grappler1
      },
      {
        title: "Grapple Point",
        img: grappler2
      },
      {
        title: "Grapple Pull Points",
        img: grappler3
      },
      {
        title: "Grapple Swing Points",
        img: grappler4
      },
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
      repo: 'ChatKeyPT'
    },
    links: [
      {
        name: 'GitHub',
        link: 'https://github.com/coleritchiee/ChatKeyPT'
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
    name: 'CARPI Course Planner',
    slug: 'carpi',
    subtitle: "A 4-year planner for RPI students",
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
    date_end: 'December 2025',
    tech_stack: [
      'React',
      'Tailwind CSS',
      'Python',
      'FastAPI',
      'MySQL'
    ],
    description: "CARPI Course Planner is a web interface for students to lay out courses for their time at RPI. The project originally formed around a Discord bot that offered convenient resources on a platform students were already on. Now, it's shifted to a web platform to offer a richer and more accessible experience. This project is part of the Rensselaer Center for Open Source (RCOS) program, which focuses on the development of open source solutions for real world problems.",
    images: [
      {
        title: "Example Schedule",
        img: carpi1
      },
      {
        title: "Drag and Drop Functionality",
        img: carpi2
      },
      {
        title: "Search Filters",
        img: carpi3
      },
      {
        title: "Course Search",
        img: carpi4
      },
      {
        title: "Discord App Summary",
        img: carpi5
      },
      {
        title: "Discord App Course Search",
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
