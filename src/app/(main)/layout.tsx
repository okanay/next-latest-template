import { ReactNode } from 'react'
import {MainProviders} from "@/providers/main/main-providers";

type TProps = {
   children: ReactNode
}

export default function MainLayout({ children }: TProps) {
   return (
      <>
         <MainProviders>
            <header>Main Header</header>
            {children}
            <footer>Main Footer</footer>
         </MainProviders>
      </>
   )
}
