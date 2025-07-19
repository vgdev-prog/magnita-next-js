"use client"
import { useState, useTransition } from 'react';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
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

  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0];

  const handleLanguageChange = (newLocale: string) => {
    startTransition(() => {
      // Remove the current locale from the pathname
      const pathWithoutLocale = pathname.replace(`/${locale}`, '');
      const newPath = `/${newLocale}${pathWithoutLocale}`;
      router.push(newPath);
      setIsOpen(false);
    });
  };

  return (
    <div className={css.container}>
      <button 
        className={css.trigger}
        onClick={() => setIsOpen(!isOpen)}
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

      {isOpen && (
        <div className={css.dropdown}>
          <div className={css.dropdownContent}>
            {languages
              .filter(lang => lang.code !== locale)
              .map((language) => (
                <button
                  key={language.code}
                  className={css.option}
                  onClick={() => handleLanguageChange(language.code)}
                  disabled={isPending}
                >
                  <span className={css.optionFlag}>{language.flag}</span>
                  <span className={css.optionName}>{language.name}</span>
                  <span className={css.optionCode}>{language.code.toUpperCase()}</span>
                </button>
              ))}
          </div>
        </div>
      )}

      {isOpen && (
        <div 
          className={css.overlay} 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};