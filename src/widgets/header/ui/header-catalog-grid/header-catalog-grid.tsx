"use client";
import css from './header-catalog-grid.module.scss';
import {Link} from "@/src/app/i18n/routing";
import {NavItem} from "@/src/widgets/header/types";
import {useLocale} from "next-intl";
import {createPortal} from "react-dom";
import Image from "next/image";

interface HeaderCatalogGridProps {
    links: NavItem[];
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    onClose?: () => void;
    triggerRef?: React.RefObject<HTMLElement>;
}

export const HeaderCatalogGrid = ({links, triggerRef, onClose, onMouseEnter, onMouseLeave}: HeaderCatalogGridProps) => {
    const locale = useLocale();
    
    const getInitialPosition = () => {
        if (triggerRef?.current) {
            const rect = triggerRef.current.getBoundingClientRect();
            // Адаптивная ширина на основе контента
            const dropdownWidth = window.innerWidth <= 576 ? 
                Math.min(window.innerWidth * 0.98, 600) : 
                window.innerWidth <= 768 ? 
                Math.min(window.innerWidth * 0.95, 800) : 
                Math.min(window.innerWidth * 0.9, 1200);
            const halfWidth = dropdownWidth / 2;
            
            let leftPosition = rect.left + rect.width / 2;
            
            // Проверяем, не выходит ли дропдаун за правый край экрана
            if (leftPosition + halfWidth > window.innerWidth - 20) {
                leftPosition = window.innerWidth - halfWidth - 20;
            }
            
            // Проверяем, не выходит ли дропдаун за левый край экрана
            if (leftPosition - halfWidth < 20) {
                leftPosition = halfWidth + 20;
            }
            
            return {
                top: rect.bottom + 2,
                left: leftPosition
            };
        }
        return { top: 0, left: 0 };
    };

    const position = getInitialPosition();

    return createPortal(<>
        {onClose && (
            <div 
                className={css.overlay} 
                onClick={onClose}
            />
        )}
        <div
            className={css.dropdown}
            style={{
                position: 'absolute',
                top: position.top,
                left: position.left,
                transform: 'translateX(-50%)',
                zIndex: 1000
            }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div className={css.dropdownContent}>
                <div className={css.gridContainer}>
                    {links.map((child: NavItem) => (
                        <Link
                            key={child.id}
                            href={child.href}
                            locale={locale}
                            className={css.gridItem}
                            onClick={onClose}
                        >
                            {child.image && (
                                <div className={css.itemIcon}>
                                    <Image src={child.image} unoptimized={true} alt={child.title} width={24} height={24} />
                                </div>
                            )}
                            <div className={css.itemTitle}>
                                {child.title}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    </>, document.body)
};