"use client";
import { useState, useEffect } from "react";

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


  // ADD ICONS ON EVERY PAGE OF FRONTEND!!!

  return (
    <div className="shadow-md rounded-lg p-3 m-4 justify-around mb-1 bg-white h-max w-1/2">
      {users.map((user, index) => {
        const { _id, age, bio, country, createdAt, gender } = user;
        const { name, email } = users1[index];
        return (
          <div
            key={_id}
            className="border-b-4 border p-3 border-gray-200 shadow-md pb-3 mb-3"
          >
            <div className="flex flex-col justify-between">
              <div className="font-semibold font-Poppins">
                <p className="text-3xl">Name: {name}</p>
                <p
                  className="mb-2 text-xl cursor-pointer"
                  onClick={() => handleEmailClick(email)}
                >
                  Email: {email}
                </p>
              </div>
              <div className="text-xl flex flex-row flex-wrap mb-2">
                <p className="text-md border-2 rounded-lg p-2  text-gray-50 bg-gray-500 mb-2 w-max">
                  Age: {age}
                </p>
                <p className="text-md border-2 rounded-lg p-2  text-gray-50 bg-gray-500 mb-2 w-max">
                  Problems: {bio}
                </p>
                <p className="text-md border-2 rounded-lg p-2  text-gray-50 bg-gray-500 mb-2 w-max">
                  Country: {country}
                </p>
                <p className="text-md border-2 rounded-lg p-2  text-gray-50 bg-gray-500 mb-2 w-max">
                  Gender: {gender}
                </p>
                <p className="text-md border-2 rounded-lg p-2  text-gray-50 bg-gray-500 mb-2 w-max">
                  Created At: {createdAt}
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
