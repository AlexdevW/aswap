"use client"

import { motion } from "motion/react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import LinkComponent from "./link-component"
import LogoSvg from "@/assets/icons/logo.svg"
import { SITE_NAME } from "@/config/site"

export default function Hero() {
  const t = useTranslations("HomePage")

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col items-center text-center">
        <div className="mb-6 p-2">
          <motion.div
            initial={{ scale: 3 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="z-40 origin-top"
          >
            <Image
              src={LogoSvg}
              alt={`${SITE_NAME} Logo`}
              width={110}
              height={120}
              className="w-20"
            />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 400 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="flex flex-col items-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            {t("title")}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mb-10 text-gray-700 dark:text-gray-300">
            {t("description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 w-full max-w-lg">
            <LinkComponent
              href="/swap"
              className="flex-1 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold py-4 px-8 rounded-xl text-center transition-all transform hover:scale-105 shadow-lg"
            >
              {t("swapButton")}
            </LinkComponent>

            <LinkComponent
              href="/pool"
              className="flex-1 bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white font-semibold py-4 px-8 rounded-xl text-center transition-all transform hover:scale-105 shadow-lg"
            >
              {t("poolButton")}
            </LinkComponent>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
