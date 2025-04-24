'use client'

import { useState, useEffect } from 'react'
import { useI18n } from '../i18n/context'

interface TestimonialItem {
  id: string
  quote: {
    en: string
    es: string
  }
  author: {
    en: string
    es: string
  }
  role: {
    en: string
    es: string
  }
}

const testimonialItems: TestimonialItem[] = [
  {
    id: 'owner1',
    quote: {
      en: 'After 30 years building my company, I was concerned about its future. AQXION provided a dignified exit while preserving our legacy and team. The transition was seamless and respectful.',
      es: 'Después de 30 años construyendo mi empresa, estaba preocupado por su futuro. AQXION me proporcionó una salida digna mientras preservaba nuestro legado y equipo. La transición fue fluida y respetuosa.'
    },
    author: {
      en: 'Former Owner',
      es: 'Ex Propietario'
    },
    role: {
      en: 'Manufacturing Company',
      es: 'Empresa de Manufactura'
    }
  },
  {
    id: 'investor1',
    quote: {
      en: 'What sets AQXION apart is their disciplined approach to acquisition and growth. They identify hidden value in established businesses that others overlook, creating substantial returns with lower risk profiles.',
      es: 'Lo que distingue a AQXION es su enfoque disciplinado para la adquisición y el crecimiento. Identifican valor oculto en negocios establecidos que otros pasan por alto, creando rendimientos sustanciales con perfiles de riesgo más bajos.'
    },
    author: {
      en: 'Strategic Investor',
      es: 'Inversor Estratégico'
    },
    role: {
      en: 'Financial Services',
      es: 'Servicios Financieros'
    }
  },
  {
    id: 'advisor1',
    quote: {
      en: 'Working with AQXION has been refreshing. Their action-first mentality cuts through the noise typical in acquisition processes. They focus on what matters: preserving value while creating new growth avenues.',
      es: 'Trabajar con AQXION ha sido refrescante. Su mentalidad de acción primero corta el ruido típico en los procesos de adquisición. Se centran en lo que importa: preservar el valor mientras crean nuevas vías de crecimiento.'
    },
    author: {
      en: 'M&A Advisor',
      es: 'Asesor de M&A'
    },
    role: {
      en: 'Legal Consultancy',
      es: 'Consultoría Legal'
    }
  }
]

export default function Testimonials() {
  const { language, t } = useI18n()
  const [activeIndex, setActiveIndex] = useState(0)
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
    
    const element = document.getElementById('testimonials')
    if (element) {
      observer.observe(element)
    }
    
    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])
  
  // Auto-rotate testimonials
  useEffect(() => {
    if (!isVisible) return
    
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonialItems.length)
    }, 8000)
    
    return () => clearInterval(interval)
  }, [isVisible])
  
  return (
    <div className="text-center max-w-[1080px] mx-auto">
      <h2 
        className="text-3xl md:text-4xl font-serif mb-4 text-accent transition-all duration-700 transform ease-out"
        style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)' }}
      >
        {t('testimonials.title')}
      </h2>
      <p 
        className="text-lg font-sans text-text/80 max-w-2xl mx-auto mb-12 transition-all duration-700 delay-100 transform ease-out"
        style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)' }}
      >
        {t('testimonials.description')}
      </p>
      
      <div 
        className="relative overflow-hidden py-10 transition-all duration-700 delay-200 transform ease-out"
        style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)' }}
      >
        <div 
          className="transition-all duration-700 ease-out flex"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonialItems.map((item) => (
            <div key={item.id} className="w-full flex-shrink-0 px-6">
              <div className="bg-primary border border-accent/20 rounded-lg p-8 max-w-2xl mx-auto">
                <svg className="w-10 h-10 text-accent/30 mb-4 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <blockquote className="text-xl font-serif text-text italic mb-6">&ldquo;{item.quote[language]}&rdquo;</blockquote>
                <div className="font-sans">
                  <p className="text-accent font-medium">{item.author[language]}</p>
                  <p className="text-text/70 text-sm">{item.role[language]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Indicadores */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonialItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${activeIndex === index ? 'bg-accent w-6' : 'bg-text/30'}`}
              aria-label={`Testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}