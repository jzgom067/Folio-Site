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
      "MySQL",
      "C",
      "C++",
      "Looker/LookML",
      "HTML",
      "CSS",
      "JavaScript",
      "Dart",
    ],
  },
  {
    name: "Libraries/Frameworks",
    tech: [
      "Alpine.js",
      "Tailwind CSS",
      "React",
      "Node.js",
      "Flutter",
      "FastAPI",
    ],
  },
  {
    name: "Tools/Software",
    tech: [
      "Visual Studio Code",
      "Unity",
      "Blender",
      "Firebase",
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
