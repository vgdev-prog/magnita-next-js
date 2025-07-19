import { Link } from "@/src/app/i18n/routing";
import {useLocale} from "next-intl";
import css from './header-submenu-item.module.scss'
import {NavItem} from "@/src/widgets/header/types";

interface ClientNavigationLinkProps {
item: NavItem
}

export const HeaderSubmenuItem = ({item}: ClientNavigationLinkProps) => {
    const locale = useLocale();

    const itemHasChildren = item.children && item.children.length > 0;

    return (
        <li className={css.item}>
            <Link href={item.href} locale={locale}>{item.title}</Link>
            <svg className={css.icon} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.82808 7.00001L7.77808 11.95L6.36408 13.364L7.57376e-05 7.00001L6.36408 0.636013L7.77808 2.05001L2.82808 7.00001Z" fill="white"></path></svg>
        </li>
    );
};