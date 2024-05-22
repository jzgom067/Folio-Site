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
      description: "Super Golf is a 3D multiplayer golf game, made in the Unity " +
        "engine. It features a set of 3 abilities that the player can use to " +
        "manipulate the trajectory of the ball while midair, which encourages " +
        "creativity and strategic planning before each shot. Development time for the " +
        "first release spanned 2 months, and the game was updated about a year later " +
        "to fix bugs and add minor features.",
      contributions: "This was a solo development project, so besides writing scripts, " +
        "I designed game mechanics and modeled 3D assets. The project would not be " +
        "possible without the endless resources from YouTube channels like Brackeys.",
      learned: "At the point of starting this project, I had already been working with " +
        "Unity for a few years. However, I had only made small prototypes and proofs " +
        "of concepts, which ultimately amounted to nothing substantial. By committing " +
        "to finishing this game, I was challenging myself to stick with a project and " +
        "see it through to the end. Because of this, I learned a lot of concepts that " +
        "only come up when polishing a game for release. For example, desigining a " +
        "user interface was new to me, and it was a fun challenge figuring out how " +
        "to communicate all the necessary information to the player. User testing was " +
        "integral to getting things right, and made sure I wasn't completely insane " +
        "when making the game. There were also unique challenges that arose because of " +
        "the type of game I was making. Things like handling multiple players, score " +
        "management, and trajectory prediction were challenges all on their own. The " +
        "amount of work and attention to detail that needed to go into the game gave " +
        "me a newfound appreciation for the games I play in my free time.",
      challenges: "Because this was a solo project, it meant I had to figure out " +
        "everything by myself. Any problem I had involved a lot of research and rubber " +
        "ducks, but making it through to the end was especially empowering, knowing I " +
        "did it all without someone guiding me through it.",
      next: "I've always had a passion for video games and game design, so being able " +
        "to make my own was like a childhood dream come true. Nowadays when playing " +
        "games, I find it fun to analyze and try to reverse engineer them, as well as " +
        "appreciate cleverly designed mechanics. It's very inspiring to see all the " +
        "great games that exist, and knowing I've already made one myself only makes " +
        "that feeling stronger.."
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
