"use client";
import Image from "next/image";
import { FcLike } from "react-icons/fc";
import { FaComment } from "react-icons/fa6";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const AllPosts = () => {
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(`api/allposts`);
        if (!res.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await res.json();
        setPosts(data.posts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, []);  

 console.log(posts);

  return (
    <div className="w-9/10 m-2 mt-0 p-2 flex flex-col">
      {posts.length > 0 && posts.map((post) => (
        <div key={post._id} className="bg-white shadow-md rounded-lg p-6 mb-4">
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
              <p className="text-sm">{new Date(post.createdAt).toLocaleString()}</p>
            </div>
          </div>
          <h2 className="mt-4 text-xl font-bold text-gray-800">{post.title}</h2>
          <p className="mt-4 text-gray-600">{post.description}</p>
          <div className="mt-4 flex items-center space-x-4">
            <button>
              <FcLike className="h-5 w-5" />
            </button>
            <button>
              <FaComment className="h-5 w-5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllPosts;
