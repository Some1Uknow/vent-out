"use client";
import { useEffect, useState } from "react";
import PsychologistCard from "@/components/Psychologist/PsychologistCard";
import Nav from "@/components/Psychologist/Nav";
import UserList from "@/components/Psychologist/UserList";

const Page = ({ params }) => {
  const id = params.id;
  const [psychologist, setPsychologist] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/psychologist/${id}`);
        const data = await res.json();
        setPsychologist(data.psychologist);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="ml-28">
      {psychologist ? (
        <div className="flex flex-row w-full">
          {" "}
          <PsychologistCard psychologist={psychologist} />
          <div className="flex flex-col w-full">
            <Nav />
            <UserList />
          </div>
        </div>
      ) : (
        <p className="text-4xl font-bold font-Madimi p-40 mt-10">LOADING...</p>
      )}
    </div>
  );
};

// Export the Page component
export default Page;
