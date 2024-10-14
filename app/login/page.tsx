import { Button } from '@/components/common/button';
import LoginForm from '@/components/loginForm';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <section className="flex-center flex-col gap-5 w-screen h-screen">
      <h1 className="title-m text-mint-900">Login</h1>
      <LoginForm />
      <div className="flex-center flex-col gap-1">
        <p className="label-s">계정이 없으신가요?</p>
        <Link className="label-s text-mint-900" href={'/sign-up'}>
          회원 가입
        </Link>
      </div>
    </section>
  );
}
