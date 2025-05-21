"use client";

import { Carousel, Card } from "../ui/apple-cards-carousel";
import { useLanguage } from "../context/LanguageContext"; 

export function AppleCardsCarouselDemo() {
  const { language } = useLanguage();

  const localizedData = getLocalizedData(language);

  const cards = localizedData.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        {language === "id"
          ? "Temukan Jalur Belajarmu di Dunia Teknologi."
          : "Discover Your Learning Path in Tech."}
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = ({
  title,
  lang,
}: {
  title: string;
  lang: "id" | "en";
}) => {
  const description =
    lang === "id"
      ? ` adalah salah satu jalur populer dalam dunia teknologi. Di Nusacode, kamu bisa mengikuti roadmap lengkap untuk menguasainya — mulai dari dasar hingga siap kerja.`
      : ` is one of the most popular career paths in tech. At Nusacode, you can follow a complete roadmap to master it — from the basics to job-ready skills.`;

  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          {title}
        </span>{" "}
        {description}
      </p>
      {/* <img
        src="https://assets.aceternity.com/macbook.png"
        alt={title}
        height="500"
        width="500"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
      /> */}
    </div>
  );
};

function getLocalizedData(lang: "id" | "en") {
  const items = [
    {
      id: "web",
      img: "https://i.pinimg.com/736x/a9/0a/ae/a90aae559c3a51827a66411e77ab90e3.jpg",
    },
    {
      id: "mobile",
      img: "https://i.pinimg.com/736x/88/b1/fc/88b1fcd1080488b2c18265ff083a6adf.jpg",
    },
    {
      id: "data",
      img: "https://i.pinimg.com/736x/49/41/25/4941258842f77827937365c8db712e9b.jpg",
    },
    {
      id: "devops",
      img: "https://i.pinimg.com/736x/e3/fb/11/e3fb11f24770b83f500a7f8964bf9836.jpg",
    },
    {
      id: "ml",
      img: "https://i.pinimg.com/736x/ec/87/08/ec8708762c834ac8124c74ebaf2ce346.jpg",
    },
  ];

  const text = {
    id: {
      web: "Jalur Menjadi Web Developer",
      mobile: "Jalur Menjadi Mobile Developer",
      data: "Jalur Menjadi Data Analyst",
      devops: "Jalur Menjadi DevOps Engineer",
      ml: "Jalur Menjadi Machine Learning Engineer",
    },
    en: {
      web: "Path to Become a Web Developer",
      mobile: "Path to Become a Mobile Developer",
      data: "Path to Become a Data Analyst",
      devops: "Path to Become a DevOps Engineer",
      ml: "Path to Become a Machine Learning Engineer",
    },
  };

  return items.map((item) => ({
    category: item.id,
    title: text[lang][item.id as keyof (typeof text)["id"]],
    src: item.img,
    content: (
      <DummyContent
        title={text[lang][item.id as keyof (typeof text)["id"]]}
        lang={lang}
      />
    ),
  }));
}
