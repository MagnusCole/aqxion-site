'use client'

import { useI18n } from '../i18n/context'

export default function LanguageSelector() {
  const { language, setLanguage } = useI18n()
  
  return (
    <div className="flex items-center space-x-2">
      <button 
        onClick={() => setLanguage('en')} 
        className={`text-xs px-2 py-1 rounded ${language === 'en' ? 'bg-accent text-primary' : 'text-text/70 hover:text-text'}`}
      >
        EN
      </button>
      <button 
        onClick={() => setLanguage('es')} 
        className={`text-xs px-2 py-1 rounded ${language === 'es' ? 'bg-accent text-primary' : 'text-text/70 hover:text-text'}`}
      >
        ES
      </button>
    </div>
  )
}