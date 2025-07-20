import css from './header-menu.module.scss'
import {NavItem} from "@/src/widgets/header/types";
import {ComponentType} from "react";

type ItemComponent = ComponentType<{ item: NavItem }>;

interface NavigationProps {
    links: NavItem[],
    Element: ItemComponent;
}

export const HeaderMenu = ({links,Element}: NavigationProps) => {
    return (
        <ul className={css.menu}>
            {links.map(link => (
                <Element key={link.id} item={link}/>
                )
            )}
        </ul>
    );
};