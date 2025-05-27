export interface RoadmapStep {
  title: {
    id: string
    en: string
  }
  content: {
    id: string
    en: string
  }
  skills: string[]
  duration: string
}

export interface TechField {
  id: string
  title: {
    id: string
    en: string
  }
  description: {
    id: string
    en: string
  }
  icon: string
  color: string
  steps: RoadmapStep[]
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
          "Semantic HTML",
          "CSS Grid & Flexbox",
          "ES6+ Features",
          "Browser DevTools",
          "Web Accessibility (WCAG)",
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
          "React Hooks & Context",
          "Vue Composition API",
          "TypeScript Integration",
          "Component Testing",
          "Performance Optimization",
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
        skills: ["GraphQL APIs", "Database Design", "JWT & OAuth", "API Rate Limiting", "Server-Side Caching"],
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
          "Webpack Configuration",
          "Environment Variables",
          "SSL/TLS Setup",
          "CDN Integration",
          "Performance Monitoring",
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
          "Material Design",
          "Human Interface Guidelines",
          "Touch Gestures",
          "Screen Density",
          "Mobile Performance",
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
        skills: ["Expo CLI", "Flutter Widgets", "Platform-specific Code", "Hot Reload", "Cross-platform Testing"],
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
        skills: ["SwiftUI", "Jetpack Compose", "Core Data", "Room Database", "Memory Management"],
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
          "Firebase Integration",
          "Offline-first Architecture",
          "App Store Optimization",
          "Crash Reporting",
          "A/B Testing",
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
          "Hypothesis Testing",
          "Regression Analysis",
          "Bayesian Statistics",
          "Time Series Analysis",
          "Statistical Modeling",
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
        skills: ["Data Cleaning", "Plotly & Bokeh", "SQL Queries", "API Integration", "Web Scraping"],
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
          "Ensemble Methods",
          "Cross-validation",
          "Hyperparameter Tuning",
          "Dimensionality Reduction",
          "Anomaly Detection",
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
          "Neural Networks",
          "Computer Vision",
          "Natural Language Processing",
          "Model Deployment",
          "Data Pipeline",
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
        skills: ["Shell Scripting", "Cron Jobs", "Process Management", "File Permissions", "System Logs"],
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
        skills: ["Docker Compose", "Kubernetes Pods", "Service Mesh", "Container Registry", "Helm Charts"],
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
          "Pipeline as Code",
          "Blue-Green Deployment",
          "Canary Releases",
          "Rollback Strategies",
          "Build Optimization",
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
        skills: ["Cloud Architecture", "Auto Scaling", "Load Balancing", "Disaster Recovery", "Cost Optimization"],
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
        skills: ["Grid Systems", "White Space", "Contrast & Hierarchy", "Brand Guidelines", "Design Consistency"],
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
        skills: ["User Interviews", "Card Sorting", "Heuristic Evaluation", "Competitive Analysis", "Empathy Mapping"],
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
          "Interactive Prototypes",
          "Micro-interactions",
          "Design Tokens",
          "Component Libraries",
          "Version Control",
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
          "Inclusive Design",
          "Design Documentation",
          "Stakeholder Management",
          "Design Metrics",
          "User Feedback Loop",
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
    color: "from-yellow-500 to-yellow-600",
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
        skills: ["CIA Triad", "Attack Vectors", "Security Frameworks", "Risk Management", "Security Awareness"],
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
        skills: ["Packet Analysis", "Network Segmentation", "Wireless Security", "DNS Security", "Traffic Monitoring"],
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
          "Web Application Testing",
          "Social Engineering",
          "Exploit Development",
          "Report Writing",
          "Bug Bounty",
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
          "Malware Analysis",
          "Forensic Tools",
          "Security Automation",
          "Compliance Auditing",
          "Security Architecture",
        ],
        duration: "4-6 bulan",
      },
    ],
  },
  {
    id: "artificial-intelligence",
    title: {
      id: "Artificial Intelligence",
      en: "Artificial Intelligence",
    },
    description: {
      id: "Pelajari AI, machine learning, dan deep learning untuk membangun sistem cerdas",
      en: "Learn AI, machine learning, and deep learning to build intelligent systems",
    },
    icon: "🤖",
    color: "from-indigo-500 to-purple-600",
    steps: [
      {
        title: {
          id: "AI Fundamentals",
          en: "AI Fundamentals",
        },
        content: {
          id: "Pahami konsep dasar AI, machine learning, dan neural networks.",
          en: "Understand basic AI concepts, machine learning, and neural networks.",
        },
        skills: ["AI Concepts", "Machine Learning Basics", "Neural Networks", "Python for AI"],
        duration: "3-4 bulan",
      },
      {
        title: {
          id: "Deep Learning",
          en: "Deep Learning",
        },
        content: {
          id: "Kuasai deep learning dengan TensorFlow dan PyTorch.",
          en: "Master deep learning with TensorFlow and PyTorch.",
        },
        skills: ["TensorFlow", "PyTorch", "CNN", "RNN", "Computer Vision"],
        duration: "4-6 bulan",
      },
      {
        title: {
          id: "NLP & AI Applications",
          en: "NLP & AI Applications",
        },
        content: {
          id: "Pelajari Natural Language Processing dan aplikasi AI praktis.",
          en: "Learn Natural Language Processing and practical AI applications.",
        },
        skills: ["Natural Language Processing", "Transformers", "BERT/GPT", "AI Ethics", "Model Deployment"],
        duration: "5-7 bulan",
      },
    ],
  },
  {
    id: "blockchain",
    title: {
      id: "Blockchain Development",
      en: "Blockchain Development",
    },
    description: {
      id: "Bangun aplikasi blockchain, smart contracts, dan cryptocurrency",
      en: "Build blockchain applications, smart contracts, and cryptocurrency",
    },
    icon: "⛓️",
    color: "from-yellow-400 to-orange-500",
    steps: [
      {
        title: {
          id: "Blockchain Basics",
          en: "Blockchain Basics",
        },
        content: {
          id: "Pahami konsep blockchain, cryptocurrency, dan distributed ledger.",
          en: "Understand blockchain concepts, cryptocurrency, and distributed ledger.",
        },
        skills: ["Blockchain Fundamentals", "Cryptocurrency", "Distributed Systems", "Cryptography"],
        duration: "2-3 bulan",
      },
      {
        title: {
          id: "Smart Contracts",
          en: "Smart Contracts",
        },
        content: {
          id: "Pelajari Solidity dan pengembangan smart contracts di Ethereum.",
          en: "Learn Solidity and smart contract development on Ethereum.",
        },
        skills: ["Solidity", "Ethereum", "Web3.js", "Smart Contract Security", "DApp Development"],
        duration: "4-5 bulan",
      },
      {
        title: {
          id: "DeFi & NFTs",
          en: "DeFi & NFTs",
        },
        content: {
          id: "Bangun aplikasi DeFi dan NFT marketplace.",
          en: "Build DeFi applications and NFT marketplaces.",
        },
        skills: ["DeFi Protocols", "NFT Standards", "IPFS", "Tokenomics", "Cross-chain Development"],
        duration: "3-4 bulan",
      },
    ],
  },
  {
    id: "game-development",
    title: {
      id: "Game Development",
      en: "Game Development",
    },
    description: {
      id: "Ciptakan game 2D dan 3D dengan Unity, Unreal Engine, dan teknologi game modern",
      en: "Create 2D and 3D games with Unity, Unreal Engine, and modern game technologies",
    },
    icon: "🎮",
    color: "from-purple-500 to-indigo-600",
    steps: [
      {
        title: {
          id: "Game Design Basics",
          en: "Game Design Basics",
        },
        content: {
          id: "Pelajari prinsip game design, mechanics, dan storytelling.",
          en: "Learn game design principles, mechanics, and storytelling.",
        },
        skills: ["Game Design", "Game Mechanics", "Level Design", "Storytelling"],
        duration: "2-3 bulan",
      },
      {
        title: {
          id: "Unity Development",
          en: "Unity Development",
        },
        content: {
          id: "Kuasai Unity engine untuk membuat game 2D dan 3D.",
          en: "Master Unity engine for creating 2D and 3D games.",
        },
        skills: ["Unity Engine", "C# Programming", "Physics Systems", "Animation", "UI Systems"],
        duration: "4-6 bulan",
      },
      {
        title: {
          id: "Advanced Game Development",
          en: "Advanced Game Development",
        },
        content: {
          id: "Pelajari multiplayer, VR/AR, dan optimisasi performa game.",
          en: "Learn multiplayer, VR/AR, and game performance optimization.",
        },
        skills: [
          "Multiplayer Networking",
          "VR/AR Development",
          "Performance Optimization",
          "Game Analytics",
          "Monetization",
        ],
        duration: "5-7 bulan",
      },
    ],
  },
  {
    id: "cloud-computing",
    title: {
      id: "Cloud Computing",
      en: "Cloud Computing",
    },
    description: {
      id: "Kuasai AWS, Azure, GCP dan arsitektur cloud modern",
      en: "Master AWS, Azure, GCP and modern cloud architecture",
    },
    icon: "☁️",
    color: "from-blue-400 to-cyan-500",
    steps: [
      {
        title: {
          id: "Cloud Fundamentals",
          en: "Cloud Fundamentals",
        },
        content: {
          id: "Pahami konsep cloud computing dan service models.",
          en: "Understand cloud computing concepts and service models.",
        },
        skills: ["Cloud Concepts", "IaaS/PaaS/SaaS", "Cloud Security", "Cost Management"],
        duration: "2-3 bulan",
      },
      {
        title: {
          id: "AWS/Azure/GCP",
          en: "AWS/Azure/GCP",
        },
        content: {
          id: "Kuasai major cloud providers dan services mereka.",
          en: "Master major cloud providers and their services.",
        },
        skills: ["AWS Services", "Azure Services", "GCP Services", "Cloud Storage", "Compute Services"],
        duration: "4-6 bulan",
      },
      {
        title: {
          id: "Cloud Architecture",
          en: "Cloud Architecture",
        },
        content: {
          id: "Desain arsitektur cloud yang scalable dan resilient.",
          en: "Design scalable and resilient cloud architectures.",
        },
        skills: ["Cloud Architecture", "Microservices", "Serverless", "Auto Scaling", "Disaster Recovery"],
        duration: "3-5 bulan",
      },
    ],
  },
  {
    id: "iot-development",
    title: {
      id: "IoT Development",
      en: "IoT Development",
    },
    description: {
      id: "Bangun sistem Internet of Things dengan Arduino, Raspberry Pi, dan cloud integration",
      en: "Build Internet of Things systems with Arduino, Raspberry Pi, and cloud integration",
    },
    icon: "🌐",
    color: "from-green-400 to-blue-500",
    steps: [
      {
        title: {
          id: "IoT Fundamentals",
          en: "IoT Fundamentals",
        },
        content: {
          id: "Pelajari konsep IoT, sensors, dan embedded systems.",
          en: "Learn IoT concepts, sensors, and embedded systems.",
        },
        skills: ["IoT Concepts", "Sensors & Actuators", "Embedded Programming", "Communication Protocols"],
        duration: "2-3 bulan",
      },
      {
        title: {
          id: "Hardware Programming",
          en: "Hardware Programming",
        },
        content: {
          id: "Kuasai Arduino, Raspberry Pi, dan microcontrollers.",
          en: "Master Arduino, Raspberry Pi, and microcontrollers.",
        },
        skills: ["Arduino Programming", "Raspberry Pi", "C/C++", "Python for IoT", "Circuit Design"],
        duration: "3-4 bulan",
      },
      {
        title: {
          id: "IoT Cloud Integration",
          en: "IoT Cloud Integration",
        },
        content: {
          id: "Integrasikan IoT devices dengan cloud platforms.",
          en: "Integrate IoT devices with cloud platforms.",
        },
        skills: ["MQTT", "AWS IoT", "Azure IoT", "Data Analytics", "Edge Computing"],
        duration: "3-4 bulan",
      },
    ],
  },
  {
    id: "digital-marketing",
    title: {
      id: "Digital Marketing",
      en: "Digital Marketing",
    },
    description: {
      id: "Kuasai SEO, SEM, social media marketing, dan analytics digital",
      en: "Master SEO, SEM, social media marketing, and digital analytics",
    },
    icon: "📈",
    color: "from-pink-400 to-red-500",
    steps: [
      {
        title: {
          id: "Marketing Fundamentals",
          en: "Marketing Fundamentals",
        },
        content: {
          id: "Pelajari dasar-dasar digital marketing dan customer journey.",
          en: "Learn digital marketing fundamentals and customer journey.",
        },
        skills: ["Marketing Strategy", "Customer Personas", "Content Marketing", "Email Marketing"],
        duration: "2-3 bulan",
      },
      {
        title: {
          id: "SEO & SEM",
          en: "SEO & SEM",
        },
        content: {
          id: "Kuasai Search Engine Optimization dan Search Engine Marketing.",
          en: "Master Search Engine Optimization and Search Engine Marketing.",
        },
        skills: ["SEO Techniques", "Google Ads", "Keyword Research", "Link Building", "PPC Campaigns"],
        duration: "3-4 bulan",
      },
      {
        title: {
          id: "Social Media & Analytics",
          en: "Social Media & Analytics",
        },
        content: {
          id: "Pelajari social media marketing dan web analytics.",
          en: "Learn social media marketing and web analytics.",
        },
        skills: [
          "Social Media Strategy",
          "Facebook Ads",
          "Instagram Marketing",
          "Google Analytics",
          "Conversion Optimization",
        ],
        duration: "3-4 bulan",
      },
    ],
  },
  {
    id: "product-management",
    title: {
      id: "Product Management",
      en: "Product Management",
    },
    description: {
      id: "Pelajari strategi produk, roadmap planning, dan agile methodologies",
      en: "Learn product strategy, roadmap planning, and agile methodologies",
    },
    icon: "📋",
    color: "from-indigo-400 to-purple-500",
    steps: [
      {
        title: {
          id: "Product Strategy",
          en: "Product Strategy",
        },
        content: {
          id: "Pahami product vision, market research, dan competitive analysis.",
          en: "Understand product vision, market research, and competitive analysis.",
        },
        skills: ["Product Vision", "Market Research", "User Research", "Competitive Analysis"],
        duration: "2-3 bulan",
      },
      {
        title: {
          id: "Agile & Scrum",
          en: "Agile & Scrum",
        },
        content: {
          id: "Kuasai agile methodologies dan scrum framework.",
          en: "Master agile methodologies and scrum framework.",
        },
        skills: [
          "Agile Principles",
          "Scrum Framework",
          "Sprint Planning",
          "Backlog Management",
          "Stakeholder Management",
        ],
        duration: "2-3 bulan",
      },
      {
        title: {
          id: "Product Analytics",
          en: "Product Analytics",
        },
        content: {
          id: "Pelajari product metrics, A/B testing, dan data-driven decisions.",
          en: "Learn product metrics, A/B testing, and data-driven decisions.",
        },
        skills: ["Product Metrics", "A/B Testing", "User Analytics", "KPI Tracking", "Growth Hacking"],
        duration: "3-4 bulan",
      },
    ],
  },
  {
    id: "quality-assurance",
    title: {
      id: "Quality Assurance",
      en: "Quality Assurance",
    },
    description: {
      id: "Kuasai manual testing, automation testing, dan quality processes",
      en: "Master manual testing, automation testing, and quality processes",
    },
    icon: "🔍",
    color: "from-teal-400 to-green-500",
    steps: [
      {
        title: {
          id: "Testing Fundamentals",
          en: "Testing Fundamentals",
        },
        content: {
          id: "Pelajari dasar-dasar software testing dan QA processes.",
          en: "Learn software testing fundamentals and QA processes.",
        },
        skills: ["Testing Principles", "Test Planning", "Bug Reporting", "Test Documentation"],
        duration: "2-3 bulan",
      },
      {
        title: {
          id: "Manual Testing",
          en: "Manual Testing",
        },
        content: {
          id: "Kuasai manual testing techniques dan test case design.",
          en: "Master manual testing techniques and test case design.",
        },
        skills: ["Test Case Design", "Functional Testing", "Usability Testing", "Regression Testing", "API Testing"],
        duration: "3-4 bulan",
      },
      {
        title: {
          id: "Test Automation",
          en: "Test Automation",
        },
        content: {
          id: "Pelajari automation testing dengan Selenium dan modern tools.",
          en: "Learn automation testing with Selenium and modern tools.",
        },
        skills: [
          "Selenium WebDriver",
          "Test Automation Frameworks",
          "CI/CD Integration",
          "Performance Testing",
          "Mobile Testing",
        ],
        duration: "4-5 bulan",
      },
    ],
  },
  {
    id: "database-administration",
    title: {
      id: "Database Administration",
      en: "Database Administration",
    },
    description: {
      id: "Kelola database SQL dan NoSQL, optimisasi performa, dan data security",
      en: "Manage SQL and NoSQL databases, performance optimization, and data security",
    },
    icon: "🗄️",
    color: "from-gray-500 to-blue-600",
    steps: [
      {
        title: {
          id: "Database Fundamentals",
          en: "Database Fundamentals",
        },
        content: {
          id: "Pelajari konsep database, SQL, dan database design.",
          en: "Learn database concepts, SQL, and database design.",
        },
        skills: ["Database Concepts", "SQL Fundamentals", "Database Design", "Normalization"],
        duration: "2-3 bulan",
      },
      {
        title: {
          id: "Database Administration",
          en: "Database Administration",
        },
        content: {
          id: "Kuasai database administration untuk MySQL, PostgreSQL, dan MongoDB.",
          en: "Master database administration for MySQL, PostgreSQL, and MongoDB.",
        },
        skills: ["MySQL/PostgreSQL", "MongoDB", "Database Security", "Backup & Recovery", "User Management"],
        duration: "3-4 bulan",
      },
      {
        title: {
          id: "Performance Optimization",
          en: "Performance Optimization",
        },
        content: {
          id: "Optimisasi performa database dan troubleshooting.",
          en: "Database performance optimization and troubleshooting.",
        },
        skills: [
          "Query Optimization",
          "Indexing Strategies",
          "Performance Monitoring",
          "Database Tuning",
          "Scaling Strategies",
        ],
        duration: "3-4 bulan",
      },
    ],
  },
  {
    id: "network-administration",
    title: {
      id: "Network Administration",
      en: "Network Administration",
    },
    description: {
      id: "Kelola infrastruktur jaringan, routing, switching, dan network security",
      en: "Manage network infrastructure, routing, switching, and network security",
    },
    icon: "🌐",
    color: "from-blue-600 to-indigo-700",
    steps: [
      {
        title: {
          id: "Network Fundamentals",
          en: "Network Fundamentals",
        },
        content: {
          id: "Pelajari dasar-dasar networking, OSI model, dan TCP/IP.",
          en: "Learn networking fundamentals, OSI model, and TCP/IP.",
        },
        skills: ["OSI Model", "TCP/IP", "Subnetting", "Network Protocols"],
        duration: "2-3 bulan",
      },
      {
        title: {
          id: "Routing & Switching",
          en: "Routing & Switching",
        },
        content: {
          id: "Kuasai routing protocols dan switching technologies.",
          en: "Master routing protocols and switching technologies.",
        },
        skills: ["Cisco/Juniper", "OSPF/BGP", "VLANs", "STP", "Network Troubleshooting"],
        duration: "4-5 bulan",
      },
      {
        title: {
          id: "Network Security",
          en: "Network Security",
        },
        content: {
          id: "Implementasikan network security dan monitoring.",
          en: "Implement network security dan monitoring.",
        },
        skills: [
          "Firewall Configuration",
          "VPN Setup",
          "Network Monitoring",
          "Intrusion Detection",
          "Wireless Security",
        ],
        duration: "3-4 bulan",
      },
    ],
  },
  {
    id: "business-intelligence",
    title: {
      id: "Business Intelligence",
      en: "Business Intelligence",
    },
    description: {
      id: "Analisis bisnis, data warehousing, dan business analytics dengan tools modern",
      en: "Business analysis, data warehousing, and business analytics with modern tools",
    },
    icon: "📊",
    color: "from-emerald-500 to-teal-600",
    steps: [
      {
        title: {
          id: "BI Fundamentals",
          en: "BI Fundamentals",
        },
        content: {
          id: "Pahami konsep business intelligence dan data warehousing.",
          en: "Understand business intelligence concepts and data warehousing.",
        },
        skills: ["BI Concepts", "Data Warehousing", "ETL Processes", "Business Requirements"],
        duration: "2-3 bulan",
      },
      {
        title: {
          id: "Data Visualization",
          en: "Data Visualization",
        },
        content: {
          id: "Kuasai tools visualisasi seperti Tableau, Power BI, dan Looker.",
          en: "Master visualization tools like Tableau, Power BI, and Looker.",
        },
        skills: ["Tableau", "Power BI", "Looker", "Dashboard Design", "Data Storytelling"],
        duration: "3-4 bulan",
      },
      {
        title: {
          id: "Advanced Analytics",
          en: "Advanced Analytics",
        },
        content: {
          id: "Pelajari predictive analytics dan business forecasting.",
          en: "Learn predictive analytics and business forecasting.",
        },
        skills: [
          "Predictive Analytics",
          "Statistical Analysis",
          "Business Forecasting",
          "KPI Development",
          "ROI Analysis",
        ],
        duration: "4-5 bulan",
      },
    ],
  },
  {
    id: "system-administration",
    title: {
      id: "System Administration",
      en: "System Administration",
    },
    description: {
      id: "Kelola server, monitoring sistem, dan infrastructure management",
      en: "Manage servers, system monitoring, and infrastructure management",
    },
    icon: "🖥️",
    color: "from-slate-500 to-gray-600",
    steps: [
      {
        title: {
          id: "Linux Administration",
          en: "Linux Administration",
        },
        content: {
          id: "Kuasai administrasi sistem Linux dan command line.",
          en: "Master Linux system administration and command line.",
        },
        skills: ["Linux Commands", "System Configuration", "Package Management", "Process Management"],
        duration: "2-3 bulan",
      },
      {
        title: {
          id: "Server Management",
          en: "Server Management",
        },
        content: {
          id: "Pelajari web server, database server, dan service management.",
          en: "Learn web server, database server, and service management.",
        },
        skills: ["Apache/Nginx", "MySQL/PostgreSQL", "Service Management", "Log Management", "Backup Strategies"],
        duration: "3-4 bulan",
      },
      {
        title: {
          id: "Monitoring & Automation",
          en: "Monitoring & Automation",
        },
        content: {
          id: "Implementasikan monitoring dan automation tools.",
          en: "Implement monitoring and automation tools.",
        },
        skills: ["Nagios/Zabbix", "Ansible", "Shell Scripting", "Performance Tuning", "Security Hardening"],
        duration: "3-4 bulan",
      },
    ],
  },
  {
    id: "software-architecture",
    title: {
      id: "Software Architecture",
      en: "Software Architecture",
    },
    description: {
      id: "Desain arsitektur software, microservices, dan system design patterns",
      en: "Design software architecture, microservices, and system design patterns",
    },
    icon: "🏗️",
    color: "from-violet-500 to-purple-600",
    steps: [
      {
        title: {
          id: "Architecture Fundamentals",
          en: "Architecture Fundamentals",
        },
        content: {
          id: "Pelajari prinsip software architecture dan design patterns.",
          en: "Learn software architecture principles and design patterns.",
        },
        skills: ["Architecture Principles", "Design Patterns", "SOLID Principles", "System Design"],
        duration: "3-4 bulan",
      },
      {
        title: {
          id: "Microservices Architecture",
          en: "Microservices Architecture",
        },
        content: {
          id: "Kuasai microservices design dan distributed systems.",
          en: "Master microservices design and distributed systems.",
        },
        skills: [
          "Microservices Patterns",
          "API Gateway",
          "Service Mesh",
          "Event-Driven Architecture",
          "Distributed Systems",
        ],
        duration: "4-5 bulan",
      },
      {
        title: {
          id: "Scalability & Performance",
          en: "Scalability & Performance",
        },
        content: {
          id: "Optimisasi performa dan scalability sistem.",
          en: "System performance optimization and scalability.",
        },
        skills: [
          "Load Balancing",
          "Caching Strategies",
          "Database Scaling",
          "Performance Monitoring",
          "Capacity Planning",
        ],
        duration: "3-4 bulan",
      },
    ],
  },
  {
    id: "technical-writing",
    title: {
      id: "Technical Writing",
      en: "Technical Writing",
    },
    description: {
      id: "Tulis dokumentasi teknis, API docs, dan content strategy yang efektif",
      en: "Write technical documentation, API docs, and effective content strategy",
    },
    icon: "📝",
    color: "from-amber-500 to-orange-600",
    steps: [
      {
        title: {
          id: "Writing Fundamentals",
          en: "Writing Fundamentals",
        },
        content: {
          id: "Pelajari prinsip technical writing dan audience analysis.",
          en: "Learn technical writing principles and audience analysis.",
        },
        skills: ["Writing Principles", "Audience Analysis", "Information Architecture", "Style Guides"],
        duration: "2-3 bulan",
      },
      {
        title: {
          id: "Documentation Tools",
          en: "Documentation Tools",
        },
        content: {
          id: "Kuasai tools dokumentasi modern seperti GitBook, Notion, dan Markdown.",
          en: "Master modern documentation tools like GitBook, Notion, and Markdown.",
        },
        skills: ["Markdown", "GitBook", "Notion", "Confluence", "Documentation as Code"],
        duration: "2-3 bulan",
      },
      {
        title: {
          id: "API Documentation",
          en: "API Documentation",
        },
        content: {
          id: "Tulis API documentation dan developer guides yang efektif.",
          en: "Write effective API documentation and developer guides.",
        },
        skills: ["API Documentation", "OpenAPI/Swagger", "Developer Guides", "Code Examples", "Interactive Docs"],
        duration: "3-4 bulan",
      },
    ],
  },
]
