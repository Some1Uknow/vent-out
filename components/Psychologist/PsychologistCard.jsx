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
    <section className="shadow-md rounded-lg m-4 mr-1 p-3 h-max w-1/3 bg-white">
      <div className="flex flex-col items-center relative">
          <div className="overflow-hidden w-full h-2/3 absolute top-0 left-0">
            <div className="bg-pink-600 w-full h-20"></div>
          </div>
          <Image
            className="rounded-full mt-2 z-10"
            height={160}
            width={160}
            alt="user-image"
            src="https://via.placeholder.com/160"
          />
          <div className="flex flex-col items-center">
            <p className="text-4xl font-bold mt-2">{firstName} {lastName}</p>
            <p className="text-xl text-gray-500 p-1">{email}</p>
          </div>
        </div>
      <div className="p-1">
        <div className="flex flex-col justify-between">
          <p className="text-gray-600 flex items-center">
            Expertise:&nbsp;
            <MdOutlinePeople className="inline" />
            {expertise}
          </p>
          <p className="text-gray-600 items-center flex">
            <IoCalendarNumberSharp className="mr-1 inline" />
            {years} years of experience
          </p>
          <p className="text-gray-600 flex items-center">
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
