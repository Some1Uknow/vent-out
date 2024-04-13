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
    <div className="m-28 mt-0 mb-0">
      {psychologist ? (
        <div className="flex flex-row w-full">
          {" "}
          <PsychologistCard psychologist={psychologist} />
          <div className="flex flex-col w-full">
            <div className="p-4 text-5xl bg-gray-100 rounded-xl mt-4 ml-4 mb-4 font-semibold font-Poppins">
              Our users need your expertise! Connect with them instantly using Chat,
              or contact them using their email.
            </div>
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
