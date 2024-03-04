"use client";
import Home from "@/components/Home";
import Main from "@/components/Main";
import { useSession } from "next-auth/react";

const Page = () => {
  const { data: session, status } = useSession();

  return <>{status === "authenticated" ? <Main /> : <Home />}</>;
};

export default Page;
