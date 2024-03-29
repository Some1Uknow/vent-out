"use client";
import { useEffect, useState } from "react";
import PsychologistCard from "@/components/Psychologist/PsychologistCard";
import Nav from "@/components/Psychologist/Nav";


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
    <div>
      {psychologist ? (
        <div className="flex flex-row">  <PsychologistCard psychologist={psychologist} /><Nav/></div>
      
      ) : (
        <p>Psychologist not found</p>
      )}
    </div>
  );
};

// Export the Page component
export default Page;
