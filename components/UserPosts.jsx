"use client";
import Image from "next/image";
import { FcLike } from "react-icons/fc";
import { FaComment } from "react-icons/fa6";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useRouter } from "next/navigation";
import CreatePost from "./CreatePost";

const UserPosts = () => {
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`api/make-post/${session?.user.name}`);
      const data = await res.json();
      setPosts(data.post);
    };
    fetchPosts();
  }, []);

  const handleDelete = async (postId) => {
    try {
      const res = await fetch(`api/delete-post/${postId}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setPosts((prevPosts) =>
          prevPosts.filter((post) => post._id !== postId)
        );
      } else {
        console.error("Failed to delete post");
      }
    } catch (error) {
      console.error("Failed to delete post:", error);
    }
  };

  const handleEdit = (title, description, postId) => {
  
    router.push(`/edit-post/${title}/${description}/${postId}`);
  };
  
  
  return (
    <div className="w-9/10 m-2 mt-0 p-2 flex flex-col">
      {posts.length == 0 ? (
        <CreatePost />
      ) : (
        posts.map((post) => (
          <div key={post._id} className="bg-white shadow-md rounded-lg p-6 mb-4">
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center">
                <Image
                  alt="user-image"
                  className="w-10 h-10 rounded-full mr-2"
                  src={session?.user.image}
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
              <div className="flex flex-row items-center cursor-pointer">
                <MdDelete
                  className="w-10 h-10 text-red-600"
                  onClick={() => handleDelete(post._id)}
                />
                <FaEdit
                  className="w-9 h-9 text-blue-700 cursor-pointer"
                  onClick={() => handleEdit(post.title, post.description, post._id)}
                />
              </div>
            </div>
            <h2 className="mt-4 text-xl font-bold text-gray-800">
              {post.title}
            </h2>
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
        ))
      )}
    </div>
  );
};

export default UserPosts;