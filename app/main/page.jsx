import ProfileCard from "../../components/ProfileCard";
import Posts from "../../components/Posts";
import News from "../../components/News";

const Main = () => {
  return (
    <div className="flex flex-row h-auto font-Poppins ml-16 mr-16">
      <ProfileCard />
      <Posts />
      <News/>
    </div>
  );
};

export default Main;
