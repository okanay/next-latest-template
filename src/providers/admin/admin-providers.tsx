import { ReactNode } from 'react'

type TProps = { children: ReactNode }

export const AdminProviders = ({ children }: TProps) => {
   return <>{children}</>
}
