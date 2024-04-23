"use client";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { IoMdCreate } from "react-icons/io";

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
        className="transition hover:duration-300 p-1 w-1/2 border-2 hover:bg-gray-300 text-black bg-transparent font-extrabold rounded-lg"
      >
        <span className="font-Poppins flex flex-row justify-center items-center">
          <IoMdCreate className="mr-1"/>
          Edit Profile
        </span>
      </button>
    </>
  );
};

export default editProfile;
