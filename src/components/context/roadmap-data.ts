export interface RoadmapStep {
  title: {
    id: string;
    en: string;
  };
  content: {
    id: string;
    en: string;
  };
  skills: string[];
  duration: string;
}

export interface TechField {
  id: string;
  title: {
    id: string;
    en: string;
  };
  description: {
    id: string;
    en: string;
  };
  icon: string;
  color: string;
  steps: RoadmapStep[];
}

export const techFields: TechField[] = [
  {
    id: "web-development",
    title: {
      id: "Pengembangan Web",
      en: "Web Development",
    },
    description: {
      id: "Pelajari cara membangun website dan aplikasi web modern dengan teknologi terkini",
      en: "Learn how to build modern websites and web applications with cutting-edge technologies",
    },
    icon: "🌐",
    color: "from-blue-500 to-cyan-500",
    steps: [
      {
        title: {
          id: "Dasar-dasar Web",
          en: "Web Fundamentals",
        },
        content: {
          id: "Mulai dengan mempelajari HTML, CSS, dan JavaScript sebagai fondasi pengembangan web. Pahami struktur dokumen, styling, dan interaktivitas dasar.",
          en: "Start by learning HTML, CSS, and JavaScript as the foundation of web development. Understand document structure, styling, and basic interactivity.",
        },
        skills: [
          "HTML5",
          "CSS3",
          "JavaScript ES6+",
          "DOM Manipulation",
          "Responsive Design",
        ],
        duration: "2-3 bulan",
      },
      {
        title: {
          id: "Framework Frontend",
          en: "Frontend Frameworks",
        },
        content: {
          id: "Pelajari framework modern seperti React, Vue, atau Angular untuk membangun aplikasi web yang kompleks dan interaktif.",
          en: "Learn modern frameworks like React, Vue, or Angular to build complex and interactive web applications.",
        },
        skills: [
          "React/Vue/Angular",
          "Component Architecture",
          "State Management",
          "Routing",
        ],
        duration: "3-4 bulan",
      },
      {
        title: {
          id: "Backend Development",
          en: "Backend Development",
        },
        content: {
          id: "Kuasai pengembangan server-side dengan Node.js, Express, dan database untuk membuat aplikasi full-stack.",
          en: "Master server-side development with Node.js, Express, and databases to create full-stack applications.",
        },
        skills: [
          "Node.js",
          "Express.js",
          "MongoDB/PostgreSQL",
          "RESTful APIs",
          "Authentication",
        ],
        duration: "4-5 bulan",
      },
      {
        title: {
          id: "Tools & Deployment",
          en: "Tools & Deployment",
        },
        content: {
          id: "Pelajari tools pengembangan modern dan cara deploy aplikasi ke production dengan berbagai platform cloud.",
          en: "Learn modern development tools and how to deploy applications to production using various cloud platforms.",
        },
        skills: [
          "Git/GitHub",
          "Webpack/Vite",
          "Docker",
          "AWS/Vercel/Netlify",
          "CI/CD",
        ],
        duration: "2-3 bulan",
      },
    ],
  },
  {
    id: "mobile-development",
    title: {
      id: "Pengembangan Mobile",
      en: "Mobile Development",
    },
    description: {
      id: "Bangun aplikasi mobile native dan cross-platform untuk iOS dan Android",
      en: "Build native and cross-platform mobile applications for iOS and Android",
    },
    icon: "📱",
    color: "from-green-500 to-emerald-500",
    steps: [
      {
        title: {
          id: "Dasar Mobile Development",
          en: "Mobile Development Basics",
        },
        content: {
          id: "Pahami konsep dasar pengembangan mobile, UI/UX patterns, dan perbedaan platform iOS dan Android.",
          en: "Understand basic mobile development concepts, UI/UX patterns, and differences between iOS and Android platforms.",
        },
        skills: [
          "Mobile UI/UX",
          "Platform Guidelines",
          "App Architecture",
          "Mobile Design Patterns",
        ],
        duration: "1-2 bulan",
      },
      {
        title: {
          id: "Cross-Platform Framework",
          en: "Cross-Platform Framework",
        },
        content: {
          id: "Pelajari React Native atau Flutter untuk mengembangkan aplikasi yang berjalan di kedua platform dengan satu codebase.",
          en: "Learn React Native or Flutter to develop applications that run on both platforms with a single codebase.",
        },
        skills: [
          "React Native/Flutter",
          "Navigation",
          "State Management",
          "Native Modules",
        ],
        duration: "4-5 bulan",
      },
      {
        title: {
          id: "Native Development",
          en: "Native Development",
        },
        content: {
          id: "Dalami pengembangan native dengan Swift untuk iOS dan Kotlin untuk Android untuk performa optimal.",
          en: "Dive into native development with Swift for iOS and Kotlin for Android for optimal performance.",
        },
        skills: [
          "Swift/Kotlin",
          "Xcode/Android Studio",
          "Platform APIs",
          "Performance Optimization",
        ],
        duration: "6-8 bulan",
      },
      {
        title: {
          id: "Advanced Mobile",
          en: "Advanced Mobile",
        },
        content: {
          id: "Pelajari topik lanjutan seperti push notifications, offline storage, testing, dan deployment ke app stores.",
          en: "Learn advanced topics like push notifications, offline storage, testing, and deployment to app stores.",
        },
        skills: [
          "Push Notifications",
          "Offline Storage",
          "Testing",
          "App Store Deployment",
          "Analytics",
        ],
        duration: "3-4 bulan",
      },
    ],
  },
  {
    id: "data-science",
    title: {
      id: "Data Science",
      en: "Data Science",
    },
    description: {
      id: "Analisis data, machine learning, dan ekstraksi insights dari big data",
      en: "Data analysis, machine learning, and extracting insights from big data",
    },
    icon: "📊",
    color: "from-purple-500 to-pink-500",
    steps: [
      {
        title: {
          id: "Dasar Matematika & Statistik",
          en: "Math & Statistics Fundamentals",
        },
        content: {
          id: "Kuasai dasar-dasar matematika, statistik, dan probabilitas yang diperlukan untuk data science.",
          en: "Master the fundamentals of mathematics, statistics, and probability required for data science.",
        },
        skills: [
          "Statistics",
          "Probability",
          "Linear Algebra",
          "Calculus",
          "Descriptive Analytics",
        ],
        duration: "2-3 bulan",
      },
      {
        title: {
          id: "Python & Data Tools",
          en: "Python & Data Tools",
        },
        content: {
          id: "Pelajari Python dan library essential seperti Pandas, NumPy, dan Matplotlib untuk manipulasi dan visualisasi data.",
          en: "Learn Python and essential libraries like Pandas, NumPy, and Matplotlib for data manipulation and visualization.",
        },
        skills: [
          "Python",
          "Pandas",
          "NumPy",
          "Matplotlib",
          "Seaborn",
          "Jupyter Notebooks",
        ],
        duration: "3-4 bulan",
      },
      {
        title: {
          id: "Machine Learning",
          en: "Machine Learning",
        },
        content: {
          id: "Dalami algoritma machine learning, dari supervised hingga unsupervised learning menggunakan Scikit-learn.",
          en: "Dive into machine learning algorithms, from supervised to unsupervised learning using Scikit-learn.",
        },
        skills: [
          "Scikit-learn",
          "Supervised Learning",
          "Unsupervised Learning",
          "Model Evaluation",
          "Feature Engineering",
        ],
        duration: "4-6 bulan",
      },
      {
        title: {
          id: "Advanced Analytics",
          en: "Advanced Analytics",
        },
        content: {
          id: "Pelajari deep learning, big data processing, dan deployment model ML ke production environment.",
          en: "Learn deep learning, big data processing, and deploying ML models to production environments.",
        },
        skills: [
          "TensorFlow/PyTorch",
          "Deep Learning",
          "Big Data (Spark)",
          "MLOps",
          "Cloud ML Services",
        ],
        duration: "5-7 bulan",
      },
    ],
  },
  {
    id: "devops",
    title: {
      id: "DevOps",
      en: "DevOps",
    },
    description: {
      id: "Otomatisasi deployment, infrastructure as code, dan continuous integration",
      en: "Deployment automation, infrastructure as code, and continuous integration",
    },
    icon: "⚙️",
    color: "from-orange-500 to-red-500",
    steps: [
      {
        title: {
          id: "Linux & Scripting",
          en: "Linux & Scripting",
        },
        content: {
          id: "Kuasai sistem operasi Linux, command line, dan scripting untuk otomatisasi tugas-tugas sistem.",
          en: "Master Linux operating system, command line, and scripting for automating system tasks.",
        },
        skills: [
          "Linux Administration",
          "Bash Scripting",
          "System Monitoring",
          "Network Basics",
        ],
        duration: "2-3 bulan",
      },
      {
        title: {
          id: "Containerization",
          en: "Containerization",
        },
        content: {
          id: "Pelajari Docker dan Kubernetes untuk containerization dan orchestration aplikasi modern.",
          en: "Learn Docker and Kubernetes for containerization and orchestration of modern applications.",
        },
        skills: [
          "Docker",
          "Kubernetes",
          "Container Orchestration",
          "Microservices",
        ],
        duration: "3-4 bulan",
      },
      {
        title: {
          id: "CI/CD & Automation",
          en: "CI/CD & Automation",
        },
        content: {
          id: "Implementasikan continuous integration dan deployment dengan tools seperti Jenkins, GitLab CI, atau GitHub Actions.",
          en: "Implement continuous integration and deployment with tools like Jenkins, GitLab CI, or GitHub Actions.",
        },
        skills: [
          "Jenkins",
          "GitLab CI",
          "GitHub Actions",
          "Automated Testing",
          "Pipeline Design",
        ],
        duration: "3-4 bulan",
      },
      {
        title: {
          id: "Cloud & Infrastructure",
          en: "Cloud & Infrastructure",
        },
        content: {
          id: "Kuasai cloud platforms dan infrastructure as code untuk mengelola infrastruktur secara programatis.",
          en: "Master cloud platforms and infrastructure as code to manage infrastructure programmatically.",
        },
        skills: [
          "AWS/Azure/GCP",
          "Terraform",
          "Ansible",
          "Infrastructure as Code",
          "Monitoring & Logging",
        ],
        duration: "4-5 bulan",
      },
    ],
  },
  {
    id: "ui-ux-design",
    title: {
      id: "UI/UX Design",
      en: "UI/UX Design",
    },
    description: {
      id: "Desain antarmuka pengguna yang intuitif dan pengalaman pengguna yang optimal",
      en: "Design intuitive user interfaces and optimal user experiences",
    },
    icon: "🎨",
    color: "from-pink-500 to-rose-500",
    steps: [
      {
        title: {
          id: "Design Fundamentals",
          en: "Design Fundamentals",
        },
        content: {
          id: "Pelajari prinsip-prinsip dasar desain, teori warna, tipografi, dan komposisi visual.",
          en: "Learn fundamental design principles, color theory, typography, and visual composition.",
        },
        skills: [
          "Design Principles",
          "Color Theory",
          "Typography",
          "Visual Hierarchy",
          "Layout Design",
        ],
        duration: "2-3 bulan",
      },
      {
        title: {
          id: "UX Research & Strategy",
          en: "UX Research & Strategy",
        },
        content: {
          id: "Kuasai metodologi penelitian pengguna, persona development, dan user journey mapping.",
          en: "Master user research methodologies, persona development, and user journey mapping.",
        },
        skills: [
          "User Research",
          "Personas",
          "User Journey",
          "Information Architecture",
          "Usability Testing",
        ],
        duration: "3-4 bulan",
      },
      {
        title: {
          id: "Design Tools & Prototyping",
          en: "Design Tools & Prototyping",
        },
        content: {
          id: "Pelajari tools desain modern seperti Figma, Adobe XD, dan teknik prototyping untuk validasi desain.",
          en: "Learn modern design tools like Figma, Adobe XD, and prototyping techniques for design validation.",
        },
        skills: [
          "Figma",
          "Adobe XD",
          "Prototyping",
          "Wireframing",
          "Design Systems",
        ],
        duration: "3-4 bulan",
      },
      {
        title: {
          id: "Advanced UX & Collaboration",
          en: "Advanced UX & Collaboration",
        },
        content: {
          id: "Dalami advanced UX concepts, accessibility, dan kolaborasi dengan developer untuk implementasi desain.",
          en: "Dive into advanced UX concepts, accessibility, and collaboration with developers for design implementation.",
        },
        skills: [
          "Accessibility",
          "Design Handoff",
          "Design Systems",
          "A/B Testing",
          "Analytics",
        ],
        duration: "3-4 bulan",
      },
    ],
  },
  {
    id: "cybersecurity",
    title: {
      id: "Cybersecurity",
      en: "Cybersecurity",
    },
    description: {
      id: "Keamanan sistem, ethical hacking, dan perlindungan data digital",
      en: "System security, ethical hacking, and digital data protection",
    },
    icon: "🔒",
    color: "from-gray-500 to-slate-600",
    steps: [
      {
        title: {
          id: "Security Fundamentals",
          en: "Security Fundamentals",
        },
        content: {
          id: "Pelajari konsep dasar keamanan informasi, threat modeling, dan risk assessment.",
          en: "Learn fundamental information security concepts, threat modeling, and risk assessment.",
        },
        skills: [
          "Information Security",
          "Risk Assessment",
          "Threat Modeling",
          "Security Policies",
        ],
        duration: "2-3 bulan",
      },
      {
        title: {
          id: "Network Security",
          en: "Network Security",
        },
        content: {
          id: "Kuasai keamanan jaringan, firewall, intrusion detection, dan network monitoring.",
          en: "Master network security, firewalls, intrusion detection, and network monitoring.",
        },
        skills: [
          "Network Security",
          "Firewalls",
          "IDS/IPS",
          "VPN",
          "Network Monitoring",
        ],
        duration: "3-4 bulan",
      },
      {
        title: {
          id: "Ethical Hacking",
          en: "Ethical Hacking",
        },
        content: {
          id: "Pelajari penetration testing, vulnerability assessment, dan ethical hacking methodologies.",
          en: "Learn penetration testing, vulnerability assessment, and ethical hacking methodologies.",
        },
        skills: [
          "Penetration Testing",
          "Vulnerability Assessment",
          "Kali Linux",
          "Metasploit",
          "OWASP",
        ],
        duration: "4-5 bulan",
      },
      {
        title: {
          id: "Advanced Security",
          en: "Advanced Security",
        },
        content: {
          id: "Dalami incident response, digital forensics, dan security compliance frameworks.",
          en: "Dive into incident response, digital forensics, and security compliance frameworks.",
        },
        skills: [
          "Incident Response",
          "Digital Forensics",
          "Compliance",
          "Security Architecture",
          "Threat Intelligence",
        ],
        duration: "4-6 bulan",
      },
    ],
  },
];
