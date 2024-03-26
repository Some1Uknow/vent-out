"use client";
import AllPosts from "./AllPosts";
import UserPosts from "./UserPosts";
import { useState } from "react";

const NavBar = ({ setType }) => {
  const [selected, setSelected] = useState("all"); 

  return (
    <>
      <div className="flex flex-row shadow-md rounded-lg p-3 m-4 justify-around mb-1 bg-white">
        <button
          onClick={() => {
            setType(<AllPosts />);
            setSelected("all"); 
          }}
          className={`transition hover:duration-300 hover:bg-gray-400 text-black bg-transparent font-bold px-4 py-2 rounded ${
            selected === "all" ? "bg-gray-400" : ""
          }`}
        >
          All Posts
        </button>
        <button
          onClick={() => {
            setType(<UserPosts />);
            setSelected("user"); 
          }}
          className={`transition hover:duration-300 text-black hover:bg-gray-400 bg-transparent font-bold px-4 py-2 rounded ${
            selected === "user" ? "bg-gray-400" : ""
          }`}
        >
          My Posts
        </button>
      </div>
    </>
  );
};

const PostPage = () => {
  const [type, setType] = useState(<AllPosts />);
  return (
    <div>
      <NavBar type={type} setType={setType} />
      {type}
    </div>
  );
};

export default PostPage;
