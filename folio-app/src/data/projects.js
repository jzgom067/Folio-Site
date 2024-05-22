import banana from '../img/banan.png';
import supergolf from '../img/supergolf.png';
import carpi from '../img/carpi.png';

const projects = [
  {
    name: 'Super Golf',
    slug: 'golf',
    subtitle: "A 3D golf game made in Unity",
    logo: supergolf,
    logo_alt: 'golf',
    links: [
      {
        name: 'GitHub',
        link: 'https://github.com/jzgom067/Super-Golf'
      },
      {
        name: 'itch.io',
        link: 'https://jzgombic.itch.io/golf'
      }
    ],
    date_start: 'January 2022',
    date_end: 'February 2022',
    tech_stack: [
      'Unity',
      'C#',
      'Blender'
    ],
    text: {
      description: "A golf game made over the course of 2 months.",
      contributions: "I made the project from start to finish.",
      learned: "I learned how to finish a project after years of prototypes.",
      challenges: "Everything in this project was completely self-taught.",
      next: "Game development is fun, I might make more games in the future."
    }
  },
  {
    name: 'CARPI Bot',
    slug: 'carpi',
    subtitle: "A Discord bot for RPI students",
    logo: carpi,
    logo_alt: 'carpi',
    links: [
      {
        name: 'GitHub',
        link: 'https://github.com/SameriteRL/CARPI-Bot'
      }
    ],
    date_start: 'December 2023',
    date_end: 'Present',
    tech_stack: [
      'Python',
      'MySQL'
    ],
    text: {
      description: "",
      contributions: "",
      learned: "",
      challenges: "",
      next: ""
    }
  },
  {
    name: 'This Website',
    slug: 'website',
    subtitle: "A portfolio",
    logo: banana,
    logo_alt: 'banana',
    links: [
      {
        name: 'GitHub',
        link: 'https://github.com/jzgom067/Folio-Site'
      }
    ],
    date_start: 'May 2024',
    date_end: 'May 2024',
    tech_stack: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node.js'
    ],
    text: {
      description: "",
      contributions: "",
      learned: "",
      challenges: "",
      next: ""
    }
  }
]

export default projects;
