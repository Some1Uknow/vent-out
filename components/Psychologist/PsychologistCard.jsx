import { MdOutlinePeople } from "react-icons/md";
import { IoCalendarNumberSharp } from "react-icons/io5";
import { FaEarthAfrica } from "react-icons/fa6";
import Image from "next/image";
import { useRouter } from "next/navigation";

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

  const router = useRouter();

  const handleSignOut = () => {
    router.push("/");
  };

  const handleEdit = () => {
    alert(
      "Due to shortage of manpower, this feature will take sometime to be developed..."
    );
  };

  return (
    <section className="shadow-md rounded-lg m-4 mr-1 p-3 h-max w-1/3 bg-white font-Poppins">
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
          <p className="text-4xl font-bold mt-2">
            {firstName} {lastName}
          </p>
          <p className="text-3xl text-gray-500 p-1">{email}</p>
        </div>
      </div>
      <div className="p-1">
        <div className="flex flex-col justify-between">
          <p className="text-2xl border-2 rounded-full p-2 m-2 px-4 text-black bg-gray-300 mb-2 w-max flex flex-row items-center">
            Expertise:&nbsp;
            <MdOutlinePeople className="inline" />
            {expertise}
          </p>
          <p className="text-2xl border-2 rounded-full p-2 m-2 px-4 text-black bg-gray-300 mb-2 w-max flex flex-row items-center">
            <IoCalendarNumberSharp className="mr-1 inline" />
            {years} years of experience
          </p>
          <p className="text-2xl border-2 rounded-full p-2 m-2 px-4 text-black bg-gray-300 mb-2 w-max flex flex-row items-center">
            <FaEarthAfrica className="mr-1 inline" />
            {country}
          </p>
          <p className="text-2xl border-2 rounded-full p-2 m-2 px-4 text-black bg-gray-300 mb-2 w-max flex flex-row items-center">
            Phone Number: {phone}
          </p>
          <p className="text-2xl border-2 rounded-full p-2 m-2 px-4 text-black bg-gray-300 mb-2 w-max flex flex-row items-center">
            Joined VentOut At: {new Date(createdAt).toLocaleString()}
          </p>
        </div>
        <div className="flex flex-col   h-full shadow-md justify-around py-2 mt-3 border-t-2 rounded-lg w-full bg-white text-3xl font-semibold">
          <button
            className="p-2 border-b-2 hover:bg-gray-300"
            onClick={() => handleEdit()}
          >
            Edit Profile
          </button>
          <button
            className="p-2 hover:bg-gray-300"
            onClick={() => handleSignOut()}
          >
            Sign Out
          </button>
        </div>
      </div>
    </section>
  );
};

export default PsychologistCard;
