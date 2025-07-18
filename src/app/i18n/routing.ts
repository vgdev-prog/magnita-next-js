import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';

export const routing = defineRouting({
    defaultLocale: 'ua',
    locales: ['ua','ru','en'],
    localePrefix:'as-needed',
    localeDetection:false
});

export type Locale = (typeof routing.locales)[number]
export const {Link, redirect, usePathname, useRouter, getPathname} =
    createNavigation(routing);