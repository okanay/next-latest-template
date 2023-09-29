import NextAuth from 'next-auth';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `Provider` React Context
   */
  interface Session {
    user: {
      id: string | null;
      sub: string | null;
      iat: number | null;
      exp: number | null;
      jti: string | null;
    };
  }
}
