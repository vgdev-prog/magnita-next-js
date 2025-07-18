import {getLocale, getTranslations} from "next-intl/server";
import {Link} from "@/src/app/i18n/routing";
import {API_URL} from "@/contants";
import {Metadata} from "next";
import GalleryFancyBox from "@/src/components/ui/GalleryFancyBox";
import Callback from "@/src/components/Callback";
import MapComponent from "@/src/components/MapComponent";
import {Locale} from "@/types";
import {getPathname} from "@/src/app/i18n/routing";


interface PortfolioItem {
    title_ru: string;
    title_ua: string;
    title_en: string;
    slug: string;
    [key: string]: string;
}

interface PortfolioImage {
    img: string;
    id: number;
}

// Определяем типы для параметров страницы
type Params = Promise<{ slug: string }>

export async function generateMetadata(props: {
    params: Params
}){
    const locale = await getLocale()
   const {slug} = await props.params;
    const item = await getPortfolioItem(slug);
    const pathname = getPathname({
        locale:locale,
        href:`/portfolio/${slug}`
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
        title: item[`title_${locale}`]
    }
}

// Обновляем функции с типами Promise
async function getPortfolioItem(slug: string): Promise<PortfolioItem> {
    try {
        const res = await fetch(`${API_URL}api/fetch-portfolio/${slug}`)
        if (!res.ok) {
            throw new Error(`Failed to fetch portfolio item: ${res.statusText}`)
        }
        return res.json();
    } catch (e) {
        console.error('Error fetching portfolio item:', e);
        return {
            title_ru: '',
            title_ua: '',
            title_en: '',
            slug: ''
        }; // возвращаем пустой объект вместо null
    }
}

async function getPortfolioImgs(slug: string): Promise<PortfolioImage[]> {
    try {
        const res = await fetch(`${API_URL}api/fetch-portfolio-images/${slug}`);
        if (!res.ok) {
            throw new Error(`Failed to fetch portfolio images: ${res.statusText}`)
        }
        return res.json();
    } catch (e) {
        console.error('Error fetching portfolio images:', e);
        return [];
    }
}

async function getAllPortfolioSlugs(): Promise<PortfolioItem[]> {
    try {
        const res = await fetch(`${API_URL}api/portfolio`);
        if (!res.ok) {
            throw new Error(`Failed to fetch portfolio list: ${res.statusText}`)
        }
        return res.json();
    } catch (e) {
        console.error('Error fetching portfolio list:', e);
        return [];
    }
}


export const revalidate = 3600; // обновление каждый час

 async function Page(props:{
     params:Params
 }) {
    const t = await getTranslations()
    const locale = await getLocale();
    const params = await props.params;
    const portfolioItem: PortfolioItem = await getPortfolioItem(params.slug);
    const portfolioImages: PortfolioImage[] = await getPortfolioImgs(params.slug);

    return (
        <>
            <section className="breadcrumbs">
                <ul>
                    <li>
                        <Link locale={locale} href={`/`}>{t('main')}</Link>
                    </li>
                    <li>
                        <Link locale={locale} href={`/portfolio`}>{t('portfolio')}</Link>
                    </li>
                    <li>
                        {portfolioItem[`title_${locale}`]}
                    </li>
                </ul>
                <h2 data-aos="fade-up" data-aos-duration="1500">{portfolioItem[`title_${locale}`]}</h2>
            </section>
            <section className="portfolio portfolio-page-item">
                <div className="container">
                    <GalleryFancyBox 
                        images={portfolioImages.map((item:{img:string}) => `${API_URL}storage/${item.img}`)} 
                        dataId={'test2'} 
                        className={'portfolio-items'} 
                        itemClass={'item'} 
                    />
                </div>
            </section>
            <Callback />
            <MapComponent />
        </>
    );
}
export default Page;