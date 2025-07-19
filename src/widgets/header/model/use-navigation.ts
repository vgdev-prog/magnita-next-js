import {useQuery} from "@tanstack/react-query";
import {fetchClientNavigation} from "@/src/widgets/header/api/navigation-api";

export const useNavigation = () => {
    const {data,isLoading,error} = useQuery({
        queryKey:  ['navigation'],
        queryFn: fetchClientNavigation
    })

    return {
        navigationItems: data || [],
        isLoading,
        error
    }
}