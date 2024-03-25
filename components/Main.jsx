'use client'
import { useState } from "react";
import ProfileCard from "./ProfileCard";
import PostPage from "./PostPage";
import News from "./News";
import Communities from "./Communities";
import Help from "./Help";
import Products from "./Products";

const Main = () => {
  const [component, setComponent] = useState(<PostPage />);

  return (
    <div className="flex flex-row h-max font-Poppins justify-center bg-gray-100">
      <ProfileCard />
      <div className="flex flex-col w-3/5">
        <Navbar setComponent={setComponent} />
        {component}
      </div>
      <News />
    </div>
  );
};

const Navbar = ({ setComponent }) => {
  return (
    <div className="flex flex-row shadow-md rounded-lg p-3 m-4 justify-around mb-1 bg-white">
      <button
        onClick={() => setComponent(<PostPage />)}
        className="transition hover:duration-300 hover:bg-gray-300 text-black bg-transparent font-bold py-2 rounded"
      >
        {" "}
        <span className="font-Poppins text-xl m-2 p-4">Posts</span>
      </button>
      <button
        onClick={() => setComponent(<Communities />)}
        className="transition hover:duration-300 hover:bg-gray-300 text-black bg-transparent font-bold py-2 rounded"
      >
        {" "}
        <span className="font-Poppins text-xl m-2 p-4">Communities</span>
      </button>
      <button
        onClick={() => setComponent(<Help />)}
        className="transition hover:duration-300 hover:bg-gray-300 text-black bg-transparent font-bold py-2 rounded"
      >
        {" "}
        <span className="font-Poppins text-xl m-2 p-4">
          Get Professional Help
        </span>
      </button>
      <button
        onClick={() => setComponent(<Products />)}
        className="transition hover:duration-300 hover:bg-gray-300 text-black bg-transparent font-bold py-2 rounded"
      >
        {" "}
        <span className="font-Poppins text-xl m-2 p-4">Products</span>
      </button>
    </div>
  );
};

export default Main;
