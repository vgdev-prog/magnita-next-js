import {useTranslations} from "next-intl";
import {getLocale, getTranslations} from "next-intl/server";
import BasketPage from "@/src/components/Basket/BasketPage";
import MapComponent from "@/src/components/MapComponent";
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
        href:'/basket'
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
        title: t('checkout_title'),
    }
}
const Page = async ({}: PageProps) => {
    const t = await getTranslations();
    const locale = await getLocale();
    return (
        <>
            <section className="breadcrumbs">
                <ul>
                    <li>
                        <a href="/">{t('main')}</a>
                    </li>
                    <li>
                        {t('checkout_title')}
                    </li>
                </ul>
                <h2
                    data-aos="fade-up"
                    data-aos-duration="1500"
                >
                    {t('checkout_title')}
                </h2>
            </section>
            <BasketPage />
            <MapComponent />
        </>
    );
};

Page.propTypes = {};

export default Page;