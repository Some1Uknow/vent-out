import React from "react";
import Image from "next/image";

const Help = () => {
  return (
    <div className="flex flex-col gap-2 shadow-md rounded-lg p-3 m-4 justify-around mb-1 bg-white">
      <span className="text-5xl font-bold">Introducing Proffessional Help!</span>
      <span className="text-xl">
        If you feel like its getting too much its better to get a psychologist
        who can help you
      </span>
      <Doctors
        name="James Anderson"
        years="5"
        expertise="Anxiety and Self Perception Related Problems"
        phoneno="4989xxx929"
      />
      <Doctors
        name="Tim Southee"
        years="15"
        expertise="Helping People solve their Relationship problems"
        phoneno="9894xxxx92"
      />
       <Doctors
        name="Joel Garner"
        years="25"
        expertise="Mental Health expert,  specializes in treating chronic Depression"
        phoneno="489xxxxx92"
      />
    </div>
  );
};

export default Help;

const Doctors = ({ name, years, expertise, phoneno }) => {
  return (
    <div>
      <section className=" shadow-md rounded-lg p-2 h-max w-9/10 m-1 mt-4 bg-white border-t-2">
        <div className="flex flex-row p-1">
          <Image
            className="rounded-full mr-2 object-cover"
            height={24}
            width={44}
            alt="user-image"
            //   src={imgSrc}
          />
          <div className="flex flex-col">
            <p className="text-xl font-bold">{name}</p>
            <p className="text-xs text-gray-500">{years} years of experience</p>
          </div>
        </div>
        <div className="p-1 mb-2 flex flex-row justify-between">
          <p className="text-sm text-gray-600 p-1">Expertise: {expertise}</p>
          <p className="text-sm text-gray-600 p-1">Contact: {phoneno}</p>
        </div>
      </section>
    </div>
  );
};
