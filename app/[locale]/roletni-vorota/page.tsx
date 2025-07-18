import {getLocale, getTranslations} from "next-intl/server";
import Breadcrumps from "@/src/components/ui/Breadcrumps";
import MapComponent from "@/src/components/MapComponent";
import {Metadata} from "next";
import {Locale} from "@/types";
import {getPathname} from "@/src/app/i18n/routing";
import {getSubTowns} from "@/lib/api";
import Products from "@/src/components/Products/Products/Products";
import RoletniVorota from "@/src/components/Catalog/RoletniVorota";
import ProductsRolentniVorota from "@/src/components/Products/Products/ProductsRoletniVorota";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations()
    const locale = await getLocale() as Locale;
    const pathname = getPathname({
        locale:locale,
        href:'/roletni-vorota'
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
        title: t('rol-vorota_title'),
        description:t('rol-vorota_page_desc')
    }
}

const Page = async ({}) => {
    const locale = await getLocale();
    const towns = await getSubTowns();
    const t = await getTranslations();
    return (
        <>
            <section className="breadcrumbs">
                <Breadcrumps links={[{href: '/', label: 'main', active: true}, {href: '/catalog', label: 'catalog', active: true}, {label: 'rol-vorota', href: '#', active: false}]}/>
                <h1 className="h1_title" data-aos="fade-up" data-aos-duration="1500">
                    {t('rol-vorota_h1')}
                </h1>
            </section>
            <section className="catalogue-main-page categories-page">
            <ProductsRolentniVorota towns={towns} locale={locale}/>
            </section>
            <MapComponent />
        </>
    );
};

Page.propTypes = {};

export default Page;