'use client'

import { useI18n } from '../i18n/context'

interface CaseStudy {
  id: string
  industry: {
    en: string
    es: string
  }
  challenge: {
    en: string
    es: string
  }
  solution: {
    en: string
    es: string
  }
  result: {
    en: string
    es: string
  }
}

const caseStudies: CaseStudy[] = [
  {
    id: 'case-1',
    industry: {
      en: 'Funeral Services',
      es: 'Servicios Funerarios'
    },
    challenge: {
      en: 'Family-owned business with 30+ years of operation and no succession plan.',
      es: 'Negocio familiar con más de 30 años de operación y sin plan de sucesión.'
    },
    solution: {
      en: 'Structured acquisition with seller financing and 3-year transition plan.',
      es: 'Adquisición estructurada con financiamiento del vendedor y plan de transición de 3 años.'
    },
    result: {
      en: 'Preserved legacy while improving cash flow by 35% through operational efficiencies.',
      es: 'Legado preservado mientras se mejoró el flujo de caja en un 35% a través de eficiencias operativas.'
    }
  },
  {
    id: 'case-2',
    industry: {
      en: 'Healthcare Services',
      es: 'Servicios de Salud'
    },
    challenge: {
      en: 'Regional clinic network with aging ownership and fragmented operations.',
      es: 'Red de clínicas regionales con propietarios de edad avanzada y operaciones fragmentadas.'
    },
    solution: {
      en: 'Consolidated management while maintaining individual clinic identities.',
      es: 'Gestión consolidada manteniendo las identidades individuales de las clínicas.'
    },
    result: {
      en: 'Digital transformation reduced administrative costs by 28% in first year.',
      es: 'La transformación digital redujo los costos administrativos en un 28% en el primer año.'
    }
  },
  {
    id: 'case-3',
    industry: {
      en: 'Manufacturing',
      es: 'Manufactura'
    },
    challenge: {
      en: 'Traditional manufacturer with strong market position but outdated processes.',
      es: 'Fabricante tradicional con fuerte posición en el mercado pero procesos obsoletos.'
    },
    solution: {
      en: 'Implemented lean methodology while preserving core production expertise.',
      es: 'Implementación de metodología lean preservando la experiencia central de producción.'
    },
    result: {
      en: 'Increased production capacity by 40% with minimal additional investment.',
      es: 'Aumento de la capacidad de producción en un 40% con mínima inversión adicional.'
    }
  }
]

export default function CaseStudies() {
  const { t, language } = useI18n()
  
  return (
    <div className="text-center max-w-[1080px] mx-auto">
      <h2 className="text-3xl md:text-4xl font-serif mb-8 text-accent">Case Studies</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {caseStudies.map((study) => (
          <div key={study.id} className="p-6 border border-accent rounded-lg hover:bg-accent/5 transition-opacity ease-out text-left">
            <h3 className="text-xl font-serif text-accent mb-3">{study.industry[language]}</h3>
            <div className="space-y-3 text-sm">
              <p>
                <span className="font-medium text-accent/80">Challenge: </span>
                {study.challenge[language]}
              </p>
              <p>
                <span className="font-medium text-accent/80">Solution: </span>
                {study.solution[language]}
              </p>
              <p>
                <span className="font-medium text-accent/80">Result: </span>
                {study.result[language]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}