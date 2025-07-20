"use client"
import { Link } from "@/src/app/i18n/routing";
import {useLocale} from "next-intl";
import css from './header-item.module.scss'
import {NavItem} from "@/src/widgets/header/types";
import {ArrowIcon} from "@/src/shared";
import {useState, useRef} from "react";
import {HeaderSubmenu} from "@/src/widgets/header/ui/header-submenu/header-submenu";

interface ClientNavigationLinkProps {
item: NavItem
}

export const HeaderMenuItem = ({item}: ClientNavigationLinkProps) => {
    const locale = useLocale();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const itemRef = useRef<HTMLLIElement>(null);

    const itemHasChildren = item.children && item.children.length > 0;

    const handleMouseEnter = () => {
        setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setIsDropdownOpen(false);
    };

    const handleMenuMouseEnter = () => {
        setIsDropdownOpen(true);
    };

    const handleMenuMouseLeave = () => {
        setIsDropdownOpen(false);
    };
    
    return (
        <li 
            ref={itemRef}
            className={css.item}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Link href={item.href} locale={locale}>
                {item.title}
                {itemHasChildren && (
                    <button className={css.icon}>
                        <ArrowIcon fill="#fff" size={11} />
                    </button>
                )}
            </Link>
            
            {itemHasChildren && isDropdownOpen && (
                <HeaderSubmenu 
                    links={item.children || []} 
                    onMouseEnter={handleMenuMouseEnter}
                    onMouseLeave={handleMenuMouseLeave}
                    triggerRef={itemRef}
                />
            )}
        </li>
    );
};