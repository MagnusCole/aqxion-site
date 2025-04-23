'use client'

import { useI18n } from '../i18n/context'

export default function Footer() {
  const { t } = useI18n()
  
  return (
    <footer className="py-12 bg-primary border-t border-accent/20">
      <div className="max-w-[1080px] mx-auto px-6 text-center">
        <p className="text-sm font-serif italic text-text leading-relaxed">
          {t('footer.quote').split('. ').map((sentence, index, array) => (
            <span key={index}>
              {sentence}{index < array.length - 1 ? '.' : ''}
              {index < array.length - 1 && <br />}
            </span>
          ))}
        </p>
        <div className="mt-8 text-xs text-text/70">
          <p>© {new Date().getFullYear()} AQXION™ | {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}