const Card = ({ title, subtitle, description, icon }) => {
  return (
    <div className="block max-w-xs p-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-pink-800 dark:border-gray-700 dark:hover:bg-pink-900">
      <h5 className="mb-0.5 text-xl font-bold tracking-tight text-gray-900 dark:text-white flex flex-row items-center justify-center gap-2">
        {title} <span>{icon}</span>
      </h5>
      <h6 className="mb-4 font-bold tracking-tight text-gray-400">{subtitle}</h6>
      <p className="text-gray-700 dark:text-white mb-2 font-Poppins">{description}</p>
    </div>
  );
};

export default Card;

