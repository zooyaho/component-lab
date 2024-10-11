import { Button } from '@/components/common/button';
import LoginForm from '@/components/loginForm';

export default function LoginPage() {
  return (
    <section className="flex-center flex-col gap-5 w-screen h-screen">
      <h1>Login</h1>
      <LoginForm />
    </section>
  );
}
