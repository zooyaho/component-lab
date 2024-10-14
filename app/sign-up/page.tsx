import SignupForm from '@/components/signupForm';

export default function SignupPage() {
  return (
    <section className="flex-center flex-col gap-5 w-screen h-screen">
      <h1 className="title-m text-mint-900">Sign Up</h1>
      <SignupForm />
    </section>
  );
}
