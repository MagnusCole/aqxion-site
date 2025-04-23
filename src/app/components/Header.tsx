'use client'

import { useI18n } from '../i18n/context'
import LanguageSelector from './LanguageSelector'

export default function Header() {
  const { t } = useI18n()
  
  return (
    <header className="sticky top-0 z-50 h-[60px] w-full flex items-center justify-between px-6 md:px-12 bg-primary border-b border-accent/10">
      <div className="max-w-[1080px] w-full mx-auto flex items-center justify-between">
        <div className="font-serif uppercase tracking-wide text-xl font-medium text-accent">AQXION™</div>
        <div className="flex items-center space-x-4">
          <div className="text-sm text-right text-text/90 font-sans">{t('header.tagline')}</div>
          <LanguageSelector />
        </div>
      </div>
    </header>
  );
}