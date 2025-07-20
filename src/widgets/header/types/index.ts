export type MenuType = 'column' | 'catalog';

export type NavItem = {
    id: number;
    title: string;
    href: string;
    image?: string;
    menu_type?: MenuType;
    children?: Array<{
        id: number;
        title: string;
        href: string;
    }>;
}