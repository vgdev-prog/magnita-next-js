import { Link } from "@/src/app/i18n/routing";
import {useLocale, useTranslations} from "next-intl";
import {ClientRoute} from "@/src/features/navigation/client/types";
import css from './header-submenu-item.module.scss'

interface ClientNavigationLinkProps {
link: ClientRoute
}

export const HeaderSubmenuItem = ({link}: ClientNavigationLinkProps) => {
    const locale = useLocale();
    const t = useTranslations();
    return (
        <li className={css.item}>
            <Link href={link.url} locale={locale}>{t(link.label)}</Link>
        </li>
    );
};