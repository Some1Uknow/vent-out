"use client";
import { RiEmotionHappyFill } from "react-icons/ri";
import { useSession, signIn, signOut } from "next-auth/react";
import Profilebtn from "./Profilebtn";
import Createpost from "./Createpost";
import { useRouter } from "next/navigation";

const Headbar = () => {
  const { data: session, status } = useSession();
  const handleClick = () => {
    router.push('/');
  };
  const router = useRouter();

  return (
    <nav className="bg-pink-800 p-3.5 flex justify-between items-center">
      <div
        onClick={handleClick}
        className="text-white text-6xl font-Madimi font-bold flex flex-row cursor-pointer"
      >
        VentOut&nbsp;
        <RiEmotionHappyFill />
      </div>
      {status === "authenticated" ? (
        <div>
          <button
            onClick={() => signOut("google")}
            className="transition hover:duration-300 hover:bg-pink-900 text-white bg-transparent font-bold py-2 px-4 rounded"
          >
            <span className="font-Madimi text-2xl m-2 p-4">Sign Out</span>
          </button>
          <Createpost />
          <Profilebtn />
        </div>
      ) : (
        <button
          onClick={() => signIn("google")}
          className="transition hover:duration-300 hover:bg-pink-900 text-white bg-transparent font-bold py-2 px-4 rounded"
        >
          <span className="font-Madimi text-2xl m-2 p-4">Sign In</span>
        </button>
      )}
    </nav>
  );
};

export default Headbar;
