import React, { useState } from "react";
import { ChevronLeft, Calendar, Clock, User, ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

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
      en: "Complete Guide to Web Development",
      id: "Panduan Lengkap Web Development",
    },
    excerpt: {
      en: "Learn the fundamentals of modern web development from HTML to advanced frameworks.",
      id: "Pelajari dasar-dasar pengembangan web modern dari HTML hingga framework canggih.",
    },
    content: {
      en: "Web development has evolved tremendously over the past decade. From simple static websites to complex web applications, the landscape continues to grow and adapt to new technologies and user expectations...",
      id: "Pengembangan web telah berkembang pesat dalam dekade terakhir. Dari website statis sederhana hingga aplikasi web yang kompleks, lanskap terus berkembang dan beradaptasi dengan teknologi baru dan ekspektasi pengguna...",
    },
    author: "Iqbal",
    date: "2024-01-15",
    readTime: 8,
    category: {
      en: "Web Development",
      id: "Pengembangan Web",
    },
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: [
      { en: "HTML", id: "HTML" },
      { en: "CSS", id: "CSS" },
      { en: "JavaScript", id: "JavaScript" },
    ],
  },
  {
    id: "2",
    title: {
      en: "Mobile App Development Best Practices",
      id: "Best Practice Pengembangan Aplikasi Mobile",
    },
    excerpt: {
      en: "Discover the essential practices for building successful mobile applications.",
      id: "Temukan praktik penting untuk membangun aplikasi mobile yang sukses.",
    },
    content: {
      en: "Mobile app development requires careful consideration of user experience, performance, and platform-specific guidelines. This comprehensive guide covers everything you need to know...",
      id: "Pengembangan aplikasi mobile memerlukan pertimbangan yang cermat terhadap pengalaman pengguna, performa, dan pedoman khusus platform. Panduan komprehensif ini mencakup semua yang perlu Anda ketahui...",
    },
    author: "Putra",
    date: "2024-01-10",
    readTime: 12,
    category: {
      en: "Mobile Development",
      id: "Pengembangan Mobile",
    },
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: [
      { en: "React Native", id: "React Native" },
      { en: "Flutter", id: "Flutter" },
      { en: "Mobile UI", id: "Mobile UI" },
    ],
  },
  {
    id: "3",
    title: {
      en: "Data Analysis with Python",
      id: "Analisis Data dengan Python",
    },
    excerpt: {
      en: "Master data analysis techniques using Python and popular libraries.",
      id: "Kuasai teknik analisis data menggunakan Python dan library populer.",
    },
    content: {
      en: "Python has become the go-to language for data analysis and machine learning. With powerful libraries like Pandas, NumPy, and Matplotlib, you can perform complex data operations...",
      id: "Python telah menjadi bahasa pilihan untuk analisis data dan machine learning. Dengan library yang powerful seperti Pandas, NumPy, dan Matplotlib, Anda dapat melakukan operasi data yang kompleks...",
    },
    author: "Fauzi",
    date: "2024-01-05",
    readTime: 15,
    category: {
      en: "Data Science",
      id: "Data Science",
    },
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: [
      { en: "Python", id: "Python" },
      { en: "Pandas", id: "Pandas" },
      { en: "Data Visualization", id: "Visualisasi Data" },
    ],
  },
];

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
      <div className="min-h-screen bg-gray-900/10 text-white">
        {/* Article Detail */}
        <div className="container mx-auto px-6 py-22">
          <button
            onClick={() => setSelectedArticle(null)}
            className="flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            {t.backToList}
          </button>

          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm mb-4">
                {selectedArticle.category[language]}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {selectedArticle.title[language]}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  {t.by} {selectedArticle.author}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(selectedArticle.date).toLocaleDateString(
                    language === "id" ? "id-ID" : "en-US"
                  )}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {selectedArticle.readTime} {t.minRead}
                </div>
              </div>
            </div>

            <img
              src={selectedArticle.image}
              alt={selectedArticle.title[language]}
              className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
            />

            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-xl leading-relaxed mb-8 text-gray-300">
                {selectedArticle.content[language]}
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-700">
              <h3 className="text-xl font-semibold mb-4">{t.tags}</h3>
              <div className="flex flex-wrap gap-2">
                {selectedArticle.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm"
                  >
                    {tag[language]}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900/10 text-white">
      {/* Header */}
      <div className="container mx-auto px-6 py-22 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">{t.title}</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">{t.subtitle}</p>
      </div>

      {/* Articles Grid */}
      <div className="container mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockArticles.map((article) => (
            <article
              key={article.id}
              className="bg-gray-600/10 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer group"
              onClick={() => setSelectedArticle(article)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title[language]}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
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

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>
                    {t.by} {article.author}
                  </span>
                  <span>
                    {article.readTime} {t.minRead}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {new Date(article.date).toLocaleDateString(
                      language === "id" ? "id-ID" : "en-US"
                    )}
                  </span>
                  <div className="flex items-center text-blue-400 group-hover:text-blue-300">
                    <span className="mr-2">{t.readMore}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlesSection;
