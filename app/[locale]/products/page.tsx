import Breadcrumps from "@/src/components/ui/Breadcrumps";
import {getLocale, getTranslations} from "next-intl/server";
import Products from "@/src/components/Products/Products/Products";
import Callback from "@/src/components/Callback";
import MapComponent from "@/src/components/MapComponent";
import {Metadata} from "next";
import {Locale} from "@/types";
import {getPathname} from "@/src/app/i18n/routing";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations()
    const locale = await getLocale() as Locale;
    const pathname = getPathname({
        locale:locale,
        href:'/products'
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
        title: t('products_title'),
        description:t('products_desc')
    }
}
const Page = async ({}) => {
    const t = await getTranslations()
    return (
        <>
            <section className='breadcrumbs'>
                <Breadcrumps links={[{href: '/', label: 'main', active: true}, {href: '/catalog', label: 'catalog', active: true}, {label: 'protective_shrutters', href: '#', active: false}]}/>
                <h1 className="h1_title" data-aos="fade-up" data-aos-duration="1500">{t('protective_shrutters')}</h1>
            </section>
            <section className="catalogue-main-page categories-page">
                <Products/>
                <Callback />
                <MapComponent />
            </section>
        </>
    );
};


export default Page;