import { QueryProvider } from '@/providers/query-provider';
import { ReduxProvider } from '@/providers/redux-provider';
import { NextAuthProvider } from '@/providers/nextauth-provider';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextAuthProvider>
      <QueryProvider>
        <ReduxProvider>{children}</ReduxProvider>
      </QueryProvider>
    </NextAuthProvider>
  );
};
