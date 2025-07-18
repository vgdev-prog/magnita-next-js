import {getPathname, Link} from "@/src/app/i18n/routing";
import NewsSidebar from "@/src/components/News/NewsSidebar";
import {getLocale, getTranslations} from "next-intl/server";
import {getAllArticles} from "@/lib/api";
import Paginate from "@/src/components/News/Paginate";
import ArticlesItems from "@/src/components/Articles/ArticlesItems";
import {Metadata} from "next";
import {Locale} from "@/types";
import Measurer from "@/src/components/ui/Measurer";

export interface PageProps {

}

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations()
    const locale = await getLocale() as Locale;
    const pathname = getPathname({
        locale:locale,
        href:'/articles'
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
        title: t('articles'),
        description: t('articles_desc')
    }
}

const Page = async ({}: PageProps) => {
    const articles = await getAllArticles();
    const t = await getTranslations();
    const locale = await getLocale();
    return (
        <>
            <section className="breadcrumbs" >
                <ul>
                    <li>
                        <Link locale={locale} href="/">{t('main')}</Link>
                    </li>
                    <li>
                        {t('articles')}
                    </li>
                </ul>
                <h2 data-aos="fade-up" data-aos-duration="1500">{t('articles_h1')}</h2>
            </section>
            <section className="news-page" style={{paddingBottom:'50px'}}>
                <div className="container">
                        <div className="left">
                            <NewsSidebar/>
                        </div>
                        <div className="right">
                            <ArticlesItems data={articles}/>
                        </div>
                </div>
            </section>
        </>
    );
};

export default Page;