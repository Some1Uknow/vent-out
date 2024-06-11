"use client";
import { useState } from "react";
import ProfileCard from "@/components/ProfileCard";
import PostPage from "@/components/PostPage";
import News from "@/components/News";
import { useSession } from "next-auth/react";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";

const Main = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [component, setComponent] = useState(<PostPage />);

  return (
    <>
      {session ? (
        <div className="flex flex-row font-Poppins w-full justify-center bg-gray-100 lg:px-16">
          <div className="flex flex-col w-1/4 items-center">
            <ProfileCard />
            <Navbar setComponent={setComponent} />
          </div>
          <div className="flex-1 w-2/5">{component}</div>
          <div className="">
            <News />
          </div>
        </div>
      ) : (
        <div className="w-screen h-screen flex justify-center items-center">
          <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
          {router.push("/")}
        </div>
      )}
    </>
  );
};

export default Main;
