import {getLocale, getTranslations} from "next-intl/server";
import {Link} from "@/src/app/i18n/routing";
import {getBlind, getPart} from "@/lib/api";
import SinglePart from "@/src/components/Products/Parts/SinglePart";
import Certificates from "@/src/components/Certificates";
import Callback from "@/src/components/Callback";
import MapComponent from "@/src/components/MapComponent";
import {Locale} from "@/types";
import {getPathname} from "@/src/app/i18n/routing";

export interface PageProps {

}
type Params = Promise<{ id: string }>


export async function generateMetadata(props: {
    params: Params
}){
    const locale = await getLocale()
    const {id} = await props.params
    const product = await getPart(id);
    const pathname = getPathname({
        locale:locale,
        href:`/product-parts/${id}`
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
    const {id} = await props.params;
    const product = await getPart(id);
    const t = await getTranslations();
    const locale = await getLocale();
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
                        <Link locale={locale} href="/">{t('main')}</Link>
                    </li>
                    <li>
                        <Link locale={locale} href="/catalog">{t('catalog')}</Link>
                    </li>
                    <li>
                        <Link locale={locale} href="/product-parts">{t('parts')}</Link>
                    </li>
                    <li>
                        {getTitle(locale)}
                    </li>
                </ul>
            </section>
            <SinglePart product={product} getTitle={getTitle(locale)} />
            <Certificates />
            <Callback />
            <MapComponent />
        </>
    );
};

Page.propTypes = {

};

export default Page;