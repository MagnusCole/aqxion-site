'use client'

import { useState, useEffect } from 'react'
import { useI18n } from '../i18n/context'

interface FilterItem {
  id: string
  title: {
    en: string
    es: string
  }
  description: {
    en: string
    es: string
  }
}

const filterItems: FilterItem[] = [
  {
    id: 'owners',
    title: {
      en: 'Owners',
      es: 'Propietarios'
    },
    description: {
      en: 'Silent exit in 60-90 days',
      es: 'Salida silenciosa en 60-90 días'
    }
  },
  {
    id: 'investors',
    title: {
      en: 'Investors',
      es: 'Inversionistas'
    },
    description: {
      en: 'Min. $250K, strategic seat',
      es: 'Mín. $250K, asiento estratégico'
    }
  },
  {
    id: 'advisors',
    title: {
      en: 'Advisors',
      es: 'Asesores'
    },
    description: {
      en: 'M&A, legal, or ops track record',
      es: 'Experiencia en M&A, legal u operaciones'
    }
  }
]

export default function FilterBlock() {
  const { language, t } = useI18n()
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    
    const element = document.getElementById('filter')
    if (element) {
      observer.observe(element)
    }
    
    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])
  
  return (
    <div className="text-center max-w-[1080px] mx-auto">
      <h2 className="text-3xl md:text-4xl font-serif mb-4 text-accent transition-all duration-700 transform
        ease-out" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)' }}>
        {t('filter.title')}
      </h2>
      <p className="text-lg font-sans text-text/80 max-w-2xl mx-auto mb-12 transition-all duration-700 delay-100 transform
        ease-out" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)' }}>
        {t('filter.description')}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filterItems.map((item, index) => (
          <div 
            key={item.id} 
            className="p-6 border border-accent rounded-lg hover:bg-accent/5 hover:scale-105 transition-all duration-300 ease-out text-left"
            style={{ 
              opacity: isVisible ? 1 : 0, 
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: `${index * 100 + 200}ms`
            }}
          >
            <h3 className="text-xl font-serif text-accent mb-3">{item.title[language]}</h3>
            <p className="text-lg font-sans text-text">{item.description[language]}</p>
          </div>
        ))}
      </div>
    </div>
  )
}