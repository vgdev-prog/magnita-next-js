export type ClientRoute = {
    id: number;
    label: string;
    url: string;
    children?: ClientRoute[]
}