"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const Page = ({ params }) => {
  const [post, setpost] = useState(null);
  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    try {
      const res = await fetch(`/api/post/${params.id}`);
      const data = await res.json();
      setpost(data.post);
    } catch (error) {
      console.error(error);
    }
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="w-5/6 mx-auto m-2 mt-0 p-2 flex flex-col">
        <div className="bg-white shadow-md rounded-lg p-6 mb-4">
          <div className="flex items-center space-x-4">
            <Image
              alt="user-image"
              className="w-10 h-10 rounded-full inline-block"
              src={post.userImage}
              width={40}
              height={40}
            />
            <div className="text-gray-800">
              <h1 className="font-bold">{post.author}</h1>
              <p className="text-sm">
                {new Date(post.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
          <h2 className="mt-2 text-xl font-bold text-gray-800">{post.title}</h2>
          <p className="mt-1 text-gray-600 text-sm">{post.description}</p>
          <div className="mt-4 flex items-center space-x-4"></div>
          <div></div>
        </div>
        <div>This is a comment</div>
      </div>
    </>
  );
};

export default Page;
