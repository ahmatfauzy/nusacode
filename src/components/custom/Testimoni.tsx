import { useLanguage } from "../context/LanguageContext";

const TestimonialSection = () => {
  const { language } = useLanguage();

  // Translations
  const translations = {
    id: {
      title: "Apa Kata Pengguna Kami",
      subtitle:
        "Bergabunglah dengan ribuan developer yang telah mengubah karir mereka dengan jalur pembelajaran terstruktur NusaCode.",
      testimonials: [
        {
          id: 1,
          name: "Ahmad Rizky",
          role: "Full Stack Developer",
          company: "Tech Startup",
          image:
            "https://i.pinimg.com/736x/8a/e9/e9/8ae9e92fa4e69967aa61bf2bda967b7b.jpg",
          content:
            "NusaCode membantu saya bertransisi dari pemula total menjadi mendapatkan pekerjaan developer pertama dalam 8 bulan. Roadmap-nya sangat detail dan praktis.",
        },
        {
          id: 2,
          name: "Sari Dewi",
          role: "Frontend Developer",
          company: "Digital Agency",
          image:
            "https://i.pinimg.com/736x/8a/e9/e9/8ae9e92fa4e69967aa61bf2bda967b7b.jpg",
          content:
            "Pendekatan pembelajaran interaktif membuat konsep rumit menjadi mudah dipahami. Sekarang saya percaya diri dengan React dan membangun aplikasi web modern.",
        },
        {
          id: 3,
          name: "Budi Santoso",
          role: "Mobile Developer",
          company: "E-commerce Platform",
          image:
            "https://i.pinimg.com/736x/8a/e9/e9/8ae9e92fa4e69967aa61bf2bda967b7b.jpg",
          content:
            "Dari nol pengetahuan mobile development hingga menerbitkan aplikasi pertama di Play Store. Roadmap mobile NusaCode komprehensif dan selalu update.",
        },
        {
          id: 4,
          name: "Maya Putri",
          role: "Data Analyst",
          company: "Fintech Company",
          image:
            "https://i.pinimg.com/736x/8a/e9/e9/8ae9e92fa4e69967aa61bf2bda967b7b.jpg",
          content:
            "Roadmap data science membimbing saya langkah demi langkah. Sekarang saya bekerja dengan model machine learning dan membuat keputusan berbasis data setiap hari.",
        },
        {
          id: 5,
          name: "Eko Prasetyo",
          role: "DevOps Engineer",
          company: "Cloud Solutions",
          image:
            "https://i.pinimg.com/736x/8a/e9/e9/8ae9e92fa4e69967aa61bf2bda967b7b.jpg",
          content:
            "Roadmap DevOps NusaCode mencakup semua dari Docker hingga Kubernetes. Sangat mempersiapkan saya untuk peran saat ini di infrastruktur cloud.",
        },
        {
          id: 6,
          name: "Linda Hartono",
          role: "UI/UX Designer",
          company: "Design Studio",
          image:
            "https://i.pinimg.com/736x/8a/e9/e9/8ae9e92fa4e69967aa61bf2bda967b7b.jpg",
          content:
            "Prinsip desain dan tools modern yang dibahas dalam roadmap membantu saya menciptakan user experience yang lebih baik dan mendapatkan pekerjaan impian.",
        },
      ],
    },
    en: {
      title: "What Our Users Say",
      subtitle:
        "Join thousands of developers who have transformed their careers with NusaCode's structured learning paths.",
      testimonials: [
        {
          id: 1,
          name: "Ahmad Rizky",
          role: "Full Stack Developer",
          company: "Tech Startup",
          image:
            "https://i.pinimg.com/736x/8a/e9/e9/8ae9e92fa4e69967aa61bf2bda967b7b.jpg",
          content:
            "NusaCode helped me transition from a complete beginner to landing my first developer job in just 8 months. The roadmaps are incredibly detailed and practical.",
        },
        {
          id: 2,
          name: "Sari Dewi",
          role: "Frontend Developer",
          company: "Digital Agency",
          image:
            "https://i.pinimg.com/736x/8a/e9/e9/8ae9e92fa4e69967aa61bf2bda967b7b.jpg",
          content:
            "The interactive learning approach made complex concepts easy to understand. I'm now confident in React and building modern web applications.",
        },
        {
          id: 3,
          name: "Budi Santoso",
          role: "Mobile Developer",
          company: "E-commerce Platform",
          image:
            "https://i.pinimg.com/736x/8a/e9/e9/8ae9e92fa4e69967aa61bf2bda967b7b.jpg",
          content:
            "From zero mobile development knowledge to publishing my first app on Play Store. NusaCode's mobile roadmap is comprehensive and up-to-date.",
        },
        {
          id: 4,
          name: "Maya Putri",
          role: "Data Analyst",
          company: "Fintech Company",
          image:
            "https://i.pinimg.com/736x/8a/e9/e9/8ae9e92fa4e69967aa61bf2bda967b7b.jpg",
          content:
            "The data science roadmap guided me step by step. Now I'm working with machine learning models and making data-driven decisions daily.",
        },
        {
          id: 5,
          name: "Eko Prasetyo",
          role: "DevOps Engineer",
          company: "Cloud Solutions",
          image:
            "https://i.pinimg.com/736x/8a/e9/e9/8ae9e92fa4e69967aa61bf2bda967b7b.jpg",
          content:
            "NusaCode's DevOps roadmap covered everything from Docker to Kubernetes. It perfectly prepared me for my current role in cloud infrastructure.",
        },
        {
          id: 6,
          name: "Linda Hartono",
          role: "UI/UX Designer",
          company: "Design Studio",
          image:
            "https://i.pinimg.com/736x/8a/e9/e9/8ae9e92fa4e69967aa61bf2bda967b7b.jpg",
          content:
            "The design principles and modern tools covered in the roadmap helped me create better user experiences and land my dream design job.",
        },
      ],
    },
  };

  const currentTranslation = translations[language];

  // Duplicate testimonials 3 times for seamless loop
  const tripleTestimonials = [
    ...currentTranslation.testimonials,
    ...currentTranslation.testimonials,
    ...currentTranslation.testimonials,
  ];

  return (
    <section className=" py-20 bg-gray-700/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {currentTranslation.title}
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            {currentTranslation.subtitle}
          </p>
        </div>

        {/* Infinite Scroll Container */}
        <div className="relative overflow-hidden">
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#090b0c] via-gray-700/10 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#090b0c] via-gray-700/10 to-transparent z-10 pointer-events-none"></div>

          <div className="flex animate-infinite-scroll">
            {tripleTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="flex-shrink-0 w-96 bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-blue-500 transition-colors duration-300 mx-3"
              >
                {/* Testimonial content */}
                <div className="mb-6">
                  <p className="text-gray-300 text-base leading-relaxed">
                    "{testimonial.content}"
                  </p>
                </div>

                {/* User info */}
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-white font-semibold text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    <p className="text-blue-400 text-xs">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes infinite-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
        
        .animate-infinite-scroll {
          animation: infinite-scroll 60s linear infinite;
          width: calc(408px * 18); /* (396px card width + 12px margin) * 18 cards */
        }
        
        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TestimonialSection;
