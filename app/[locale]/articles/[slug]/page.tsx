import {getPathname, Link} from "@/src/app/i18n/routing";
import NewsSidebar from "@/src/components/News/NewsSidebar";
import ArticlesItems from "@/src/components/Articles/ArticlesItems";
import {getLocale, getTranslations} from "next-intl/server";
import {getArticle} from "@/lib/api";
import {ArticleType, Locale} from "@/types";
import SingleArticleItem from "@/src/components/Articles/SingleArticleItem";
import Callback from "@/src/components/Callback";
import MapComponent from "@/src/components/MapComponent";

export interface PageProps {

}

type Params = Promise<{ slug: string }>

export async function generateMetadata(props: {
    params: Params
}) {
    const locale = await getLocale() as Locale
    const {slug} = await props.params;
    const pathname = getPathname({
        locale:locale,
        href:`/articles/${slug}`
    })
    const item:ArticleType = await getArticle(slug);
    return {
        alternates: {
            canonical:`https://magnita.ua${pathname}`,
            languages: {
                'en-US': `https://magnita.ua/en${pathname}`,
                'ru-RU': `https://magnita.ua/ru${pathname}`,
                'uk-UA': `https://magnita.ua${pathname}`,
            },
        },
        title: item[`title_${locale}`]
    }
}


const Page = async (props: {
    params: Params
}) => {
    const {slug} = await props.params
    const article = await getArticle(slug);
    const locale = await getLocale() as Locale;
    const t = await getTranslations();
    return (
        <>
            <section className="breadcrumbs">
                <ul>
                    <li>
                        <Link locale={locale} href="/">{t('main')}</Link>
                    </li>
                    <li>
                        <Link locale={locale} href="/articles">{t('articles')}</Link>
                    </li>
                    <li>
                        {article[`title_${locale}`]}
                    </li>
                </ul>
                <h2 data-aos="fade-up" data-aos-duration="1500">{article[`title_${locale}`]}</h2>
            </section>
            <section className="news-page" style={{paddingBottom:'50px'}}>
                <div className="container">
                    <div className="left">
                        <NewsSidebar/>
                    </div>
                    <div className="right">
                        <SingleArticleItem article={article} />
                    </div>
                </div>
            </section>
            <Callback />
            <MapComponent/>
        </>
    );
};

Page.propTypes = {};

export default Page;