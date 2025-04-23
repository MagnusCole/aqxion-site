'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'en' | 'es'
type Translations = Record<string, Record<Language, string>>

interface I18nContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations: Translations = {
  // Header
  'header.tagline': {
    en: 'Strategic Acquisition Holding',
    es: 'Holding de Adquisición Estratégica'
  },
  
  // Hero
  'hero.title': {
    en: 'We turn untransferred legacies into perpetual assets.',
    es: 'Convertimos sucesiones imposibles en activos perpetuos.'
  },
  'hero.subtitle': {
    en: 'Private holding. No dilution. No improvisation.',
    es: 'Plataforma de holding. Sin dilución. Sin improvisación.'
  },
  
  // Manifesto
  'manifesto.title': {
    en: 'Manifesto',
    es: 'Manifiesto'
  },
  'manifesto.content': {
    en: 'Every year, Latin America loses thousands of profitable family businesses. AQXION exists to acquire them — preserving their legacy, unlocking cash flow, and consolidating them into a disciplined holding. We start where venture funds don\'t dare and startups can\'t reach. First target: funeral services — profitable, fragmented, and ignored. We are not founders. We are operators. If you\'re ready to retire with dignity, invest in real flow, or contribute strategic expertise — the door is open.',
    es: 'Perú está perdiendo silenciosamente sus empresas más valiosas. Negocios familiares rentables desaparecen cuando los propietarios se retiran sin un sucesor. Los fondos los ignoran, las startups no hablan su idioma, los gobiernos miran hacia otro lado. AQXION fue creado para revertir esa destrucción. Adquirimos, aceleramos y consolidamos activos ignorados—comenzando con la industria funeraria—a través de disciplina, estructura y respeto. Si el legado es importante para ti, este es tu momento.'
  },
  
  // Loop
  'loop.title': {
    en: 'AQXION LOOP™',
    es: 'AQXION LOOP™'
  },
  'loop.acquire': {
    en: 'ACQUIRE',
    es: 'ADQUIRIR'
  },
  'loop.accelerate': {
    en: 'ACCELERATE',
    es: 'ACELERAR'
  },
  'loop.consolidate': {
    en: 'CONSOLIDATE',
    es: 'CONSOLIDAR'
  },
  'loop.summary': {
    en: 'Acquire → Accelerate → Consolidate',
    es: 'Adquirir → Acelerar → Consolidar'
  },
  
  // Services
  'services.title': {
    en: 'What We Seek Today',
    es: 'Lo que buscamos hoy'
  },
  'services.item1': {
    en: 'Identify businesses operated by owners without succession.',
    es: 'Identificar empresas operadas por propietarios sin sucesión.'
  },
  'services.item2': {
    en: 'Negotiate respectful and flexible exits.',
    es: 'Negociar salidas respetuosas y flexibles.'
  },
  'services.item3': {
    en: 'Inject minimal technology and operational rigor.',
    es: 'Inyectar tecnología mínima y rigor operacional.'
  },
  
  // CTA
  'cta.title': {
    en: 'Direct Contact',
    es: 'Contacto Directo'
  },
  'cta.content': {
    en: 'Considering retirement? Request a private call with no commitment (closing in 60-90 days).',
    es: '¿Considerando el retiro? Solicita una llamada privada sin compromiso (cierre en 60-90 días).'
  },
  'cta.button': {
    en: 'Contact Us',
    es: 'Contáctanos'
  },
  
  // Contact
  'contact.title': {
    en: 'Contact',
    es: 'Contacto'
  },
  'contact.role': {
    en: 'Luis Noriega — Founder & Executive Director',
    es: 'Luis Noriega — Founder & CEO'
  },
  'contact.locations': {
    en: 'Lima, Peru | Delaware, USA',
    es: 'Lima, Perú'
  },
  
  // Footer
  'footer.quote': {
    en: 'Succession chaos won\'t be fixed by ideas. It will be solved by disciplined acquisition. AQXION has already begun. You choose where to stand.',
    es: 'El caos de la sucesión no se resolverá con discursos. Se resolverá con adquisición disciplinada. AQXION ha comenzado; decide desde dónde lo presencias.'
  },
  'footer.rights': {
    en: 'All rights reserved',
    es: 'Todos los derechos reservados'
  }
}

const I18nContext = createContext<I18nContextType | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')
  
  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key not found: ${key}`)
      return key
    }
    return translations[key][language]
  }
  
  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider')
  }
  return context
}