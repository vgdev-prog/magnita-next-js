"use client"
import { useTransition, useEffect, useState } from 'react';
import css from './language-dropdown.module.scss';
import {createPortal} from "react-dom";

const languages = [
  { code: 'ua', name: 'Українська', flag: '🇺🇦' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'en', name: 'English', flag: '🇺🇸' }
];

interface LanguageDropdownProps {
  isOpen: boolean;
  currentLocale: string;
  onLanguageChange: (locale: string) => void;
  onClose: () => void;
  triggerRect?: DOMRect | null;
}

export const LanguageDropdown = ({ 
  isOpen, 
  currentLocale, 
  onLanguageChange, 
  onClose,
  triggerRect
}: LanguageDropdownProps) => {
  const [isPending] = useTransition();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (isOpen && triggerRect) {
      setIsReady(true);
    } else {
      setIsReady(false);
    }
  }, [isOpen, triggerRect]);

  const handleLanguageSelect = (locale: string) => {
    onLanguageChange(locale);
    onClose();
  };

  if (!isOpen || !isReady) return null;

  const dropdownStyle: React.CSSProperties = triggerRect 
    ? {
        position: 'fixed',
        top: triggerRect.bottom + 8,
        left: triggerRect.left + triggerRect.width / 2 - 80, // 160px / 2 = 80px (половина ширины дропдауна)
        zIndex: 1000
      }
    : {};

  return createPortal(<>
    <div className={css.dropdown} style={dropdownStyle}>
      <div className={css.dropdownContent}>
        {languages
            .filter(lang => lang.code !== currentLocale)
            .map((language) => (
                <button
                    key={language.code}
                    className={css.option}
                    onClick={() => handleLanguageSelect(language.code)}
                    disabled={isPending}
                >
                  <span className={css.optionFlag}>{language.flag}</span>
                  <span className={css.optionName}>{language.name}</span>
                  <span className={css.optionCode}>{language.code.toUpperCase()}</span>
                </button>
            ))}
      </div>
    </div>

    <div
        className={css.overlay}
        onClick={onClose}
    />
  </>, document.body)
};