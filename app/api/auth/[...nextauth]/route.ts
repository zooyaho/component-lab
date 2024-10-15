import NextAuth, { Account, Session, User } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { supabase } from '@/utils/supabaseClient';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: '이메일' },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: '비밀번호',
        },
      },
      async authorize(credentials) {
        const { email, password } = credentials ?? {};

        if (!email || !password) {
          throw new Error('이메일과 비밀번호를 모두 입력해주세요.');
        }

        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        // 에러 처리: 사용자가 없거나 비밀번호가 잘못된 경우
        if (error) {
          throw new Error('로그인 실패: 이메일 또는 비밀번호를 확인해주세요.');
        }

        console.log('data.user >> ', data.user);

        // 로그인 성공: 사용자의 세션 데이터를 반환
        if (data.user) {
          // console.log('⭐️Credentials Login Success');
          return {
            id: data.user.id,
            email: data.user.email,
          };
        }

        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
    // 다른 OAuth 제공자를 추가
  ],
  session: {
    strategy: 'jwt' as const,
  },
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
      // console.log('[JWT] token, account, user >> ', token, account, user);
      // 첫 로그인 시 JWT에 이메일 및 사용자 정보를 저장
      if (account && user) {
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      // console.log('[sesstion] session, token >> ', session, token);
      if (session.user) {
        session.user.email = token.email ?? session.user.email;
        session.user.name = token.name ?? session.user.name;
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
