"use client";
import css from '../header-menu-item/header-item.module.scss'
import {Link} from "@/src/app/i18n/routing";
import {NavItem} from "@/src/widgets/header/types";
import {useLocale} from "next-intl";
import {createPortal} from "react-dom";
import {useEffect, useRef, useState} from "react";

interface HeaderSubmenuProps {
links: NavItem[];
onMouseEnter?: () => void;
onMouseLeave?: () => void;
triggerRef?: React.RefObject<HTMLElement>;
}

export const HeaderSubmenu = ({links, onMouseEnter, onMouseLeave, triggerRef}: HeaderSubmenuProps) => {
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

    return createPortal( <div
        className={css.dropdown}
        style={{
            '--dropdown-top': `${position.top}px`,
            '--dropdown-left': `${position.left}px`
        } as React.CSSProperties}
    >
        <div className={css.dropdownContent}>
            {links.map((child: NavItem) => (
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
    </div>, document.body)
};