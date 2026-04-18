// All portfolio data extracted from Keshav Kalani's resume
// This makes it easy to update content without touching components

export const personalInfo = {
  name: "Keshav Kalani",
  location: "Pune, Maharashtra, India",
  phone: "+91 95189 86776",
  email: "kalani15keshav@gmail.com",
  linkedin: "https://linkedin.com/in/keshavkalani15",
  github: "https://github.com/keshavkalani15",
  resumeFile: "/KeshavKalaniResume.pdf",
  roles: ["Full-Stack Developer", "AI/ML Enthusiast", "Problem Solver"],
  summary:
    "Full-Stack Developer and AI/ML Enthusiast with strong foundations in Data Structures, Algorithms, and web technologies. Experienced in developing robust web applications and integrating Generative AI for process automation. Proven ability to deliver scalable solutions, demonstrated by a 9.73 CGPA. Actively expanding expertise in frontend frameworks alongside research in Deepfake Detection and Rockfall prediction.",
};

export const education = [
  {
    institution: "M.E.S. Wadia College of Engineering",
    degree: "B.E. in Computer Engineering",
    minor: "Minor in AI & ML",
    grade: "CGPA: 9.73/10 (till 5th sem)",
    location: "Pune",
    period: "2023 – Present",
  },
  {
    institution: "Janata Junior College",
    degree: "Higher Secondary Certificate (HSC)",
    minor: "Science",
    grade: "84.50%",
    location: "Beed",
    period: "2023",
  },
  {
    institution: "Takshila School",
    degree: "Secondary School Certificate (SSC)",
    minor: null,
    grade: "89.40%",
    location: "Ahilyanagar",
    period: "2021",
  },
];

export const experience = [
  {
    company: "Guruji World Technologies",
    role: "Software Development Intern",
    location: "Baner, Pune (On-site)",
    period: "Mar 2026 – Present",
    type: "3 Months Internship",
    points: [
      "Currently contributing to the development phase, focusing on multi-language localization using the i18n library.",
      "Expanding project scope to include mobile development using React Native.",
      "Integrating advanced AI capabilities by working with Large Language Models like Ollama.",
    ],
  },
];

export const skills = {
  Languages: ["C++", "Python", "JavaScript", "SQL"],
  "Web Technologies": ["React.js", "HTML5/CSS3", "Tailwind CSS", "Flask"],
  "AI & Data Science": [
    "TensorFlow",
    "PyTorch",
    "Scikit-learn",
    "Pandas",
    "NumPy",
    "OpenCV",
    "Matplotlib",
    "Seaborn",
  ],
  Databases: ["MySQL", "MongoDB"],
  "Developer Tools": [
    "Git",
    "Docker",
    "Google Gemini API",
    "VS Code",
    "Jupyter Notebook",
  ],
};

export const projects = [
  {
    title: "Academic Feedback System",
    tech: ["Flask", "MySQL", "SQLAlchemy"],
    date: "Mar 2026",
    github: null,
    points: [
      "Architected a 4-role RBAC system (Admin, HOD, Teacher, Student) with session-based route protection.",
      "Developed a token-based anonymous engine with dynamic forms and automated 7-day rolling SQL backups.",
      "Integrated PBKDF2-SHA256 hashing, global CSRF protection, and bulk CSV data processing.",
    ],
  },
  {
    title: "FileFly — P2P File Transfer",
    tech: ["JavaScript", "WebRTC", "Flask"],
    date: "Feb 2026",
    github: "https://github.com/keshavkalani15/FileFly",
    points: [
      "Engineered a login-free P2P file transfer web app using WebRTC and Flask for a premium file sharing experience.",
      "Implemented a 6-digit connection system enabling concurrent multi-file transfers via Google STUN servers.",
      "Designed a responsive UI to track real-time transfer speeds and progress, deployed using Gunicorn.",
    ],
  },
  {
    title: "Aapna Bank — Core Banking System",
    tech: ["Python", "Flask", "SQL", "HTML/CSS"],
    date: "Oct 2025",
    github: "https://github.com/keshavkalani15/Aapna-Bank",
    points: [
      "Architected a secure banking simulation handling core financial operations and role-based access (User/Manager).",
      "Designed a robust database schema normalized to 3NF to ensure data integrity for transactions and accounts.",
      "Created comprehensive dashboards for tracking transaction history, fund transfers, and user management.",
    ],
  },
  {
    title: "EduQuest — AI MCQ Generator",
    tech: ["Python", "Flask", "Google Gemini API"],
    date: "Nov 2024",
    github: "https://github.com/keshavkalani15/EduQuest-AI-Quiz-Generator",
    points: [
      "Developed an AI-powered assessment tool that generates customizable, subject-specific MCQs using Google Gemini.",
      "Reduced assessment creation time for educators by 85% while ensuring high-quality, context-aware questions.",
      "Integrated adaptive difficulty levels (Easy to Hard) and automated explanation generation for deeper learning.",
    ],
  },
  {
    title: "Sudoku Master",
    tech: ["HTML", "CSS", "JavaScript"],
    date: "2024",
    github: "https://github.com/keshavkalani15/sudoku-master",
    points: [
      "Developed an interactive Sudoku puzzle game built natively utilizing pure HTML, CSS, and JavaScript.",
      "Designed an intuitive puzzle grid with validation logic for standard Sudoku mathematical constraints.",
      "Implemented highly responsive styling for reliable DOM interactions across multiple platforms.",
    ],
  },
  {
    title: "Interactive Personal Portfolio",
    tech: ["React", "Three.js", "Framer Motion", "GSAP"],
    date: "Apr 2026",
    github: "https://github.com/keshavkalani15",
    points: [
      "Designed and developed a highly interactive, performance-optimized personal developer portfolio.",
      "Integrated advanced WebGL physics backgrounds, custom GSAP targeting cursors, and Framer Motion animations.",
      "Implemented modern glassmorphic UI principles and seamless page transitions for an immersive digital experience.",
    ],
  },
];

export const certifications = [
  { name: "Foundations of AI/ML", issuer: "Microsoft" },
  { name: "Python for Data Analytics", issuer: "DeepLearning.AI" },
  { name: "Data Analytics Foundations", issuer: "DeepLearning.AI" },
  { name: "Solutions Arch. Simulation", issuer: "AWS (Forage)" },
  { name: "Dist. Programming in Java", issuer: "Rice University" },
  { name: "Agile Project Management", issuer: "Google" },
  { name: "Fundamentals of PM", issuer: "Johns Hopkins" },
  { name: "Foundations of PM", issuer: "Google" },
];

export const achievements = [
  {
    icon: "🏆",
    title: "Class Rank 1",
    description:
      "Achieved Class Rank 1 (1st & 2nd Year) and a perfect 10 SGPA in Semester 1.",
  },
  {
    icon: "💻",
    title: "230+ LeetCode Problems",
    description:
      "Active in CodeForces and CodeChef global contests with 230+ problems solved.",
  },
  {
    icon: "🥇",
    title: "Codexpedition Winner",
    description:
      "Secured 1st Position at Codexpedition (MESWCoE) for algorithmic and technical excellence.",
  },
  {
    icon: "🔧",
    title: "Technical Portfolio",
    description:
      "Built a Sudoku Solver, Student Management System (REST APIs), and interactive JS applications.",
  },
];
