import { Button } from "@/components/common/button";
import LoginForm from "@/components/loginForm";

export default function LoginPage() {
  return (
    <section className="flex-center flex-col gap-5 w-screen h-screen">
      <h1>Home Page</h1>
      <form className="flex flex-col gap-2 w-[30vw]">
        <LoginForm />
        <Button text="로그인" styleType="primary" size="l" className="w-full mt-3" />
        {/* <Button text="primary" styleType="primary" />
        <Button text="error" styleType="error" />
        <Button text="secondary" styleType="secondary" />
        <Button text="로그인" styleType="primary" size="l" className="w-full" isLoading/> */}
      </form>
    </section>)
}