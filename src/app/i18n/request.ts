import {getRequestConfig} from 'next-intl/server';
import {routing, type Locale} from './routing';

export default getRequestConfig(async ({requestLocale}) => {
    let locale = await requestLocale;
    if (!locale || !routing.locales.includes(locale as Locale)) {
        locale = routing.defaultLocale;
    }

    const coreMessages = (await import(`@/src/app/messages/${locale}.json`)).default
    const headerMessages = (await import(`@/src/widgets/header/messages/${locale}.json`)).default
    const searchMessages = (await import(`@/src/features/search/messages/${locale}.json`)).default
    const cartMessages = (await import(`@/src/features/cart/messages/${locale}.json`)).default

    const messages = {
        ...coreMessages,
        header: headerMessages,
        search: searchMessages,
        cart: cartMessages
    }


    return {
        locale,
        messages
    };
});