import {useQuery} from "@tanstack/react-query";
import css from './header-submenu.module.scss'
import {HeaderSubmenuItem} from "@/src/widgets/header/ui/header-submenu-item";
import {fetchClientNavigation} from "@/src/widgets/header/api/navigation-api";
interface NavigationProps {

}

export const HeaderSubmenu = ({}: NavigationProps) => {
    const {data} = useQuery({
        queryKey: ['navigation'],
        queryFn: fetchClientNavigation
    })
    console.log(data)
    return (
        <ul className={css.menu}>
            {data?.map(link => (
                <HeaderSubmenuItem link={link} key={link.id}/>
            ))}
        </ul>
    );
};