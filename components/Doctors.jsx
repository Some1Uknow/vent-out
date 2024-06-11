"use client";
import Image from "next/image";
import { IoChatboxEllipsesSharp } from "react-icons/io5";

const Doctors = ({
  firstName,
  lastName,
  email,
  years,
  expertise,
  phone,
  country,
  company,
}) => {
  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}`;
  };

  const handeChatClick = () => {
    alert("under Development...");
  };

  return (
    <section className="shadow-lg rounded-lg p-6 bg-gray-100 mb-6">
      <div className="flex flex-col sm:flex-row items-center">
        <Image
          className="rounded-full border-2 shadow-sm"
          src="https://static.vecteezy.com/system/resources/previews/002/204/187/non_2x/doctor-injecting-vaccine-to-a-patient-free-vector.jpg"
          width={150}
          height={150}
          alt="user-image"
        />
        <div className="flex flex-col sm:ml-6 mt-4 sm:mt-0 w-full">
          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start">
            <div className="text-center sm:text-left">
              <p className="text-2xl sm:text-3xl font-bold mb-1">
                {firstName} {lastName}
              </p>
              <p className="text-lg text-gray-700 font-semibold mb-2">
                {years} years of experience
              </p>
            </div>
            <button
              onClick={handeChatClick}
              className="mb-2 text-lg p-2 px-4 text-white flex items-center bg-blue-500 hover:bg-blue-600 rounded-full"
            >
              <IoChatboxEllipsesSharp className="mr-2" /> Chat (coming soon...)
            </button>
          </div>
          <div className="mt-4">
            <button
              onClick={() => handleEmailClick(email)}
              className="text-md p-2 font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-lg mb-2 w-full sm:w-auto"
            >
              Email: {email}
            </button>
            <p className="text-md p-2 font-semibold text-gray-700 bg-gray-200 rounded-lg mb-2">
              Country: {country}
            </p>
            <p className="text-md p-2 font-semibold text-gray-700 bg-gray-200 rounded-lg mb-2">
              Company: {company}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-lg font-bold text-gray-800 mb-2 sm:mb-0">
          Expertise: {expertise}
        </p>
        <p className="text-lg text-gray-800">Contact: {phone}</p>
      </div>
    </section>
  );
};

export default Doctors;
