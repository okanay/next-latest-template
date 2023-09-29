'use client'

import { ReactNode } from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

type QueryProvider = {
   children: ReactNode
}

const queryClient = new QueryClient()

export const QueryProvider = ({ children }: QueryProvider) => {
   return (
      <QueryClientProvider client={queryClient}>
         {children}
         <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
   )
}
