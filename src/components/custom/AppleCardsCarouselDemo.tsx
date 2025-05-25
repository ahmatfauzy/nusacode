"use client"

import { Carousel, Card } from "../ui/apple-cards-carousel"
import { useLanguage } from "../context/LanguageContext"

export function AppleCardsCarouselDemo() {
  const { language } = useLanguage()

  const localizedData = getLocalizedData(language)

  const cards = localizedData.map((card, index) => <Card key={card.src} card={card} index={index} />)

  return (
    <div className="w-full h-full py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
          <h2 className="text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans mb-4 md:mb-0">
            {language === "id" ? "Temukan Jalur Belajarmu di Dunia Teknologi." : "Discover Your Learning Path in Tech."}
          </h2>
          <a
            href="/roadmap"
            className="text-lg font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline underline-offset-4 hover:underline-offset-2 transition-all duration-200"
          >
            {language === "id" ? "Lihat semua →" : "View all →"}
          </a>
        </div>
      </div>
      <Carousel items={cards} />
    </div>
  )
}

const DummyContent = ({
  title,
  lang,
  roadmapId,
}: {
  title: string
  lang: "id" | "en"
  roadmapId: string
}) => {
  const description =
    lang === "id"
      ? ` adalah salah satu jalur populer dalam dunia teknologi. Di Nusacode, kamu bisa mengikuti roadmap lengkap untuk menguasainya — mulai dari dasar hingga siap kerja.`
      : ` is one of the most popular career paths in tech. At Nusacode, you can follow a complete roadmap to master it — from the basics to job-ready skills.`

  const buttonText = lang === "id" ? "Mulai Roadmap" : "Start Roadmap"

  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 relative">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">{title}</span> {description}
      </p>

      {/* Button positioned at bottom right */}
      <div className="flex justify-end">
        <a
          href={`/roadmap/${roadmapId}`}
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 group"
        >
          {buttonText}
          <svg
            className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </div>
  )
}

function getLocalizedData(lang: "id" | "en") {
  const items = [
    {
      id: "web-development",
      displayId: "web",
      img: "https://i.pinimg.com/736x/a9/0a/ae/a90aae559c3a51827a66411e77ab90e3.jpg",
    },
    {
      id: "mobile-development",
      displayId: "mobile",
      img: "https://i.pinimg.com/736x/88/b1/fc/88b1fcd1080488b2c18265ff083a6adf.jpg",
    },
    {
      id: "data-science",
      displayId: "data",
      img: "https://i.pinimg.com/736x/49/41/25/4941258842f77827937365c8db712e9b.jpg",
    },
    {
      id: "devops",
      displayId: "devops",
      img: "https://i.pinimg.com/736x/ec/87/08/ec8708762c834ac8124c74ebaf2ce346.jpg",
    },
  ]

  const text = {
    id: {
      web: "Jalur Menjadi Web Developer",
      mobile: "Jalur Menjadi Mobile Developer",
      data: "Jalur Menjadi Data Science",
      devops: "Jalur Menjadi DevOps",
    },
    en: {
      web: "Path to Become a Web Developer",
      mobile: "Path to Become a Mobile Developer",
      data: "Path to Become a Data Science",
      devops: "Path to Become a DevOps Engineer",
    },
  }

  return items.map((item) => ({
    category: "", 
    title: text[lang][item.displayId as keyof (typeof text)["id"]],
    src: item.img,
    content: (
      <DummyContent title={text[lang][item.displayId as keyof (typeof text)["id"]]} lang={lang} roadmapId={item.id} />
    ),
  }))
}
