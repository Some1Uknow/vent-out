import React from "react";

const News = () => {
  return (
    <section className="shadow-md rounded-lg m-4 ml-1 p-3 w-72 max-w-full h-max">
      <h1 className="text-xl font-bold p-1">Mental Health News</h1>
      <ul>
        <li className="flex flex-col m-1 p-1">
          <p className="font-bold hover:underline cursor-pointer">News 1</p>
          <span className="text-gray-500 text-xs">Information about the news will come here</span>
        </li>
      </ul>
    </section>
  );
};

export default News;
