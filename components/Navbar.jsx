import { RiEmotionHappyFill } from "react-icons/ri";

const Navbar = () => {
  return (
    <nav className="bg-pink-800 p-3.5 flex justify-between items-center">
      <div className="text-white text-6xl font-Madimi font-bold flex flex-row">VentOut&nbsp;<RiEmotionHappyFill/></div>
      <button className="transition hover:duration-300 hover:bg-pink-900 text-white bg-transparent font-bold py-2 px-4 rounded">
        <span className="font-Madimi text-2xl m-2 p-4">Sign In</span>
      </button>
    </nav>
  );
};

export default Navbar;
