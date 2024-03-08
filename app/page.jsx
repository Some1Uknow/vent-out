'use client'
import Home from "@/components/Home";
import Main from "@/app/main/page";
import { useSession } from "next-auth/react";

const Page = () => {
  const { status } = useSession();
  return <>{status === "authenticated" ? <Main /> : <Home />}</>;
};

export default Page;
