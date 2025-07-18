import {getMessages} from "next-intl/server";
import {NextIntlClientProvider} from 'next-intl';

import {ReactNode} from "react";

interface NextIntlProviderProps {
children: ReactNode
}

export const NextIntlProvider = async ({children}: NextIntlProviderProps) => {
   const messages = await getMessages();
    return (
        <NextIntlClientProvider messages={messages}>
            {children}
        </NextIntlClientProvider>
    );
};