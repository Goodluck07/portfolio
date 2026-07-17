export const personalInfo = {
  name: "Goodluck Badewole",
  title: "Software Engineer",
  tagline: "I'm from Nigeria, finishing up a CS degree at Alabama A&M, and I spend most weekends playing pickup soccer when I'm not debugging something. Looking for a backend or infrastructure new-grad role for 2027, ideally somewhere I get to own a system end to end.",
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
  currentTerm: "Fall 2026",
  coursesInProgress: [
    "Senior Problem",
    "Linux With Applications Programming",
    "Theory of Algorithms",
    "Intro to Data Science",
    "Probability and Statistics",
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
      "Built ChessBlindspots, a chess analysis web app that detects blunders from Chess.com games and converts them into personalized drill puzzles, placing 2nd at the 2026 App Build & Pitch Competition",
      "Engineered a fully client-side Stockfish + Chess.com API pipeline evaluating chess positions in the browser for 30+ users, eliminating server infrastructure entirely at zero hosting cost",
      "Architected the full-stack application using React, TypeScript, and the Stockfish chess engine, with Claude AI for pattern categorization",
      "Built zero-friction UX with no login required and 30-second game analysis using browser localStorage for persistence",
    ],
    story: {
      overview: "At Innovation Portal, I built ChessBlindspots - a chess analysis tool that helps players identify and improve their tactical weaknesses. The project combined my passion for chess with cutting-edge AI technology, and placed 2nd at the 2026 App Build & Pitch Competition.",
      challenge: "Chess players often struggle to identify patterns in their mistakes. Traditional chess analysis tools show what went wrong in individual games, but they don't help players understand their recurring weaknesses or provide targeted practice.",
      approach: "I built a fully client-side solution that analyzes a player's game history from Chess.com, uses the Stockfish engine to identify tactical errors, and leverages Claude AI to categorize these mistakes into learnable patterns. The app then generates personalized puzzles that target the player's specific weaknesses, all running in the browser with zero server infrastructure.",
      impact: "The zero-friction UX (no login required, 30-second analysis) made improvement accessible to casual players, and the client-side architecture kept hosting costs at zero for 30+ users. The project placed 2nd at the 2026 App Build & Pitch Competition.",
      techDetails: [
        "React + TypeScript for a responsive, type-safe frontend",
        "Stockfish WASM for browser-based chess analysis",
        "Claude AI for intelligent pattern categorization",
        "Recharts/D3.js for visualizing weakness patterns over time",
        "Browser localStorage for persistence without requiring user accounts",
      ],
      learnings: "Cutting the login requirement was the single decision that mattered most for adoption. Every extra step before a user sees value costs testers. I also learned where to draw the line between what Stockfish should evaluate locally and what's worth sending to an LLM, since Claude API calls are the slowest and most expensive part of the pipeline.",
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
      learnings: "Storing the Slack thread ID on the CRD's status field instead of standing up a separate database was the right tradeoff for this system. It kept the thread state colocated with the resource it described and reused the controller's existing reconcile loop instead of adding a new one. Testing against Kind clusters before touching a real StackGroup also made it clear how much of the value here was in restraint: the feature only had to do one thing (thread related messages together) and do it reliably.",
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
      learnings: "The NPC behavior system only started feeling right after I decoupled it from the resource economy. Earlier versions had NPCs react directly to raw resource counts, which made their behavior twitchy and hard to tune. Routing decisions through a smoothed state instead gave mentors something they could actually give feedback on, instead of just noise.",
    },
  },
];

export const projects = [
  {
    title: "STAK",
    slug: "stak",
    description: "Co-founded and built a full-stack fintech web app with a real-time market data feed and a swipeable stock discovery interface, growing to 127 beta users since launch.",
    techStack: ["TypeScript", "React", "Firebase", "Node.js", "Gemini API"],
    highlights: [
      "Built the swipeable stock discovery interface and real-time market data feed from scratch as co-founder and lead full-stack developer",
      "Integrated the Gemini API to generate structured AI trend-insight cards (title, description, sentiment) with server-side response caching and a stale-cache fallback on timeout, cutting LLM API costs and keeping the feed responsive even when Gemini is slow",
      "Grew to 127 beta users since a January 2026 launch",
    ],
    github: "",
    liveDemo: "https://thestak.org",
    image: "/images/projects/stak.png",
  },
  {
    title: "AAMU Course Management App",
    slug: "aamu-course-management",
    description: "Led development of a student course registration planning tool for GDG @ AAMU, addressing the university's limited advisor-to-student ratio by letting students independently build and visualize semester schedules before advising appointments.",
    techStack: ["React", "Next.js", "Tailwind CSS", "Radix UI"],
    highlights: [
      "Led development of the scheduling tool, scoping the feature set around the actual bottleneck: students only get a few minutes with an advisor and often show up without a plan",
      "Built the schedule visualization and course-selection flow using Radix UI primitives for accessible, keyboard-navigable components",
    ],
    github: "",
    liveDemo: "",
    image: "/images/projects/aamu-course-management.png",
  },
  {
    title: "GDG Opportunities Hub",
    slug: "gdg-opportunities-hub",
    description: "Collaborated with a team of 8 developers to build and deploy a full-stack web application helping 100+ students discover and track internships, scholarships, and job opportunities with real-time updates and calendar integration.",
    techStack: ["TypeScript", "React", "Next.js", "Supabase", "TanStack Query"],
    highlights: [
      "Led frontend development of applications tracking features using TanStack Query, reducing data fetching redundancy by 40%",
      "Developed dynamic opportunities pages with real-time status updates, and calendar integration",
      "Integrated frontend with Supabase APIs for authentication, CRUD operations, and role-based access control",
    ],
    github: "https://github.com/GDG-AAMU/GDG_Opp_hub",
    liveDemo: "https://gdg-opp-hub.vercel.app/",
    image: "/images/projects/gdg-hub.png",
  },
  {
    title: "Pantry Manager Web-App",
    slug: "pantry-manager",
    description: "Developed and deployed a dynamic pantry management web application using React, Firebase, and Next.js, enabling users to efficiently track and manage food items with real-time synchronization.",
    techStack: ["React", "Firebase", "Next.js"],
    highlights: [
      "Enhanced user experience by implementing persistent authentication and real-time data updates, resulting in a 30% increase in user retention and 10% increase in food management",
    ],
    github: "https://github.com/Goodluck07/GBPantryManager",
    liveDemo: "https://gb-pantry-manager.vercel.app/",
    image: "/images/projects/pantry-manager.png",
  },
  {
    title: "Expense Tracker App",
    slug: "expense-tracker",
    description: "Developed a comprehensive expense tracker application using Python and Tkinter, enabling users to efficiently log, categorize, and visualize their financial data with interactive charts.",
    techStack: ["Python", "Tkinter", "Matplotlib", "CSV"],
    highlights: [
      "Implemented robust features such as expense plotting with Matplotlib and CSV-based data management, ensuring seamless data storage and retrieval",
      "Improved finance management for users, with an increase in user satisfaction and a 30% reduction in time spent on financial tracking",
    ],
    github: "https://github.com/Goodluck07/ExpenseTracker",
    liveDemo: "",
    image: "/images/projects/expense-tracker.png",
  },
  {
    title: "Sales Insights for Consumer Business",
    slug: "sales-insights",
    description: "Built a sales insight solution that helps bring data-informed decision-making using Python connected with MySQL to perform exploratory data analysis and visualization with PowerBI.",
    techStack: ["Python", "MySQL", "NumPy", "Pandas", "PowerBI"],
    highlights: [
      "Data Cleaning and transformation was done using NumPy and Pandas. For data visualization, PowerBI was used",
      "Enabled data-informed decision-making, resulting in a 20% increase in sales efficiency and a 15% reduction in data processing time",
    ],
    github: "https://github.com/Goodluck07/Sales-Insights-for-Consumer-Business",
    liveDemo: "",
    image: "/images/projects/sales-insights.png",
  },
  {
    title: "Chatbot with Website Integration",
    slug: "chatbot-website",
    description: "Engineered an intelligent chatbot using Python and Rasa NLU framework, integrated into a responsive website using Flask for seamless user interaction and support.",
    techStack: ["Python", "Rasa", "Flask"],
    highlights: [
      "Improved user interaction by 40%, reducing response time by 30% and increasing user engagement by 25%",
    ],
    github: "https://github.com/Goodluck07/LuckyChatAi",
    liveDemo: "https://lucky-chat-ai.vercel.app/",
    image: "/images/projects/chatbot.png",
  },
  {
    title: "INSPIRE Research Program",
    slug: "inspire-research",
    description: "Utilized MATLAB codes and the theory of Dynamic Mode Decomposition (DMD) to analyze and interpret data related to hurricane formation patterns for predictive modeling.",
    techStack: ["MATLAB", "DMD", "Data Analysis"],
    highlights: [
      "Contributed to predictive modeling efforts, enhancing forecast accuracy by 15% and providing insights into weather patterns",
    ],
    github: "",
    liveDemo: "",
    image: "/images/projects/inspire-research.jpg",
  },
  {
    title: "Flashcard Web-App",
    slug: "flashcard-app",
    description: "Developed and deployed a flashcard management web application using React, Firebase, and Next.js with OpenAI integration, allowing users to create, save, and search flashcards instantly.",
    techStack: ["React", "Firebase", "Next.js", "OpenAI"],
    highlights: [
      "Improved user engagement by incorporating real-time data synchronization and personalized authentication, leading to enhanced learning experiences and streamlined flashcard organization",
    ],
    github: "https://github.com/Goodluck07/GVTCrads",
    liveDemo: "https://gvtcards.vercel.app/",
    image: "/images/projects/flashcard-app.png",
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
    "Node.js",
    "Flask",
    "TensorFlow",
    "LangChain",
    "TanStack Query",
    "Radix UI",
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
    "Gemini API",
  ],
};

export const leadership = [
  {
    role: "Tech Lead",
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
    period: "September 2025",
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

export const conferences = [
  {
    name: "AfroTech",
    year: "2026",
    period: "November 2026",
    status: "upcoming" as const,
    description: "Attending AfroTech this November to connect with Black engineers, founders, and recruiters from across the industry.",
  },
];

export const competitions = [
  {
    name: "Sandia National Labs Tracer Fire CTF",
    year: "2025",
    period: "September 2025",
    placement: "1st Place",
    teamSize: 5,
    description: "Led a 5-person team to victory in a competitive cybersecurity capture the flag competition hosted by Sandia National Labs.",
    highlights: [
      "Solved real-world cyberattack challenges involving reverse engineering, cryptography, and forensics",
      "Led team strategy and task delegation across different challenge categories",
      "Investigated and presented findings, providing a detailed debrief to the SNL team and audience",
    ],
  },
];

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Leadership", href: "#leadership" },
  { name: "Beyond", href: "#beyond" },
  { name: "Contact", href: "#contact" },
];
