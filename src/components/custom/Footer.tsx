"use client";

import { useLanguage } from "../context/LanguageContext";
// import { FaCode } from "react-icons/fa";

export default function Footer() {
  const { language } = useLanguage();

  const navItems = [
    { id: "home", href: "/" },
    { id: "roadmap", href: "/roadmap" },
    { id: "articles", href: "/articles" },
    { id: "about", href: "/about" },
  ];

  const labels = {
    id: {
      home: "Beranda",
      roadmap: "Peta Belajar",
      articles: "Artikel",
      about: "Tentang",
      copyright: "ICONFEST 2025",
    },
    en: {
      home: "Home",
      roadmap: "Roadmap",
      articles: "Articles",
      about: "About",
      copyright: "iCONFEST 2025",
    },
  };

  return (
    <footer className="w-full border-t bg-white dark:bg-black border-neutral-200 dark:border-neutral-600 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* logo */}
        <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-200">
          <img className="h-8" src="/NusaCode-logo.png" alt="Logo" />
          <span className="text-lg font-semibold">Nusa Code</span>
        </div>

        {/* Navigation */}
        <nav className="flex gap-6 text-sm md:text-base text-neutral-600 dark:text-neutral-400">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              {labels[language][item.id as keyof (typeof labels)["id"]]}
            </a>
          ))}
        </nav>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-xs text-neutral-500 dark:text-neutral-400">
        © {new Date().getFullYear()} by <span className="font-semibold">Semates</span> - {labels[language].copyright}
      </div>
    </footer>
  );
}
