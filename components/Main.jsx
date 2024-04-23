"use client";
import { useState } from "react";
import ProfileCard from "./ProfileCard";
import PostPage from "./PostPage";
import News from "./News";

import Navbar from "./Navbar";

const Main = () => {
  const [component, setComponent] = useState(<PostPage />);

  return (
    <div className="flex flex-row h-max font-Poppins justify-center bg-gray-100">
      <div className="flex flex-col justify-between items-center">
        <ProfileCard />
        <Navbar setComponent={setComponent} />
      </div>
      <div className="flex flex-col w-3/5">{component}</div>
      <News />
    </div>
  );
};

export default Main;
