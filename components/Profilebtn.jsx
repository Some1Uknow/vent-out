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
        className="transition hover:duration-300 p-2 hover:bg-gray-300 mb-1 text-black bg-transparent font-extrabold rounded"
      >
        <span className="font-Poppins text-2xl flex flex-row justify-center items-center">
          <IoMdCreate className="mr-1"/>
          Edit Profile
        </span>
      </button>
    </>
  );
};

export default editProfile;
