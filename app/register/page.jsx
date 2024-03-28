"use client";
import Banner from "@/components/Psychologist/Banner";
import RegisterForm from "@/components/Psychologist/RegisterForm";
import LoginForm from "@/components/Psychologist/LoginForm";
import { useState } from "react";

const page = () => {
  const [formType, setFormType] = useState("register");

  return (
    <>
      <div className="flex flex-row justify-around h-screen items-center">
        <Banner />
        <div className="flex flex-col w-1/3">
          {" "}
          {formType === "register" ? <RegisterForm /> : <LoginForm />}
          <button
            onClick={() =>
              setFormType(formType === "register" ? "login" : "register")
            }
            type="button"
            className="text-white mt-2 font-Madimi text-xl bg-pink-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-max sm:w-max px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
          >
            {formType === "register" ? "Already registered? LOGIN" : "Go back to registration"}
          </button>
        </div>
      </div>
    </>
  );
};

export default page;