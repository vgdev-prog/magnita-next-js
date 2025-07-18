import {Link} from "@/src/app/i18n/routing";
import {getLocale, getTranslations} from "next-intl/server";
import {Metadata} from "next";
import {Locale, ServiceType} from "@/types";
import {API_URL} from "@/contants";
import Callback from "@/src/components/Callback";
import MapComponent from "@/src/components/MapComponent";
import {getAllServices} from "@/lib/api";
import {getPathname} from "@/src/app/i18n/routing";


export const generateMetadata = async (): Promise<Metadata> => {
    const t = await getTranslations()
    const locale = await getLocale() as Locale;
    const pathname = getPathname({
        locale:locale,
        href:'/services'
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
        title: t('services')
    }
}



const Page = async ({}) => {
    const services = await getAllServices();
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
                        {t('services')}
                    </li>
                </ul>
                <h1 className="h1_title" data-aos="fade-up" data-aos-duration="1500">{t('services')}</h1>
            </section>
            <section className="portfolio-page-items">
                <div className="container">
                    {services.map(service => (
                        <Link className="item"
                              style={{backgroundImage: `url(${API_URL}storage/${service.img})`}}
                              key={service.id} locale={locale} href={`/services/${service.slug}`}>
                            <p className="">{service[`title_${locale}`]}</p>
                        </Link>
                    ))}
                </div>
            </section>
            <Callback />
            <MapComponent />
        </>
    );
};

Page.propTypes = {};

export default Page;