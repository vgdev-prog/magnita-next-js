import {getLocale, getTranslations} from "next-intl/server";
import {Link} from "@/src/app/i18n/routing";
import MapComponent from "@/src/components/MapComponent";
import {Metadata} from "next";
import {Locale} from "@/types";
import {getPathname} from "@/src/app/i18n/routing";

export const generateMetadata = async (): Promise<Metadata> => {
    const t = await getTranslations()
    const locale = await getLocale() as Locale;
    const pathname = getPathname({
        locale:locale,
        href:'/warranty'
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
        title: t('warranty_title'),
        description:t('warranty_desc')
    }
}

const Page = async ({}) => {
    const locale = await getLocale();
    const t = await getTranslations();

    return (
        <>
            <section className="breadcrumbs">
                <ul>
                    <li>
                        <Link href="/">
                            {t('main')}
                        </Link>
                    </li>
                    <li>
                        {t('warranty')}
                    </li>
                </ul>
                <h1 className="h1_title" data-aos="fade-up" data-aos-duration="1500">{t('warranty_h1')}</h1>
            </section>
            <section className="delivery_content" style={{paddingBottom:'60px'}}>
                <div className="container" dangerouslySetInnerHTML={{__html:t.raw('warranty_content')}} />
            </section>
            <MapComponent />
        </>
    );
};

Page.propTypes = {};

export default Page;