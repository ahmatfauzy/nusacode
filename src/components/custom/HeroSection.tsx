"use client";
import { useLanguage } from "../context/LanguageContext";

export function HeroSection() {
  const { language } = useLanguage();

  // Content for both languages
  const heroContent = {
    id: {
      title: "Jelajahi Roadmap Developer Terlengkap",
      subtitle:
        "Temukan alur belajar terstruktur untuk menjadi Frontend, Backend, DevOps, Mobile Developer, dan banyak lagi. Semua dalam satu tempat.",
      cta: "Lihat Roadmap",
      features: [
        "Visual Interaktif",
        "Materi Terorganisir",
        "Bebas & Gratis",
        "Update Berkala",
      ],
    },
    en: {
      title: "Explore Complete Developer Roadmaps",
      subtitle:
        "Discover structured learning paths to become a Frontend, Backend, DevOps, Mobile Developer, and more — all in one place.",
      cta: "View Roadmap",
      features: [
        "Interactive Visuals",
        "Organized Materials",
        "Free & Open",
        "Regularly Updated",
      ],
    },
  };

  // Get content based on current language
  const content = language === "id" ? heroContent.id : heroContent.en;

  // Add console log for debugging
  console.log("HeroSection rendering, language:", language);

  return (
    <section
      className="w-full py-15 text-white overflow-hidden border-t border-gray-800 md:py-15"
      style={{ marginTop: "2rem", background: "transparent" }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="flex flex-col space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                {content.title}
              </h1>
              <p className="text-xl text-gray-300">{content.subtitle}</p>
            </div>

            <div className="space-y-4">
              <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
                {content.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4">
              <a
                href="/roadmap"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                {content.cta}
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative h-full flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              {/* Image container without background */}
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/Programming-bro.svg"
                  alt={
                    language === "id"
                      ? "Ilustrasi pengembangan web"
                      : "Web development illustration"
                  }
                  className="w-full h-auto"
                />
              </div>

              {/* Floating code snippets - closer to the image */}
              <div className="absolute top-2 right-2 bg-transparent p-1 rounded shadow-lg transform rotate-3 z-10 block">
                <pre className="text-[11px] text-blue-400 bg-gray-900 p-2 rounded-md">
                  <code>{`function hello() {\n  return "world";\n}`}</code>
                </pre>
              </div>

              <div className="absolute bottom-2 left-2 bg-transparent p-1 rounded shadow-lg transform -rotate-3 z-10 block">
                <pre className="text-[11px] text-green-400 bg-gray-900 p-2 rounded-md">
                  <code>{`<div className="hero">\n  Hello World!\n</div>`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
