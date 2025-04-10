import { useTranslations } from "next-intl"
import LinkComponent from "./link-component"
import { SITE_NAME } from "@/config/site"

export default function Footer() {
  const t = useTranslations("HomePage")

  return (
    <footer className="container mx-auto px-4 py-16 text-center">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
        {t("ctaTitle")}
      </h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
        {t("ctaDescription")}
      </p>
      <LinkComponent
        href="/swap"
        className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-10 rounded-xl text-center transition-all transform hover:scale-105 shadow-lg"
      >
        {t("ctaButton")}
      </LinkComponent>
      <div className="mt-16 border-t border-white/50 pt-8 flex justify-between items-center">
        <p className="text-sm text-gray-500 ">
          © {new Date().getFullYear()} {SITE_NAME}.
        </p>
        <LinkComponent
          href="https://github.com/alexdevw/aswap"
          className="text-gray-600 hover:text-gray-900"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
        </LinkComponent>
      </div>
    </footer>
  )
}
