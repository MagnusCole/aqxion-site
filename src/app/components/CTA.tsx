'use client'

import { useI18n } from '../i18n/context'

export default function CTA() {
  const { t } = useI18n()
  
  return (
    <div className="text-center max-w-[1080px] mx-auto">
      <h2 className="text-3xl md:text-4xl font-serif mb-8 text-accent">{t('cta.title')}</h2>
      <div className="max-w-2xl mx-auto">
        <p className="text-lg font-sans mb-6 text-text">{t('cta.content')}</p>
        <a 
          href="mailto:deal@aqxion.com" 
          className="inline-block px-8 py-3 bg-accent text-primary font-sans font-medium rounded hover:opacity-90 transition-opacity ease-out"
        >
          {t('cta.button')}
        </a>
      </div>
    </div>
  );
}