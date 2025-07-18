import {useQuery} from "@tanstack/react-query";
import {fetchClientNavigation} from "@/src/features/navigation/client/api/navigation-api";
import css from './client-navigation-menu.module.scss'
import {ClientNavigationItem} from "@/src/features/navigation/client/ui/client-navigation-item";
interface NavigationProps {

}

export const ClientNavigationMenu = ({}: NavigationProps) => {
    const {data} = useQuery({
        queryKey: ['navigation'],
        queryFn: fetchClientNavigation
    })
    console.log(data)
    return (
        <ul className={css.menu}>
            {data?.map(link => (
                <ClientNavigationItem link={link} key={link.id}/>
            ))}
        </ul>
    );
};