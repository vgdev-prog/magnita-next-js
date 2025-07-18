import {getLocale, getTranslations} from "next-intl/server";
import {getPathname, Link} from "@/src/app/i18n/routing";
import ProductCalculator from "@/src/components/Calculator/Blind/ProductCalculator";
import {Locale} from "@/types";

export async function generateMetadata(){
    const locale = await getLocale() as Locale;
    const t = await getTranslations()
    const pathname = getPathname({
        locale:locale,
        href:`/calculator-horizontal-blinds`
    })

    return {
        title: t('calculator_title_2'),
        description: t('blinds_desc_page_subdesc_1')+t('blinds_desc_page_subdesc_2')+t('blinds_desc_page_subdesc_3')+t('blinds_desc_page_subdesc_4'),
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



const Page = async ({}) => {
    const t = await getTranslations();
    const locale = await getLocale();
    return (
        <>
            <section className="breadcrumbs">
                <ul>
                    <li>
                        <Link locale={locale} href="/">{t('main')}</Link>
                    </li>
                    <li>
                        <Link locale={locale} href="/price-calculator-protective-shutters">{t('calculator_worth')}</Link>
                    </li>
                    <li>
                        {t('calculator_title_2')}
                    </li>
                </ul>
                <h2
                    data-aos="fade-up"
                    data-aos-duration="1500"
                >
                    {t('calculator_title_2')}
                </h2>
            </section>
<ProductCalculator />
        </>
    );
};

Page.propTypes = {};

export default Page;