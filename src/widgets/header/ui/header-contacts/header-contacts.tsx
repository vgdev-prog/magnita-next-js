import {useTranslations} from "next-intl";
import {KyivstarIcon, VodafoneIcon} from "@/src/shared";
import css from './header-contacts.module.scss'
interface HeaderContactsProps {
onCallClick: () => void;
}

export const HeaderContacts = ({onCallClick}: HeaderContactsProps) => {
    const t = useTranslations('header');
    return (
        <div className={css.block}>
            <a className={css.tel} href="tel:+380955496062">
                <VodafoneIcon/>
                <span>+38 (095) 549-60-62</span>
            </a>
            <a className={css.tel} href="tel:+380676313823">
                <KyivstarIcon/>
                <span>+38 (067) 631-38-23</span>
            </a>
            <button onClick={onCallClick} className={css.call_us}>{t('call_me')}</button>
        </div>
    );
};