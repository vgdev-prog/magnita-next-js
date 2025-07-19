import { Link } from "@/src/app/i18n/routing";
import {useLocale} from "next-intl";
import css from './header-submenu-item.module.scss'
import {NavItem} from "@/src/widgets/header/types";

interface ClientNavigationLinkProps {
item: NavItem
}

export const HeaderSubmenuItem = ({item}: ClientNavigationLinkProps) => {
    const locale = useLocale();
    return (
        <li className={css.item}>
            <Link href={item.href} locale={locale}>{item.title}</Link>
        </li>
    );
};