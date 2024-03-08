"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";


const EditProfile = () => {
  const router = useRouter();

  const [bio, setBio] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send data to backend
    console.log("Bio:", bio);
    console.log("Age:", age);
    console.log("Gender:", gender);
    console.log("Country:", country);
    router.push("/");
  };

  return (
    <div className="w-3/4 mt-5 mx-auto h-3/4">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4 p-1 ml-16"
      >
        <div className="mb-4 p-1">
          <label
            className="block text-gray-700 text-4xl font-bold mb-2 font-Madimi"
            htmlFor="bio"
          >
            Bio
          </label>
          <textarea
            id="bio"
            name="bio"
            className="shadow appearance-none border rounded w-full h-24 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-Poppins"
            placeholder="Enter your bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </div>
        <div className="mb-4 p-1">
          <label
            className="block text-gray-700 text-4xl font-bold mb-2 font-Madimi"
            htmlFor="age"
          >
            Age
          </label>
          <input
            id="age"
            name="age"
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-Poppins"
            placeholder="Enter your age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="mb-4 p-1">
          <label
            className="block text-gray-700 text-4xl font-bold mb-2 font-Madimi"
            htmlFor="gender"
          >
            Gender
          </label>
          <input
            id="gender"
            name="gender"
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-Poppins"
            placeholder="Enter your gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
        <div className="mb-4 p-1">
          <label
            className="block text-gray-700 text-4xl font-bold mb-2 font-Madimi"
            htmlFor="country"
          >
            Country
          </label>
          <input
            id="country"
            name="country"
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-Poppins"
            placeholder="Enter your country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
