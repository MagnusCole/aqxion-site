'use client'

import { useState, useEffect } from 'react'
import { useI18n } from '../i18n/context'

export default function Navigation() {
  const { t } = useI18n()
  const [activeSection, setActiveSection] = useState('hero')
  const [showScrollTop, setShowScrollTop] = useState(false)
  
  // Controlar la visibilidad del botón de volver arriba
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
      
      // Detectar sección activa
      const sections = ['hero', 'manifesto', 'loop', 'services', 'filter', 'cta', 'contact']
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  // Función para desplazarse a una sección
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      })
    }
  }
  
  // Función para volver arriba
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  
  return (
    <>
      <nav className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden md:block">
        <ul className="flex flex-col space-y-4">
          {[
            { id: 'hero', label: t('nav.hero') },
            { id: 'manifesto', label: t('nav.manifesto') },
            { id: 'loop', label: t('nav.loop') },
            { id: 'services', label: t('nav.services') },
            { id: 'filter', label: t('nav.filter') },
            { id: 'faq', label: t('nav.faq') },
            { id: 'testimonials', label: t('nav.testimonials') },
            { id: 'cta', label: t('nav.cta') },
            { id: 'contact', label: t('nav.contact') }
          ].map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${activeSection === item.id ? 'bg-accent scale-125' : 'bg-text/30 hover:bg-text/50'}`}
                aria-label={item.label}
                title={item.label}
              />
            </li>
          ))}
        </ul>
      </nav>
      
      {/* Botón de volver arriba */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 bg-accent text-primary p-2 rounded-full shadow-lg z-40 transition-all duration-300 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        aria-label={t('nav.scrollTop')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </>
  )
}