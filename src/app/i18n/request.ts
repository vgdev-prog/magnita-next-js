import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';

export default getRequestConfig(async ({requestLocale}) => {
    let locale = await requestLocale;
    if (!locale || !routing.locales.includes(locale as any)) {
        locale = routing.defaultLocale;
    }

    const coreMessages = (await import(`@/src/app/messages/${locale}.json`)).default
    const headerMessages = (await import(`@/src/widgets/header/messages/${locale}.json`)).default


    const messages = {
        ...coreMessages,
        header: headerMessages
    }


    return {
        locale,
        messages
    };
});