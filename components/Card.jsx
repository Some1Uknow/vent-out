import Image from "next/image";

const Card = ({ title, subtitle, description, icon, image }) => {
  return (
    <div className="flex flex-row justify-around mb-6 mt-6 h-max">
      <div className="flex flex-col w-1/2 text-left h-max">
        <h5 className="mb-1 text-5xl font-Poppins text-pink-600 flex flex-row items-center gap-2">
          {title} <span>{icon}</span>
        </h5>
        <h6 className="mb-4 font-bold text-gray-400">
          {subtitle}
        </h6>
        <p className="text-gray-700 mb-2 font-Poppins mr-6 text-xl">
          {description}
        </p>
      </div>
      <div className="w-1/2">
        <Image className="h-72 rounded-xl shadow-lg w-full object-cover" src={image}/>
      </div>
    </div>
  );
};

export default Card;
