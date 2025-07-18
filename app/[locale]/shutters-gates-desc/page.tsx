import Breadcrumps from "@/src/components/ui/Breadcrumps";
import {getLocale, getTranslations} from "next-intl/server";
import ShuttersGatesDesc from "@/src/components/Catalog/ShuttersGatesDesc";
import {getSubTowns} from "@/lib/api";
import {Metadata} from "next";
import {Locale} from "@/types";
import {getPathname} from "@/src/app/i18n/routing";

export const generateMetadata = async (): Promise<Metadata> => {
    const t = await getTranslations()
    const locale = await getLocale() as Locale;
    const pathname = getPathname({
        locale:locale,
        href:'/shutters-gates-desc'
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
        title: t('gates_desc_page_title'),
        description:t('gates_desc_page_desc')
    }
}

const Page = async ({}) => {
    const t = await getTranslations();
    const towns = await getSubTowns();
    const locale = await getLocale();
    return (
        <>
            <section className='breadcrumbs'>
                <Breadcrumps links={[{href: '/', label: 'main', active: true}, {href: '/catalog', label: 'catalog', active: true}, {label: 'roller_gates', href: '#', active: false}]}/>
                <h1 className="h1_title" data-aos="fade-up" data-aos-duration="1500">
                    {t('gates_desc_page_h1')}
                </h1>
            </section>
            <ShuttersGatesDesc towns={towns} locale={locale}/>
        </>
    );
};

export default Page;