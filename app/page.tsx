import Login from "@/components/Login";
import { Logo } from "@/icons/logo";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col sm:flex-row">
      <div className="hidden sm:flex h-screen w-1/4 bg-[#031434] p-5 items-center justify-center">
        <Logo />
      </div>
      <div className="w-full sm:w-3/4 flex items-center justify-center bg-white h-screen">
        <Login />
      </div>
    </main>
  );
}
