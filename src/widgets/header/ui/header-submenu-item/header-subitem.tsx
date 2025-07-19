import { Link } from "@/src/app/i18n/routing";
import {useLocale} from "next-intl";
import css from './header-submenu-item.module.scss'
import {NavItem} from "@/src/widgets/header/types";
import {ArrowIcon} from "@/src/shared";
import {useState} from "react";

interface ClientNavigationLinkProps {
item: NavItem
}

export const HeaderSubmenuItem = ({item}: ClientNavigationLinkProps) => {
    const locale = useLocale();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const itemHasChildren = item.children && item.children.length > 0;

    const handleMouseEnter = () => {
        setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        // Small delay to allow mouse to reach dropdown
        setTimeout(() => {
            setIsDropdownOpen(false);
        }, 100);
    };
    
    return (
        <li 
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
                <div 
                    className={css.dropdown}
                >
                    <div className={css.dropdownContent}>
                        {item.children?.map((child) => (
                            <Link 
                                key={child.id} 
                                href={child.href} 
                                locale={locale}
                                className={css.dropdownItem}
                            >
                                {child.title}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </li>
    );
};