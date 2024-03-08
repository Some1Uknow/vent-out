"use client";
import React, { useState } from "react";

const makePost = () => {
  const [post, setPost] = useState("");

  const handleChange = (e) => {
    setPost(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(post);
    setPost("");
  };

  return (
    <div className=" w-3/5 mt-5 mx-auto h-full">
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
        <div className="mb-4">
          <textarea
            id="post"
            name="post"
            className="shadow appearance-none border rounded w-full h-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-Poppins"
            placeholder="Describe your traumatic incidents/mental health problems/other issues"
            value={post}
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

export default makePost;
