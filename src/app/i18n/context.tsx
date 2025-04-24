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
  
  // Navigation
  'nav.hero': {
    en: 'Home',
    es: 'Inicio'
  },
  'nav.manifesto': {
    en: 'Manifesto',
    es: 'Manifiesto'
  },
  'nav.loop': {
    en: 'AQXION LOOP',
    es: 'AQXION LOOP'
  },
  'nav.services': {
    en: 'Services',
    es: 'Servicios'
  },
  'nav.filter': {
    en: 'What We Look For',
    es: 'Lo Que Buscamos'
  },
  'nav.faq': {
    en: 'FAQ',
    es: 'Preguntas Frecuentes'
  },
  'nav.testimonials': {
    en: 'Success Stories',
    es: 'Casos de Éxito'
  },
  'nav.cta': {
    en: 'Take Action',
    es: 'Tomar Acción'
  },
  'nav.contact': {
    en: 'Contact',
    es: 'Contacto'
  },
  'nav.scrollTop': {
    en: 'Back to top',
    es: 'Volver arriba'
  },
  
  // Hero
  'hero.title': {
    en: 'We turn untransferred legacies into perpetual assets.',
    es: 'Convertimos sucesiones imposibles en activos perpetuos.'
  },
  'hero.subtitle': {
    en: 'AQXION is a strategic acquisition initiative in motion — no dilution, no improvisation.',
    es: 'AQXION es una iniciativa de adquisición estratégica en movimiento — sin dilución, sin improvisación.'
  },
  
  // Manifesto
  'manifesto.title': {
    en: 'Manifesto',
    es: 'Manifiesto'
  },
  'manifesto.content': {
    en: 'Latin America is losing thousands of profitable family businesses every year. AQXION steps in where startups fail and funds fear to go. We acquire real businesses, preserve legacy, and unlock cross-border growth. We are not fundraising. We are structuring — one acquisition at a time. This site is not for everyone. But if you\'re a seller, investor, or operator who sees the shift, welcome.',
    es: 'Latinoamérica está perdiendo miles de empresas familiares rentables cada año. AQXION interviene donde las startups fracasan y los fondos temen ir. Adquirimos negocios reales, preservamos el legado y desbloqueamos el crecimiento transfronterizo. No estamos recaudando fondos. Estamos estructurando — una adquisición a la vez. Este sitio no es para todos. Pero si eres un vendedor, inversor u operador que ve el cambio, bienvenido.'
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
    en: 'Acquire → succession-free owners | Accelerate → cash flow, margin, digital ops | Consolidate → strategic holding architecture',
    es: 'Adquirir → propietarios sin sucesión | Acelerar → flujo de caja, margen, operaciones digitales | Consolidar → arquitectura estratégica de holding'
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
  
  // FilterBlock
  'filter.title': {
    en: 'What We Look For Today',
    es: 'Lo Que Buscamos Hoy'
  },
  'filter.description': {
    en: 'AQXION selectively partners with qualified individuals who align with our strategic vision. We focus on these three key profiles to build our acquisition ecosystem.',
    es: 'AQXION se asocia selectivamente con personas cualificadas que se alinean con nuestra visión estratégica. Nos enfocamos en estos tres perfiles clave para construir nuestro ecosistema de adquisición.'
  },
  
  // CTA
  'cta.title': {
    en: 'Direct Contact',
    es: 'Contacto Directo'
  },
  'cta.content': {
    en: 'Request private call: deal@aqxion.com',
    es: 'Solicitar llamada privada: deal@aqxion.com'
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
  'contact.description': {
    en: 'Get in touch with us to discuss your business needs or to learn more about our acquisition process.',
    es: 'Ponte en contacto con nosotros para discutir las necesidades de tu negocio o para obtener más información sobre nuestro proceso de adquisición.'
  },
  'contact.directContact': {
    en: 'Direct Contact',
    es: 'Contacto Directo'
  },
  'contact.location': {
    en: 'Location',
    es: 'Ubicación'
  },
  'contact.address': {
    en: 'Lima, Peru | Delaware, USA',
    es: 'Lima, Perú | Delaware, USA'
  },
  'contact.form.name': {
    en: 'Full Name',
    es: 'Nombre Completo'
  },
  'contact.form.namePlaceholder': {
    en: 'Enter your full name',
    es: 'Ingresa tu nombre completo'
  },
  'contact.form.email': {
    en: 'Email',
    es: 'Correo Electrónico'
  },
  'contact.form.emailPlaceholder': {
    en: 'Enter your email address',
    es: 'Ingresa tu correo electrónico'
  },
  'contact.form.company': {
    en: 'Company',
    es: 'Empresa'
  },
  'contact.form.companyPlaceholder': {
    en: 'Enter your company name (optional)',
    es: 'Ingresa el nombre de tu empresa (opcional)'
  },
  'contact.form.type': {
    en: 'I am a',
    es: 'Soy un'
  },
  'contact.form.typeOptions.owner': {
    en: 'Business Owner',
    es: 'Propietario de Negocio'
  },
  'contact.form.typeOptions.investor': {
    en: 'Investor',
    es: 'Inversionista'
  },
  'contact.form.typeOptions.advisor': {
    en: 'Advisor',
    es: 'Asesor'
  },
  'contact.form.typeOptions.other': {
    en: 'Other',
    es: 'Otro'
  },
  'contact.form.message': {
    en: 'Message',
    es: 'Mensaje'
  },
  'contact.form.messagePlaceholder': {
    en: 'Tell us about your business or inquiry',
    es: 'Cuéntanos sobre tu negocio o consulta'
  },
  'contact.form.submit': {
    en: 'Send Message',
    es: 'Enviar Mensaje'
  },
  'contact.form.submitting': {
    en: 'Sending...',
    es: 'Enviando...'
  },
  'contact.form.errors.name': {
    en: 'Name is required',
    es: 'El nombre es obligatorio'
  },
  'contact.form.errors.email': {
    en: 'Email is required',
    es: 'El correo electrónico es obligatorio'
  },
  'contact.form.errors.emailInvalid': {
    en: 'Please enter a valid email address',
    es: 'Por favor ingresa un correo electrónico válido'
  },
  'contact.form.errors.message': {
    en: 'Message is required',
    es: 'El mensaje es obligatorio'
  },
  'contact.form.success.title': {
    en: 'Message Sent!',
    es: '¡Mensaje Enviado!'
  },
  'contact.form.success.message': {
    en: 'Thank you for contacting us. We will get back to you shortly.',
    es: 'Gracias por contactarnos. Te responderemos a la brevedad.'
  },
  'contact.form.success.button': {
    en: 'Send Another Message',
    es: 'Enviar Otro Mensaje'
  },
  
  // FAQ
  'faq.title': {
    en: 'Frequently Asked Questions',
    es: 'Preguntas Frecuentes'
  },
  'faq.description': {
    en: 'Find answers to common questions about our acquisition process, investment opportunities, and strategic approach.',
    es: 'Encuentra respuestas a preguntas comunes sobre nuestro proceso de adquisición, oportunidades de inversión y enfoque estratégico.'
  },
  
  // Testimonials
  'testimonials.title': {
    en: 'Success Stories',
    es: 'Casos de Éxito'
  },
  'testimonials.description': {
    en: 'Hear from the people who have experienced our acquisition process and strategic approach firsthand.',
    es: 'Escucha de las personas que han experimentado nuestro proceso de adquisición y enfoque estratégico de primera mano.'
  },
  'contact.role': {
    en: 'Luis Noriega — Founder & Executive Director',
    es: 'Luis Noriega — Founder & CEO'
  },
  'contact.locations': {
    en: 'Lima, Peru | Delaware, USA',
    es: 'Lima, Perú'
  },
  
  // Chatbot
  'chatbot.title': {
    en: 'AQXION Assistant',
    es: 'Asistente AQXION'
  },
  'chatbot.welcome': {
    en: 'Hello! How can I help you today?',
    es: '¡Hola! ¿Cómo puedo ayudarte hoy?'
  },
  'chatbot.placeholder': {
    en: 'Type your message...',
    es: 'Escribe tu mensaje...'
  },
  'chatbot.toggle': {
    en: 'Toggle chat assistant',
    es: 'Alternar asistente de chat'
  },
  'chatbot.autoResponse': {
    en: 'Thank you for your message. One of our team members will get back to you shortly. For immediate assistance, please email us at contact@aqxion.com',
    es: 'Gracias por tu mensaje. Uno de nuestros miembros del equipo se pondrá en contacto contigo pronto. Para asistencia inmediata, envíanos un correo electrónico a contact@aqxion.com'
  },
  
  // Calendar
  'calendar.title': {
    en: 'Schedule an Appointment',
    es: 'Programa una Cita'
  },
  'calendar.description': {
    en: 'Select a date and time to schedule a meeting with our team. We will contact you to confirm the appointment.',
    es: 'Selecciona una fecha y hora para programar una reunión con nuestro equipo. Nos pondremos en contacto contigo para confirmar la cita.'
  },
  'calendar.selectTime': {
    en: 'Select Time',
    es: 'Seleccionar Hora'
  },
  'calendar.months.january': {
    en: 'January',
    es: 'Enero'
  },
  'calendar.months.february': {
    en: 'February',
    es: 'Febrero'
  },
  'calendar.months.march': {
    en: 'March',
    es: 'Marzo'
  },
  'calendar.months.april': {
    en: 'April',
    es: 'Abril'
  },
  'calendar.months.may': {
    en: 'May',
    es: 'Mayo'
  },
  'calendar.months.june': {
    en: 'June',
    es: 'Junio'
  },
  'calendar.months.july': {
    en: 'July',
    es: 'Julio'
  },
  'calendar.months.august': {
    en: 'August',
    es: 'Agosto'
  },
  'calendar.months.september': {
    en: 'September',
    es: 'Septiembre'
  },
  'calendar.months.october': {
    en: 'October',
    es: 'Octubre'
  },
  'calendar.months.november': {
    en: 'November',
    es: 'Noviembre'
  },
  'calendar.months.december': {
    en: 'December',
    es: 'Diciembre'
  },
  'calendar.days.sunday': {
    en: 'Sunday',
    es: 'Domingo'
  },
  'calendar.days.monday': {
    en: 'Monday',
    es: 'Lunes'
  },
  'calendar.days.tuesday': {
    en: 'Tuesday',
    es: 'Martes'
  },
  'calendar.days.wednesday': {
    en: 'Wednesday',
    es: 'Miércoles'
  },
  'calendar.days.thursday': {
    en: 'Thursday',
    es: 'Jueves'
  },
  'calendar.days.friday': {
    en: 'Friday',
    es: 'Viernes'
  },
  'calendar.days.saturday': {
    en: 'Saturday',
    es: 'Sábado'
  },
  'calendar.form.title': {
    en: 'Your Information',
    es: 'Tu Información'
  },
  'calendar.form.name': {
    en: 'Full Name',
    es: 'Nombre Completo'
  },
  'calendar.form.namePlaceholder': {
    en: 'Enter your full name',
    es: 'Ingresa tu nombre completo'
  },
  'calendar.form.email': {
    en: 'Email',
    es: 'Correo Electrónico'
  },
  'calendar.form.emailPlaceholder': {
    en: 'Enter your email address',
    es: 'Ingresa tu correo electrónico'
  },
  'calendar.form.company': {
    en: 'Company',
    es: 'Empresa'
  },
  'calendar.form.companyPlaceholder': {
    en: 'Enter your company name (optional)',
    es: 'Ingresa el nombre de tu empresa (opcional)'
  },
  'calendar.form.topic': {
    en: 'Meeting Topic',
    es: 'Tema de la Reunión'
  },
  'calendar.form.topicPlaceholder': {
    en: 'Briefly describe what you would like to discuss',
    es: 'Describe brevemente lo que te gustaría discutir'
  },
  'calendar.form.submit': {
    en: 'Schedule Appointment',
    es: 'Programar Cita'
  },
  'calendar.form.submitting': {
    en: 'Scheduling...',
    es: 'Programando...'
  },
  'calendar.success.title': {
    en: 'Appointment Scheduled!',
    es: '¡Cita Programada!'
  },
  'calendar.success.message': {
    en: 'Thank you for scheduling an appointment. We will send you a confirmation email shortly.',
    es: 'Gracias por programar una cita. Te enviaremos un correo electrónico de confirmación en breve.'
  },
  'calendar.success.button': {
    en: 'Schedule Another Appointment',
    es: 'Programar Otra Cita'
  },
  
  // Footer
  'footer.quote': {
    en: 'AQXION™ is building its structure while executing. Perception builds momentum. The deals will anchor the foundation.',
    es: 'AQXION™ está construyendo su estructura mientras ejecuta. La percepción genera impulso. Los acuerdos anclarán los cimientos.'
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