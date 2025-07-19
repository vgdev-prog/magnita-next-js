export type NavItem = {
    id: number;
    title: string;
    href: string;
    children?: NavItem[]
}