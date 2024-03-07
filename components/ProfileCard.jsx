'use client'
import Image from "next/image";
import { IoCalendarNumberSharp } from "react-icons/io5";
import { FaEarthAfrica } from "react-icons/fa6";
import { IoIosMale, IoIosFemale } from "react-icons/io";
import { useSession } from "next-auth/react";

const ProfileCard = () => {

  const { data: session} = useSession();

  return (
    <section className=" shadow-md rounded-lg m-4 mr-1 p-3 h-max w-80 max-w-full">
      <div className="flex flex-row p-1"> 
        <Image
          className="mr-3 rounded-full inline-block"
          height={40}
          width={44}
          alt="user-image"
          src={session?.user?.image}
        />
        <div className="flex flex-col">
          <p className="text-xl font-bold">{session.user.name}</p>
          <p className="text-xs text-gray-500">{session.user.email}</p>
        </div>
      </div>
      <div className="p-1">
        <p className="text-sm text-gray-600 p-1">
            An average teenager fighting through life.
        </p>
        <div className="flex flex-row justify-between">
          <p className=" text-gray-600 ">
            <IoIosMale className="m-1 inline" />
            Male
          </p>
          <p className=" text-gray-600 flex items-center">
            <IoCalendarNumberSharp className="mr-1 inline" />
            19
          </p>
          <p className=" text-gray-600 items-center flex">
            <FaEarthAfrica className="mr-1 inline" />
            India
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProfileCard;
