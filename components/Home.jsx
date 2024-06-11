import Card from "@/components/Card";
import { BiHappyBeaming } from "react-icons/bi";
import connecting from "@/public/connecting.webp";
import emotions from "@/public/emotions.webp";
import mentalHealth from "@/public/mental-health.webp";
import community from "@/public/community.jpg";

const Home = () => {
  return (
    <>
      <div className="flex flex-col justify-between items-center gap-4 bg-gray-100">
        <div className="relative w-full">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
          <h1 className="font-Poppins text-7xl text-center bg-pink-600 border-b-2 shadow-md p-36 bg-clip-text text-transparent relative z-10">
            Feeling down? We are here to help :)
          </h1>
        </div>
        <div className="self-start text-center flex flex-col justify-center gap-12 mt-10 w-full p-12">
          <Card
            icon={<BiHappyBeaming />}
            title="Connect with people"
            subtitle="Find people with similar issues"
            description="Connect with people who have gone through or are going through similar issues as you. Share your feelings and experiences with them, and get the support you need."
            image={connecting}
          />
          <Card
            icon={<BiHappyBeaming />}
            title="Vent your emotions"
            subtitle="Let it all out"
            description="Use VentOut as a safe space to vent your emotions and feelings. Say what you need to say without fear of judgment or criticism."
            image={emotions}
          />
          <Card
            icon={<BiHappyBeaming />}
            title="Get mental health support"
            subtitle="Expert advice and resources"
            description="Get access to mental health resources and expert advice from licensed therapists and counselors. Take the first step towards better mental health."
            image={mentalHealth}
          />
          <Card
            icon={<BiHappyBeaming />}
            title="Join a Community"
            subtitle="Find your tribe"
            description="Join a community of people who share your interests and experiences. Participate in discussions, share your thoughts and ideas, and get support from like-minded individuals."
            image={community}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
