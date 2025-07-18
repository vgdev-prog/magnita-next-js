import {Link} from "@/src/app/i18n/routing";
import {getLocale, getTranslations} from "next-intl/server";
import MapComponent from "@/src/components/MapComponent";
import {Metadata} from "next";
import {Locale} from "@/types";
import {getPathname} from "@/src/app/i18n/routing";


export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations()
    const locale = await getLocale() as Locale;
    const pathname = getPathname({
        locale:locale,
        href:'/dostavka-ta-oplata'
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
        title: t('dostavka_title'),
        description: t('dostavka_desc')
    }
}
const Page =  async ({}) => {
    const locale = getLocale();
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
                        {t('dostavka_i_oplata')}
                    </li>
                </ul>
                <h1 className="h1_title" data-aos="fade-up" data-aos-duration="1500">{t('dostavka_h1')}</h1>
            </section>
            <section className="delivery_content" style={{paddingBottom:'60px'}}>
                <div className="container" dangerouslySetInnerHTML={{__html:t.raw('dostavka_i_oplata_content')}} />
            </section>
            <MapComponent />
        </>
    );
};

Page.propTypes = {};

export default Page;