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

const Home = () => {
  return (
    <>
      <div className="flex flex-col justify-between items-center gap-4 p-12 bg-pink-700">
        <h1 className="font-Poppins text-6xl text-center m-16 text-white">
          The place where you can get rid of all of your sadness :)
        </h1>
        <div className="self-start text-center flex flex-row gap-16 mt-10">
          <Card
            title="Connect with people"
            subtitle="Find people with similar issues"
            description="Connect with people who have gone through or are going through similar issues as you. Share your feelings and experiences with them, and get the support you need."
          />
          <Card
            title="Vent your emotions"
            subtitle="Let it all out"
            description="Use VentOut as a safe space to vent your emotions and feelings. Say what you need to say without fear of judgment or criticism."
          />
          <Card
            title="Get mental health support"
            subtitle="Expert advice and resources"
            description="Get access to mental health resources and expert advice from licensed therapists and counselors. Take the first step towards better mental health."
          />
          <Card
            title="Join a Community"
            subtitle="Find your tribe"
            description="Join a community of people who share your interests and experiences. Participate in discussions, share your thoughts and ideas, and get support from like-minded individuals."
          />
        </div>
      </div>
    </>
  );
};

export default Home;
