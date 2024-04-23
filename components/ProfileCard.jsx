"use client";
import Image from "next/image";
import { IoCalendarNumberSharp } from "react-icons/io5";
import { FaEarthAfrica } from "react-icons/fa6";
import { useSession } from "next-auth/react";
import Createpost from "./Createpost";
import Profilebtn from "./Profilebtn";
import { MdOutlinePeople } from "react-icons/md";
import { useEffect, useState } from "react";

const ProfileCard = ({ params }) => {
  const { data: session } = useSession();

  const [profileData, setProfileData] = useState({
    bio: "",
    gender: "",
    age: "",
    country: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/make-profile/${session.user.id}`);
      const data = await response.json();
      setProfileData((profileData) => ({
        ...profileData,
        bio: data.profile?.bio,
        gender: data.profile?.gender,
        age: data.profile?.age,
        country: data.profile?.country,
      }));
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center w-11/12">
      <section className="shadow-md rounded-lg mt-4 mb-4  bg-white">
        <div className="flex flex-col items-center relative">
          <div className="overflow-hidden w-full h-2/3 absolute top-0 left-0">
            <div className="bg-pink-600 w-full h-20"></div>
          </div>
          <Image
            className="rounded-full mt-2 z-10"
            height={160}
            width={160}
            alt="user-image"
            src={session?.user?.image}
          />
          <div className="flex flex-col items-center">
            <p className="text-2xl font-bold mt-2">{session?.user.name}</p>
            <p className="text-lg text-gray-500 p-1">{session?.user.email}</p>
          </div>
        </div>
        <div className="p-1 flex flex-col justify-around">
          <div className="flex flex-col items-center p-1">
            <p className="text-lg text-gray-600 p-1 mb-2 text-center font-semibold">{profileData.bio}</p>
          </div>
          <div className="flex flex-row items-center text-md mb-2 justify-around">
            <p className="text-gray-600 flex items-center bg-pink-200 p-2 rounded-full">
              <MdOutlinePeople className="mr-1 inline" />
              {profileData.gender}
            </p>
            <p className="text-gray-600 flex items-center bg-pink-200 p-2 rounded-full">
              <IoCalendarNumberSharp className="mr-1 inline" />
              Age: {profileData.age} 
            </p>
            <p className="text-gray-600 flex items-center bg-pink-200 p-2 rounded-full">
              <FaEarthAfrica className="mr-1 inline" />
              {profileData?.country}
            </p>
          </div>
        </div>
        <div className="flex flex-row shadow-md justify-around mt-3 rounded-lg w-full bg-white">
        <Createpost />
        <Profilebtn />
      </div>
      </section>
      
    </div>
  );
  };  
export default ProfileCard;
