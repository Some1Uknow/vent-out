import Card from "@/components/Card";
import { BiHappyBeaming } from "react-icons/bi";

const Home = () => {
  return (
    <>
      <div className="flex flex-col justify-between items-center gap-4 p-12 bg-pink-700">
        <h1 className="font-Poppins text-6xl text-center m-12 p-4 text-white">
          The place where you can get rid of all of your sadness :)
        </h1>
        <div className="self-start text-center flex flex-row justify-center gap-12 mt-10 w-full">
          <Card
            icon={<BiHappyBeaming />}
            title="Connect with people"
            subtitle="Find people with similar issues"
            description="Connect with people who have gone through or are going through similar issues as you. Share your feelings and experiences with them, and get the support you need."
          />
          <Card
            icon={<BiHappyBeaming />}
            title="Vent your emotions"
            subtitle="Let it all out"
            description="Use VentOut as a safe space to vent your emotions and feelings. Say what you need to say without fear of judgment or criticism."
          />
          <Card
            icon={<BiHappyBeaming />}
            title="Get mental health support"
            subtitle="Expert advice and resources"
            description="Get access to mental health resources and expert advice from licensed therapists and counselors. Take the first step towards better mental health."
          />
          <Card
            icon={<BiHappyBeaming />}
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
