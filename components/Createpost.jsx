'use client';
import { useRouter } from "next/navigation";

const CreatePost = () => {

    const router = useRouter();


  const createpost = () => {
    router.push('/create-post');
  } 
  return (
    <>
         <button onClick={()=> createpost()} className="transition hover:duration-300 hover:bg-gray-300 text-black bg-transparent font-bold py-2 rounded">
            <span className="font-Madimi text-xl m-2 p-4">Create Post</span>
          </button>
    </>
  )
}

export default CreatePost;