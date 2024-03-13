"use client";
import AllPosts from "./AllPosts";
import UserPosts from "./UserPosts";
import { useState } from "react";

// const NavBar = ({ type, setType }) => {
//     const [clicked, setClicked] = useState(null);
//   return (
//     <>
//       <div className="flex flex-row shadow-md rounded-lg p-3 m-4 justify-around mb-1 bg-white">
//         <button
//           onClick={() => setType(<AllPosts />)}
//           className="transition hover:duration-300 hover:bg-gray-300 text-black bg-transparent font-bold px-4 py-2 rounded"
//         >
//           All Posts
//         </button>
//         <button
//           onClick={() => setType(<UserPosts />)}
//           className="transition hover:duration-300 hover:bg-gray-300 text-black bg-transparent font-bold px-4 py-2 rounded"
//         >
//           My Posts
//         </button>
//       </div>
//     </>
//   );
// };

const NavBar = ({ type, setType }) => {
    const [clicked, setClicked] = useState("all");
  
    return (
      <>
        <div className="flex flex-row shadow-md rounded-lg p-3 m-4 justify-around mb-1 bg-white">
          <button
            onClick={() => {
              setType(<AllPosts />);
              setClicked("all");
            }}
            className={`transition hover:duration-300 hover:bg-gray-300 text-black bg-transparent font-bold px-4 py-2 rounded ${
              clicked === "all" ? "bg-gray-300" : ""
            }`}
          >
            All Posts
          </button>
          <button
            onClick={() => {
              setType(<UserPosts />);
              setClicked("user");
            }}
            className={`transition hover:duration-300 hover:bg-gray-300 text-black bg-transparent font-bold px-4 py-2 rounded ${
              clicked === "user" ? "bg-gray-300" : ""
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
