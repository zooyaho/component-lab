import { Input, PasswordInput } from "@/components/common/input";
import Image from "next/image";
import close from "@/public/assets/icons/close.svg"
import Label from "@/components/common/label";

export default function Home() {
  return (
    <section className="flex-center flex-col gap-5 w-screen h-screen">
      <h1>Home Page</h1>
      <form className="flex flex-col gap-2 w-[30vw]">
        <Label text={"email"} htmlFor={"email"} isRequired />
        <Input id="email" />
        <Label text={"pw"} htmlFor={"pw"} isRequired />
        <PasswordInput id="email" />
      </form>
    </section>
  );
}
