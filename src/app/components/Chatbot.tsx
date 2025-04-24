'use client'

import { useState } from 'react'
import { useI18n } from '../i18n/context'

interface Message {
  id: number
  text: string
  isUser: boolean
}

export default function Chatbot() {
  const { t } = useI18n()
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: t('chatbot.welcome'), isUser: false }
  ])
  const [inputValue, setInputValue] = useState('')
  
  const handleToggle = () => {
    setIsOpen(!isOpen)
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!inputValue.trim()) return
    
    // Añadir mensaje del usuario
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isUser: true
    }
    
    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    
    // Simular respuesta automática después de un breve retraso
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: t('chatbot.autoResponse'),
        isUser: false
      }
      
      setMessages(prev => [...prev, botMessage])
    }, 1000)
  }
  
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Botón del chatbot */}
      <button
        onClick={handleToggle}
        className="bg-accent text-primary p-4 rounded-full shadow-lg hover:bg-accent/90 transition-colors duration-300"
        aria-label={t('chatbot.toggle')}
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>
      
      {/* Ventana del chatbot */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 bg-primary border border-accent/20 rounded-lg shadow-xl overflow-hidden">
          <div className="bg-accent text-primary p-4">
            <h3 className="font-serif text-lg">{t('chatbot.title')}</h3>
          </div>
          
          <div className="h-80 overflow-y-auto p-4 flex flex-col space-y-3">
            {messages.map(message => (
              <div 
                key={message.id} 
                className={`p-3 rounded-lg max-w-[80%] ${message.isUser ? 'bg-accent/10 ml-auto' : 'bg-accent/20 mr-auto'}`}
              >
                <p className="text-sm">{message.text}</p>
              </div>
            ))}
          </div>
          
          <form onSubmit={handleSubmit} className="border-t border-accent/20 p-4">
            <div className="flex">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={t('chatbot.placeholder')}
                className="flex-grow bg-primary border border-accent/30 rounded-l-md p-2 text-text focus:outline-none focus:border-accent"
              />
              <button
                type="submit"
                className="bg-accent text-primary px-4 py-2 rounded-r-md hover:bg-accent/90 transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}