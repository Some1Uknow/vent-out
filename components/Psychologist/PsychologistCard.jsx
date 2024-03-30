import { MdOutlinePeople } from "react-icons/md";
import { IoCalendarNumberSharp } from "react-icons/io5";
import { FaEarthAfrica } from "react-icons/fa6";
import Image from "next/image";

const PsychologistCard = ({ psychologist }) => {
  const {
    firstName,
    lastName,
    email,
    expertise,
    years,
    country,
    phone,
    createdAt,
  } = psychologist;


  return (
    <section className="shadow-md rounded-lg m-4 mr-1 p-3 h-max w-1/4 bg-white">
      <div className="flex flex-row p-2">
        <div className="mr-3 rounded-full inline-block bg-gray-200">
          {/* Use placeholder image or user's actual image */}
          <Image
            className="rounded-full object-cover"
            src="https://via.placeholder.com/60"
            alt="user-image"
            width={120}
            height={60}
          />
        </div>
        <div className="flex flex-col">
          <p className="text-3xl font-bold font-Poppins">
            {firstName} {lastName}
          </p>
          <p
            className="text-xl text-gray-500 cursor-pointer"
           
          >
            {email}
          </p>
        </div>
      </div>
      <div className="p-1">
        <div className="flex flex-col justify-between">
          <p className=" text-gray-600 flex items-center">
            Expertise:&nbsp;
            <MdOutlinePeople className="inline" />
            {expertise}
          </p>
          <p className=" text-gray-600 items-center flex">
            <IoCalendarNumberSharp className="mr-1 inline" />
            {years} years of experience
          </p>
          <p className=" text-gray-600 flex items-center">
            <FaEarthAfrica className="mr-1 inline" />
            {country}
          </p>
          <p className="text-gray-600 flex items-center">
            Phone Number: {phone}
          </p>
          <p className="text-gray-600 flex items-center">
            Joined VentOut At: {new Date(createdAt).toLocaleString()}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PsychologistCard;
