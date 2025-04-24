'use client'

import { useState } from 'react'
import { useI18n } from '../i18n/context'

interface FAQItem {
  id: string
  question: {
    en: string
    es: string
  }
  answer: {
    en: string
    es: string
  }
}

const faqItems: FAQItem[] = [
  {
    id: 'acquisition',
    question: {
      en: 'How does the acquisition process work?',
      es: '¿Cómo funciona el proceso de adquisición?'
    },
    answer: {
      en: 'Our acquisition process follows the AQXION LOOP™ methodology. We identify family businesses without succession plans, conduct thorough due diligence, structure a fair transaction, and implement our operational excellence framework to preserve legacy while unlocking growth potential.',
      es: 'Nuestro proceso de adquisición sigue la metodología AQXION LOOP™. Identificamos empresas familiares sin planes de sucesión, realizamos una debida diligencia exhaustiva, estructuramos una transacción justa e implementamos nuestro marco de excelencia operativa para preservar el legado mientras desbloqueamos el potencial de crecimiento.'
    }
  },
  {
    id: 'criteria',
    question: {
      en: 'What are your acquisition criteria?',
      es: '¿Cuáles son sus criterios de adquisición?'
    },
    answer: {
      en: 'We focus on profitable family businesses with $1-10M in annual revenue, established market position, and owners seeking a dignified exit. Ideal targets have stable cash flows, growth potential, and operate in sectors with consolidation opportunities across Latin America.',
      es: 'Nos enfocamos en empresas familiares rentables con ingresos anuales de $1-10M, posición establecida en el mercado y propietarios que buscan una salida digna. Los objetivos ideales tienen flujos de caja estables, potencial de crecimiento y operan en sectores con oportunidades de consolidación en América Latina.'
    }
  },
  {
    id: 'timeline',
    question: {
      en: 'What is the typical timeline for an acquisition?',
      es: '¿Cuál es el cronograma típico para una adquisición?'
    },
    answer: {
      en: 'From initial contact to closing, our process typically takes 60-90 days. This includes preliminary assessment (2 weeks), due diligence (4-6 weeks), deal structuring (2 weeks), and closing (2-4 weeks). We prioritize efficiency while ensuring thorough evaluation.',
      es: 'Desde el contacto inicial hasta el cierre, nuestro proceso generalmente toma 60-90 días. Esto incluye evaluación preliminar (2 semanas), debida diligencia (4-6 semanas), estructuración del acuerdo (2 semanas) y cierre (2-4 semanas). Priorizamos la eficiencia mientras garantizamos una evaluación exhaustiva.'
    }
  },
  {
    id: 'investment',
    question: {
      en: 'How can I invest with AQXION?',
      es: '¿Cómo puedo invertir con AQXION?'
    },
    answer: {
      en: 'We partner with strategic investors who bring more than capital. Minimum investment is $250K with opportunities for direct deal participation. Our investors typically have industry expertise, operational experience, or strategic networks that complement our acquisition strategy.',
      es: 'Nos asociamos con inversores estratégicos que aportan más que capital. La inversión mínima es de $250K con oportunidades de participación directa en operaciones. Nuestros inversores suelen tener experiencia en la industria, experiencia operativa o redes estratégicas que complementan nuestra estrategia de adquisición.'
    }
  }
]

export default function FAQ() {
  const { language, t } = useI18n()
  const [openItem, setOpenItem] = useState<string | null>(null)
  
  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id)
  }
  
  return (
    <div className="text-center max-w-[1080px] mx-auto">
      <h2 className="text-3xl md:text-4xl font-serif mb-4 text-accent">{t('faq.title')}</h2>
      <p className="text-lg font-sans text-text/80 max-w-2xl mx-auto mb-12">
        {t('faq.description')}
      </p>
      
      <div className="space-y-4 text-left">
        {faqItems.map((item) => (
          <div 
            key={item.id} 
            className="border border-accent/30 rounded-lg overflow-hidden transition-all duration-300 ease-out"
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full p-6 flex justify-between items-center text-left focus:outline-none"
              aria-expanded={openItem === item.id}
            >
              <h3 className="text-xl font-serif text-accent">{item.question[language]}</h3>
              <span className="text-accent transition-transform duration-300 transform">
                {openItem === item.id ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </span>
            </button>
            <div 
              className="overflow-hidden transition-all duration-300 ease-out"
              style={{ 
                maxHeight: openItem === item.id ? '500px' : '0',
                opacity: openItem === item.id ? 1 : 0
              }}
            >
              <div className="p-6 pt-0 text-lg font-sans text-text">
                {item.answer[language]}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}