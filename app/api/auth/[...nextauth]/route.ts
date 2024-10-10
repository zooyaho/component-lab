import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
    // 다른 OAuth 제공자를 추가할 수도 있습니다.
  ],
  pages: {
    // signIn: '/auth/signin', // 사용자가 로그인 페이지로 리디렉션될 경로 설정
    signIn: '/login', // 사용자가 로그인 페이지로 리디렉션될 경로 설정
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      // 로그인 후 리다이렉트할 페이지 설정
      return baseUrl; // 기본적으로 홈 페이지로 리다이렉트
      // return '/dashboard'; // 특정 페이지로 리다이렉트
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
