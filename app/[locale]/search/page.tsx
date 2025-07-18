import {useTranslations} from "next-intl";
import {getLocale, getTranslations} from "next-intl/server";
import {API_URL} from "@/contants";
import {Metadata} from "next";
import {Locale} from "@/types";
import {getPathname} from "@/src/app/i18n/routing";
import Products from "@/src/components/Products/Products/Products";
import Callback from "@/src/components/Callback";
import MapComponent from "@/src/components/MapComponent";
import SearchTitle from "@/src/components/SearchTitle";
import SearchProducts from "@/src/components/Products/Products/SearchProducts";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations()
    const locale = await getLocale() as Locale;
    const pathname = getPathname({
        locale:locale,
        href:'/search'
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

export interface PageProps {
    searchParams: {
        q?: string;
    };
}
const getSearchValues = async (value:string) => {
    const res = await fetch(`https://api.magnita.ua/api/search-products/${value}`)
    return await res.json();
}

const Page = async () => {

    const t = await getTranslations();
    return (
        <>
        <section className="breadcrumbs">
            <ul>
                <li>
                    <a href="/">{t('main') }</a>
            </li>
            <li>
                Поиск
            </li>
        </ul>
        <SearchTitle />
        </section>
            <section className="catalogue-main-page categories-page">
                <SearchProducts/>
                <Callback />
                <MapComponent />
            </section>
        </>
    );
};

Page.propTypes = {
    
};

export default Page;