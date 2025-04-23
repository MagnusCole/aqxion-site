'use client'

import { useI18n } from '../i18n/context'

export default function Hero() {
  const { t } = useI18n()
  
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center bg-primary text-text px-6">
      <div className="max-w-[1080px] mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 text-text">
          {t('hero.title')}
        </h1>
        <p className="text-lg md:text-xl font-sans text-text/80">
          {t('hero.subtitle')}
        </p>
      </div>
    </div>
  );
}