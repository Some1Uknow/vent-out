"use client";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const CreatePost = () => {
  const { data: session } = useSession();

  const router = useRouter();

  const createpost = () => {
    router.push(`/create-post/${session?.user.name}`);
  };
  return (
    <>
      <button
        onClick={() => createpost()}
        className="transition hover:duration-300 hover:bg-gray-300 text-black bg-transparent font-bold py-2 rounded"
      >
        <span className="font-Madimi text-xl m-2 p-4">Create Post</span>
      </button>
    </>
  );
};

export default CreatePost;
