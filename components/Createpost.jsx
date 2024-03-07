'use client';
import { useRouter } from "next/navigation";

const Createpost = () => {

    const router = useRouter();


  const createPost = () => {
    router.push('/create-post');
  } 
  return (
    <>
         <button onClick={()=> createPost()} className="transition hover:duration-300 hover:bg-pink-900 text-white bg-transparent font-bold py-2 px-4 rounded">
            <span className="font-Madimi text-2xl m-2 p-4">Create Post</span>
          </button>
    </>
  )
}

export default Createpost