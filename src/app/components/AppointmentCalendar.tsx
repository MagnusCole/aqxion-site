'use client'

import { useState } from 'react'
import { useI18n } from '../i18n/context'

interface TimeSlot {
  id: number
  time: string
  available: boolean
}

interface AppointmentFormData {
  name: string
  email: string
  company: string
  date: string
  timeSlot: number | null
  topic: string
}

export default function AppointmentCalendar() {
  const { t } = useI18n()
  const [currentDate, setCurrentDate] = useState<Date>(new Date())
  const [selectedDate, setSelectedDate] = useState<string>('')
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<number | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState<AppointmentFormData>({
    name: '',
    email: '',
    company: '',
    date: '',
    timeSlot: null,
    topic: ''
  })
  
  // Generar días del mes actual
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate()
  }
  
  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay()
  }
  
  const generateCalendarDays = () => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const daysInMonth = getDaysInMonth(year, month)
    const firstDay = getFirstDayOfMonth(year, month)
    
    const days = []
    
    // Añadir días vacíos para alinear el calendario
    for (let i = 0; i < firstDay; i++) {
      days.push({ day: '', disabled: true })
    }
    
    // Añadir días del mes
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i)
      const isWeekend = date.getDay() === 0 || date.getDay() === 6
      const isPast = date < new Date(new Date().setHours(0, 0, 0, 0))
      
      days.push({
        day: i,
        disabled: isWeekend || isPast
      })
    }
    
    return days
  }
  
  // Horarios disponibles
  const timeSlots: TimeSlot[] = [
    { id: 1, time: '09:00 AM', available: true },
    { id: 2, time: '10:00 AM', available: true },
    { id: 3, time: '11:00 AM', available: true },
    { id: 4, time: '01:00 PM', available: true },
    { id: 5, time: '02:00 PM', available: true },
    { id: 6, time: '03:00 PM', available: true },
    { id: 7, time: '04:00 PM', available: true }
  ]
  
  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
    setSelectedDate('')
    setSelectedTimeSlot(null)
  }
  
  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
    setSelectedDate('')
    setSelectedTimeSlot(null)
  }
  
  // Función eliminada para corregir error de ESLint
  
  const handleTimeSelect = (id: number) => {
    setSelectedTimeSlot(id)
    setFormData(prev => ({ ...prev, timeSlot: id }))
  }
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    setIsSubmitting(true)
    
    // Simulación de envío
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        company: '',
        date: '',
        timeSlot: null,
        topic: ''
      })
      setSelectedDate('')
      setSelectedTimeSlot(null)
    } catch (error) {
      console.error('Error scheduling appointment:', error)
    } finally {
      setIsSubmitting(false)
    }
  }
  
  const monthNames = [
    t('calendar.months.january'),
    t('calendar.months.february'),
    t('calendar.months.march'),
    t('calendar.months.april'),
    t('calendar.months.may'),
    t('calendar.months.june'),
    t('calendar.months.july'),
    t('calendar.months.august'),
    t('calendar.months.september'),
    t('calendar.months.october'),
    t('calendar.months.november'),
    t('calendar.months.december')
  ]
  
  const dayNames = [
    t('calendar.days.sunday'),
    t('calendar.days.monday'),
    t('calendar.days.tuesday'),
    t('calendar.days.wednesday'),
    t('calendar.days.thursday'),
    t('calendar.days.friday'),
    t('calendar.days.saturday')
  ]
  
  return (
    <div className="max-w-[1080px] mx-auto">
      <h2 className="text-3xl md:text-4xl font-serif mb-6 text-accent text-center">{t('calendar.title')}</h2>
      <p className="text-lg font-sans text-text/80 mb-8 text-center">
        {t('calendar.description')}
      </p>
      
      {isSubmitted ? (
        <div className="text-center py-12 bg-primary border border-accent/20 rounded-lg p-8">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-accent mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <h3 className="text-2xl font-serif text-accent mb-2">{t('calendar.success.title')}</h3>
          <p className="text-lg font-sans text-text/80">{t('calendar.success.message')}</p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="mt-6 px-6 py-3 bg-accent text-primary font-medium rounded hover:bg-accent/90 transition-colors duration-300"
          >
            {t('calendar.success.button')}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-primary border border-accent/20 rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <button 
                onClick={handlePrevMonth}
                className="p-2 text-accent hover:text-accent/80 transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <h3 className="text-xl font-serif text-accent">
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h3>
              <button 
                onClick={handleNextMonth}
                className="p-2 text-accent hover:text-accent/80 transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            <div className="grid grid-cols-7 gap-1 mb-2">
              {dayNames.map((day, index) => (
                <div key={index} className="text-center text-xs font-medium text-text/70 py-1">
                  {day.substring(0, 3)}
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-7 gap-1">
              {generateCalendarDays().map((day, index) => (
                <div 
                  key={index} 
                  className={`
                    text-center py-2 rounded-md cursor-pointer
                    ${!day.day ? 'invisible' : ''}
                    ${day.disabled ? 'text-text/30 cursor-not-allowed' : 'hover:bg-accent/10'}
                    ${selectedDate === `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day.day).padStart(2, '0')}` ? 'bg-accent text-primary' : ''}
                  `}
                  onClick={() => !day.disabled && setSelectedDate(`${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day.day).padStart(2, '0')}`)}
                >
                  {day.day}
                </div>
              ))}
            </div>
            
            {selectedDate && (
              <div className="mt-6">
                <h4 className="text-lg font-serif text-accent mb-3">{t('calendar.selectTime')}</h4>
                <div className="grid grid-cols-2 gap-2">
                  {timeSlots.map(slot => (
                    <div 
                      key={slot.id}
                      className={`
                        p-2 border rounded-md text-center cursor-pointer
                        ${slot.available ? 'border-accent/30 hover:border-accent' : 'border-text/10 text-text/30 cursor-not-allowed'}
                        ${selectedTimeSlot === slot.id ? 'bg-accent text-primary border-accent' : ''}
                      `}
                      onClick={() => slot.available && handleTimeSelect(slot.id)}
                    >
                      {slot.time}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <div className="bg-primary border border-accent/20 rounded-lg p-6">
            <h3 className="text-xl font-serif text-accent mb-4">{t('calendar.form.title')}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-text font-medium mb-1">{t('calendar.form.name')}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-primary border border-accent/30 rounded-md p-2 text-text focus:outline-none focus:border-accent"
                  placeholder={t('calendar.form.namePlaceholder')}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-text font-medium mb-1">{t('calendar.form.email')}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-primary border border-accent/30 rounded-md p-2 text-text focus:outline-none focus:border-accent"
                  placeholder={t('calendar.form.emailPlaceholder')}
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-text font-medium mb-1">{t('calendar.form.company')}</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-primary border border-accent/30 rounded-md p-2 text-text focus:outline-none focus:border-accent"
                  placeholder={t('calendar.form.companyPlaceholder')}
                />
              </div>
              
              <div>
                <label htmlFor="topic" className="block text-text font-medium mb-1">{t('calendar.form.topic')}</label>
                <textarea
                  id="topic"
                  name="topic"
                  value={formData.topic}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full bg-primary border border-accent/30 rounded-md p-2 text-text focus:outline-none focus:border-accent"
                  placeholder={t('calendar.form.topicPlaceholder')}
                />
              </div>
              
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting || !selectedDate || !selectedTimeSlot}
                  className={`w-full px-6 py-3 bg-accent text-primary font-medium rounded hover:bg-accent/90 transition-colors duration-300 ${(isSubmitting || !selectedDate || !selectedTimeSlot) ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? t('calendar.form.submitting') : t('calendar.form.submit')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}