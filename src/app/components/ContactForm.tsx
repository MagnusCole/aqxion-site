'use client'

import { useState } from 'react'
import { useI18n } from '../i18n/context'

interface FormData {
  name: string
  email: string
  company: string
  message: string
  type: 'owner' | 'investor' | 'advisor' | 'other'
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export default function ContactForm() {
  const { t } = useI18n()
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: '',
    type: 'other'
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = t('contact.form.errors.name')
    }
    
    if (!formData.email.trim()) {
      newErrors.email = t('contact.form.errors.email')
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = t('contact.form.errors.emailInvalid')
    }
    
    if (!formData.message.trim()) {
      newErrors.message = t('contact.form.errors.message')
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Limpiar error cuando el usuario comienza a escribir
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    
    // Simulación de envío (en producción, aquí iría la integración con un servicio de email)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        type: 'other'
      })
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }
  
  return (
    <div className="max-w-[1080px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="text-left">
          <h2 className="text-3xl md:text-4xl font-serif mb-4 text-accent">{t('contact.title')}</h2>
          <p className="text-lg font-sans text-text/80 mb-8">
            {t('contact.description')}
          </p>
          
          <div className="mb-8">
            <h3 className="text-xl font-serif text-accent mb-2">{t('contact.directContact')}</h3>
            <p className="text-lg font-sans text-text mb-1">{t('contact.role')}</p>
            <a 
              href="mailto:contact@aqxion.com" 
              className="text-accent hover:text-accent/80 transition-colors duration-300"
            >
              contact@aqxion.com
            </a>
          </div>
          
          <div>
            <h3 className="text-xl font-serif text-accent mb-2">{t('contact.location')}</h3>
            <p className="text-lg font-sans text-text">
              {t('contact.address')}
            </p>
          </div>
        </div>
        
        <div className="bg-primary border border-accent/20 rounded-lg p-8">
          {isSubmitted ? (
            <div className="text-center py-12">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-accent mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <h3 className="text-2xl font-serif text-accent mb-2">{t('contact.form.success.title')}</h3>
              <p className="text-lg font-sans text-text/80">{t('contact.form.success.message')}</p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-6 px-6 py-3 bg-accent text-primary font-medium rounded hover:bg-accent/90 transition-colors duration-300"
              >
                {t('contact.form.success.button')}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-text font-medium mb-2">{t('contact.form.name')}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-primary border ${errors.name ? 'border-red-500' : 'border-accent/30'} rounded-md p-3 text-text focus:outline-none focus:border-accent`}
                  placeholder={t('contact.form.namePlaceholder')}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-text font-medium mb-2">{t('contact.form.email')}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-primary border ${errors.email ? 'border-red-500' : 'border-accent/30'} rounded-md p-3 text-text focus:outline-none focus:border-accent`}
                  placeholder={t('contact.form.emailPlaceholder')}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              
              <div>
                <label htmlFor="company" className="block text-text font-medium mb-2">{t('contact.form.company')}</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-primary border border-accent/30 rounded-md p-3 text-text focus:outline-none focus:border-accent"
                  placeholder={t('contact.form.companyPlaceholder')}
                />
              </div>
              
              <div>
                <label htmlFor="type" className="block text-text font-medium mb-2">{t('contact.form.type')}</label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full bg-primary border border-accent/30 rounded-md p-3 text-text focus:outline-none focus:border-accent"
                >
                  <option value="owner">{t('contact.form.typeOptions.owner')}</option>
                  <option value="investor">{t('contact.form.typeOptions.investor')}</option>
                  <option value="advisor">{t('contact.form.typeOptions.advisor')}</option>
                  <option value="other">{t('contact.form.typeOptions.other')}</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-text font-medium mb-2">{t('contact.form.message')}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full bg-primary border ${errors.message ? 'border-red-500' : 'border-accent/30'} rounded-md p-3 text-text focus:outline-none focus:border-accent`}
                  placeholder={t('contact.form.messagePlaceholder')}
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-3 bg-accent text-primary font-medium rounded hover:bg-accent/90 transition-colors duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? t('contact.form.submitting') : t('contact.form.submit')}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}