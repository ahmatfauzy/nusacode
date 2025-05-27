import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

const translations = {
  id: {
    joinMission: "Bergabunglah dalam Misi Kami",
    startLearning: "Mulai Belajar",
    contactUs: "Hubungi Kami",
  },
  en: {
    joinMission: "Join Our Mission",
    startLearning: "Start Learning",
    contactUs: "Contact Us",
  },
};

function CTA() {
  const { language } = useLanguage();
  
  const t = (key: keyof typeof translations.id) => translations[language][key];

  return (
    <>
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
    </>
  );
}

export default CTA;
