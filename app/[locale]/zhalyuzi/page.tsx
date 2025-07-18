import Breadcrumps from "@/src/components/ui/Breadcrumps";
import {useTranslations} from "next-intl";
import Zhalyuzi from "@/src/components/Catalog/Zhalyuzi";
import {Metadata} from "next";
import {getLocale, getTranslations} from "next-intl/server";
import {Locale} from "@/types";
import {getPathname} from "@/src/app/i18n/routing";

export interface PageProps {

}

export const generateMetadata = async (): Promise<Metadata> => {
    const t = await getTranslations()
    const locale = await getLocale() as Locale;
    const pathname = getPathname({
        locale:locale,
        href:'/zhalyuzi'
    })
    return {
        alternates: {
            canonical:`https://magnita.ua${pathname}`,
            languages: {
                'en-US': `https://magnita.ua/en${pathname}`,
                'ru-RU': `https://magnita.ua/ru${pathname}`,
                'uk-UA': `https://magnita.ua${pathname}`,
            },
        },
        title: t('category_9'),
    }
}
const Page = ({}: PageProps) => {
    const t = useTranslations();
    return (
        <>
            <section className="breadcrumbs">
                <Breadcrumps links={[{href: '/', label: 'main', active: true}, {href: '/catalog', label: 'catalog', active: true}, {label: 'category_8', href: '#', active: false}]}/>
                <h1 className="h1_title" data-aos="fade-up" data-aos-duration="1500">{t('zhaluz_h1')}</h1>
            </section>
            <Zhalyuzi />
        </>
    );
};


export default Page;