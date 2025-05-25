"use client"
import { motion } from "motion/react"
import { useParams, useNavigate } from "react-router-dom"
import { useLanguage } from "../context/LanguageContext"
import { Timeline } from "../ui/timeline"
import { techFields } from "../context/roadmap-data"

export function RoadmapDetail() {
  const { language } = useLanguage()
  const { fieldId } = useParams<{ fieldId: string }>()
  const navigate = useNavigate()

  const field = techFields.find((f) => f.id === fieldId)

  const handleBack = () => {
    navigate("/roadmap")
  }

  if (!field) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            {language === "id" ? "Bidang tidak ditemukan" : "Field not found"}
          </h2>
          <button
            onClick={handleBack}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            {language === "id" ? "Kembali" : "Go Back"}
          </button>
        </div>
      </div>
    )
  }

  const translations = {
    id: {
      backToRoadmap: "Kembali ke Peta Belajar",
      roadmapFor: "Peta Belajar untuk",
      overview: "Gambaran Umum",
      totalDuration: "Total Durasi",
      totalSteps: "Total Langkah",
      skills: "Keterampilan",
      duration: "Durasi",
      keySkills: "Keterampilan Utama",
      months: "bulan",
      steps: "langkah",
    },
    en: {
      backToRoadmap: "Back to Roadmap",
      roadmapFor: "Roadmap for",
      overview: "Overview",
      totalDuration: "Total Duration",
      totalSteps: "Total Steps",
      skills: "Skills",
      duration: "Duration",
      keySkills: "Key Skills",
      months: "months",
      steps: "steps",
    },
  }

  const t = (key: keyof typeof translations.id) => translations[language][key]

  const calculateTotalDuration = (steps: { duration: string }[]) => {
    const totalMonths = steps.reduce((total, step) => {
      const duration = step.duration
      const months = Number.parseInt(duration.split("-")[1] || duration.split("-")[0])
      return total + months
    }, 0)
    return `${Math.floor(totalMonths * 0.8)}-${totalMonths}`
  }

  const timelineData = field.steps.map((step) => ({
    title: step.title[language],
    content: (
      <div className="space-y-6">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{step.content[language]}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
              {t("duration")}
            </h4>
            <p className="text-slate-600 dark:text-slate-300 font-medium">{step.duration}</p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
              {t("keySkills")}
            </h4>
            <div className="flex flex-wrap gap-2">
              {step.skills.slice(0, 3).map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-3 py-1 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium border border-slate-200 dark:border-slate-600"
                >
                  {skill}
                </span>
              ))}
              {step.skills.length > 3 && (
                <span className="px-3 py-1 bg-slate-200 dark:bg-slate-600 text-slate-600 dark:text-slate-400 rounded-full text-sm">
                  +{step.skills.length - 3} {language === "id" ? "lainnya" : "more"}
                </span>
              )}
            </div>
          </div>
        </div>

        {step.skills.length > 3 && (
          <div className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-xl p-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">
              {language === "id" ? "Semua Keterampilan:" : "All Skills:"}
            </h4>
            <div className="flex flex-wrap gap-2">
              {step.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-3 py-1 bg-white dark:bg-slate-600 text-slate-700 dark:text-slate-200 rounded-full text-sm font-medium border border-slate-200 dark:border-slate-500 hover:border-blue-300 dark:hover:border-blue-400 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    ),
  }))

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 ">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 py-22">
        <div className="container mx-auto px-4 md:px-8 lg:px-10">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={handleBack}
            className="flex items-center text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors mb-8 group"
          >
            <svg
              className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t("backToRoadmap")}
          </motion.button>

          <div className="flex items-start gap-6">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-6xl">
              {field.icon}
            </motion.div>

            <div className="flex-1">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4"
              >
                {t("roadmapFor")} {field.title[language]}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-slate-600 dark:text-slate-300 mb-6 max-w-3xl"
              >
                {field.description[language]}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-6"
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-slate-600 dark:text-slate-300">
                    {t("totalDuration")}:{" "}
                    <strong>
                      {calculateTotalDuration(field.steps)} {t("months")}
                    </strong>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-slate-600 dark:text-slate-300">
                    {t("totalSteps")}:{" "}
                    <strong>
                      {field.steps.length} {t("steps")}
                    </strong>
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <Timeline data={timelineData} />
    </div>
  )
}
