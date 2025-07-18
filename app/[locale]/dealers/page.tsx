import {Link} from "@/src/app/i18n/routing";
import {getLocale, getTranslations} from "next-intl/server";
import DealerPage from "@/src/components/Dealers/DealerPage";
import DownloadCatalog from "@/src/components/DownloadCatalog";
import MapComponent from "@/src/components/MapComponent";
import {Map} from "immutable";
import {Metadata} from "next";
import {Locale} from "@/types";
import {getPathname} from "@/src/app/i18n/routing";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations()
    const locale = await getLocale() as Locale;
    const pathname = getPathname({
        locale:locale,
        href:'/dealers'
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
        title: t('dealers_title'),
        description: t('dealers_desc')
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
                        {t('dealers')}
                    </li>
                </ul>
                <h1 className="h1_title" data-aos="fade-up" data-aos-duration="1500">{t('dealers_h1')}</h1>
            </section>
            <DealerPage/>
            <DownloadCatalog />
            <div style={{paddingBottom:'50px'}}></div>
            <MapComponent />
        </>
    );
};

Page.propTypes = {};

export default Page;