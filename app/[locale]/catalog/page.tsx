import {getPathname, Link} from "@/src/app/i18n/routing";
import Breadcrumps from "@/src/components/ui/Breadcrumps";
import MapComponent from "@/src/components/MapComponent";
import CatalogList from "@/src/components/Catalog/CatalogList";
import {useTranslations} from "next-intl";
import {Metadata} from "next";
import {getLocale, getTranslations} from "next-intl/server";
import {Locale} from "@/types";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations()
    const locale = await getLocale() as Locale;
    const pathname = getPathname({
        locale:locale,
        href:'/catalog'
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
        title: t('catalog_title'),
        description: t('catalog_desc')
    }
}
const Page = () => {
    const t = useTranslations()
    return (
        <>
            <section className="breadcrumbs">
                <Breadcrumps links={[{label: 'main', href: '/', active: true}, {label: 'catalog', href: '/catalog', active: true}]}/>
                <h2>{t('catalog') }</h2>
            </section>
            <CatalogList/>
            <MapComponent/>
        </>
    );
};


export default Page;