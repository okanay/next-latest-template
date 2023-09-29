import { ReactNode } from 'react'

type TProps = { children: ReactNode }

export const MainProviders = ({ children }: TProps) => {
   return <>{children}</>
}
