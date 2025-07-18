import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin('./src/app/i18n/request.ts');

const nextConfig: NextConfig = {
   async redirects() {
        return [
            {
                source: '/ua',
                destination: '/',
                permanent: true,
            },
            {
                source: '/ua/catalog',
                destination: '/catalog',
                permanent: true,
            },
            {
                source: '/ua/protective-roller-shutters',
                destination: '/protective-roller-shutters',
                permanent: true,
            },
            {
                source: '/ua/transparent-shutters',
                destination: '/transparent-shutters',
                permanent: true,
            },
            {
                source: '/ua/blinds-desc',
                destination: '/blinds-desc',
                permanent: true,
            },
            {
                source: '/ua/shrutters-individual',
                destination: '/shrutters-individual',
                permanent: true,
            },
            {
                source: '/ua/shutters-kombi',
                destination: '/shutters-kombi',
                permanent: true,
            },
            {
                source: '/ua/shutters-gates-desc',
                destination: '/shutters-gates-desc',
                permanent: true,
            },
            {
                source: '/ua/roletni-vorota',
                destination: '/roletni-vorota',
                permanent: true,
            },
            {
                source: '/ua/sliding-gate',
                destination: '/sliding-gate',
                permanent: true,
            },
            {
                source: '/ua/zhalyuzi',
                destination: '/zhalyuzi',
                permanent: true,
            },
            {
                source: '/ua/sop-product',
                destination: '/sop-product',
                permanent: true,
            },
            {
                source: '/ua/avtomatika-desc',
                destination: '/avtomatika-desc',
                permanent: true,
            },
            {
                source: '/ua/product-parts',
                destination: '/product-parts',
                permanent: true,
            },
            {
                source: '/ua/product-parts/:path*',
                destination: '/product-parts/:path*',
                permanent: true,
            },
            {
                source: '/ua/products',
                destination: '/products',
                permanent: true,
            },
            {
                source: '/ua/product/:path*',
                destination: '/product/:path*',
                permanent: true,
            },
            {
                source: '/ua/protective-blinds',
                destination: '/protective-blinds',
                permanent: true,
            },
            {
                source: '/ua/protective-blinds/:path*',
                destination: '/protective-blinds/:path*',
                permanent: true,
            },
            {
                source: '/ua/services',
                destination: '/services',
                permanent: true,
            },
            {
                source: '/ua/services/:path*',
                destination: '/services/:path*',
                permanent: true,
            },
            {
                source: '/ua/portfolio',
                destination: '/portfolio',
                permanent: true,
            },
            {
                source: '/ua/news',
                destination: '/news',
                permanent: true,
            },
            {
                source: '/ua/reviews',
                destination: '/reviews',
                permanent: true,
            },
            {
                source: '/ua/about',
                destination: '/about',
                permanent: true,
            },
            {
                source: '/ua/articles',
                destination: '/articles',
                permanent: true,
            },
            {
                source: '/ua/warranty',
                destination: '/warranty',
                permanent: true,
            },
            {
                source: '/ua/dostavka-ta-oplata',
                destination: '/dostavka-ta-oplata',
                permanent: true,
            },
            {
                source: '/ua/dealers',
                destination: '/dealers',
                permanent: true,
            },
            {
                source: '/ua/contacts',
                destination: '/contacts',
                permanent: true,
            },
        ];
    },
};

export default withNextIntl(nextConfig);