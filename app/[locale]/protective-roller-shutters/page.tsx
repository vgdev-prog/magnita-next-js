import MapComponent from "@/src/components/MapComponent";
import Breadcrumps from "@/src/components/ui/Breadcrumps";
import ProtectiveRoller from "@/src/components/Catalog/ProtectiveRoller";
import {getLocale, getTranslations} from "next-intl/server";
import {getSubTowns} from "@/lib/api";
import {Metadata} from "next";
import {Locale} from "@/types";
import {getPathname} from "@/src/app/i18n/routing";

export interface PageProps {

}

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations()
    const locale = await getLocale() as Locale;
    const pathname = getPathname({
        locale:locale,
        href:'/protective-roller-shutters'
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
        title: t('protective_shrutters_h1'),
        description:t('products_desc')
    }
}

const Page = async ({}: PageProps) => {
    const towns = await getSubTowns();
    const t = await getTranslations();
    return (
        <>
            <section className='breadcrumbs'>
                <Breadcrumps links={[{href: '/', label: 'main', active: true}, {href: '/catalog', label: 'catalog', active: true}, {label: 'category_1',href:'#',active:false}]}/>
                <h1 className="h1_title" data-aos="fade-up" data-aos-duration="1500">{t('protective_shrutters_h1')}</h1>
            </section>
            <ProtectiveRoller towns={towns}/>
            <MapComponent/>
        </>
    );
};


export default Page;