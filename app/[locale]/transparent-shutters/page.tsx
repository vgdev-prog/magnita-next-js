import Breadcrumps from "@/src/components/ui/Breadcrumps";
import {useTranslations} from "next-intl";
import TransparentShutters from "@/src/components/Catalog/TransparentShutters";
import {Metadata} from "next";
import {getLocale, getTranslations} from "next-intl/server";
import {Locale} from "@/types";
import {getPathname} from "@/src/app/i18n/routing";

export const generateMetadata = async (): Promise<Metadata> => {
    const t = await getTranslations()
    const locale = await getLocale() as Locale;
    const pathname = getPathname({
        locale:locale,
        href:'/transparent-shutters'
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
        title: t('transparent_page_title'),
        description:t('transparent_page_desc')
    }
}
const Page = () => {
    const t = useTranslations();
    return (
        <>
            <section className='breadcrumbs'>
                <Breadcrumps links={[{href: '/', label: 'main', active: true}, {href: '/catalog', label: 'catalog', active: true}, {label: 'transparent_title',href:'#',active:false}]}/>
                <h1 className="h1_title" data-aos="fade-up" data-aos-duration="1500">{t('transparent_title')}</h1>

            </section>
            <TransparentShutters />
        </>
    );
};


export default Page;