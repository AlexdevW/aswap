import { Locale, useTranslations } from "next-intl"
import { setRequestLocale } from "next-intl/server"
import { use } from "react"
import Link from "next/link"
import Image from "next/image"
import logo from "@/assets/icons/logo.png"

export default function Home({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = use(params)
  const t = useTranslations("HomePage")

  // Enable static rendering
  setRequestLocale(locale)

  return (
    <div className="min-h-screen">
      {/* 顶部英雄区域 */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 animate-bounce p-2">
            <Image
              src={logo}
              alt="Aswap Logo"
              width={60}
              height={60}
              className="rounded-lg bg-transparent"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            {t("title")}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mb-10 text-gray-700 dark:text-gray-300">
            {t("description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 w-full max-w-lg">
            <Link
              href="/swap"
              className="flex-1 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold py-4 px-8 rounded-xl text-center transition-all transform hover:scale-105 shadow-lg"
            >
              {t("swapButton")}
            </Link>

            <Link
              href="/pool"
              className="flex-1 bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white font-semibold py-4 px-8 rounded-xl text-center transition-all transform hover:scale-105 shadow-lg"
            >
              {t("poolButton")}
            </Link>
          </div>
        </div>
      </div>

      {/* 特点区域 */}
      <div className="container mx-auto px-4 py-16 md:py-24">
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
              <p className="text-gray-600 dark:text-gray-300">
                {t("feature1")}
              </p>
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
              <p className="text-gray-600 dark:text-gray-300">
                {t("feature2")}
              </p>
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
              <p className="text-gray-600 dark:text-gray-300">
                {t("feature3")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 底部号召性用语 */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
          {t("ctaTitle")}
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
          {t("ctaDescription")}
        </p>
        <Link
          href="/swap"
          className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-10 rounded-xl text-center transition-all transform hover:scale-105 shadow-lg"
        >
          {t("ctaButton")}
        </Link>
      </div>
    </div>
  )
}
