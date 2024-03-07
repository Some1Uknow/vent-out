import Image from "next/image";
import React from "react";

const ProfileCard = () => {
  return (
    <section className=" shadow-md rounded-lg m-4 mr-1 p-3 h-56 w-80 max-w-full">
      <div className="flex flex-row p-1">
        <Image className="mr-3 rounded-full inline-block" height={40} width={44} alt="user-image" />
        <div className="flex flex-col">
          <p className=" text-xl font-bold">Raghav Sharma</p>
          <p className=" text-xs text-gray-500">raghavsharma@email</p>
        </div>
      </div>
      <div className="p-1">
        <p className="text-xs text-gray-600 p-1">This is user's bio, they can put all kind of stuff abt themselves</p>
        <p className="p-1 text-gray-600">Male | 19</p>
      </div>
    </section>
  );
};

export default ProfileCard;
