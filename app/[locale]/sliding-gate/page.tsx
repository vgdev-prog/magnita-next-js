import Breadcrumps from "@/src/components/ui/Breadcrumps";
import {getLocale, getTranslations} from "next-intl/server";
import SlidingGate from "@/src/components/Catalog/SlidingGate";
import {Metadata} from "next";
import {Locale} from "@/types";
import {getPathname} from "@/src/app/i18n/routing";


export const generateMetadata = async (): Promise<Metadata> => {
    const t = await getTranslations()
    const locale = await getLocale() as Locale;
    const pathname = getPathname({
        locale:locale,
        href:'/sliding-gate'
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
        title: t('slide_gate_title'),
        description:t('slide_gate_desc')
    }
}


const Page = async ({}) => {
    const t = await getTranslations();
    const locale = await getLocale();
    return (
        <>
            <section className='breadcrumbs'>
                <Breadcrumps links={[{href: '/', label: 'main', active: true}, {href: '/catalog', label: 'catalog', active: true}, {label: 'category_6', href: '#', active: false}]}/>
                <h1 className="h1_title" data-aos="fade-up" data-aos-duration="1500">
                    {t('slide_gate_page_h1')}
                </h1>
            </section>
            <SlidingGate locale={locale} />
        </>
    );
};


export default Page;