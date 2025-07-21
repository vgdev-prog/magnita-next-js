"use client"
import { useState, useTransition, useRef } from 'react';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { LanguageDropdown } from '../language-dropdown';
import css from './language-switcher.module.scss';

const languages = [
  { code: 'ua', name: 'Українська', flag: '🇺🇦' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'en', name: 'English', flag: '🇺🇸' }
];

export const LanguageSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const [triggerRect, setTriggerRect] = useState<DOMRect | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0];

  const handleLanguageChange = (newLocale: string) => {
    startTransition(() => {
      const pathWithoutLocale = pathname.replace(`/${locale}`, '');
      const newPath = `/${newLocale}${pathWithoutLocale}`;
      router.push(newPath);
      setIsOpen(false);
    });
  };

  return (
    <div className={css.container}>
      <button 
        ref={triggerRef}
        className={css.trigger}
        onClick={() => {
          if (!isOpen && triggerRef.current) {
            setTriggerRect(triggerRef.current.getBoundingClientRect());
          }
          setIsOpen(!isOpen);
        }}
        disabled={isPending}
      >
        <span className={css.flag}>{currentLanguage.flag}</span>
        <span className={css.code}>{currentLanguage.code.toUpperCase()}</span>
        <svg 
          className={`${css.arrow} ${isOpen ? css.arrowOpen : ''}`} 
          width="12" 
          height="8" 
          viewBox="0 0 12 8" 
          fill="none"
        >
          <path 
            d="M1 1.5L6 6.5L11 1.5" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <LanguageDropdown
        isOpen={isOpen}
        currentLocale={locale}
        onLanguageChange={handleLanguageChange}
        onClose={() => {
          setIsOpen(false);
          setTriggerRect(null);
        }}
        triggerRect={triggerRect}
      />
    </div>
  );
};