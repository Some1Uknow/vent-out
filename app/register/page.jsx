"use client";
import Banner from "@/components/Psychologist/Banner";
import RegisterForm from "@/components/Psychologist/RegisterForm";
import { useState } from "react";

const page = () => {


  return (
    <>
      <div className="flex flex-row justify-around h-full items-center">
        <Banner />
        <RegisterForm/>
      </div>
    </>
  );
};

export default page;
