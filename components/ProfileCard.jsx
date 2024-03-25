"use client";
import Image from "next/image";
import { IoCalendarNumberSharp } from "react-icons/io5";
import { FaEarthAfrica } from "react-icons/fa6";
import { useSession } from "next-auth/react";
import CreatePost from "./CreatePost";
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
    <div className="flex flex-col items-center">
      <section className=" shadow-md rounded-lg m-4 mr-1 p-3 h-max w-80 max-w-full bg-white">
        <div className="flex flex-row p-2">
          <Image
            className="mr-3 rounded-full inline-block"
            height={40}
            width={44}
            alt="user-image"
            src={session?.user?.image}
          />
          <div className="flex flex-col">
            <p className="text-xl font-bold">{session?.user.name}</p>
            <p className="text-xs text-gray-500">{session?.user.email}</p>
          </div>
        </div>
        <div className="p-1">
          <p className="text-sm text-gray-600 p-1 mb-2">{profileData.bio}</p>
          <div className="flex flex-row justify-between">
            <p className=" text-gray-600 ">
              <MdOutlinePeople  className="m-1 inline" />
              {profileData.gender}
            </p>
            <p className=" text-gray-600 flex items-center">
              <IoCalendarNumberSharp className="mr-1 inline" />
              {profileData.age}
            </p>
            <p className=" text-gray-600 items-center flex">
              <FaEarthAfrica className="mr-1 inline" />
              {profileData?.country}
            </p>
          </div>
        </div>
      </section>
      <div className=" border-t-2 flex flex-row shadow-md rounded-lg mt-0 m-4 mr-1 p-3 h-max w-80 max-w-full bg-white">
        <CreatePost />
        <Profilebtn />
      </div>
    </div>
  );
};

export default ProfileCard;
