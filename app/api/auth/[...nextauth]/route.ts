import NextAuth, { Account, Session, User } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
    // 다른 OAuth 제공자를 추가
  ],
  pages: {
    signIn: '/login', // 로그인 페이지 경로설정
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
    encryption: true, // JWT 암호화를 사용하려면 이 옵션을 켜야 함
  },
  callbacks: {
    async jwt({
      token,
      account,
      user,
    }: {
      token: JWT;
      account?: Account | null;
      user?: User | null;
    }) {
      // 첫 로그인 시 JWT에 이메일 및 사용자 정보를 저장
      if (account && user) {
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      // 세션에 이메일 및 사용자 이름을 추가
      if (session.user) {
        session.user.email = token.email ?? session.user.email; // email이 있으면 설정, 없으면 기존 값 유지
        session.user.name = token.name ?? session.user.name; // name이 있으면 설정, 없으면 기존 값 유지
      }
      return session;
    },
    async redirect({ url, baseUrl }: { url: string; baseUrl: string }) {
      // 로그인 후 기본 리다이렉트 경로 설정
      return '/component-view';
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
