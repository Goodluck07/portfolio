export const personalInfo = {
  name: "Goodluck Badewole",
  title: "Software Engineer",
  tagline: "Building scalable systems and impactful software solutions",
  location: "Huntsville, AL",
  email: "badewolegoodluck55@gmail.com",
  phone: "(256) 441-7555",
  linkedin: "https://linkedin.com/in/goodluck-badewole",
  github: "https://github.com/Goodluck07",
};

export const education = {
  school: "Alabama Agricultural and Mechanical University (AAMU)",
  degree: "Bachelor of Science in Computer Science",
  location: "Huntsville, AL",
  expectedGraduation: "May 2027",
  gpa: "4.0/4.0",
  honors: [
    "Presidential Scholar",
    "Honors Program",
    "AAMU Presidential Scholarship",
    "Whataburger Feeding Student Success Scholarship",
  ],
};

export const workExperience = [
  {
    company: "Splunk (Cisco)",
    role: "Software Engineer Intern – Backend/Infrastructure",
    location: "Boulder, CO",
    period: "May 2025 – Aug 2025",
    achievements: [
      "Led implementation of Slack threading in the Release Train Engine (RTE) team, reducing daily slack message volume by 63% during stack group/cohorts maintenance windows",
      "Enhanced Kubernetes CRDs and Go-based controllers to store Slack thread IDs in resource status field, enabling easy message tracking",
      "Developed automatic tagging of TechOps and on-call Release Train Engineers in critical slack messages, accelerating identification of faulty stacks by 78% during cohorts upgrade operations",
      "Built and tested threading features locally using Docker and Kind clusters, simulating production-like environments for debugging",
    ],
  },
  {
    company: "Activision",
    role: "Game Development Intern",
    location: "Los Angeles, CA",
    period: "May 2024 – July 2024",
    achievements: [
      "Selected for competitive game development program alongside 20+ industry professionals from major studios including Activision and Riot Games",
      "Developed a city-building simulation game using Unity and C#, implementing core game systems including resource management, and AI-driven NPC behavior",
      "Designed and prototyped gameplay mechanics focused on community development and cultural storytelling, achieving 85% positive feedback from peer tester and industry mentors",
    ],
  },
];

export const projects = [
  {
    title: "GDG Opportunities Hub",
    description: "Collaborated with a team of 8 developers to build and deploy a full-stack web application helping 100+ students discover and track internships, scholarships, and job",
    techStack: ["TypeScript", "React", "Next.js", "Supabase", "TanStack Query"],
    highlights: [
      "Led frontend development of applications tracking features using TanStack Query, reducing data fetching redundancy by 40%",
      "Developed dynamic opportunities pages with real-time status updates, and calendar integration",
      "Integrated frontend with Supabase APIs for authentication, CRUD operations, and role-based access control",
    ],
    github: "",
  },
  {
    title: "Personal AI Knowledge Assistant",
    description: "Built a full-stack RAG application enabling users to upload, index, and semantically search through personal documents using vector embeddings and LLM integration",
    techStack: [
      "Python",
      "TypeScript",
      "React",
      "AWS Bedrock",
      "Pinecone",
      "LangChain",
    ],
    highlights: [
      "Implemented document processing pipeline handling 1000+ PDFs, text files, and markdown documents with automatic chunking, embedding generation using AWS Bedrock, and storage in Pinecone vector database",
      "Developed conversational interface using LangChain for context-aware responses, achieving sub-second query latency and 90%+ answer relevance through optimized retrieval mechanisms",
    ],
    github: "",
  },
  {
    title: "Distributed Task Scheduler",
    description: "Architected and deployed a fault-tolerant distributed job queue system using Go microservices, Redis for job persistence, and Kubernetes for container orchestration, handling 10,000+ tasks per minute",
    techStack: [
      "Go",
      "Python",
      "Docker",
      "Kubernetes",
      "Redis",
      "PostgreSQL",
    ],
    highlights: [
      "Implemented priority-based scheduling with automatic retry logic, dead letter queues, and exponential backoffs, achieving 87% task completion rate and reducing failed job recovery time by 85%",
      "Built monitoring dashboard with real time metrics using Prometheus and Grafana, providing visibility into queue depth, worker health and task latency across distributed workers",
    ],
    github: "",
  },
  {
    title: "Flashcard Web-App",
    description: "Developed and deployed a flashcard management web application using React, Firebase, and Next.js, allowing users to create, save, and search flashcards instantly",
    techStack: ["React", "Firebase", "Next.js", "OpenAI"],
    highlights: [
      "Improved user engagement by incorporating real-time data synchronization and personalized authentication, leading to enhanced learning experiences and streamlined flashcard organization",
    ],
    github: "",
  },
];

export const skills = {
  languages: [
    "Python",
    "Go",
    "C++",
    "C#",
    "JavaScript",
    "TypeScript",
    "SQL",
    "HTML/CSS",
  ],
  frameworks: [
    "React",
    "Next.js",
    "Flask",
    "LangChain",
    "TanStack Query",
    "Pandas",
    "NumPy",
    "Unity",
  ],
  tools: [
    "Docker",
    "Kubernetes",
    "Git",
    "AWS Bedrock",
    "Firebase",
    "Pinecone",
    "Redis",
    "PostgreSQL",
    "Linux",
    "CI/CD",
    "Supabase",
    "Grafana",
  ],
};

export const leadership = [
  {
    role: "Secretary & Assistant Tech Lead",
    organization: "Google Developer Group (GDG) AAMU",
    period: "2023 – Present",
    achievements: [
      "Co-host 15+ technical sessions focused on interview preparation and algorithm problem solving using platforms like LeetCode, reaching 100+ students",
      "Coordinate event logistics and grow student participation in GDG activities, increasing event attendance by 40% through strategic outreach and engagement",
    ],
  },
  {
    role: "Team Lead",
    organization: "Sandia National Labs Tracer Fire CTF Hackathon",
    period: "2025",
    achievements: [
      "Led a 5-person team to 1st place in a competitive cybersecurity capture the flag competition",
      "Solved real-world cyberattack challenges involving reverse engineering, cryptography, and forensics",
      "Investigated and presented findings, providing a detailed debrief to the SNL team and audience",
    ],
  },
];

export const affiliations = [
  "ColorStack",
  "CodePath",
  "HBCU 20x20 (2023 cohort)",
  "Project Destined",
];

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Leadership", href: "#leadership" },
  { name: "Contact", href: "#contact" },
];
