import {getLocale, getTranslations} from "next-intl/server";
import {getPathname, Link} from "@/src/app/i18n/routing";
import CalcCategoriesSection from "@/src/components/Calculator/Product/CalcCategoriesSection";
import {Locale} from "@/types";

export interface PageProps {

}
export async function generateMetadata(){
    const locale = await getLocale() as Locale;
    const t = await getTranslations();
    const pathname = getPathname({
        locale:locale,
        href:`/price-calculator-protective-shutters`
    })

    return {
        title: t('calculator_worth'),
        description: t('calculator_desc'),
        alternates: {
            canonical:`https://magnita.ua${pathname}`,
            languages: {
                'en-US': `https://magnita.ua/en${pathname}`,
                'ru-RU': `https://magnita.ua/ru${pathname}`,
                'uk-UA': `https://magnita.ua${pathname}`,
            },
        }
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
                    <Link locale={locale} href="/">
                    {t('main') }
                </Link>
            </li>
            <li>
                {t('calculator_worth') }
            </li>
        </ul>
        <h1 className="h1_title" data-aos="fade-up" data-aos-duration="1500">
            {t('calc_title_1') }
        </h1>
        </section>
            <CalcCategoriesSection/>

        </>
    );
};

Page.propTypes = {

};

export default Page;