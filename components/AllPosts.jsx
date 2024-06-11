"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import LoadingSpinner from "./LoadingSpinner";
import { Suspense, useEffect, useState } from "react";
import { BiSolidHeart } from "react-icons/bi";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("api/allposts");
        if (!res.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await res.json();
        setPosts(data.posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);

  const router = useRouter();

  const handleClick = (postId) => {
    router.push(`/comments/${postId}`);
  };

  return (
    <div className="w-full mt-2 flex flex-col">
      <Suspense fallback={<LoadingSpinner />}>
        {posts.length > 0 &&
          posts.map((post) => (
            <div
              key={post._id}
              className="bg-white shadow-md rounded-lg p-6 mb-4 hover:bg-gray-200"
            >
              <div
                onClick={() => router.push("/user")}
                className="flex items-center space-x-4 w-max hover:bg-gray-300 p-1 rounded-md hover:cursor-pointer"
              >
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
                    {new Date(post.createdAt).toLocaleString()}
                  </p>
                </div>
              </div>
              <h2 className="mt-2 text-xl font-bold text-gray-800">
                {post.title}
              </h2>
              <p className="mt-1 text-gray-600 text-sm">{post.description}</p>
              <div
                className="mt-4 flex items-center font-bold gap-1 bg-pink-500 text-white p-2 px-4 w-max rounded-full hover:cursor-pointer text-sm"
                onClick={() => handleClick(post._id)}
              >
                Support {post.author} <BiSolidHeart />
              </div>
            </div>
          ))}
      </Suspense>
    </div>
  );
};

export default AllPosts;
