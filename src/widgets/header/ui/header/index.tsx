"use client"
import css from './header.module.scss'
import clsx from "clsx";
import {useNavigation} from "@/src/widgets/header/model/use-navigation";
import {HeaderLogo} from "@/src/widgets/header/ui/header-logo";
import {HeaderFactory} from "@/src/widgets/header/ui/header-factory";
import { HeaderCalculator } from '../header-calculator';
import { HeaderMessengers } from '../header-messengers';
import {HeaderContacts} from "@/src/widgets/header/ui/header-contacts";
import {HeaderSubmenu} from "@/src/widgets/header/ui/header-submenu";
import {HeaderSubmenuItem} from "@/src/widgets/header/ui/header-submenu-item";
import {NavItem} from "@/src/widgets/header/types";

export interface HeaderProps {
initialNavigationItems: NavItem[];
}

export const Header = ({initialNavigationItems}: HeaderProps) => {

    const {navigationItems} = useNavigation(initialNavigationItems);

    return (
        <header className={css.header}>
                <div className={clsx(css.top_header)}>
                    <div className={clsx('header__container',css.container)}>
                        <HeaderLogo />
                        <HeaderFactory/>
                        <HeaderCalculator />
                        <HeaderMessengers />
                        <HeaderContacts onCallClick={() => {
                            // TODO: Add send user to another page
                            console.log('open modal')
                        }} />
                    </div>
                </div>
                <div className={css.bottom_header}>
                   <nav className="header__container">
                       <HeaderSubmenu links={navigationItems} Element={HeaderSubmenuItem}/>
                   </nav>
                </div>
        </header>
    );
};