"use client"
import { motion } from "motion/react"
import { useNavigate } from "react-router-dom"
import { useLanguage } from "../context/LanguageContext"
import { techFields, type RoadmapStep } from "../context/roadmap-data"

export function RoadmapPage() {
  const { language } = useLanguage()
  const navigate = useNavigate()

  const translations = {
    id: {
      title: "Peta Belajar Teknologi",
      subtitle: "Pilih jalur pembelajaran yang sesuai dengan minat dan tujuan karir Anda",
      selectField: "Pilih Bidang",
      duration: "Durasi",
      skills: "Keterampilan",
      getStarted: "Mulai Belajar",
    },
    en: {
      title: "Technology Learning Roadmap",
      subtitle: "Choose a learning path that matches your interests and career goals",
      selectField: "Select Field",
      duration: "Duration",
      skills: "Skills",
      getStarted: "Get Started",
    },
  }

  const t = (key: keyof typeof translations.id) => translations[language][key]

  const handleSelectField = (fieldId: string) => {
    navigate(`/roadmap/${fieldId}`)
  }

  const calculateTotalDuration = (steps: RoadmapStep[]) => {
    // Simple calculation - sum up the months from each step
    const totalMonths = steps.reduce((total, step) => {
      const duration = step.duration
      const months = Number.parseInt(duration.split("-")[1] || duration.split("-")[0])
      return total + months
    }, 0)
    return `${Math.floor(totalMonths * 0.8)}-${totalMonths} ${language === "id" ? "bulan" : "months"}`
  }

  const getTotalSkills = (steps: RoadmapStep[]) => {
    const allSkills = steps.flatMap((step) => step.skills)
    return allSkills.length
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900/10 dark:to-gray-500/10 py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6"
          >
            {t("title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto"
          >
            {t("subtitle")}
          </motion.p>
        </div>

        {/* Tech Fields Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {techFields.map((field, index) => (
            <motion.div
              key={field.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => handleSelectField(field.id)}
            >
              <div className="relative h-full bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${field.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Card Content */}
                <div className="relative p-8 h-full flex flex-col">
                  {/* Icon */}
                  <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {field.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300">
                    {field.title[language]}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-300 mb-6 flex-grow leading-relaxed">
                    {field.description[language]}
                  </p>

                  {/* Stats */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500 dark:text-slate-400">{t("duration")}:</span>
                      <span className="font-semibold text-slate-700 dark:text-slate-200">
                        {calculateTotalDuration(field.steps)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500 dark:text-slate-400">{t("skills")}:</span>
                      <span className="font-semibold text-slate-700 dark:text-slate-200">
                        {getTotalSkills(field.steps)}+ {language === "id" ? "keterampilan" : "skills"}
                      </span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 px-6 rounded-xl font-semibold text-white bg-gradient-to-r ${field.color} hover:shadow-lg transition-all duration-300 transform group-hover:translate-y-[-2px]`}
                  >
                    {t("getStarted")}
                  </motion.button>
                </div>

                {/* Hover Effect Border */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r ${field.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  style={{
                    background: `linear-gradient(white, white) padding-box, linear-gradient(to right, var(--tw-gradient-stops)) border-box`,
                    backgroundClip: "padding-box, border-box",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            {language === "id"
              ? "Tidak yakin mana yang harus dipilih? Mulai dengan Web Development untuk fondasi yang kuat!"
              : "Not sure which one to choose? Start with Web Development for a solid foundation!"}
          </p>
          <button
            onClick={() => handleSelectField("web-development")}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            {language === "id" ? "Mulai dengan Web Development" : "Start with Web Development"}
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </motion.div>
      </div>
    </div>
  )
}
