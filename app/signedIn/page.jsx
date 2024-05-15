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
      {" "}
      {session ? (
        <>
          {" "}
          <div className="flex flex-row h-max font-Poppins justify-center bg-gray-100">
            <div className="flex flex-col justify-between items-center">
              <ProfileCard />
              <Navbar setComponent={setComponent} />
            </div>
            <div className="flex flex-col w-3/5">{component}</div>
            <News />
          </div>
        </>
      ) : (
        <>
          <div className="w-screen h-5/6 flex flex-row justify-center items-center">
            <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
          </div>
          {router.push("/")}
        </>
      )}
    </>
  );
};

export default Main;
