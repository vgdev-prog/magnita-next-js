import {getLocale, getTranslations} from "next-intl/server";
import {Link} from "@/src/app/i18n/routing";
import {getAllNews} from "@/lib/api";
import NewsItems from "@/src/components/News/NewsItems";
import NewsSidebar from "@/src/components/News/NewsSidebar";
import Callback from "@/src/components/Callback";
import MapComponent from "@/src/components/MapComponent";
import {Metadata} from "next";
import {Locale} from "@/types";
import {getPathname} from "@/src/app/i18n/routing";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations()
    const locale = await getLocale() as Locale;
    const pathname = getPathname({
        locale:locale,
        href:'/news'
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
        title: t('news')
    }
}

const Page = async ({}) => {
    const t = await getTranslations()
    const news = await getAllNews();
    const locale = await getLocale()
    return (
        <>
            <section className="breadcrumbs">
                <ul>
                    <li>
                        <Link locale={locale} href="/">{t('main')}</Link>
                    </li>
                    <li>
                        {t('news')}
                    </li>
                </ul>
                <h2 data-aos="fade-up" data-aos-duration="1500">{t('news')}</h2>
            </section>
            <section className="news-page" style={{paddingBottom:'100px'}}>
                <div className="container">
                    <div className="left">
                        <NewsSidebar />
                    </div>
                    <div className="right" >
                        <NewsItems news={news} />
                    </div>
                </div>
            </section>
            <Callback />
            <MapComponent />
        </>
    );
};

Page.propTypes = {};

export default Page;