import supergolf from '../img/supergolf.png';
import golf1 from '../img/golf/screenshot1.png';
import golf2 from '../img/golf/screenshot2.png';
import golf3 from '../img/golf/screenshot3.png';
import golf4 from '../img/golf/screenshot4.png';

import carpi from '../img/carpi.png';

import duck from '../img/duck.svg';

import chatkeypt from '../img/chatkeypt.png';

const projects = [
  {
    name: 'ChatKeyPT',
    slug: 'keypt',
    subtitle: "An advanced ChatGPT interface",
    logo: chatkeypt,
    logo_alt: 'chatkeypt',
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
      'Firebase'
    ],
    images: [],
    text: [
      {
        title: "What is ChatKeyPT?",
        text: "ChatKeyPT is a platform that takes a user-supplied OpenAI API key and provides a familiar interface to take advantage of it. The idea behind this project was to make the API's pay-as-you-go model available to a wider audience, giving access to features gated behind ChatGPT Plus's hefty monthly fee."
      }
    ]
  },
  {
    name: 'This Website',
    slug: 'site',
    subtitle: "My portfolio website",
    logo: duck,
    logo_alt: 'duck',
    links: [
      {
        name: 'GitHub',
        link: 'https://github.com/jzgom067/Folio-Site'
      }
    ],
    date_start: 'May 2024',
    date_end: 'Present',
    tech_stack: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node.js'
    ],
    images: [],
    text: [
      {
        title: "What is this website?",
        text: "Just a portfolio."
      }
    ]
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
    images: [],
    text: [
      {
        title: "What is CARPI Bot?",
        text: "CARPI Bot is a Discord bot designed for use by students at Rensselaer Polytechnic Institute. Discord is tightly integrated with the community there, so the bot is made to be a helpful resource on a platform that people are already on. It currently features stores of information like the academic calendar and course catalog, with more features and improvements to come. This project is part of the Rensselaer Center for Open Source (RCOS) program, one that focuses on the development of open source solutions for real world problems."
      },
      {
        title: "What did I contribute?",
        text: "I started contributing to this project in December 2023, creating a proof of concept for migrating existing data to a MySQL database. I officially joined the project in January 2024, converting already-developed features to use a database as a more efficient solution for data storage. Much of my time was spent designing the database that would be used as the foundation for the entire bot from that point forward. After that, I took charge of development on the Course Search feature, which I rewrote from the ground up to use our database instead of scraping data from the unreliable catalog website. This feature was pushed to production in April 2024."
      },
      {
        title: "What did I learn?",
        text: "This was my first project that involved working with a team. It was also my first time using GitHub (or anything really) for version control, so there was a lot to learn in addition to refreshing my Python knowledge. I was also working with a library (Discord.py) that I haven't used before, so a lot adapting was necessary to contribute to this project."
      },
      {
        title: "What challenges did I face?",
        text: "The biggest challenge in this project is managing many different interacting libraries, like interfacing with databases and using Discord's API. This means that problems led to situations where we had to decipher whether it was a library bug or a mistake on our part. We've had to change libraries on a few occasions to solve issues like this."
      },
      {
        title: "What's next?",
        text: "I plan to continue working on this project in future semesters during my time at RPI. I would like to iterate more on the Course Search, as well as update the database structure to include future features of the bot. I look forward to seeing the potential for this bot in the community."
      }
    ]
  },
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
      'C#',
      'Unity',
      'Blender'
    ],
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
        title: "Time Stop Ability",
        img: golf4
      }
    ],
    text: [
      {
        title: "What is Super Golf?",
        text: "Super Golf is a 3D multiplayer golf game, made in the Unity engine. It features a set of 3 abilities that the player can use to manipulate the trajectory of the ball while midair, which encourages creativity and strategic planning before each shot. Development time for the first release spanned 2 months, and the game was updated about a year later to fix bugs and add minor features."
      },
      {
        title: "What did I contribute?",
        text: "This was a solo development project, so besides writing scripts, I designed game mechanics and modeled 3D assets. The project would not be possible without the endless resources from YouTube channels like Brackeys."
      },
      {
        title: "What did I learn?",
        text: "At the point of starting this project, I had already been working with Unity for a few years. However, I had only made small prototypes and proofs of concepts, which ultimately amounted to nothing substantial. By committing to finishing this game, I was challenging myself to stick with a project and see it through to the end. Because of this, I learned a lot of concepts that only come up when polishing a game for release. For example, designing a user interface was new to me, and it was a fun challenge figuring out how to communicate all the necessary information to the player. User testing was integral to getting things right, and made sure I wasn't completely insane when making the game. There were also unique challenges that arose because of the type of game I was making. Things like handling multiple players, score management, and trajectory prediction were challenges all on their own. The amount of work and attention to detail that needed to go into the game gave me a newfound appreciation for the games I play in my free time."
      },
      {
        title: "What challenges did I face?",
        text: "Because this was a solo project, it meant I had to figure out everything by myself. Any problem I had involved a lot of research and rubber ducks, but making it through to the end was especially empowering, knowing I did it all without someone guiding me through it."
      },
      {
        title: "What's next?",
        text: "I've always had a passion for video games and game design, so being able to make my own was like a childhood dream come true. Nowadays when playing games, I find it fun to analyze and try to reverse engineer them, as well as appreciate cleverly designed mechanics. It's very inspiring to see all the great games that exist, and knowing I've already made one myself only makes that feeling stronger."
      }
    ]
  },
]

export default projects;
