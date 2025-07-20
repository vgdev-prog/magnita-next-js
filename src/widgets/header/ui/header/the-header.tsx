"use client"
import css from './header.module.scss'
import clsx from "clsx";
import {useNavigation} from "@/src/widgets/header/model/use-navigation";
import {HeaderLogo} from "@/src/widgets/header/ui/header-logo";
import {HeaderFactory} from "@/src/widgets/header/ui/header-factory";
import { HeaderCalculator } from '../header-calculator';
import { HeaderMessengers } from '../header-messengers';
import {NavItem} from "@/src/widgets/header/types";
import {HeaderActions} from "@/src/widgets/header/ui/header-actions";
import {ReactNode} from "react";
import {HeaderMenu} from "@/src/widgets/header/ui";
import {HeaderMenuItem} from "@/src/widgets/header/ui";

export interface HeaderProps {
initialNavigationItems: NavItem[];
searchButton?: ReactNode;
languageSelect?: ReactNode;
cartButton?: ReactNode;
burgerButton?: ReactNode;
}

export const Header = ({initialNavigationItems,searchButton,cartButton,languageSelect,burgerButton}: HeaderProps) => {

    const {navigationItems} = useNavigation(initialNavigationItems);

    return (
        <header className={css.header}>
                <div className={clsx(css.top_header)}>
                    <div className={clsx('header__container',css.container)}>
                        <HeaderLogo />
                        <HeaderFactory/>
                        <HeaderCalculator />
                        <HeaderMessengers />
                        <HeaderActions burger={burgerButton} search={searchButton} language={languageSelect} cart={cartButton} />
                    </div>
                </div>
                <div className={css.bottom_header}>
                   <div className="header__container">
                       <HeaderMenu links={navigationItems} Element={HeaderMenuItem}/>
                   </div>

                </div>
        </header>
    );
};