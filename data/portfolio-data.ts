export const personalInfo = {
  name: "Jaz Perez",
  title: "Software Developer",
  summary:
    "I am a passionate software developer dedicated to building clean, performant, and user-friendly web applications. Specializing in modern JavaScript frameworks like React and Next.js, I focus on writing maintainable, well-structured code that solves real-world problems and delivers exceptional user experiences.",
  email: "perezjazaelr.dev@gmail.com",
  github: "https://github.com/perezjazaelr-dev",
  linkedin: "https://www.linkedin.com/in/jazael-perez-7b3b4b27a/",
  resumeUrl: "/resume.pdf",
  education: "Rizal Technological University",
  // Avatar image path relative to public/ (add your file at public/avatar.jpg)
  avatar: "/avatar.jpg",
  // Optional: separate images for light and dark mode
  avatarLight: "/avatar-white.png",
  avatarDark: "/avatar-dark.png",
}


export const aboutMe = {
  description: `I’m a full-stack developer passionate about building clean, performant, and user-friendly web applications. I specialize in modern JavaScript frameworks and focus on writing maintainable code that solves real-world problems. Outside of coding, I enjoy learning new technologies, contributing to open source, and sharing knowledge with the developer community.`,
  values: ["Clean Code", "User-Centered Design", "Continuous Learning", "Collaboration"],
}

export const techStack = {
  frontend: [
    { name: "Next.js", icon: "▲" },
    { name: "React", icon: "⚛️" },
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
    { name: "Framer Motion", icon: "✨" },
  ],
  backend: [
    { name: "Node.js", icon: "🟢" },
    { name: "Python", icon: "🐍" },
    { name: "Laravel", icon: "🏗️" },
  ],
  tools: [
    { name: "Git", icon: "📦" },
    { name: "VS Code", icon: "💻" },
    { name: "Figma", icon: "🎨" },
    { name: "Vite", icon: "🚀" },
    { name: "TypeScript", icon: "🔷" },
  ],
  databases: [
    { name: "Supabase", icon: "⚡" },
    { name: "MySQL", icon: "🐬" },
  ],
}

export const projects = [
  {
    id: 1,
    title: "Feast 'n Delight",
    description:
      "An elegant catering and food ordering web application specializing in Filipino bilao packages. Features custom package selectors, automated order details generation, and a fully responsive shopping experience.",
    techStack: ["React", "HTML/CSS", "Tailwind CSS", "Netlify"],
    githubUrl: "https://github.com/perezjazaelr-dev/feast-n-delight",
    liveUrl: "https://feastndelightsbilaopackages.netlify.app/",
    imageUrl: "https://feastndelightsbilaopackages.netlify.app/FEAST.png",
  },
  {
    id: 2,
    title: "Talkhive",
    description:
      "A dynamic real-time social networking platform featuring user messaging feeds, interactive posts, instant search, and sleek navigation menus optimized for both desktop and mobile users.",
    techStack: ["React", "Node.js", "Express", "Socket.io", "Tailwind CSS"],
    githubUrl: "https://github.com/perezjazaelr-dev/talkhive",
    liveUrl: "https://illustrious-sfogliatella-2f450e.netlify.app/#/feed",
    imageUrl: "https://illustrious-sfogliatella-2f450e.netlify.app/assets/talkhive.png",
  },
]

export const experience = [
  {
    id: 1,
    type: "work",
    title: "Internship - Frontend Developer",
    organization: "Microgenesis Business Systems",
    location: "Mandaluyong City, Philippines",
    startDate: "September 2025",
    endDate: "December 2025",
    description:
      "Developed and maintained user interfaces for web applications using React and Next.js, ensuring responsiveness and cross-browser compatibility.",
  },
  {
    id: 2,
    type: "work",
    title: "Internship - IT - Graphic Designer",
    organization: "HousingInteractive Inc.",
    location: "Makati City, Philippines",
    startDate: "February 2025",
    endDate: "May 2025",
    description:
      "Designed marketing materials and performed web scraping to maintain accurate property listings.",
  },
  {
    id: 3,
    type: "education",
    title: "Bachelor of Science in information Technology",
    organization: "Rizal Technological University",
    location: "Mandaluyong City, Philippines",
    startDate: "2022",
    endDate: "2026",
    description: "Graduated with honors. Focused on software development, algorithms, and web development.",
  },
]