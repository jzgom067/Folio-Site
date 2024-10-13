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
        text: "ChatKeyPT is a platform that takes a user-supplied OpenAI API key and provides a familiar interface to take advantage of it. The idea behind this project was to make the API's pay-as-you-go model available to a wider audience, giving access to features and models gated behind ChatGPT Plus's hefty monthly fee."
      },
      {
        title: "What did I contribute?",
        text: "I worked on this project with a friend of mine, who approached me with the idea in May 2024. When it came to splitting the work, he took charge of the backend, I handled the API calls and internal app logic, and we split the rest of the frontend development between the two of us. Of that, I was responsible for the chat page, which involved laying out most of the app's data and planning ahead to make sure the app was scalable."
      },
      {
        title: "What did I learn?",
        text: "This project introduced me to Flutter, which is a stark departure from the React web development I was doing on my personal website. I found that while it took some time to adjust, there's a lot of conveniences that come with the framework, like an automatic formatter, strict code linter, and built-in cross platform support. As part of this project, we planned on releasing as both a website and mobile app. While unfortunately the Android version never made it to production, the iOS version was my responsibility. I learned a lot from not just testing on mobile, but also the process of submitting an app to the App Store."
      },
      {
        title: "What challenges did I face?",
        text: "As said before, the app was released as both a website and mobile app. I find that it's already hard enough making a reactive interface for a website on desktop. During testing, I had to run the same app on a browser, my iPhone, and an Android emulator all at the same time to make sure everything was working smoothly. I also learned a lot about the Flutter community, and how many (seemingly simple) functions of the framework depend on packages maintained by third parties. It was nice to find packages that could accomplish niche things, but typically the documentation was lacking, and many problems took a lot more time than they probably should have to solve."
      },
      {
        title: "What's next?",
        text: "While the first release of ChatKeyPT wasn't at the original scope we planned, we wanted to make sure that at least the core functionality was robust before publishing. We have many ideas for features that leverage the OpenAI API and perform tasks unique to our platform. For now, we're very proud of the fact that we were able to take an idea from conception and publish on the App Store in just a few months."
      },
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
        text: "This is a website made to be a portfolio for my projects, but also to introduce myself to web development. I've been told many times that a personal website is a perfect way for a software developer to show off their work, and I finally decided to spend a summer creating one. This was also an opportunity for me to reflect on everything I've done, taking a step back and being proud of how far I've come."
      },
      {
        title: "What did I contribute?",
        text: "This was another solo project, so I was responsible for everything between design and implementation. This project was done from scratch, and any problems I had required detailed research to solve. Without someone guiding me, I feel like I properly learned how things worked through plenty of experimenting. Once I had a good grasp of web development's (and my own) capabilitites, I started figuring out my plans for the website."
      },
      {
        title: "What did I learn?",
        text: "Before this, the last time I worked with HTML was sometime in early high school. I don't remember much from that experience, but since then I've learned a lot about the web development process, in terms of frameworks and development methodologies. I decided to use React for its popularity and extensive documentation, but I still had to completely reteach myself how to use HTML and CSS, which are fundamentally different from languages I typically use. It took a bit to wrap my mind around initially, but most things were relatively intuitive, save for a few confusing CSS properties. Deployment was handled by Vercel, which abstracted much of those complications away from me, allowing me to focus on building the website itself."
      },
      {
        title: "What challenges did I face?",
        text: "I decided to dive right into this project without trying to learn fundamentals first. I've found that I learn very well with hands-on experience, and I wanted to have something presentable by the end of the summer. On top of designing the website, I had to learn 3 different languages at once, that being HTML, CSS, and JavaScript. I feel like React's concepts were very intuitive, making easily reusable components, and it definitely simplified the entire process. However, I think what gave me the most trouble was accounting for mobile users and accessibility settings. There's a delicate balance that needs to be struck between creative expression and making sure the website is accessible."
      },
      {
        title: "What's next?",
        text: "While this website definitely isn't perfect, I'm quite satisfied with the result, considering I've never done web development before. I don't think I'll be making another personal website anytime soon, but I'll keep this updated with any future projects and experience."
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
        link: 'https://github.com/CARPI-Bot/CARPI-Bot'
      },
      {
        name: 'GitHub (Organization)',
        link: 'https://github.com/CARPI-Bot'
      }
    ],
    date_start: 'December 2023',
    date_end: 'Present',
    tech_stack: [
      'Python',
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
        title: "What is CARPI Bot?",
        text: "CARPI Bot is a Discord bot designed for use by students at Rensselaer Polytechnic Institute. There, Discord is tightly integrated with the community, so the bot is a helpful resource on a platform that people are already on. It features stores of information like the academic calendar and course catalog, with more features and improvements currently being developed. This project is part of the Rensselaer Center for Open Source (RCOS) program, which focuses on the development of open source solutions for real world problems."
      },
      {
        title: "What did I contribute?",
        text: "I started contributing to this project in December 2023, creating a proof of concept for migrating existing data to a MySQL database. I officially joined the project in January 2024, converting already-developed features to use a database as a more efficient solution for data storage. Initially, my time was spent designing the database that would be the foundation for the entire bot from that point forward. After that, I took charge of development on the Course Search feature, which I rewrote from the ground up to use our database instead of scraping data from the unreliable catalog website. This feature was pushed to production in April 2024."
      },
      {
        title: "What did I learn?",
        text: "This is my first project that involved working with a team and using GitHub for version control. There was a lot to learn in addition to refreshing my Python knowledge from years ago. I was also working with many new libraries, so a lot of adapting was necessary to contribute to this project. Everything in our development process moved quickly, but I had a lot of support from other team members to keep me on track."
      },
      {
        title: "What challenges did I face?",
        text: "The biggest challenge in this project is managing many different interacting components, like interfacing with databases, implementing external libraries, and using Discord's API. We often had to decipher whether a problem was a bug from a library, or a mistake on our part. We've had to switch out libraries on a few occasions to solve issues like this."
      },
      {
        title: "What's next?",
        text: "I plan to continue working on this project in future semesters during my time at RPI. I would like to iterate more on the Course Search, as well as continue to manage the database to include future features of the bot. I look forward to seeing the potential for this bot in the community."
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
        text: "Super Golf is a 3D multiplayer golf game, made in the Unity engine. It features a set of 3 abilities that manipulate the trajectory of the ball while midair, which encourages creativity and strategic planning before each shot. Development time for the first release spanned 2 months, and the game was updated about a year later to fix bugs and add minor features."
      },
      {
        title: "What did I contribute?",
        text: "This was a solo development project, so besides writing scripts, I designed game mechanics and modeled 3D assets. The project would not have been completed without the endless resources from YouTube channels like Brackeys."
      },
      {
        title: "What did I learn?",
        text: "At the point of starting this project, I had already been working with Unity for a few years. However, I had only made small prototypes and proofs of concepts, which amounted to nothing substantial. This project challenged me to commit myself to a game and see it through to the end. Because of this, I learned a lot of concepts that only come up when polishing a game for release. For example, designing a user interface was new to me, and it was a challenge figuring out how to effectively communicate information to the player. Playtesting was integral to getting things right, and it made sure I wasn't completely insane when making the game. There were also challenges that arose from the type of game I was making. For example, multiplayer implementation, score management, and trajectory prediction had very unique problems to solve. The amount of work and attention to detail required gave me a newfound appreciation for the games I play in my free time."
      },
      {
        title: "What challenges did I face?",
        text: "Because this was a solo project, I had to figure out everything by myself. Any problem I had involved a lot of research and rubber ducks, but making it through to the end was very empowering, knowing I did it all without someone guiding me through it."
      },
      {
        title: "What's next?",
        text: "I've always had a passion for video games, so having made my own is a childhood dream come true. Nowadays when playing games, I'm able to appreciate cleverly designed mechanics, and I find it fun to try and reverse engineer them. I have plenty of ideas in mind for games I could make in the future, and I look forward to the day that I can execute on them. The satisfaction of seeing other people find fun in something I made is a unbeatable feeling that I can't wait to experience again."
      }
    ]
  },
]

export default projects;
