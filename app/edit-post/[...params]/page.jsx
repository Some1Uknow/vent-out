"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const MakePost = ({ params }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const router = useRouter();
  const obj = params.params;

  const title = decodeURIComponent(obj[0]);
  const description = decodeURIComponent(obj[1]);
  const userId = decodeURIComponent(obj[2]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/edit-post/${userId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: post.title,
          description: post.description,
        }),
      });

      if (response.ok) {
        console.log("Post updated successfully");
        router.push("/");
      } else {
        console.error("Failed to update post");
      }
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  const [post, setPost] = useState({
    title: title || "",
    description: description || "",
  });

  return (
    <div className="w-3/5 mt-5 mx-auto h-full">
      <label
        className="block text-gray-700 text-6xl font-bold mb-6 mx-auto font-Madimi ml-16"
        htmlFor="post"
      >
        Release your thoughts here 😊
      </label>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4 ml-16"
      >
        <div className="mb-4 p-1">
          <label
            className="block text-gray-700 text-4xl font-bold mb-2 font-Madimi"
            htmlFor="title"
          >
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-Poppins"
            placeholder="Enter Post Title"
            onChange={handleChange}
            value={post.title}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-4xl font-bold mb-2 font-Madimi"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className="shadow appearance-none border rounded w-full h-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-Poppins"
            placeholder="Describe your traumatic incidents/mental health problems/other issues"
            value={post.description}
            onChange={handleChange}
            rows={5}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default MakePost;
