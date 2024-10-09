import { Input, PasswordInput } from "@/components/common/input";
import Label from "@/components/common/label";
import { Button } from "@/components/common/button";

export default function Home() {
  return (
    <section className="flex-center flex-col gap-5 w-screen h-screen">
      <h1>Home Page</h1>
      <form className="flex flex-col gap-2 w-[30vw]">
        <Label text={"email"} htmlFor={"email"} isRequired />
        <Input id="email" />
        <Label text={"pw"} htmlFor={"pw"} isRequired />
        <PasswordInput id="email" />
        <Button text="primary" styleType="primary" />
        <Button text="error" styleType="error" />
        <Button text="secondary" styleType="secondary" />
        <Button text="로그인" styleType="primary" size="l" className="w-full" />
        <Button text="로그인" styleType="primary" size="l" className="w-full" isLoading />
      </form>
    </section>
  );
}
