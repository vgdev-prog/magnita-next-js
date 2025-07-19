"use client"
import { useState } from 'react';
import css from './burger-button.module.scss';

interface BurgerButtonProps {
  onClick?: () => void;
}

export const BurgerButton = ({ onClick }: BurgerButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    onClick?.();
  };

  return (
    <button
      className={css.burgerButton}
      onClick={handleClick}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
    >
      <div className={`${css.burgerLines} ${isOpen ? css.burgerLinesOpen : ''}`}>
        <span className={css.line}></span>
        <span className={css.line}></span>
        <span className={css.line}></span>
      </div>
    </button>
  );
};