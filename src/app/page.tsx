"use client";

import { useTranslation } from "@/translations/provider";

export default function Home() {
  const { lang, translations, changeLanguage } = useTranslation();
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      {/* <h1 className="text-main font-bold text-8xl">Hello world!</h1> */}
      <div>
        <h1>{translations.welcome}</h1>
        <button onClick={() => changeLanguage("ar")}>
          {translations.change_language}
        </button>
        <br />
        <button onClick={() => changeLanguage("en")}>English</button>
        <br />
        <button onClick={() => changeLanguage("ar")}>عربي</button>
      </div>
    </div>
  );
}
