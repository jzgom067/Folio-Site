// modules
import DevIcon from '../common/DevIcon.js';
import SlideFadeIn from '../common/SlideFadeIn.js';

// styling
import styles from './TechStack.module.css';

var stack = [
  {
    name: "Languages",
    tech: [
      "Python",
      "C#",
      "Java",
      "SQL",
      "C",
      "C++",
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Dart",
      "PHP",
    ],
  },
  {
    name: "Libraries/Frameworks",
    tech: [
      "React",
      "Node.js",
      "Flutter",
      "FastAPI",
      "Django",
      "Next.js",
      "Tailwind CSS",
      "Drizzle ORM",
    ],
  },
  {
    name: "Tools/Software",
    tech: [
      "Visual Studio Code",
      "Unity",
      "Blender",
      "Looker",
      "Vercel",
      "Firebase",
      "Omni Analytics",
      "Supabase",
      "AWS"
    ]
  }
];

const TechStack = () => {
  return (
    <div className={styles.stack}>
      {stack.map((group, i) => (
        <>
          <div style={{ zIndex: `${stack.length - i}` }}>
            <SlideFadeIn>
              <h2 className={styles.groupName}>{group.name}</h2>
            </SlideFadeIn>
          </div>
          <div style={{ zIndex: `${stack.length - i}` }}>
            <SlideFadeIn>
              <div className={styles.icons}>
                {group.tech.map((tech, index) => (
                  <DevIcon tech={tech} size="4rem" key={index} />
                ))}
              </div>
            </SlideFadeIn>
          </div>
        </>
      ))}
    </div>
  );
}

export default TechStack;
