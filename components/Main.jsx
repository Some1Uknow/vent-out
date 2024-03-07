import ProfileCard from "./ProfileCard";
import Posts from "./Posts";
import News from "./News";

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
