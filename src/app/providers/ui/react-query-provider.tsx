"use client"
import {QueryClient} from "@tanstack/react-query";
import {ReactNode} from "react";
import {QueryClientProvider} from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

interface QueryClientProviderProps {
children: ReactNode;
}

export const ReactQueryProvider = ({children}: QueryClientProviderProps) => {
   const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
};