export interface ProjectProps {
  title: string;
  description: string;
  imageUrl?: string;
  technologies: string[];
  projectUrl?: string;
  githubUrl?: string;
}

export const projects: ProjectProps[] = [
  {
    title: "Scream Room",
    description:
      "A real-time social platform where users can post messages (screams). Features include user authentication, real-time updates using Socket.io.",
    imageUrl: "/images/screamroom.png",
    projectUrl: "https://screamroom.netlify.app",
    githubUrl: "https://github.com/sssylvasss/scream",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Socket.io",
      "JWT",
      "Express",
    ],
  },
  {
    title: "Citizen Ship",
    description:
      "A gamified web application where users can play various games to collect badges, exchange them for coins, and increase their citizenship ranking. Features include interactive games, a virtual shop, investment system, and energy management.",
    imageUrl: "/images/citizenship.png",
    projectUrl: "https://citizenship25.netlify.app",
    githubUrl: "https://github.com/sssylvasss/citizenship25",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Mongoose", "JWT"],
  },
  // Add more projects as needed
];
