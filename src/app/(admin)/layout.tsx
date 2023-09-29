import { ReactNode } from 'react'
import {AdminProviders} from "@/providers/admin/admin-providers";

type TProps = {
   children: ReactNode
}

export default function AdminLayout({ children }: TProps) {
   return (
      <>
         <AdminProviders>
            <header>Admin header</header>
            {children}
            <footer>Admin footer</footer>
         </AdminProviders>
      </>
   )
}
