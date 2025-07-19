import {Link} from "@/src/app/i18n/routing";
import {useLocale, useTranslations} from "next-intl";
import css from './header-logo.module.scss'
import logo from '@/src/widgets/header/assets/logo_en_new.png.webp'
import Image from "next/image";

export const HeaderLogo = () => {
    const locale = useLocale();
    const t = useTranslations('header');
    return (
        <div className={css.block}>
            <Link className={css.link} href={'/'} locale={locale}
            >
                <Image height="45" src={logo} alt="Company Logo" width="140" />
                <span dangerouslySetInnerHTML={{__html: t.raw('logo_desc')}}/>
            </Link>
            <p className={css.text}>
                <span dangerouslySetInnerHTML={{__html: t.raw('activity_1')}}/>
                <span dangerouslySetInnerHTML={{__html: t.raw('activity_2')}}/>
            </p>
        </div>
    );
};