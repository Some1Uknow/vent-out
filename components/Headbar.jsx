"use client";
import { useState } from "react";
import { RiEmotionHappyFill } from "react-icons/ri";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const Headbar = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [redirect, setredirect] = useState(false);

  const handleSignOut = () => {
    signOut("google");
    redirect(!redirect);
  };

  const handleSignIn = async () => {
    router.push("/signedIn");
    signIn("google");
  };

  if (redirect) {
    router.push("/");
  }

  return (
    <nav className="bg-gray-100 p-3.5 flex justify-between items-center shadow-xl border-b-2">
      <div
        onClick={() => router.push("/")}
        className="text-pink-600 text-6xl font-Madimi font-bold flex flex-row cursor-pointer"
      >
        VentOut&nbsp;
        <RiEmotionHappyFill />
      </div>
      {status === "authenticated" ? (
        <div>
          <button
            onClick={handleSignOut}
            className="transition hover:duration-300 hover:bg-pink-200 text-pink-600 bg-transparent font-bold py-2 px-4 rounded"
          >
            <span className="font-Madimi text-2xl m-2 p-4">Sign Out</span>
          </button>
        </div>
      ) : (
        <div>
          <button
            onClick={handleSignIn}
            className="transition hover:duration-300 hover:bg-pink-200 text-pink-600 bg-transparent font-bold py-2 px-4 rounded"
          >
            <span className="font-Madimi text-2xl m-2 p-4">Sign In</span>
          </button>
          <button
            onClick={() => router.push("/register")}
            className="transition hover:duration-300 hover:bg-pink-200 text-pink-600 bg-transparent font-bold py-2 px-4 rounded"
          >
            <span className="font-Madimi text-2xl m-2 p-4">
              Register as a Psychologist
            </span>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Headbar;
