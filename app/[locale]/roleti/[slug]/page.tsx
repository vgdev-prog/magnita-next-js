import {getLocale, getTranslations} from "next-intl/server";
import {Locale} from "@/types";
import {getPart, getProduct, getProductFromTown} from "@/lib/api";
import Towns from "@/src/components/Products/Towns";
import {getPathname} from "@/src/app/i18n/routing";



type Params = Promise<{ slug: string }>


export async function generateMetadata(props: {
    params: Params
}){
    const locale = await getLocale()
    const {slug} = await props.params
    const product = await getProductFromTown(slug);
    const pathname = getPathname({
        locale:locale,
        href:`/roleti/${slug}`
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
    const {slug} = await props.params;
    const info = await getProductFromTown(slug);

    function fetchText(locale: string, column: string) {
        switch (locale) {
            case 'ru':
                return info[column]
            case 'ua':
                return info[`${column}_ua`]
            case 'en':
                return info[`${column}_en`]
            default:
                return info[`${column}_ua`]
        }
    }

    const t = await getTranslations();
    const locale = await getLocale() as Locale;
    return (
        <>
            <section className="breadcrumbs" >
                <ul>
                    <li>
                        <a href="">{t('main')}</a>
                    </li>
                    <li>
                        {fetchText(locale, 'title_page')}
                    </li>
                </ul>
                <h1
                    className="h1_title"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                >{fetchText(locale, 'title_page')}</h1>
            </section>
            <Towns info={info}/>
        </>
    );
};

export default Page;