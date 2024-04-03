"use client";
import { useState, useEffect } from "react";
import { MdEmail } from "react-icons/md";
import { IoIosPerson } from "react-icons/io";
import { BsCalendarDateFill } from "react-icons/bs";
import { MdHealthAndSafety } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { PiGenderMaleBold, PiGenderFemaleBold } from "react-icons/pi";
import { RiChatSmile2Fill } from "react-icons/ri";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [users1, setUsers1] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("/api/user");
      const data = await res.json();
      setUsers(data.Users);
      setUsers1(data.Users1);
    };
    fetchUsers();
  }, []);

  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="shadow-md rounded-xl p-3 m-4 justify-around mb-1 bg-white h-max w-4/5">
      {users.map((user, index) => {
        const { _id, age, bio, country, createdAt, gender } = user;
        const { name, email } = users1[index];
        return (
          <div
            key={_id}
            className="border-b-4 border p-3 border-gray-200 shadow-md pb-3 mb-3"
          >
            <div className="flex flex-col justify-between">
              <div className="font-semibold font-Poppins flex flex-row justify-between items-center">
                <p className="text-4xl mb-3 flex flex-row items-center p-3">
                  <IoIosPerson className="mr-2"/> {name}
                </p>
                <p
                  className="mb-2 text-xl p-2 px-4 text-white cursor-pointer flex flex-row items-center bg-gray-500 w-max rounded-full"
                  onClick={() => handleEmailClick(email)}
                >
                  <MdEmail className="mr-2 text-2xl" /> {email}
                </p>
              </div>
              <div className="text-xl flex flex-row flex-wrap mb-2">
                <p className="text-md border-2 rounded-full p-2 m-2 px-4 text-black bg-gray-300 mb-2 w-max flex flex-row items-center ">
                  <BsCalendarDateFill /> {age}
                </p>
                <p className="text-md border-2 rounded-full p-2 m-2 px-4 text-black bg-gray-300 mb-2 w-max flex flex-row items-center">
                  <MdHealthAndSafety /> {bio}
                </p>
                <p className="text-md border-2 rounded-full p-2 m-2 px-4 text-black bg-gray-300 mb-2 w-max flex flex-row items-center ">
                  <BiWorld /> {country}
                </p>
                <p className="text-md border-2 rounded-full p-2 m-2 px-4 text-black bg-gray-300 mb-2 w-max flex flex-row items-center ">
                  {gender.toLowerCase() === "male" ? (
                    <span>
                      <PiGenderMaleBold /> Male
                    </span>
                  ) : (
                    <span>
                      <PiGenderFemaleBold /> Female
                    </span>
                  )}
                </p>
                <p className="text-md border-2 rounded-full p-2 m-2 text-black bg-gray-300 mb-2 w-max">
                  <RiChatSmile2Fill/> {new Date(createdAt).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserList;
