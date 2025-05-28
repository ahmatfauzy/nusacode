"use client";

import { motion } from "motion/react";
import { useLanguage } from "../components/context/LanguageContext";
import { Spotlight } from "../components/ui/Spotlight";
import { WobbleCard } from "../components/ui/wobble-card";
import { Timeline } from "../components/ui/timeline";
import { FeaturesSectionDemo } from "../components/ui/features-section";
import {
  // Users,
  Heart,
  // Award,
  Code,
  BookOpen,
  // TrendingUp
} from "lucide-react";

const About = () => {
  const { language } = useLanguage();

  const translations = {
    id: {
      heroTitle: "Tentang NusaCode",
      heroSubtitle:
        "Platform pembelajaran teknologi terdepan yang mengubah cara Indonesia belajar coding",
      ourJourney: "Perjalanan Kami",
      companyValues: "Nilai Perusahaan",
      whyChooseUs: "Mengapa Memilih Kami",
      ourImpact: "Dampak Kami",
      meetTeam: "Tim Kami",
      joinMission: "Bergabung dengan Misi Kami",
      startLearning: "Mulai Belajar",
      contactUs: "Hubungi Kami",
      students: "Siswa",
      courses: "Kursus",
      mentors: "Mentor",
      companies: "Perusahaan Partner",
    },
    en: {
      heroTitle: "About NusaCode",
      heroSubtitle:
        "Leading technology learning platform transforming how Indonesia learns to code",
      ourJourney: "Our Journey",
      companyValues: "Company Values",
      whyChooseUs: "Why Choose Us",
      ourImpact: "Our Impact",
      meetTeam: "Our Team",
      joinMission: "Join Our Mission",
      startLearning: "Start Learning",
      contactUs: "Contact Us",
      students: "Students",
      courses: "Courses",
      mentors: "Mentors",
      companies: "Partner Companies",
    },
  };

  const t = (key: keyof typeof translations.id) => translations[language][key];

  const timelineData = [
    {
      title: "2020",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            {language === "id"
              ? "NusaCode didirikan dengan visi menciptakan ekosistem pembelajaran teknologi yang komprehensif di Indonesia. Dimulai dengan tim kecil yang memiliki passion besar untuk pendidikan teknologi."
              : "NusaCode was founded with a vision to create a comprehensive technology learning ecosystem in Indonesia. Started with a small team with great passion for technology education."}
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              alt="founding team"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              alt="early office"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            {language === "id"
              ? "Peluncuran platform pertama dengan 5 roadmap teknologi utama. Mencapai 1,000 pengguna pertama dan membangun komunitas developer yang solid."
              : "Launch of the first platform with 5 main technology roadmaps. Reached our first 1,000 users and built a solid developer community."}
          </p>
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            alt="platform launch"
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            {language === "id"
              ? "Ekspansi besar-besaran dengan menambahkan 20+ roadmap baru, sistem mentoring, dan partnership dengan perusahaan teknologi terkemuka."
              : "Major expansion by adding 20+ new roadmaps, mentoring system, and partnerships with leading technology companies."}
          </p>
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            alt="team expansion"
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            {language === "id"
              ? "Mencapai 10,000+ siswa aktif. Membuka kantor baru dan memperluas tim ke seluruh Indonesia."
              : "Reached 10,000+ active students. Opened new offices and expanded team across Indonesia."}
          </p>
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            alt="certification program"
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            {language === "id"
              ? "Meraih penghargaan 'Best EdTech Platform Indonesia' dan mencapai milestone 100,000+ graduates yang berhasil berkarir di industri teknologi."
              : "Won 'Best EdTech Platform Indonesia' award and reached the milestone of 100,000+ graduates who successfully built careers in the technology industry."}
          </p>
          <img
            src="https://images.unsplash.com/photo-1559223607-b4d0555ae227?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            alt="award recognition"
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      ),
    },
  ];

  // Features data for Feature Sections
  const featuresData = {
    title: t("whyChooseUs"),
    subtitle:
      language === "id"
        ? "Temukan alasan mengapa ribuan developer memilih NusaCode sebagai platform pembelajaran mereka"
        : "Discover why thousands of developers choose NusaCode as their learning platform",
    features: [
      {
        title:
          language === "id"
            ? "Pembelajaran Interaktif"
            : "Interactive Learning",
        description:
          language === "id"
            ? "Platform dengan teknologi terdepan untuk pengalaman belajar yang engaging dan efektif"
            : "Platform with cutting-edge technology for engaging and effective learning experience",
        icon: <Code className="h-6 w-6" />,
      },
      // {
      //   title: language === "id" ? "Mentor Berpengalaman" : "Experienced Mentors",
      //   description:
      //     language === "id"
      //       ? "Dibimbing langsung oleh praktisi industri dengan pengalaman bertahun-tahun"
      //       : "Guided directly by industry practitioners with years of experience",
      //   icon: <Users className="h-6 w-6" />,
      // },
      {
        title: language === "id" ? "Kurikulum Terkini" : "Latest Curriculum",
        description:
          language === "id"
            ? "Materi pembelajaran yang selalu update mengikuti perkembangan teknologi terbaru"
            : "Learning materials that are always updated following the latest technology developments",
        icon: <BookOpen className="h-6 w-6" />,
      },
      {
        title: language === "id" ? "Komunitas Solid" : "Strong Community",
        description:
          language === "id"
            ? "Bergabung dengan ribuan developer Indonesia yang saling support dan berbagi knowledge"
            : "Join thousands of Indonesian developers who support each other and share knowledge",
        icon: <Heart className="h-6 w-6" />,
      },
      // {
      //   title: language === "id" ? "Sertifikasi Resmi" : "Official Certification",
      //   description:
      //     language === "id"
      //       ? "Dapatkan sertifikat yang diakui industri untuk meningkatkan kredibilitas profesional"
      //       : "Get industry-recognized certificates to enhance professional credibility",
      //   icon: <Award className="h-6 w-6" />,
      // },
      // {
      //   title: language === "id" ? "Job Placement" : "Job Placement",
      //   description:
      //     language === "id"
      //       ? "Program penempatan kerja dengan partner perusahaan teknologi terkemuka"
      //       : "Job placement program with leading technology company partners",
      //   icon: <TrendingUp className="h-6 w-6" />,
      // },
    ],
  };

  return (
    <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      {/* Simple Hero Section */}
      {/* <div className="pt-32 pb-20 w-full">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            {t("heroTitle")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-neutral-300 max-w-3xl mx-auto text-lg md:text-xl"
          >
            {t("heroSubtitle")}
          </motion.p>
        </div>
      </div> */}

      {/* Why Choose Us Section - Feature Sections */}
      <section className="py-30">
        <FeaturesSectionDemo
          title={featuresData.title}
          subtitle={featuresData.subtitle}
          features={featuresData.features}
        />
      </section>

      {/* Company Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-center text-white mb-16"
          >
            {t("companyValues")}
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
            <WobbleCard
              containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
              className=""
            >
              <div className="max-w-xs">
                <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  {language === "id"
                    ? "Inovasi Berkelanjutan"
                    : "Continuous Innovation"}
                </h2>
                <p className="mt-4 text-left text-base/6 text-neutral-200">
                  {language === "id"
                    ? "Kami selalu berinovasi dalam metode pembelajaran dan teknologi untuk memberikan pengalaman terbaik."
                    : "We always innovate in learning methods and technology to provide the best experience."}
                </p>
              </div>
              <img
                src="https://i.pinimg.com/736x/7e/eb/f5/7eebf5652dbf2f07ed5a857a9c8d2bde.jpg"
                width={500}
                height={500}
                alt="innovation"
                className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
              />
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-blue-600">
              <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                {language === "id" ? "Kualitas Terjamin" : "Quality Assured"}
              </h2>
              <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                {language === "id"
                  ? "Setiap konten dan materi pembelajaran melalui quality control yang ketat."
                  : "Every content and learning material goes through strict quality control."}
              </p>
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
              <div className="max-w-sm">
                <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  {language === "id"
                    ? "Komunitas yang Kuat"
                    : "Strong Community"}
                </h2>
                <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                  {language === "id"
                    ? "Membangun ekosistem developer Indonesia yang solid, saling support, dan berkembang bersama."
                    : "Building a solid Indonesian developer ecosystem that supports each other and grows together."}
                </p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                width={500}
                height={500}
                alt="community"
                className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
              />
            </WobbleCard>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-center text-white mb-16"
          >
            {t("ourJourney")}
          </motion.h2>
          <Timeline data={timelineData} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 md:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              {t("joinMission")}
            </h2>
            <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">
              {language === "id"
                ? "Bergabunglah dengan ribuan developer yang telah memulai perjalanan mereka bersama NusaCode."
                : "Join thousands of developers who have started their journey with NusaCode."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/roadmap" className="inline-block">
                <button className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors">
                  {t("startLearning")}
                </button>
              </a>
              {/* <button className="px-8 py-3 border-2 border-gray-300 text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-colors">
                {t("contactUs")}
              </button> */}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
