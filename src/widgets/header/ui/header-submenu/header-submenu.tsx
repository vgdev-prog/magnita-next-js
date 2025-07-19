import {useQuery} from "@tanstack/react-query";
import css from './header-submenu.module.scss'
import {HeaderSubmenuItem} from "@/src/widgets/header/ui/header-submenu-item";
import {NavItem} from "@/src/widgets/header/types";
interface NavigationProps {
links: NavItem[]
}

export const HeaderSubmenu = ({links}: NavigationProps) => {
    return (
        <ul className={css.menu}>
            {links.map(link => (
                <HeaderSubmenuItem link={link} key={link.id}/>
            ))}
        </ul>
    );
};