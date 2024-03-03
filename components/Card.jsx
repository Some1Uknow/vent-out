const Card = ({ title, subtitle, description }) => {
  return (
    <div class="block max-w-xs p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-pink-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <h6 class="mb-3 font-bold tracking-tight text-gray-400">{subtitle}</h6>
      <p class="text-gray-700 dark:text-white">{description}</p>
    </div>
  );
};

export default Card;
