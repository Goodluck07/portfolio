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
    company: "Innovation Portal",
    slug: "innovation-portal",
    role: "Software Engineer Intern – Full Stack",
    location: "Remote",
    period: "Jan 2026 – Apr 2026",
    logo: "/images/innovation-portal-logo.png",
    achievements: [
      "Building ChessBlindspots, an AI-powered chess coach that analyzes chess.com/Lichess games to identify tactical weaknesses and generate personalized practice puzzles",
      "Architecting full-stack application using React, TypeScript, Stockfish chess engine, and Claude AI for pattern categorization",
      "Implementing zero-friction UX with no login required and 30-second game analysis using browser localStorage for persistence",
      "Developing data visualization features using Recharts/D3.js to display tactical weakness patterns and improvement metrics",
    ],
    story: {
      overview: "At Innovation Portal, I'm building ChessBlindspots - an AI-powered chess coach that helps players identify and improve their tactical weaknesses. This project combines my passion for chess with cutting-edge AI technology.",
      challenge: "Chess players often struggle to identify patterns in their mistakes. Traditional chess analysis tools show what went wrong in individual games, but they don't help players understand their recurring weaknesses or provide targeted practice.",
      approach: "I'm architecting a full-stack solution that analyzes a player's game history from chess.com or Lichess, uses the Stockfish engine to identify tactical errors, and leverages Claude AI to categorize these mistakes into learnable patterns. The app then generates personalized puzzles that target the player's specific weaknesses.",
      impact: "The zero-friction UX (no login required, 30-second analysis) makes improvement accessible to casual players. Early testing shows players can identify their top 3 tactical weaknesses within minutes of using the tool.",
      techDetails: [
        "React + TypeScript for a responsive, type-safe frontend",
        "Stockfish WASM for browser-based chess analysis",
        "Claude AI for intelligent pattern categorization",
        "Recharts/D3.js for visualizing weakness patterns over time",
        "Browser localStorage for persistence without requiring user accounts",
      ],
      learnings: "This internship taught me the importance of user-centric design. By removing friction (no login, fast analysis), we dramatically increased user engagement. I also deepened my understanding of integrating AI models into production applications.",
    },
  },
  {
    company: "Splunk (Cisco)",
    slug: "splunk",
    role: "Software Engineer Intern – Backend/Infrastructure",
    location: "Boulder, CO",
    period: "May 2025 – Aug 2025",
    logo: "/images/splunk-logo.png",
    achievements: [
      "Led implementation of Slack threading in the Release Train Engine (RTE) team, reducing daily slack message volume by 63% during stack group/cohorts maintenance windows",
      "Enhanced Kubernetes CRDs and Go-based controllers to store Slack thread IDs in resource status field, enabling easy message tracking",
      "Developed automatic tagging of TechOps and on-call Release Train Engineers in critical slack messages, accelerating identification of faulty stacks by 78% during cohorts upgrade operations",
      "Built and tested threading features locally using Docker and Kind clusters, simulating production-like environments for debugging",
    ],
    story: {
      overview: "At Splunk (Cisco), I worked on the Release Train Engine (RTE) team, improving the infrastructure that manages Splunk Cloud deployments. My main project focused on enhancing Slack communication during critical maintenance operations.",
      challenge: "During stack group and cohort maintenance windows, the RTE system generated hundreds of Slack messages daily. This created noise that made it difficult for engineers to track important updates and identify issues quickly. Critical alerts were getting lost in the flood of messages.",
      approach: "I led the implementation of Slack threading functionality. This required enhancing Kubernetes Custom Resource Definitions (CRDs) to store Slack thread IDs in resource status fields, and modifying Go-based controllers to use these threads for related messages. I also implemented automatic tagging of TechOps and on-call engineers for critical alerts.",
      impact: "The threading implementation reduced daily Slack message volume by 63%, making channels significantly more manageable. The automatic tagging feature accelerated identification of faulty stacks by 78%, as the right people were immediately notified of issues.",
      techDetails: [
        "Go for Kubernetes controller development",
        "Kubernetes CRDs for custom resource management",
        "Slack API integration for threading and mentions",
        "Docker and Kind clusters for local testing",
        "CI/CD pipelines for deployment automation",
      ],
      learnings: "This internship gave me deep experience with Kubernetes internals and production infrastructure at scale. I learned how small improvements in communication systems can have massive impacts on engineering productivity. Working on infrastructure used by thousands of engineers taught me the importance of thorough testing and gradual rollouts.",
    },
  },
  {
    company: "Activision",
    slug: "activision",
    role: "Game Development Intern",
    location: "Los Angeles, CA",
    period: "May 2024 – July 2024",
    logo: "/images/activision-logo.png",
    achievements: [
      "Selected for competitive game development program alongside 20+ industry professionals from major studios including Activision and Riot Games",
      "Developed a city-building simulation game using Unity and C#, implementing core game systems including resource management, and AI-driven NPC behavior",
      "Designed and prototyped gameplay mechanics focused on community development and cultural storytelling, achieving 85% positive feedback from peer tester and industry mentors",
    ],
    story: {
      overview: "I was selected for Activision's competitive game development program, working alongside 20+ industry professionals from major studios including Activision and Riot Games. This was an incredible opportunity to learn game development from the best in the industry.",
      challenge: "The program challenged us to design and build a complete game from scratch in a limited timeframe. I chose to create a city-building simulation that could tell meaningful stories about community development while being engaging to play.",
      approach: "Using Unity and C#, I developed core game systems including resource management, building placement, and AI-driven NPC behavior. The NPCs would interact with the city based on the resources available and buildings constructed, creating emergent storytelling moments. I focused on cultural storytelling elements that highlighted community growth and cooperation.",
      impact: "The game received 85% positive feedback from peer testers and industry mentors. The mentors particularly praised the NPC behavior system and the way the game mechanics reinforced the themes of community building.",
      techDetails: [
        "Unity game engine for development",
        "C# for game logic and systems",
        "AI behavior trees for NPC decision-making",
        "Custom resource management system",
        "Procedural event generation for storytelling",
      ],
      learnings: "This program transformed my understanding of game development. I learned that great games aren't just about fun mechanics - they're about creating experiences that resonate with players. Working with industry professionals taught me professional development practices and the importance of iteration based on playtesting feedback.",
    },
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
    github: "https://github.com/GDG-AAMU/GDG_Opp_hub",
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
    title: "Pantry Manager Web-App",
    description: "Developed and deployed a dynamic pantry management web application using React, Firebase, and Next.js, enabling users to efficiently track and manage food items",
    techStack: ["React", "Firebase", "Next.js"],
    highlights: [
      "Enhanced user experience by implementing persistent authentication and real-time data updates, resulting in a 30% increase in user retention and 10% increase in food management",
    ],
    github: "https://github.com/Goodluck07/GBPantryManager",
  },
  {
    title: "Expense Tracker App",
    description: "Developed a comprehensive expense tracker application using Python and Tkinter, enabling users to efficiently log, categorize, and visualize their financial data",
    techStack: ["Python", "Tkinter", "Matplotlib", "CSV"],
    highlights: [
      "Implemented robust features such as expense plotting with Matplotlib and CSV-based data management, ensuring seamless data storage and retrieval",
      "Improved finance management for users, with an increase in user satisfaction and a 30% reduction in time spent on financial tracking",
    ],
    github: "https://github.com/Goodluck07/ExpenseTracker",
  },
  {
    title: "Sales Insights for Consumer Business",
    description: "Built a sales insight solution that helps bring data informed decision-making using Python that connected with MySQL to get required sales data to perform exploratory data analysis",
    techStack: ["Python", "MySQL", "NumPy", "Pandas", "PowerBI"],
    highlights: [
      "Data Cleaning and transformation was done using NumPy and Pandas. For data visualization, PowerBI was used",
      "Enabled data-informed decision-making, resulting in a 20% increase in sales efficiency and a 15% reduction in data processing time",
    ],
    github: "",
  },
  {
    title: "Chatbot with Website Integration",
    description: "Engineered a chatbot using Python and Rasa and integrated it into a website using Flask",
    techStack: ["Python", "Rasa", "Flask"],
    highlights: [
      "Improved user interaction by 40%, reducing response time by 30% and increasing user engagement by 25%",
    ],
    github: "https://github.com/Goodluck07/LuckyChatAi",
  },
  {
    title: "INSPIRE Research Program",
    description: "Utilized MATLAB codes and the theory of DMD to analyze and interpret data related to hurricane formation patterns",
    techStack: ["MATLAB", "DMD", "Data Analysis"],
    highlights: [
      "Contributed to predictive modeling efforts, enhancing forecast accuracy by 15% and providing insights into weather patterns",
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
    github: "https://github.com/Goodluck07/GVTCrads",
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
    "MATLAB",
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
    "Rasa",
    "Tkinter",
    "Matplotlib",
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
    "MySQL",
    "Linux",
    "CI/CD",
    "Supabase",
    "Grafana",
    "PowerBI",
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
