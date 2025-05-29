"use client";

import { motion } from "motion/react";
import { ArrowRight, Code, Zap, Users, BookOpen } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function HeroSection() {
  const { language } = useLanguage();

  // Content for both languages
  const heroContent = {
    id: {
      title: "Jelajahi Roadmap Developer Terlengkap",
      subtitle:
        "Temukan alur belajar terstruktur untuk menjadi Web Developer, DevOps, Mobile Developer, dan banyak lagi. Semua dalam satu tempat.",
      cta: "Lihat Roadmap",
      features: [
        { icon: Code, text: "Visual Interaktif" },
        { icon: BookOpen, text: "Materi Terorganisir" },
        { icon: Zap, text: "Bebas & Gratis" },
        { icon: Users, text: "Update Berkala" },
      ],
      stats: [
        { number: "20+", label: "Roadmap" },
        { number: "100K+", label: "Pengguna" },
        { number: "24/7", label: "Akses" },
      ],
    },
    en: {
      title: "Explore Complete Developer Roadmaps",
      subtitle:
        "Discover structured learning paths to become a Web Developer, DevOps, Mobile Developer, and more — all in one place.",
      cta: "View Roadmap",
      features: [
        { icon: Code, text: "Interactive Visuals" },
        { icon: BookOpen, text: "Organized Materials" },
        { icon: Zap, text: "Free & Open" },
        { icon: Users, text: "Regularly Updated" },
      ],
      stats: [
        { number: "20+", label: "Roadmaps" },
        { number: "100K+", label: "Users" },
        { number: "24/7", label: "Access" },
      ],
    },
  };

  const content = language === "id" ? heroContent.id : heroContent.en;

  return (
    <section className="relative w-full min-h-screen text-white overflow-hidden lg:flex lg:items-center lg:pt-10">
      {/* Background - keeping original transparent style */}
      <div className="absolute inset-0" style={{ background: "transparent" }} />

      {/* Subtle background effects - very minimal */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10 w-full py-8 lg:py-0 lg:h-full lg:flex lg:items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full pt-16 pb-8 lg:pt-0 lg:pb-0">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col space-y-6 order-1"
          >
            {/* Title */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent"
              >
                {content.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl"
              >
                {content.subtitle}
              </motion.p>
            </div>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 gap-3"
            >
              {content.features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                  >
                    <IconComponent className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span className="text-sm font-medium">{feature.text}</span>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex flex-wrap gap-6 py-3"
            >
              {content.stats.map((stat, index) => (
                <div key={index} className=" text-center">
                  <div className="text-xl  md:text-2xl font-bold text-blue-400">
                    {stat.number}
                  </div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="pt-2"
            >
              <motion.a
                href="/roadmap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 group"
              >
                {content.cta}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex items-center justify-center order-2 mt-15 lg:mt-0 mb-8 lg:mb-0"
          >
            <div className="relative w-full max-w-lg">
              {/* Main Image Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src="https://i.pinimg.com/736x/ae/49/39/ae49390647f774e1f9ebb56147ac2e82.jpg"
                  alt={
                    language === "id"
                      ? "Ilustrasi pengembangan web"
                      : "Web development illustration"
                  }
                  className="w-full h-auto"
                />
              </motion.div>

              {/* Floating Code Snippets */}
              <motion.div
                initial={{ opacity: 0, y: -20, rotate: 0 }}
                animate={{ opacity: 1, y: 0, rotate: 3 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="absolute top-6 -right-2 lg:top-2 lg:-right-4 z-20"
              >
                <div className="bg-gray-900/90 backdrop-blur-sm p-2 rounded-lg shadow-xl border border-blue-500/30">
                  <pre className="text-[10px] text-blue-400 font-mono">
                    <code>{`function hello() {\n  return "world";\n}`}</code>
                  </pre>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20, rotate: 0 }}
                animate={{ opacity: 1, y: 0, rotate: -3 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute -bottom-2 -left-2 lg:-bottom-4 lg:-left-4 z-20"
              >
                <div className="bg-gray-900/90 backdrop-blur-sm p-2 rounded-lg shadow-xl border border-green-500/30">
                  <pre className="text-[10px] text-green-400 font-mono">
                    <code>{`<div className="hero">\n  Hello World!\n</div>`}</code>
                  </pre>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute top-1/4 -left-8 w-16 h-16 bg-blue-500/10 rounded-full blur-xl"
              />

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-1/4 -right-8 w-12 h-12 bg-purple-500/10 rounded-full blur-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
