"use client";
import css from '../header-menu-item/header-item.module.scss'
import {Link} from "@/src/app/i18n/routing";
import {NavItem} from "@/src/widgets/header/types";
import {useLocale} from "next-intl";
import {createPortal} from "react-dom";
import {useEffect, useState} from "react";

interface HeaderSubmenuProps {
links: NavItem[];
onMouseEnter?: () => void;
onMouseLeave?: () => void;
onClose?: () => void;
triggerRef?: React.RefObject<HTMLElement>;
}

export const HeaderSubmenu = ({links, triggerRef, onClose, onMouseEnter, onMouseLeave}: HeaderSubmenuProps) => {
    const locale = useLocale();
    const [position, setPosition] = useState({ top: 0, left: 0 });

    useEffect(() => {
        if (triggerRef?.current) {
            const rect = triggerRef.current.getBoundingClientRect();
            setPosition({
                top: rect.bottom + 2,
                left: rect.left + rect.width / 2
            });
        }
    }, [triggerRef]);

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
                {links.map((child: NavItem) => (
                    <Link
                        key={child.id}
                        href={child.href}
                        locale={locale}
                        className={css.dropdownItem}
                        onClick={onClose}
                    >
                        {child.title}
                    </Link>
                ))}
            </div>
        </div>
    </>, document.body)
};