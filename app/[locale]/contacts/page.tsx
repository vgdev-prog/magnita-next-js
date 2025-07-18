import {Link} from "@/src/app/i18n/routing";
import CategoryContacts from "@/src/components/Contacts/CategoryContacts";
import {getLocale, getTranslations} from "next-intl/server";
import ContactsBlock from "@/src/components/Contacts/ContactsBlock";
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
        href:'/contacts'
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
        title: t('contact_title'),
        description: t('contact_desc')
    }
}
const Page = async ({}) => {
    const t = await getTranslations()
    const locale = await getLocale();
    return (
        <>
        <section className="breadcrumbs">
            <ul>
                <li>
                    <Link href="/">{t('main') }</Link>
            </li>
            <li>
                {t('contact')}
            </li>
        </ul>
        <h1 className="h1_title" data-aos="fade-up" data-aos-duration="1500">{t('contact_h1') }</h1>
        </section>
            <CategoryContacts />
            <ContactsBlock />
            <MapComponent/>
        </>
    );
};


export default Page;