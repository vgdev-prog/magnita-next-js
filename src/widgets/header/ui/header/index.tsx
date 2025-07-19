"use client"
import css from './header.module.scss'
import {HeaderLogo} from "@/src/widgets/header/ui/header-logo";
import {HeaderFactory} from "@/src/widgets/header/ui/header-factory";
import HeaderCalculator from "@/src/widgets/header/ui/header-calculator";
import HeaderMessengers from "@/src/widgets/header/ui/header-messengers";
import {HeaderContacts} from "@/src/widgets/header/ui/header-contacts";
import clsx from "clsx";
import {HeaderSubmenu} from "@/src/widgets/header/ui/header-submenu";

export interface HeaderProps {

}

export const Header = ({}: HeaderProps) => {
    return (
        <header className={css.header}>
                <div className={clsx(css.top_header)}>
                    <div className={clsx('header__container',css.container)}>
                        <HeaderLogo />
                        <HeaderFactory/>
                        <HeaderCalculator />
                        <HeaderMessengers />
                        <HeaderContacts onCallClick={() => {
                            // TODO: Add opening modal later
                            console.log('open modal')
                        }} />
                    </div>
                </div>
                <div className={css.bottom_header}>
                   <nav className="header__container">
                       <HeaderSubmenu />
                   </nav>
                </div>
        </header>
    );
};