import {ReactNode} from "react";
import {ReactQueryProvider} from "@/src/app/providers/ui/react-query-provider";
import {NextIntlProvider} from "@/src/app/providers/ui/next-intl-provider";

interface ProviderProps {
    children: ReactNode
}

export const Provider = async ({children}: ProviderProps) => {
    return (
       <NextIntlProvider>
           <ReactQueryProvider>
               {children}
           </ReactQueryProvider>
       </NextIntlProvider>

    );
};