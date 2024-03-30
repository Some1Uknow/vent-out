'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Help = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/register");
      const psychologistData = await res.json();
      setData(psychologistData.psychologist);
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-2 shadow-md rounded-lg p-3 m-4 justify-around mb-1 bg-white">
      <span className="text-5xl font-bold">
        Introducing Professional Help!
      </span>
      <span className="text-xl">
        If you feel like it's getting too much, it's better to get a psychologist who can help you.
      </span>
      {data.map((psychologist) => (
        <Doctors key={psychologist._id} {...psychologist} />
      ))}
    </div>
  );
};

export default Help;

const Doctors = ({ firstName, lastName, email, years, expertise, phone, country, company }) => {
  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}`;
  };
  return (
    <div>
      <section className=" shadow-md rounded-lg p-2 h-max w-9/10 m-1 mt-4 bg-white border-t-2">
        <div className="flex flex-row p-1">
          <Image
            className="rounded-full border-2 mr-4 shadow-sm"
            src="https://static.vecteezy.com/system/resources/previews/002/002/427/non_2x/man-avatar-character-isolated-icon-free-vector.jpg"
            width={225}
            height={100}
            alt="user-image"
          />
          <div className="flex flex-col">
            <p className="text-4xl mb-1 font-bold">{firstName} {lastName}</p>
            <p className="text-xl text-gray-500 font-semibold mb-2">{years} years of experience</p>
            <p className="text-md border-2 rounded-lg p-2 font-semibold text-gray-50 bg-gray-700 mb-2 cursor-pointer" onClick={() => handleEmailClick(email)}>Email: {email}</p>
            <p className="text-md border-2 rounded-lg p-2 font-semibold text-gray-50 bg-gray-700 mb-2">Country: {country}</p>
            <p className="text-md border-2 rounded-lg p-2 font-semibold text-gray-50 bg-gray-700 mb-2">Company: {company}</p>
          </div>
        </div>
        <div className="p-1 mb-2 flex flex-row justify-between">
          <p className="text-2xl font-bold text-gray-600 p-1">Expertise: {expertise}</p>
          <p className="text-xl text-gray-600 p-1">Contact: {phone}</p>
        </div>
      </section>
    </div>
  );
};
