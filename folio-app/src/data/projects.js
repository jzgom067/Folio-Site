import supergolf from '../img/supergolf.png';
import golf1 from '../img/golf/main menu.png';
import golf2 from '../img/golf/aiming.png';
import golf3 from '../img/golf/multiplayer map.png';
import golf4 from '../img/golf/redirection.mp4';
import golf5 from '../img/golf/precision.mp4';
import golf6 from '../img/golf/desperation.mp4';
import golf7 from '../img/golf/scoreboard.png';

import carpi from '../img/carpi.png';
import carpi1 from '../img/carpi/summary.png';
import carpi2 from '../img/carpi/commands.png';
import carpi3 from '../img/carpi/course search.mp4';
import carpi4 from '../img/carpi/course terms.png';
import carpi5 from '../img/carpi/calendar.mp4';
import carpi6 from '../img/carpi/compile.png';

import duck from '../img/duck.svg';

import chatkeypt from '../img/chatkeypt.png';
import keypt1 from '../img/keypt/mitochondria.png';
import keypt2 from '../img/keypt/python.png';
import keypt3 from '../img/keypt/stocks.png';
import keypt4 from '../img/keypt/duck.png';

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
    text: [
      {
        title: "What is ChatKeyPT?",
        text: "ChatKeyPT is a platform that takes a user-supplied OpenAI API key and provides a familiar interface to take advantage of it. The idea behind this project is to make the API's pay-as-you-go model available to a wider audience, giving access to features and models gated behind ChatGPT Plus's hefty monthly fee."
      },
      {
        title: "What did I contribute?",
        text: "I worked on this project with a friend of mine, who approached me with the idea in May 2024. He took charge of the backend, I handled the API calls and internal app logic, and we split the rest of the frontend development between the two of us. Of that, I was responsible for the chat page, which involved laying out most of the app's data and planning ahead to make sure the app was scalable."
      },
      {
        title: "What did I learn?",
        text: "This project introduced me to Flutter, a stark departure from the React I was using for my personal website at the time. It took some time to adjust, but there's a lot of conveniences built-in, like the automatic formatter, strict code linter, and cross-platform support. We planned on releasing both a website and mobile app from the very beginning, and the iOS version was my responsibility. I learned a lot from developing on mobile for the first time, and also from the process of submitting an app to the App Store."
      },
      {
        title: "What challenges did I face?",
        text: "I find that it's hard enough making a reactive and accessible interface for a website. To do the same for a mobile app alongside it was a tall task, especially considering I've never developed on mobile before. I also learned a lot about the Flutter community, and how many (seemingly simple) functions depend on packages maintained by third parties. It was convenient to find packages that could accomplish niche things, but typically the documentation was lacking."
      },
      {
        title: "What's next?",
        text: "While the first release of ChatKeyPT wasn't at the original scope we planned, we wanted to make sure that at least the core functionality was robust before publishing. We have many ideas for features that leverage the OpenAI API and perform tasks unique to our platform. For now, we're very proud of the fact that we were able to take an idea from conception and publish on the App Store in just a few months."
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
    date_end: 'October 2024',
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
        text: "This website is mainly a project portfolio, but it was also a way to introduce myself to web development. I've been told countless times that a personal website is the perfect way to show off coding projects, and I finally decided to spend a summer creating one. This was also an opportunity for me to reflect on everything I've done, taking a step back and seeing how far I've come."
      },
      {
        title: "What did I contribute?",
        text: "I was responsible for everything between design and implementation, so any problems I had required detailed research to solve. Though, without someone constantly giving me the answer, I feel like I learned well through plenty of experimenting. I started figuring out plans for the website once I had a good grasp of my capabilities."
      },
      {
        title: "What did I learn?",
        text: "Before this, the last time I used HTML was in early high school. Since then I've learned about web development frameworks, so I decided to use React for its popularity and extensive documentation. I still had to relearn HTML and CSS, which are fundamentally different from languages I typically use, but things were relatively intuitive save for some CSS properties. Deployment is handled by Vercel, which abstracted those complications away from me so I could focus on building the website."
      },
      {
        title: "What challenges did I face?",
        text: "I dove right into this project without trying to learn fundamentals first. I find that I learn very well with hands-on experience, and I wanted to have something presentable by the end of the summer. On top of designing the website, I had to learn HTML, CSS, JavaScript, and React all at once. However, I think what gave me the most trouble was accounting for mobile users and accessibility settings. There's a delicate balance that needs to be struck between creative expression and making sure the website is accessible."
      },
      {
        title: "What's next?",
        text: "While this website isn't perfect, I'm quite satisfied with the result, considering it's the first I've made. I'm not planning on making another personal website anytime soon, but I'll keep this updated with future projects and experience."
      }
    ]
  },
  {
    name: 'Project CARPI',
    slug: 'carpi',
    subtitle: "A central resource for RPI students",
    logo: carpi,
    logo_alt: 'carpi',
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
      'Python',
      'FastAPI',
      'MySQL'
    ],
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
    text: [
      {
        title: "What is Project CARPI?",
        text: "Project CARPI (Cool Academic RPI) is designed to be a central resource for students at Rensselaer Polytechnic Institute. Currently there's not much to show as it's going through a large shift onto a web platform, with the main feature being a 4-year course planner. However, the images here show the Discord bot that the project originally formed around. This project is part of the Rensselaer Center for Open Source (RCOS) program, which focuses on the development of open source solutions for real world problems."
      },
      {
        title: "What did I contribute?",
        text: "My first contribution was a proof of concept for migrating existing data to a more efficient storage solution using MySQL. I officially joined the project in January 2024, where my first task was to design a database. Afterwards, I took charge of development on the Course Search feature, where I leveraged the database for a new search algorithm. This feature was pushed to production in April 2024. Now, I've been working closely with the project lead to further plan out the database and integrate it directly with our backend service."
      },
      {
        title: "What did I learn?",
        text: "This is my first project that involved working with a team and using GitHub for version control. In addition to refreshing my Python knowledge from years ago, I was also working with many new libraries, so this project tested my ability to adapt on the fly. Everything in our development process moved quickly, but I had plenty of support from other team members to keep me on track."
      },
      {
        title: "What challenges did I face?",
        text: "The biggest challenge in this project is easily the many interacting components. The platform interfaces with databases, implements external libraries, and uses Discord's API. We've often had to decipher whether a problem was a library bug or a mistake on our part, and we've even switched libraries to solve issues like this. In addition, the team has gotten much bigger since I joined, so we've had to figure out how to properly distribute tasks and ensure proper communication across the team."
      },
      {
        title: "What's next?",
        text: "I plan to continue working on this project in future semesters during my time at RPI. In particular, I would like to iterate more on the Course Search and keep the database updated to include future features. I look forward to seeing the potential for this project in the community."
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
    text: [
      {
        title: "What is Super Golf?",
        text: "Super Golf is a 3D multiplayer golf game made in the Unity engine. The main feature is a set of 3 abilities that manipulate the trajectory of the ball while midair, encouraging creativity and strategic planning before each shot. The first release was developed over 2 months, and the game was updated about a year later to fix bugs and add minor features."
      },
      {
        title: "What did I contribute?",
        text: "This was a solo development project, so besides writing scripts, I designed game mechanics and modeled 3D assets. The project would not have been completed without the endless resources from YouTube channels like Brackeys."
      },
      {
        title: "What did I learn?",
        text: "At the point of starting this project, I had already been working with Unity for a few years. However, I had only made small prototypes which amounted to nothing substantial. This project challenged me to commit myself to a game and see it through to the end, so I had to learn a lot about polishing a game for release. Playtesting, for example, was integral to getting things right. There were also challenges that arose from the type of game I was making. For example, multiplayer implementation, score management, and trajectory prediction had very unique problems to solve."
      },
      {
        title: "What challenges did I face?",
        text: "Because this was a solo project, I had to figure out everything by myself, with a lot of research and rubber ducks. Making it through to the end was very empowering, knowing I did it all without someone guiding me through it. The amount of work and attention to detail required gave me a newfound appreciation for the many games I've played."
      },
      {
        title: "What's next?",
        text: "Having made my own video game is a childhood dream come true. Nowadays, I find it fun to try and reverse engineer the games I play in my free time. I have plenty of ideas in mind for games I could make in the future, and I look forward to the day that I can execute on them. The satisfaction of seeing other people find fun in something I made is an unbeatable feeling that I can't wait to experience again."
      }
    ]
  },
]

export default projects;
