'use client'

import { useI18n } from '../i18n/context'

export default function Contact() {
  const { t } = useI18n()
  
  return (
    <div className="text-center max-w-[1080px] mx-auto">
      <h2 className="text-3xl md:text-4xl font-serif mb-6 text-accent">{t('contact.title')}</h2>
      <div className="mb-4">
        <p className="font-medium font-sans text-text">{t('contact.role')}</p>
        <p className="text-sm font-sans text-text/70 mt-1">{t('contact.locations')}</p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4">
        <a href="mailto:deal@aqxion.com" className="text-accent hover:underline transition-opacity ease-out">deal@aqxion.com</a>
        <span className="hidden md:inline text-text">|</span>
        <a href="tel:+51914743214" className="text-accent hover:underline transition-opacity ease-out">+51 914 743 214</a>
      </div>
    </div>
  );
}