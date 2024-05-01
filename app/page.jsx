"use client";
import Home from "@/components/Home";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const { status } = useSession();
  return (
    <>{status === "authenticated" ? router.push("/signedIn") : <Home />}</>
  );
};

export default Page;
