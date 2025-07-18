import {getLocale, getTranslations} from "next-intl/server";
import {Metadata} from "next";
import {getPathname, Locale} from "@/src/app/i18n/routing";

export const generateMetadata = async (): Promise<Metadata> => {
   const locale = await getLocale() as Locale
    const t = await getTranslations()
    function getLink() {
        switch (locale) {
            case 'ua':
                return 'https://magnita.ua';
            case 'ru':
                return 'https://magnita.ua/ru';
            case "en":
                return 'https://magnita.ua/en';
            default:
                return 'https://magnita.ua'
        }
    }
    const pathname = getPathname({
        locale:locale,
        href:'/'
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
        title: t('main_title'),
        description:t('main_desc'),
        openGraph: {
            title: t('main_title'),
            description: t('main_desc'),
            locale:locale,
            type: 'website',
            url:getLink(),
        },
    }
}


export default async function Home() {
    const t = await getTranslations()
    return (
        <div>
1111
        </div>
    );
}
