import React, {ReactNode} from "react";
import {notFound} from "next/navigation";
import {routing, type Locale} from "@/src/app/i18n/routing";
import {Header} from "@/src/widgets";
import '@/src/app/styles/index.scss'
import {Provider} from "@/src/app/providers";
import {fetchClientNavigation} from "@/src/widgets/header";
import {SearchButton} from "@/src/features/search";
import {SearchModal} from "@/src/features/search/ui/search-modal";
import {CartButton} from "@/src/features/cart";
import {CartModal} from "@/src/features/cart/ui/cart-modal";
import {LanguageSwitcher} from "@/src/features/language-switcher";
import {BurgerButton} from "@/src/features/burger-menu";

interface RootLayoutProps {
    children: ReactNode;
    params: {locale: string}
}
export default async function RootLayout({
                                             children,
                                             params
                                         }: RootLayoutProps) {
    const {locale} = await params;
    const initialNavigation = await fetchClientNavigation();

    if (!routing.locales.includes(locale as Locale)) {
        notFound()
    }


    return (
        <html lang={locale}>
        <body>
        <Provider>
            <div id="app">
                <Header 
                    initialNavigationItems={initialNavigation} 
                    burgerButton={<BurgerButton />}
                    searchButton={<SearchButton />} 
                    cartButton={<CartButton />}
                    languageSelect={<LanguageSwitcher />}
                />
                {children}
                <SearchModal />
                <CartModal />
            </div>
        </Provider>
        </body>
        </html>

    );
}