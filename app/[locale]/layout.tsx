import {NextIntlClientProvider} from 'next-intl';
import React, {ReactNode} from "react";
import {notFound} from "next/navigation";
import {routing} from "@/src/app/i18n/routing";
import {Header} from "@/src/widgets";
import '@/src/app/styles/index.scss'
import {Provider} from "@/src/app/providers";
import {fetchClientNavigation} from "@/src/widgets/header";

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

    if (!routing.locales.includes(locale as any)) {
        notFound()
    }


    return (
        <html lang={locale}>
        <body>
        <Provider>
            <div id="app">
                <Header initialNavigationItems={initialNavigation}/>
                {children}
            </div>
        </Provider>
        </body>
        </html>

    );
}