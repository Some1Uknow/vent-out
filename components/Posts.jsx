"use client";
import Image from "next/image";
import { FcLike } from "react-icons/fc";
import { FaComment } from "react-icons/fa6";
import { useSession } from "next-auth/react";

const Posts = ({ posts }) => {
  const { data: session } = useSession();

  return (
    <div className="w-9/10 m-2 mt-0 p-2 flex flex-col">
      {/* {posts.map((post) => ( */}
      <div key="" className="bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center space-x-4">
          <Image
            alt="user-image"
            className="w-10 h-10 rounded-full inline-block"
            src={session?.user.image}
            width={40}
            height={40}
          />
          <div className="text-gray-800">
            <h1 className="font-bold">Raghav Sharma</h1>
            <p className="text-sm">07/03/2024</p>
          </div>
        </div>
        <h2 className="mt-4 text-xl font-bold text-gray-800">
          Traumatic Incident
        </h2>
        <p className="mt-4 text-gray-600">
          My code stopped working all of a sudden and I was unable to understand
          whats going on, but after debugging for five hours, I discovered that
          the error was caused by just a data type issue.
        </p>
        <div className="mt-4 flex items-center space-x-4">
          <button>
            <FcLike className="h-5 w-5" />
          </button>
          <button>
            <FaComment className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Posts;
