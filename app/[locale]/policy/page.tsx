import {getLocale, getTranslations} from "next-intl/server";
import {Link} from "@/src/app/i18n/routing";
import MapComponent from "@/src/components/MapComponent";

export interface PageProps {

}

const Page = async ({}: PageProps) => {
    const locale = await getLocale()
    const t = await getTranslations();
    return (
        <>
            <section className="breadcrumbs">
                <ul>
                    <li>
                        <Link
                            locale={locale}
                            href="/"
                        >{t('main')}</Link>
                    </li>
                    <li>
                        {t('policy_title')}
                    </li>
                </ul>
                <h2
                    data-aos="fade-up"
                    data-aos-duration="1500"
                >{t('policy_title')}</h2>
            </section>
            <section className="about-page-adv-block">
                <div className="container">
                    <div className="left policy" dangerouslySetInnerHTML={{__html:t.raw('policy_desc')}} />
                </div>
            </section>
            <MapComponent />
        </>
    );
};

Page.propTypes = {};

export default Page;