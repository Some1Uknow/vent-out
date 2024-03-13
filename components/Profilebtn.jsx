"use client";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const editProfile = () => {
  const { data: session } = useSession();

  const router = useRouter();

  const editprofile = () => {
    router.push(`/profile/${session?.user.id}`);
  };
  return (
    <>
      <button
        onClick={() => editprofile()}
        className="transition hover:duration-300 hover:bg-gray-300 text-black bg-transparent font-bold py-2 rounded"
      >
        <span className="font-Madimi text-xl m-2 p-4">Edit Profile</span>
      </button>
    </>
  );
};

export default editProfile;
