import NextAuth, { CookiesOptions, User } from 'next-auth';
import { NextApiRequest, NextApiResponse } from 'next';
import CredentialsProvider from 'next-auth/providers/credentials';
import { jwtSignPayload } from '../../../../../libs/jwt/jwt';
import { Session } from 'inspector';

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  const providers = [
    CredentialsProvider({
      name: 'credentials',
      id: 'credentials',
      credentials: {
        username: {},
        password: {},
      },
      async authorize(credentials, req) {
        const user = { name: 'okan', nickname: 'wokanay', email: 'okanay@hotmail.com', accessToken: 'my access token' };
        const token = (await jwtSignPayload(user)) as string;

        return { id: token, sub: 'credentials' };
      },
    }),
  ];

  return await NextAuth(req, res, {
    session: {
      maxAge: 60 * 60 * 24 * 30,
      strategy: 'jwt',
    },
    callbacks: {
      async jwt({ token, user }) {
        return { ...token, ...user };
      },
      async session({ session, token }) {
        session.user = token as any;
        return session;
      },
    },
    providers,
  });
}

export { auth as GET, auth as POST };
