import css from './header-factory.module.scss'
import {useTranslations} from "next-intl";
import Image from "next/image";
import factoryLogo from '@/src/widgets/header/assets/factory.webp'

export const HeaderFactory = () => {
    const t = useTranslations('header')
    return (
        <div className={css.factory}>
        <Image width={50} height={50} src={factoryLogo} alt=""/>
        <div className={css.description}>
            <p className={css.title}>{t('own_manufacturing')}</p>
            <p className={css.second}>
                <span dangerouslySetInnerHTML={{__html: t.raw('own_manufacturing_desc')}}/>
            </p>
        </div>
    </div>
    );
};