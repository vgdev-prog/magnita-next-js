"use client"
import { Link } from "@/src/app/i18n/routing";
import {useLocale} from "next-intl";
import css from './header-item.module.scss'
import {NavItem} from "@/src/widgets/header/types";
import {ArrowIcon} from "@/src/shared";
import {useState, useRef, useEffect} from "react";
import {HeaderCatalogGrid} from "@/src/widgets/header/ui/header-catalog-grid/header-catalog-grid";

interface ClientNavigationLinkProps {
item: NavItem
}

export const HeaderMenuItem = ({item}: ClientNavigationLinkProps) => {
    const locale = useLocale();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    const itemRef = useRef<HTMLLIElement>(null);
    const iconRef = useRef<HTMLButtonElement>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const itemHasChildren = item.children && item.children.length > 0;

    useEffect(() => {
        // Проверяем, является ли устройство тачскрином
        const checkTouchDevice = () => {
            setIsTouchDevice(('ontouchstart' in window) || (navigator.maxTouchPoints > 0));
        };
        
        checkTouchDevice();
        window.addEventListener('resize', checkTouchDevice);
        return () => {
            window.removeEventListener('resize', checkTouchDevice);
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    const handleMouseEnter = () => {
        if (!isTouchDevice) {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
                timeoutRef.current = null;
            }
            setIsDropdownOpen(true);
        }
    };

    const handleMouseLeave = () => {
        if (!isTouchDevice) {
            timeoutRef.current = setTimeout(() => {
                setIsDropdownOpen(false);
            }, 150);
        }
    };

    const handleMenuMouseEnter = () => {
        if (!isTouchDevice) {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
                timeoutRef.current = null;
            }
            setIsDropdownOpen(true);
        }
    };

    const handleMenuMouseLeave = () => {
        if (!isTouchDevice) {
            timeoutRef.current = setTimeout(() => {
                setIsDropdownOpen(false);
            }, 150);
        }
    };

    const handleLinkClick = (e: React.MouseEvent) => {
        if (isTouchDevice && itemHasChildren) {
            const iconElement = iconRef.current;
            if (iconElement) {
                const iconRect = iconElement.getBoundingClientRect();
                const clickX = e.clientX;
                const clickY = e.clientY;
                
                // Проверяем, был ли клик в области иконки
                const isIconClick = clickX >= iconRect.left && 
                                  clickX <= iconRect.right && 
                                  clickY >= iconRect.top && 
                                  clickY <= iconRect.bottom;
                
                if (isIconClick) {
                    e.preventDefault();
                    setIsDropdownOpen(!isDropdownOpen);
                    return;
                }
            }
        }
        // Если клик не по иконке или не тачскрин - переходим по ссылке как обычно
    };
    
    return (
        <li 
            ref={itemRef}
            className={css.item}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Link href={item.href} locale={locale} onClick={handleLinkClick}>
                {item.title}
                {itemHasChildren && (
                    <button ref={iconRef} className={`${css.icon} ${isDropdownOpen ? css.iconOpen : ''}`}>
                        <ArrowIcon fill="#fff" size={11} />
                    </button>
                )}
            </Link>
            
            {itemHasChildren && isDropdownOpen && (
                <HeaderCatalogGrid 
                    links={item.children || []} 
                    onMouseEnter={handleMenuMouseEnter}
                    onMouseLeave={handleMenuMouseLeave}
                    onClose={isTouchDevice ? () => setIsDropdownOpen(false) : undefined}
                    triggerRef={itemRef}
                />
            )}
        </li>
    );
};