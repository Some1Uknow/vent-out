"use client";
import React, { useEffect, useState } from "react";
import Doctors from "./Doctors"; // Ensure you import the Doctors component correctly

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
    <div className="flex flex-col gap-4 shadow-md rounded-lg p-6 mt-4 bg-white">
      <h1 className="text-5xl font-bold text-center mb-4">
        Introducing Professional Help!
      </h1>
      <p className="text-xl text-center mb-6">
        If you feel like it's getting too much, it's better to get a
        psychologist who can help you.
      </p>
      {data.map((psychologist) => (
        <Doctors key={psychologist._id} {...psychologist} />
      ))}
    </div>
  );
};

export default Help;
