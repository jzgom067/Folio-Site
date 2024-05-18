const projects = [
  {
    name: 'Super Golf',
    description: "A 3D golf game made in Unity",
    img: require('../img/supergolf.png'),
    img_alt: 'golf',
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
    ]
  },
  {
    name: 'CARPI Bot',
    description: "A Discord bot for RPI students",
    img: require('../img/carpi.png'),
    img_alt: 'carpi',
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
    ]
  },
  {
    name: 'This Website',
    description: "A portfolio",
    img: require('../img/banan.png'),
    img_alt: 'banana',
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
    ]
  }
]

export default projects;
