"use client";
import { RiEmotionHappyFill } from "react-icons/ri";
import { useSession, signIn, signOut } from "next-auth/react";
import Profilebtn from "./Profilebtn";
import { useRouter } from "next/navigation";
import Createpost from "./CreatePost";
import { usePathname } from "next/navigation";

const Headbar = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const handleSignOut = async () => {
   // await signOut("google");
    signOut({callbackUrl: 'http://localhost:3000'});
  };
  

  return (
    <nav className="bg-pink-800 p-3.5 flex justify-between items-center">
      <div
        onClick={() => router.push("/")}
        className="text-white text-6xl font-Madimi font-bold flex flex-row cursor-pointer"
      >
        VentOut&nbsp;
        <RiEmotionHappyFill />
      </div>
      {status === "authenticated" ? (
        <div>
          <button
            onClick={handleSignOut}
            className="transition hover:duration-300 hover:bg-pink-900 text-white bg-transparent font-bold py-2 px-4 rounded"
          >
            <span className="font-Madimi text-2xl m-2 p-4">Sign Out</span>
          </button>
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
