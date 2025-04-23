'use client'

import { useI18n } from '../i18n/context'

export default function Manifesto() {
  const { t } = useI18n()
  
  return (
    <div className="text-center max-w-[1080px] mx-auto">
      <h2 className="text-3xl md:text-4xl font-serif mb-8 text-accent">{t('manifesto.title')}</h2>
      <p className="text-lg leading-relaxed font-sans text-text max-w-3xl mx-auto">
        {t('manifesto.content')}
      </p>
    </div>
  );
}