import {Link} from "@/src/app/i18n/routing";
import {getLocale, getTranslations} from "next-intl/server";
import NewsSidebar from "@/src/components/News/NewsSidebar";
import AddReviewForm from "@/src/components/Reviews/AddReviewForm";
import {getAllReviews} from "@/lib/api";
import ReviewList from "@/src/components/Reviews/ReviewList";
import {Metadata} from "next";
import {Locale} from "@/types";
import {getPathname} from "@/src/app/i18n/routing";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations()
    const locale = await getLocale() as Locale;
    const pathname = getPathname({
        locale:locale,
        href:'/reviews'
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
        title: t('reviews_title'),
        description:t('reviews_desc')
    }
}


const Page = async ({}) => {
    const t = await getTranslations()
    const locale = await getLocale();
    const reviews = await getAllReviews();
    return (
        <>
            <section className="breadcrumbs">
                <ul>
                    <li>
                        <Link locale={locale} href="/">{t('review')}</Link>
                    </li>
                    <li>
                        {t('news')}
                    </li>
                </ul>
                <h2 data-aos="fade-up" data-aos-duration="1500">{t('review_h1')}</h2>
            </section>
            <section className="catalogue-main-page categories-page">
                <div className="container">
                    <div className="inner">
                        <div className="left">
                            <NewsSidebar />
                        </div>
                        <div className="right">
                            <div className="review">
                                <div dangerouslySetInnerHTML={{__html: t.raw('review_content')}}/>
                                <AddReviewForm/>
                                <ReviewList reviews={reviews}/>

                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

Page.propTypes = {};

export default Page;