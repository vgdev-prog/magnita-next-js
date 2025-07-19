import {useQuery} from "@tanstack/react-query";
import {fetchClientNavigation} from "@/src/widgets/header/api/navigation-api";
import {NavItem} from "@/src/widgets/header/types";

export const useNavigation = (initialData: NavItem[]) => {
    const {data,isLoading,error} = useQuery({
        queryKey:  ['navigation'],
        queryFn: fetchClientNavigation,
        initialData: initialData
    })

    return {
        navigationItems: data || [],
        isLoading,
        error
    }
}