import {getLocale, getTranslations} from "next-intl/server";
import {Link} from "@/src/app/i18n/routing";
import {getProduct} from "@/lib/api";
import {Locale} from "@/types";
import SingleProduct from "@/src/components/Products/Products/SingleProduct";
import Certificates from "@/src/components/Certificates";
import Callback from "@/src/components/Callback";
import MapComponent from "@/src/components/MapComponent";
import {getPathname} from "@/src/app/i18n/routing";



type Params = Promise<{ id: string }>

export async function generateMetadata(props: {
    params: Params
}){
    const locale = await getLocale() as Locale;
    const {id} = await props.params
    const product = await getProduct(id);
    const pathname = getPathname({
        locale:locale,
        href:`/product/${id}`
    })
    const getTitle = (locale: string): string => {
        switch (locale) {
            case 'ua':
                return product.title_ua
            case 'ru':
                return product.title
            case 'en':
                return product.title_en
            default:
                return product.title_ua
        }
    }
    return {
        alternates: {
            canonical:`https://magnita.ua${pathname}`,
            languages: {
                'en-US': `https://magnita.ua/en${pathname}`,
                'ru-RU': `https://magnita.ua/ru${pathname}`,
                'uk-UA': `https://magnita.ua${pathname}`,
            },
        },
        title: getTitle(locale)
    }
}



const Page = async (props: {
    params: Params
}) => {
    const {id} = await props.params
    const product = await getProduct(id);
    const t = await getTranslations();
    const locale = await getLocale() as Locale;
    const getTitle = (locale: string): string => {
        switch (locale) {
            case 'ua':
                return product.title_ua
            case 'ru':
                return product.title
            case 'en':
                return product.title_en
            default:
                return product.title_ua
        }
    }

    return (
        <>
            <section className="breadcrumbs">
                <ul>
                    <li>
                        <Link href="/">{t('main')}</Link>
                    </li>
                    <li>
                        <Link href="/catalog">{t('catalog')}</Link>
                    </li>
                    <li>
                        <Link href="/products">{t('protective_shrutters')}</Link>
                    </li>
                    <li>
                        {getTitle(locale)}
                    </li>
                </ul>
            </section>
            <SingleProduct product={product} getTitle={getTitle(locale)}/>
            <Certificates />
            <Callback />
            <MapComponent />
        </>
    );
};


export default Page;