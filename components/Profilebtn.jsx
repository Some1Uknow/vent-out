'use client';
import { useRouter } from "next/navigation";

const editProfile = () => {

    const router = useRouter();


  const editProfile = () => {
    router.push('/profile');
  } 
  return (
    <>
         <button onClick={()=> editProfile()} className="transition hover:duration-300 hover:bg-gray-300 text-black bg-transparent font-bold py-2 rounded">
            <span className="font-Madimi text-xl m-2 p-4">Edit Profile</span>
          </button>
    </>
  )
}

export default editProfile