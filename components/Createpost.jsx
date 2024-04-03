"use client";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { AiFillPlusCircle } from "react-icons/ai";

const CreatePost = () => {
  const { data: session } = useSession();

  const router = useRouter();

  const create = () => {
    router.push(`/create-post/${session?.user.name}`);
  };
  return (
    <>
      <button
        onClick={() => create()}
        className="transition border-r-2 p-3 hover:duration-300 hover:bg-gray-300 text-black bg-transparent mb-1 font-bold rounded"
      >
        <span className="font-Poppins text-2xl flex flex-row justify-center items-center">
          <AiFillPlusCircle className="mr-2" />
          Create Post
        </span>
      </button>
    </>
  );
};

export default CreatePost;
