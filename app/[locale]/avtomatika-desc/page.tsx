import Breadcrumps from "@/src/components/ui/Breadcrumps";
import {useTranslations} from "next-intl";
import {getLocale, getTranslations} from "next-intl/server";
import Avtomatika from "@/src/components/Catalog/Avtomatika";
import {Metadata} from "next";
import {Locale} from "@/types";
import {getPathname} from "@/src/app/i18n/routing";

export interface PageProps {

}
export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations()
    const locale = await getLocale() as Locale;
    const pathname = getPathname({
        locale:locale,
        href:'/avtomatika-desc'
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
        title: t('avtomatika_h1'),
        description: t('avtomatika_desc_1')
    }
}
const Page = async ({}: PageProps) => {
    const t = await getTranslations();
    const locale= await getLocale();
    return (
        <>
            <section className='breadcrumbs'>
                <Breadcrumps links={[{href: '/', label: 'main', active: true}, {href: '/catalog', label: 'catalog', active: true}, {label: 'category_12',href:'#',active:false}]}/>
                <h1 className="h1_title" data-aos="fade-up" data-aos-duration="1500">{t('avtomatika_h1')}</h1>
            </section>
            <Avtomatika locale={locale} />
        </>
    );
};


export default Page;