export type NavItem = {
    id: number;
    title: string;
    href: string;
    children?: Array<{
        id: number;
        title: string;
        href: string;
    }>;
}