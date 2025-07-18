import {NextIntlClientProvider} from 'next-intl';
import React, {ReactNode} from "react";
import {notFound} from "next/navigation";
import {routing} from "@/src/app/i18n/routing";
import {Header} from "@/src/widgets";
import '@/src/app/styles/index.scss'
import {Provider} from "@/src/app/providers";

interface RootLayoutProps {
    children: ReactNode;
    params: {locale: string}
}
export default async function RootLayout({
                                             children,
                                             params
                                         }: RootLayoutProps) {
    const {locale} = await params;
    if (!routing.locales.includes(locale as any)) {
        notFound()
    }


    return (
        <html lang={locale}>
        <body>
        <Provider>
            <div id="app">
                <Header/>
                {children}
            </div>
        </Provider>
        </body>
        </html>

    );
}