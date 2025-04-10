"use client"

import { motion } from "motion/react"
import { useTranslations } from "next-intl"

export default function Features() {
  const t = useTranslations("HomePage")

  return (
    <motion.section
      initial={{ opacity: 0, y: 400 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="container mx-auto px-4 py-16 md:py-24"
    >
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
          {t("featuresTitle")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-blue-50 dark:bg-gray-700 p-6 rounded-xl hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
              {t("feature1Title")}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{t("feature1")}</p>
          </div>

          <div className="bg-purple-50 dark:bg-gray-700 p-6 rounded-xl hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mb-4 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
              {t("feature2Title")}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{t("feature2")}</p>
          </div>

          <div className="bg-green-50 dark:bg-gray-700 p-6 rounded-xl hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
              {t("feature3Title")}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{t("feature3")}</p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
