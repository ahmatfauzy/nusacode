"use client";

import type React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, Calendar, ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext"

interface Article {
  id: string;
  title: {
    en: string;
    id: string;
  };
  excerpt: {
    en: string;
    id: string;
  };
  content: {
    en: string;
    id: string;
  };
  author: string;
  date: string;
  readTime: number;
  category: {
    en: string;
    id: string;
  };
  image: string;
  tags: Array<{
    en: string;
    id: string;
  }>;
}

const mockArticles: Article[] = [
  {
    id: "1",
    title: {
      en: "How Developers Stay Competitive in 2024",
      id: "Cara Developer Bersaing di Era 2024",
    },
    excerpt: {
      en: "Essential strategies for developers to remain relevant and competitive in the rapidly evolving tech landscape.",
      id: "Strategi penting bagi developer untuk tetap relevan dan kompetitif di lanskap teknologi yang berkembang pesat.",
    },
    content: {
      en: "The tech industry in 2024 is more competitive than ever. With AI tools like ChatGPT and GitHub Copilot changing how we code, developers need to adapt quickly. Here are key strategies to stay ahead:\n\n**1. Embrace AI as a Tool, Not a Threat**\nAI won't replace developers, but developers who use AI will replace those who don't. Learn to leverage AI tools for code generation, debugging, and documentation while focusing on higher-level problem-solving.\n\n**2. Focus on Soft Skills**\nTechnical skills alone aren't enough. Communication, leadership, and business understanding are becoming increasingly valuable. Learn to translate technical concepts to non-technical stakeholders.\n\n**3. Specialize in High-Demand Areas**\nWhile being a generalist has value, specializing in areas like cybersecurity, cloud architecture, or AI/ML can set you apart. These fields often have higher compensation and job security.\n\n**4. Build in Public**\nShare your learning journey, contribute to open source, and build a personal brand. Social proof through GitHub contributions, blog posts, and speaking engagements can open doors.\n\n**5. Never Stop Learning**\nThe half-life of technical skills is shrinking. Dedicate time weekly to learning new technologies, frameworks, or methodologies. Consider it an investment in your career longevity.",
      id: "Industri teknologi di 2024 lebih kompetitif dari sebelumnya. Dengan tools AI seperti ChatGPT dan GitHub Copilot yang mengubah cara kita coding, developer perlu beradaptasi dengan cepat. Berikut strategi kunci untuk tetap unggul:\n\n**1. Rangkul AI sebagai Alat, Bukan Ancaman**\nAI tidak akan menggantikan developer, tapi developer yang menggunakan AI akan menggantikan yang tidak. Pelajari cara memanfaatkan tools AI untuk code generation, debugging, dan dokumentasi sambil fokus pada problem-solving tingkat tinggi.\n\n**2. Fokus pada Soft Skills**\nSkill teknis saja tidak cukup. Komunikasi, kepemimpinan, dan pemahaman bisnis menjadi semakin berharga. Pelajari cara menerjemahkan konsep teknis ke stakeholder non-teknis.\n\n**3. Spesialisasi di Area High-Demand**\nMeski menjadi generalis punya nilai, spesialisasi di area seperti cybersecurity, cloud architecture, atau AI/ML bisa membedakan Anda. Bidang ini sering punya kompensasi dan job security yang lebih tinggi.\n\n**4. Build in Public**\nBagikan journey belajar Anda, kontribusi ke open source, dan bangun personal brand. Social proof melalui kontribusi GitHub, blog posts, dan speaking engagements bisa membuka peluang.\n\n**5. Jangan Pernah Berhenti Belajar**\nHalf-life skill teknis semakin pendek. Dedikasikan waktu mingguan untuk mempelajari teknologi, framework, atau metodologi baru. Anggap ini sebagai investasi untuk longevitas karir Anda.",
    },
    author: "Iqbal Rahman",
    date: "2024-01-20",
    readTime: 7,
    category: {
      en: "Career Development",
      id: "Pengembangan Karir",
    },
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: [
      { en: "Career", id: "Karir" },
      { en: "AI Tools", id: "Tools AI" },
      { en: "Professional Development", id: "Pengembangan Profesional" },
    ],
  },
  {
    id: "2",
    title: {
      en: "Surviving the Tech Winter: A Developer's Guide",
      id: "Bertahan di Tech Winter: Panduan untuk Developer",
    },
    excerpt: {
      en: "Navigate through economic downturns and mass layoffs in the tech industry with practical strategies.",
      id: "Navigasi melalui penurunan ekonomi dan PHK massal di industri teknologi dengan strategi praktis.",
    },
    content: {
      en: "The tech industry is experiencing what many call a 'tech winter' - a period of reduced hiring, layoffs, and economic uncertainty. Here's how developers can not just survive, but thrive during these challenging times:\n\n**Understanding Tech Winter**\nTech winter refers to periods when venture capital funding decreases, startups struggle, and even established companies reduce their workforce. This cycle is natural but can be stressful for professionals in the field.\n\n**Strategies for Survival:**\n\n**1. Diversify Your Skill Set**\nDon't put all your eggs in one basket. If you're a frontend developer, learn some backend. If you're in web development, explore mobile or cloud technologies. Versatility makes you more valuable.\n\n**2. Build Financial Resilience**\nMaintain an emergency fund covering 6-12 months of expenses. Reduce unnecessary subscriptions and focus on essential spending. Consider freelance or contract work as additional income streams.\n\n**3. Network Strategically**\nYour network is your net worth. Maintain relationships with former colleagues, attend virtual meetups, and engage with the developer community online. Many opportunities come through referrals.\n\n**4. Focus on Fundamentals**\nWhile new frameworks come and go, fundamental concepts like algorithms, data structures, and system design remain constant. Strengthen these core skills.\n\n**5. Consider Alternative Paths**\nExplore opportunities in traditionally stable industries like healthcare, finance, or government that are increasingly digitizing their operations.\n\n**Remember: This Too Shall Pass**\nTech winters are temporary. Use this time to upskill, build projects, and position yourself for the inevitable recovery.",
      id: "Industri teknologi sedang mengalami apa yang banyak disebut 'tech winter' - periode berkurangnya hiring, PHK, dan ketidakpastian ekonomi. Berikut cara developer tidak hanya bertahan, tapi berkembang di masa sulit ini:\n\n**Memahami Tech Winter**\nTech winter merujuk pada periode ketika funding venture capital menurun, startup kesulitan, dan bahkan perusahaan mapan mengurangi tenaga kerja. Siklus ini natural tapi bisa stressful bagi profesional di bidang ini.\n\n**Strategi Bertahan:**\n\n**1. Diversifikasi Skill Set**\nJangan taruh semua telur di satu keranjang. Jika Anda frontend developer, pelajari backend. Jika di web development, eksplorasi mobile atau cloud technologies. Versatilitas membuat Anda lebih berharga.\n\n**2. Bangun Ketahanan Finansial**\nPertahankan emergency fund untuk 6-12 bulan pengeluaran. Kurangi subscription yang tidak perlu dan fokus pada pengeluaran esensial. Pertimbangkan freelance atau contract work sebagai income stream tambahan.\n\n**3. Network Secara Strategis**\nNetwork Anda adalah net worth Anda. Pertahankan hubungan dengan mantan kolega, hadiri virtual meetups, dan engage dengan komunitas developer online. Banyak peluang datang melalui referral.\n\n**4. Fokus pada Fundamental**\nMeski framework baru datang dan pergi, konsep fundamental seperti algoritma, struktur data, dan system design tetap konstan. Perkuat core skills ini.\n\n**5. Pertimbangkan Jalur Alternatif**\nEksplorasi peluang di industri yang tradisional stabil seperti healthcare, finance, atau government yang semakin mendigitalkan operasi mereka.\n\n**Ingat: Ini Akan Berlalu**\nTech winter bersifat sementara. Gunakan waktu ini untuk upskill, bangun project, dan posisikan diri untuk recovery yang pasti akan datang.",
    },
    author: "Sarah Putri",
    date: "2024-01-18",
    readTime: 9,
    category: {
      en: "Industry Insights",
      id: "Wawasan Industri",
    },
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: [
      { en: "Tech Industry", id: "Industri Tech" },
      { en: "Career Strategy", id: "Strategi Karir" },
      { en: "Economic Downturn", id: "Penurunan Ekonomi" },
    ],
  },
  {
    id: "3",
    title: {
      en: "The Rise of AI-Assisted Development",
      id: "Bangkitnya AI-Assisted Development",
    },
    excerpt: {
      en: "How artificial intelligence is transforming the way developers write code and build applications.",
      id: "Bagaimana artificial intelligence mengubah cara developer menulis kode dan membangun aplikasi.",
    },
    content: {
      en: "Artificial Intelligence is revolutionizing software development in ways we couldn't imagine just a few years ago. From code completion to entire application generation, AI tools are becoming indispensable for modern developers.\n\n**The Current Landscape**\nTools like GitHub Copilot, ChatGPT, Claude, and specialized coding assistants are changing how we approach programming. These tools can:\n• Generate code from natural language descriptions\n• Debug existing code and suggest improvements\n• Write documentation and tests\n• Explain complex code snippets\n• Translate code between programming languages\n\n**Benefits of AI-Assisted Development:**\n\n**1. Increased Productivity**\nDevelopers report 30-50% faster coding when using AI assistants. Routine tasks like boilerplate code, API integrations, and basic algorithms can be generated instantly.\n\n**2. Learning Acceleration**\nAI tools serve as 24/7 mentors, explaining concepts, suggesting best practices, and helping developers learn new technologies faster.\n\n**3. Reduced Cognitive Load**\nBy handling repetitive tasks, AI frees developers to focus on architecture, problem-solving, and creative aspects of development.\n\n**4. Better Code Quality**\nAI can suggest optimizations, identify potential bugs, and recommend security improvements that human developers might miss.\n\n**Challenges and Considerations:**\n• Over-reliance on AI without understanding fundamentals\n• Potential security vulnerabilities in generated code\n• The need for human oversight and validation\n• Intellectual property and licensing concerns\n\n**The Future**\nWe're moving toward a future where AI doesn't replace developers but amplifies their capabilities. The most successful developers will be those who learn to collaborate effectively with AI tools while maintaining their problem-solving and critical thinking skills.",
      id: "Artificial Intelligence merevolusi pengembangan software dengan cara yang tidak bisa kita bayangkan beberapa tahun lalu. Dari code completion hingga generasi aplikasi utuh, tools AI menjadi sangat penting bagi developer modern.\n\n**Lanskap Saat Ini**\nTools seperti GitHub Copilot, ChatGPT, Claude, dan coding assistant khusus mengubah cara kita approach programming. Tools ini bisa:\n• Generate kode dari deskripsi natural language\n• Debug kode existing dan suggest improvement\n• Tulis dokumentasi dan test\n• Jelaskan code snippet yang kompleks\n• Translate kode antar programming language\n\n**Manfaat AI-Assisted Development:**\n\n**1. Produktivitas Meningkat**\nDeveloper melaporkan coding 30-50% lebih cepat saat menggunakan AI assistant. Task rutin seperti boilerplate code, API integration, dan algoritma basic bisa digenerate instant.\n\n**2. Akselerasi Learning**\nAI tools berfungsi sebagai mentor 24/7, menjelaskan konsep, suggest best practice, dan membantu developer belajar teknologi baru lebih cepat.\n\n**3. Cognitive Load Berkurang**\nDengan menangani task repetitif, AI membebaskan developer untuk fokus pada arsitektur, problem-solving, dan aspek kreatif development.\n\n**4. Kualitas Kode Lebih Baik**\nAI bisa suggest optimisasi, identifikasi potential bug, dan recommend security improvement yang mungkin terlewat oleh human developer.\n\n**Tantangan dan Pertimbangan:**\n• Over-reliance pada AI tanpa memahami fundamental\n• Potential security vulnerability di generated code\n• Kebutuhan human oversight dan validasi\n• Intellectual property dan licensing concern\n\n**Masa Depan**\nKita bergerak menuju masa depan di mana AI tidak menggantikan developer tapi memperkuat kemampuan mereka. Developer paling sukses adalah yang belajar berkolaborasi efektif dengan AI tools sambil mempertahankan problem-solving dan critical thinking skills.",
    },
    author: "Ahmad Fauzi",
    date: "2024-01-15",
    readTime: 8,
    category: {
      en: "Technology Trends",
      id: "Tren Teknologi",
    },
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: [
      { en: "Artificial Intelligence", id: "Artificial Intelligence" },
      { en: "Code Generation", id: "Code Generation" },
      { en: "Developer Tools", id: "Developer Tools" },
    ],
  },
  {
    id: "4",
    title: {
      en: "Remote Work Best Practices for Developers",
      id: "Best Practice Remote Work untuk Developer",
    },
    excerpt: {
      en: "Master the art of remote development with proven strategies for productivity and work-life balance.",
      id: "Kuasai seni remote development dengan strategi terbukti untuk produktivitas dan work-life balance.",
    },
    content: {
      en: "Remote work has become the new normal for many developers. While it offers flexibility and eliminates commutes, it also presents unique challenges. Here's how to excel as a remote developer:\n\n**Setting Up Your Environment**\n\n**1. Create a Dedicated Workspace**\nHaving a specific area for work helps maintain boundaries between personal and professional life. Invest in a good chair, monitor, and lighting.\n\n**2. Optimize Your Tech Setup**\n• Reliable internet connection (consider backup options)\n• Quality headphones for calls\n• External monitor for better productivity\n• Ergonomic keyboard and mouse\n\n**Communication Excellence**\n\n**3. Over-communicate**\nIn remote settings, silence can be misinterpreted. Regular updates, clear documentation, and proactive communication prevent misunderstandings.\n\n**4. Master Async Communication**\nLearn to communicate effectively through written channels. Be clear, concise, and provide context in your messages.\n\n**Productivity Strategies**\n\n**5. Time Management**\n• Use time-blocking techniques\n• Take regular breaks (Pomodoro technique)\n• Set clear start and end times for work\n\n**6. Minimize Distractions**\n• Use website blockers during focus time\n• Create a 'do not disturb' signal for family\n• Keep your phone in another room\n\n**Collaboration and Team Building**\n\n**7. Participate Actively**\nJoin virtual coffee chats, team building activities, and informal conversations. Building relationships is crucial for remote success.\n\n**8. Use the Right Tools**\n• Version control (Git) best practices\n• Collaborative coding tools (VS Code Live Share)\n• Project management platforms (Jira, Trello)\n• Communication tools (Slack, Discord)\n\n**Maintaining Work-Life Balance**\n\n**9. Set Boundaries**\nJust because you can work anytime doesn't mean you should. Establish clear working hours and stick to them.\n\n**10. Take Care of Your Health**\n• Regular exercise\n• Proper nutrition\n• Adequate sleep\n• Social interaction outside work\n\nRemote work success isn't just about technical skills - it's about discipline, communication, and maintaining human connections in a digital world.",
      id: "Remote work telah menjadi normal baru bagi banyak developer. Meski menawarkan fleksibilitas dan menghilangkan commute, ini juga menghadirkan tantangan unik. Berikut cara excel sebagai remote developer:\n\n**Setting Up Environment**\n\n**1. Buat Workspace Khusus**\nMemiliki area spesifik untuk kerja membantu maintain boundaries antara kehidupan personal dan profesional. Investasi di kursi bagus, monitor, dan pencahayaan.\n\n**2. Optimisasi Tech Setup**\n• Koneksi internet reliable (pertimbangkan backup option)\n• Headphone berkualitas untuk call\n• External monitor untuk produktivitas lebih baik\n• Keyboard dan mouse ergonomis\n\n**Communication Excellence**\n\n**3. Over-communicate**\nDi setting remote, silence bisa disalahartikan. Update regular, dokumentasi clear, dan komunikasi proaktif mencegah misunderstanding.\n\n**4. Master Async Communication**\nPelajari cara komunikasi efektif melalui written channel. Jadi clear, concise, dan berikan konteks di message Anda.\n\n**Strategi Produktivitas**\n\n**5. Time Management**\n• Gunakan time-blocking technique\n• Ambil break regular (Pomodoro technique)\n• Set waktu mulai dan selesai kerja yang clear\n\n**6. Minimisasi Distraksi**\n• Gunakan website blocker saat focus time\n• Buat signal 'do not disturb' untuk keluarga\n• Simpan phone di ruangan lain\n\n**Kolaborasi dan Team Building**\n\n**7. Partisipasi Aktif**\nJoin virtual coffee chat, team building activity, dan informal conversation. Building relationship crucial untuk remote success.\n\n**8. Gunakan Tools yang Tepat**\n• Version control (Git) best practice\n• Collaborative coding tools (VS Code Live Share)\n• Project management platform (Jira, Trello)\n• Communication tools (Slack, Discord)\n\n**Maintaining Work-Life Balance**\n\n**9. Set Boundaries**\nHanya karena bisa kerja kapan saja tidak berarti harus. Establish working hour yang clear dan stick to them.\n\n**10. Jaga Kesehatan**\n• Exercise regular\n• Nutrisi proper\n• Sleep adequate\n• Social interaction di luar kerja\n\nRemote work success bukan hanya tentang technical skill - ini tentang disiplin, komunikasi, dan maintaining human connection di dunia digital.",
    },
    author: "Lisa Maharani",
    date: "2024-01-12",
    readTime: 10,
    category: {
      en: "Work Culture",
      id: "Budaya Kerja",
    },
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: [
      { en: "Remote Work", id: "Remote Work" },
      { en: "Productivity", id: "Produktivitas" },
      { en: "Work-Life Balance", id: "Work-Life Balance" },
    ],
  },
  {
    id: "5",
    title: {
      en: "Building a Strong Developer Portfolio in 2024",
      id: "Membangun Portfolio Developer yang Kuat di 2024",
    },
    excerpt: {
      en: "Create a portfolio that stands out and showcases your skills effectively to potential employers.",
      id: "Buat portfolio yang menonjol dan showcase skill Anda secara efektif ke potential employer.",
    },
    content: {
      en: "In today's competitive job market, a strong portfolio can be the difference between landing your dream job and getting lost in the pile of applications. Here's how to build a portfolio that gets noticed:\n\n**Portfolio Essentials**\n\n**1. Quality Over Quantity**\nShowcase 3-5 high-quality projects rather than 10 mediocre ones. Each project should demonstrate different skills and technologies.\n\n**2. Tell a Story**\nFor each project, explain:\n• The problem you solved\n• Your approach and decision-making process\n• Technologies used and why\n• Challenges faced and how you overcame them\n• Results and impact\n\n**Project Ideas That Impress**\n\n**3. Real-World Applications**\n• E-commerce platform with payment integration\n• Task management app with real-time collaboration\n• Data visualization dashboard\n• API that solves a genuine problem\n• Mobile app with offline functionality\n\n**4. Open Source Contributions**\nContribute to popular open source projects. This shows you can work with existing codebases and collaborate with other developers.\n\n**Technical Presentation**\n\n**5. Clean, Readable Code**\n• Follow consistent coding standards\n• Include comprehensive comments\n• Use meaningful variable and function names\n• Implement proper error handling\n\n**6. Documentation Excellence**\n• Clear README files with setup instructions\n• API documentation if applicable\n• Architecture diagrams for complex projects\n• Live demo links\n\n**Professional Presentation**\n\n**7. Personal Branding**\n• Professional headshot and bio\n• Consistent design across all platforms\n• Clear contact information\n• Links to GitHub, LinkedIn, and social media\n\n**8. Performance Optimization**\n• Fast loading times\n• Mobile responsiveness\n• SEO optimization\n• Accessibility compliance\n\n**Platforms to Consider**\n\n**9. Multiple Touchpoints**\n• Personal website (primary)\n• GitHub (code repository)\n• LinkedIn (professional network)\n• Behance/Dribbble (for UI/UX work)\n• YouTube (for project walkthroughs)\n\n**Keeping It Current**\n\n**10. Regular Updates**\n• Add new projects quarterly\n• Update technologies and skills\n• Remove outdated projects\n• Refresh design periodically\n\nRemember: Your portfolio is often the first impression you make. Make it count by showcasing not just what you can build, but how you think and solve problems.",
      id: "Di job market yang kompetitif hari ini, portfolio yang kuat bisa jadi perbedaan antara mendapat dream job dan hilang di tumpukan aplikasi. Berikut cara build portfolio yang noticed:\n\n**Portfolio Essential**\n\n**1. Quality Over Quantity**\nShowcase 3-5 project berkualitas tinggi daripada 10 yang mediocre. Setiap project harus demonstrate skill dan teknologi berbeda.\n\n**2. Tell a Story**\nUntuk setiap project, jelaskan:\n• Problem yang Anda solve\n• Approach dan decision-making process\n• Teknologi yang digunakan dan mengapa\n• Challenge yang dihadapi dan cara overcome\n• Result dan impact\n\n**Project Ideas yang Impress**\n\n**3. Real-World Application**\n• E-commerce platform dengan payment integration\n• Task management app dengan real-time collaboration\n• Data visualization dashboard\n• API yang solve genuine problem\n• Mobile app dengan offline functionality\n\n**4. Open Source Contribution**\nKontribusi ke popular open source project. Ini menunjukkan Anda bisa kerja dengan existing codebase dan collaborate dengan developer lain.\n\n**Technical Presentation**\n\n**5. Clean, Readable Code**\n• Follow consistent coding standard\n• Include comprehensive comment\n• Gunakan meaningful variable dan function name\n• Implement proper error handling\n\n**6. Documentation Excellence**\n• Clear README file dengan setup instruction\n• API documentation jika applicable\n• Architecture diagram untuk complex project\n• Live demo link\n\n**Professional Presentation**\n\n**7. Personal Branding**\n• Professional headshot dan bio\n• Consistent design across all platform\n• Clear contact information\n• Link ke GitHub, LinkedIn, dan social media\n\n**8. Performance Optimization**\n• Fast loading time\n• Mobile responsiveness\n• SEO optimization\n• Accessibility compliance\n\n**Platform untuk Dipertimbangkan**\n\n**9. Multiple Touchpoint**\n• Personal website (primary)\n• GitHub (code repository)\n• LinkedIn (professional network)\n• Behance/Dribbble (untuk UI/UX work)\n• YouTube (untuk project walkthrough)\n\n**Keeping It Current**\n\n**10. Regular Update**\n• Tambah project baru quarterly\n• Update teknologi dan skill\n• Remove outdated project\n• Refresh design secara berkala\n\nIngat: Portfolio Anda sering jadi first impression. Make it count dengan showcase bukan hanya apa yang bisa Anda build, tapi bagaimana Anda think dan solve problem.",
    },
    author: "Rizki Pratama",
    date: "2024-01-08",
    readTime: 11,
    category: {
      en: "Career Development",
      id: "Pengembangan Karir",
    },
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: [
      { en: "Portfolio", id: "Portfolio" },
      { en: "Career Tips", id: "Tips Karir" },
      { en: "Personal Branding", id: "Personal Branding" },
    ],
  },
];

// Utility function untuk render markdown-like content
const renderContent = (content: string) => {
  return content.split("\n").map((line, index) => {
    // Handle bold text
    if (line.includes("**")) {
      const parts = line.split("**");
      return (
        <p key={index} className="mb-4 leading-relaxed">
          {parts.map((part, partIndex) => {
            if (partIndex % 2 === 1) {
              return (
                <strong key={partIndex} className="font-bold text-blue-300">
                  {part}
                </strong>
              );
            }
            return part;
          })}
        </p>
      );
    }

    // Handle bullet points
    if (line.trim().startsWith("•")) {
      return (
        <li key={index} className="mb-2 leading-relaxed text-gray-300 ml-4">
          {line.trim().substring(1).trim()}
        </li>
      );
    }

    // Handle empty lines (create spacing)
    if (line.trim() === "") {
      return <div key={index} className="h-4" />;
    }

    // Regular paragraphs
    return (
      <p key={index} className="mb-4 leading-relaxed text-gray-300">
        {line}
      </p>
    );
  });
};

const ArticlesSection: React.FC = () => {
  const { language } = useLanguage();
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const translations = {
    en: {
      title: "Latest Articles",
      subtitle: "Insights and tutorials from our development journey",
      backToList: "Back to Articles",
      readMore: "Read More",
      by: "By",
      minRead: "min read",
      relatedArticles: "Related Articles",
      tags: "Tags",
    },
    id: {
      title: "Artikel Terbaru",
      subtitle: "Wawasan dan tutorial dari perjalanan pengembangan kami",
      backToList: "Kembali ke Artikel",
      readMore: "Baca Selengkapnya",
      by: "Oleh",
      minRead: "menit baca",
      relatedArticles: "Artikel Terkait",
      tags: "Tag",
    },
  };

  const t = translations[language];

  if (selectedArticle) {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key="article-detail"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="min-h-screen bg-gray-900/10 text-white"
        >
          {/* Article Detail */}
          <div className="container mx-auto px-6 py-22">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onClick={() => setSelectedArticle(null)}
              className="flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors group"
            >
              <ChevronLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
              {t.backToList}
            </motion.button>

            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-8"
              >
                <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm mb-4">
                  {selectedArticle.category[language]}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  {selectedArticle.title[language]}
                </h1>

                <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(selectedArticle.date).toLocaleDateString(
                      language === "id" ? "id-ID" : "en-US"
                    )}
                  </div>
                </div>
              </motion.div>

              <motion.img
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                src={selectedArticle.image}
                alt={selectedArticle.title[language]}
                className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="prose prose-invert prose-lg max-w-none"
              >
                <div className="text-lg">
                  {renderContent(selectedArticle.content[language])}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-12 pt-8 border-t border-gray-700"
              >
                <h3 className="text-xl font-semibold mb-4">{t.tags}</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedArticle.tags.map((tag, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                      className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-gray-700 transition-colors"
                    >
                      {tag[language]}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gray-900/10 text-white"
    >
      {/* Header */}
      <div className="container mx-auto px-6 py-22 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          {t.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-400 max-w-2xl mx-auto"
        >
          {t.subtitle}
        </motion.p>
      </div>

      {/* Articles Grid */}
      <div className="container mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockArticles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-600/10 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer group"
              onClick={() => setSelectedArticle(article)}
            >
              <div className="relative overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  src={article.image}
                  alt={article.title[language]}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    {article.category[language]}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-xl font-semibold mb-3 line-clamp-2 group-hover:text-blue-400 transition-colors">
                  {article.title[language]}
                </h2>
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {article.excerpt[language]}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {new Date(article.date).toLocaleDateString(
                      language === "id" ? "id-ID" : "en-US"
                    )}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-blue-400 group-hover:text-blue-300">
                    <span className="mr-2">{t.readMore}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ArticlesSection;
