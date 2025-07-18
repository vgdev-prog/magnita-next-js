import {getLocale, getTranslations} from "next-intl/server";
import {getPathname, Link} from "@/src/app/i18n/routing";
import Image from "next/image";
import Director from "@/src/components/About/Director";
import AboutAdvBlock from "@/src/components/About/AboutAdvBlock";
import AboutPageDesc from "@/src/components/About/AboutPageDesc";
import Certificates from "@/src/components/Certificates";
import AboutCerts from "@/src/components/About/AboutCerts";
import AboutPrinciples from "@/src/components/About/AboutPrinciples";
import Callback from "@/src/components/Callback";
import MapComponent from "@/src/components/MapComponent";
import AboutCertificates from "@/src/components/About/AboutCerts";
import {Metadata} from "next";

export interface PageProps {

}

export async function generateMetadata(): Promise<Metadata> {
    const locale = await getLocale();
    const t = await getTranslations();
    const pathname = getPathname({
        locale:locale,
        href:'/about'
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
        title: t('about'), // ключ из JSON
        description: t('about_page_desc_1')+t('about_page_desc_2')

    }
}

const Page = async ({}: PageProps) => {
    const locale = await getLocale();
    const t = await getTranslations();
    return (
        <>
            <section className="breadcrumbs">
                <ul>
                    <li>
                        <Link href="/" locale={locale}>{t('main')}</Link>
                    </li>
                    <li>
                        {t('about')}
                    </li>
                </ul>
                <h2 data-aos="fade-up" data-aos-duration="1500">{t('about')}</h2>
            </section>
           <Director />
            <AboutAdvBlock />
            <AboutPageDesc />
            <Certificates />
            <AboutPrinciples/>
            <Callback />
            <MapComponent />
        </>
    );
};

Page.propTypes = {};

export default Page;