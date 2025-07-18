import {getLocale, getTranslations} from "next-intl/server";
import {Link} from "@/src/app/i18n/routing";
import {getNewsItem} from "@/lib/api";
import {Locale} from "@/types";
import NewsSidebar from "@/src/components/News/NewsSidebar";
import Image from "next/image";
import {API_URL} from "@/contants";
import {getPathname} from "@/src/app/i18n/routing";

type Params = Promise<{ slug: string }>

export async function generateMetadata(props: {
    params: Params
}) {
    const {slug} = await props.params;
    const locale = await getLocale() as Locale
    const pathname = getPathname({
        locale:locale,
        href:`/news/${slug}`
    })

    const newsItem = await getNewsItem(slug);
    return {
        alternates: {
            canonical:`https://magnita.ua${pathname}`,
            languages: {
                'en-US': `https://magnita.ua/en${pathname}`,
                'ru-RU': `https://magnita.ua/ru${pathname}`,
                'uk-UA': `https://magnita.ua${pathname}`,
            },
        },
        title: newsItem[`title_${locale}`]
    }
}

const Page = async (props: {
    params: Params
}) => {
    const {slug} = await props.params
    const newsItem = await getNewsItem(slug);
    const t = await getTranslations();
    const locale = await getLocale() as Locale;
    return (
        <>
            <section className='breadcrumbs'>
                <ul>
                    <li>
                        <Link href="/" locale={locale}>{t('main')}</Link>
                    </li>
                    <li>
                        <Link href="/services" locale={locale}>{t('news')}</Link>
                    </li>
                    <li>
                        {newsItem[`title_${locale}`]}
                    </li>
                </ul>
                <h1 className="h1_title" data-aos="fade-up" data-aos-duration="1500">{newsItem[`title_${locale}`]}</h1>
            </section>
            <section className="news-page" style={{paddingBottom:'50px'}}>
                <div className="container">
                    <div className="left">
                        <NewsSidebar/>
                    </div>
                    <div className="right">
                        <div className="news-item-content">
                            <div
                                className="img"
                                style={{backgroundImage: `url(${API_URL}storage/${newsItem.img})`}}
                            >
                            </div>

                            <div
                                className="town__content html-content"
                                dangerouslySetInnerHTML={{__html:newsItem[`content_${locale}`]}}
                             />

                            <Link locale={locale} className="back" href="/news">
                                <Image width={10} height={10} src="/img/str.png" alt="" />
                                    {t('news_back')}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
)
;
};


export default Page;