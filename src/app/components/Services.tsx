'use client'

import { useI18n } from '../i18n/context'

export default function Services() {
  const { t } = useI18n()
  
  return (
    <div className="text-center max-w-[1080px] mx-auto">
      <h2 className="text-3xl md:text-4xl font-serif mb-8 text-accent">{t('services.title')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 border border-accent rounded-lg hover:bg-accent/5 transition-opacity ease-out">
          <p className="text-lg font-sans text-text">{t('services.item1')}</p>
        </div>
        <div className="p-6 border border-accent rounded-lg hover:bg-accent/5 transition-opacity ease-out">
          <p className="text-lg font-sans text-text">{t('services.item2')}</p>
        </div>
        <div className="p-6 border border-accent rounded-lg hover:bg-accent/5 transition-opacity ease-out">
          <p className="text-lg font-sans text-text">{t('services.item3')}</p>
        </div>
      </div>
    </div>
  );
}