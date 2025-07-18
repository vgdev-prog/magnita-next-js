import Breadcrumps from "@/src/components/ui/Breadcrumps";
import {getLocale, getTranslations} from "next-intl/server";
import Parts from "@/src/components/Catalog/Parts";
import {Metadata} from "next";
import {Locale} from "@/types";
import {getPathname} from "@/src/app/i18n/routing";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations()
    const locale = await getLocale() as Locale;
    const pathname = getPathname({
        locale:locale,
        href:'/product-parts'
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
        title: t('parts_title'),
        description:t('parts_desc')
    }
}
const Page = async ({}) => {
    const t = await getTranslations();
    return (
        <>
            <section className='breadcrumbs'>
                <Breadcrumps links={[{href: '/', label: 'main', active: true}, {href: '/catalog', label: 'catalog', active: true}, {label: 'category_10',href:'#',active:false}]}/>
                <h1 className="h1_title" data-aos="fade-up" data-aos-duration="1500">{t('parts_h1')}</h1>
            </section>
            <Parts />
        </>
    );
};


export default Page;